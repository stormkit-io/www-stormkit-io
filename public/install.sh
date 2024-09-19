#!/bin/sh

# curl -sSL https://www.stormkit.io/install.sh | sh

# Function to check if a command exists
command_exists() {
  command -v "$@" >/dev/null 2>&1
}

IS_MAC="0"

if [ "$(uname -s | cut -c1-6)" = "Darwin" ]; then
  IS_MAC="1"

  if command_exists brew; then
    echo "Brew already installed"
  else
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi

  if command_exists docker; then
    echo "Docker already installed"
  else
    brew install docker
  fi

  # Check if Docker is running
  if ! pgrep -x "Docker" >/dev/null; then
    echo "Docker is not running. Starting Docker..."

    # Start Docker
    open --background -a Docker

    # Wait until Docker is running
    while ! docker info >/dev/null 2>&1; do
      echo "Waiting for Docker to start..."
      sleep 2
    done

    echo "Docker has started."
  else
    echo "Docker is already running."
  fi
elif [ "$(uname -s | cut -c1-5)" = "Linux" ]; then
  # We have to run as root
  if [ "$(id -u)" -ne 0 ]; then
    echo "This script must be run as root" >&2
    exit 1
  fi

  # Check if ports 80 or 443 are in use
  for port in 80 443; do
    if ss -tulnp | grep ":${port} " >/dev/null; then
      echo "Port ${port} is already in use" >&2
      exit 1
    fi
  done

  # Install Docker if not already installed
  if command_exists docker; then
    echo "Docker already installed"
  else
    curl -sSL https://get.docker.com | sh
  fi
fi

# Define text colors for output
BLUE="\033[0;34m"
GREEN="\033[0;32m"
PURPLE="\033[0;35m"
GRAY="\033[1;30m"
NC="\033[0m"

# Function to prompt for an environment variable and update the .env file
update_env_var() {
  var_name=$1
  prompt_message=$2

  # Prompt for the value of the variable
  printf "${PURPLE}%s: ${NC}" "$prompt_message"
  read -r var_value </dev/tty

  # Check if .env file exists, if not, create it
  if [ ! -f .env ]; then
    touch .env
  fi

  # Check if the variable already exists in the .env file
  if grep -q "^$var_name=" .env; then
    # Update the existing variable
    if [ "$IS_MAC" = "1" ]; then
      sed -i '' "s/^$var_name=.*/$var_name=$var_value/" .env
    else
      sed -i~ "/^$var_name=/s/=.*/=\"$var_value\"/" .env
    fi
  else
    # Append the new variable to the .env file
    echo "$var_name=$var_value" >>.env
  fi
}

SELECTED_PROVIDER=""

select_provider() {
  printf "${PURPLE}Which provider are you going to use for authentication?${NC}\n"

  # Define options as a space-separated string
  options="GitHub GitLab Bitbucket"

  while true; do
    printf "${GRAY}Select an option (type the number and press Enter):${NC}\n"

    # Use a counter to display the options
    i=1
    for option in $options; do
      printf "%d) %s\n" "$i" "$option"
      i=$((i + 1))
    done

    # Prompt for user input
    echo
    printf "Enter the number of the provider: "
    read -r choice </dev/tty

    # Validate the choice (ensure it's a number and in range)
    if [ "$choice" -ge 1 ] 2>/dev/null && [ "$choice" -le $((i - 1)) ]; then
      # Get the selected provider based on choice
      i=1
      for option in $options; do
        if [ "$i" -eq "$choice" ]; then
          SELECTED_PROVIDER="$option"
          break
        fi
        i=$((i + 1))
      done
      break
    else
      echo "Invalid choice. Please try again."
    fi
  done
}

# Download the docker-compose.yaml file
curl -o "docker-compose.yaml" "https://raw.githubusercontent.com/stormkit-io/bin/main/docker-compose.yaml" --silent

# Download the example .env file
curl -o ".env" "https://raw.githubusercontent.com/stormkit-io/bin/main/.env.example" --silent

echo
printf "We need to prepare the ${BLUE}environment variables${NC} before proceeding.\n"
echo "Please reply the following questions."
echo

select_provider

if [ "$SELECTED_PROVIDER" = "GitHub" ]; then
  echo
  echo "Check https://github.com/stormkit-io/bin for more information on these variables"
fi

echo

update_env_var "STORMKIT_DOMAIN" "Enter the top-level domain (e.g. example.org)"

if [ "$SELECTED_PROVIDER" = "GitHub" ]; then
  update_env_var "GITHUB_APP_ID" "Enter GitHub App ID (e.g. 97401)"
  update_env_var "GITHUB_CLIENT_ID" "Enter GitHub Client ID (e.g. Iv2...)"
  update_env_var "GITHUB_ACCOUNT" "Enter GitHub App account name (e.g. stormkit-io - this is found in the URL of your app)"
  update_env_var "GITHUB_SECRET" "Enter GitHub App secret"
  update_env_var "GITHUB_PRIV_KEY" "Enter GitHub app private key"
else
  echo "Provider not supported yet for auto installation."
  exit 1
fi

# Leave Docker Swarm if initialized
docker swarm leave --force 2>/dev/null

# Initialize stack (only needed for master node)
docker swarm init

# Deploy the stack
docker compose config | sed '/published:/ s/"//g' | sed "/name:/d" | docker stack deploy -c - stormkit

echo ""
printf "${GREEN}Congratulations, Stormkit is installed on your computer!${NC}"
echo ""

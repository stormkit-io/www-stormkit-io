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
  docker_stats=$(docker stats --no-stream)

  if docker info > /dev/null 2>&1; then
    echo "Docker is already running."
  else
    echo "Docker is not running. Starting Docker..."

    # Start Docker
    open --background -a Docker

    # Wait until Docker is running
    while ! docker info >/dev/null 2>&1; do
      echo "Waiting for Docker to start..."
      sleep 2
    done

    echo "Docker has started."
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
    if grep -q "Fedora" /etc/os-release; then
      # See https://docs.docker.com/engine/install/fedora/
      sudo dnf -y install dnf-plugins-core
      sudo dnf config-manager --add-repo https://download.docker.com/linux/fedora/docker-ce.repo
      sudo dnf -y install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
      sudo systemctl start docker
    else
      curl -sSL https://get.docker.com | sh
    fi

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
  prompt_desc=$3

  # Prompt for the value of the variable
  if [ -n "$prompt_desc" ]; then
    printf "${PURPLE}%s ${NC}${GRAY}%s: ${NC}" "$prompt_message" "$prompt_desc"
  else
    printf "${PURPLE}%s: ${NC}" "$prompt_message"
  fi

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
    echo "$var_name=$var_value" >> .env
  fi

  # Remove the swap file (if any)
  rm -rf .env~
}

SELECTED_PROVIDER=""

single_select() {
  prompt_message=$1
  options=$2 # Define options as a space-separated string
  desc=${3:-"Select an option"}

  printf "${PURPLE}%s${NC}\n" "$prompt_message"
  printf "${GRAY}%s:${NC}\n" "$desc"

  while true; do
    # Use a counter to display the options
    i=1
    for option in $options; do
      printf "%d) %s\n" "$i" "$option"
      i=$((i + 1))
    done

    # Prompt for user input
    echo
    printf "Enter the number of the provider (and press Enter): "
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

setup_base_env_variables() {
  # Download the example .env file
  curl -o ".env" "https://raw.githubusercontent.com/stormkit-io/bin/main/.env.example" --silent

  # TODO: Update passwords
}

# Setup the Hosting Service. It comes with the API bundled, therefore we need authentication
# information as well.
setup_hosting_env_variables() {
  single_select "Which provider are you going to use for authentication?" "GitHub GitLab Bitbucket"

  if [ "$SELECTED_PROVIDER" = "GitHub" ]; then
    echo
    echo "Check https://github.com/stormkit-io/bin for more information on these variables"
  fi

  echo

  update_env_var "STORMKIT_DOMAIN" "Enter the top-level domain (e.g. example.org)"

  if [ "$SELECTED_PROVIDER" = "GitHub" ]; then
    update_env_var "GITHUB_APP_ID" "Enter GitHub App ID (e.g. 97401)"
    update_env_var "GITHUB_CLIENT_ID" "Enter GitHub Client ID (e.g. Iv2...)"
    update_env_var "GITHUB_ACCOUNT" "Enter GitHub App account name" "(e.g. github.com/settings/apps/my-stormkit-app => my-stormkit-app)"
    update_env_var "GITHUB_SECRET" "Enter GitHub App secret"
    update_env_var "GITHUB_PRIV_KEY" "Enter GitHub app private key"
  else
    echo "Provider not supported yet for auto installation."
    exit 1
  fi
}

# Path to the profile file (e.g., ~/.profile)
PROFILE_FILE="$HOME/.profile"

if [ ! -f "$PROFILE_FILE" ]; then
    touch "$PROFILE_FILE"
fi

move_env_variables_to_profile() {
  # Read the .env file line by line
  while IFS= read -r line; do
    # Ignore lines that start with a # (comments) or are empty
    if [ -z "$line" ] || [ "${line#\#}" != "$line" ]; then
      continue
    fi

    # Extract variable name and value (assume format VAR_NAME=VAR_VALUE)
    var_name=$(echo "$line" | cut -d '=' -f 1)
    var_value=$(echo "$line" | cut -d '=' -f 2-)

    # Check if the variable already exists in the .env file
    if grep -q "^export $var_name=" $PROFILE_FILE; then
      # Update the existing variable
      if [ "$IS_MAC" = "1" ]; then
        sed -i '' "s/^export $var_name=.*/export $var_name=$var_value/" "$PROFILE_FILE"
      else
        sed -i~ "/^export $var_name=/s/=.*/=\"$var_value\"/" "$PROFILE_FILE"
      fi
    else
      # Append the new variable to the .env file
      echo "export $var_name=$var_value" >> "$PROFILE_FILE"
    fi
  done < ".env"

  . $PROFILE_FILE

  rm -rf .env .env~ "$PROFILE_FILE"~
}

echo
printf "We need to prepare the ${BLUE}environment variables${NC} before proceeding\n"
echo "Please reply the following questions"
echo

single_select "Which docker mode are you going to use?" "Swarm Compose" "Use Swarm for managing a network, compose for a single machine"
echo

DOCKER_MODE=$SELECTED_PROVIDER

# For now keep this file here - we need to improve the docker swarm setup
# Download the docker-compose.yaml file
curl -o "docker-compose.yaml" "https://raw.githubusercontent.com/stormkit-io/bin/main/docker-compose.yaml" --silent

setup_base_env_variables

if [ "$DOCKER_MODE" = "Compose" ]; then
  setup_hosting_env_variables
  move_env_variables_to_profile

  docker compose up -d
else
  setup_hosting_env_variables
  move_env_variables_to_profile

  # Leave Docker Swarm if initialized
  docker swarm leave --force 2>/dev/null

  # Initialize stack (only needed for master node)
  docker swarm init

  # Deploy the stack
  docker stack deploy -c docker-compose.yaml stormkit
fi

echo ""
printf "${GREEN}Congratulations, Stormkit is installed on your computer!${NC}"
echo ""

if [ "$DOCKER_MODE" = "Compose" ]; then
  printf "Run ${BLUE}docker compose logs -f${NC} to check your logs"
  echo ""
fi;
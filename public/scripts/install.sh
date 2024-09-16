#!/bin/bash

unameOut="$(uname -s)"

# Determine the machine
case "${unameOut}" in
  Linux*)     machine=Linux;;
  Darwin*)    machine=Mac;;
  CYGWIN*)    machine=Cygwin;;
  MINGW*)     machine=MinGw;;
  *)          machine="UNKNOWN:${unameOut}"
esac

# Function to check if a command exists
command_exists() {
  command -v "$@" >/dev/null 2>&1
}

if [ "$machine" == "Mac" ]; then
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
  if ! pgrep -x "Docker" > /dev/null; then
    echo "Docker is not running. Starting Docker..."

    # Start Docker
    open --background -a Docker

    # Wait until Docker is running
    while ! docker info > /dev/null 2>&1; do
        echo "Waiting for Docker to start..."
        sleep 2
    done

    echo "Docker has started."
  else
    echo "Docker is already running."
  fi
elif [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
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

# Go to home directory
cd

mkdir -p stormkit

# Download the docker-compose.yaml file
curl -o "docker-compose.yaml" "https://raw.githubusercontent.com/stormkit-io/bin/main/docker-compose.yaml"

# Download the example .env file
curl -o ".env" "https://raw.githubusercontent.com/stormkit-io/bin/main/.env.example"

# Leave Docker Swarm if initialized
docker swarm leave --force 2>/dev/null

# Initialize stack (only needed for master node)
docker swarm init

# Deploy the stack
docker compose config | sed '/published:/ s/"//g' | sed "/name:/d" | docker stack deploy -c - stormkit

# Define text colors for output
GREEN="\033[0;32m"
NC="\033[0m"

echo ""
printf "${GREEN}Congratulations, Stormkit is installed on your computer!${NC}\n"
echo ""

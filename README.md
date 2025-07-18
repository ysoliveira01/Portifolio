# Remover npm
sudo apt purge npm

# Remover nodejs e suas dependências
sudo apt purge nodejs

# Remover pacotes órfãos (que não são mais necessários)
sudo apt autoremove

# Limpar o cache do apt
sudo apt clean

# Baixar o script de instalação do nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

source ~/.bashrc  # Ou source ~/.zshrc se você usa Zsh

# Instalar a versão LTS mais recente do Node.js (ex: 20.x.x)
nvm install 20

# Definir a versão 20 como a padrão para novos terminais
nvm alias default 20

# Usar a versão 20 do Node.js no terminal atual
nvm use 20

node -v
npm -v
# Сервис событий

Сделать сервис событий. Сервис должен быть реализован как SPA-приложение.

Пользователь создает событие (встреча, звонок и т.д.) с заголовком, содержанием и датой проведения. Пользователь должен иметь возможность совершать CRUD-операции над своими событиями. Искать по заголовку и фильтровать по дате (события за последние месяц, неделю, день) 
За час до проведения события, сервис отправляет напоминание по e-mail автору.

#### Технологии: ####

Python3, Django, DRF, vuejs, postgresql

## Подготавливаем систему
### Устанавливаем NodeJS
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo bash - 
apt install nodejs
```
### Устанавливаем yarn
```
curl -sL https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt update && apt install yarn
export PATH="$(yarn global bin):$PATH"
echo 'export PATH="$(yarn global bin):$PATH"' >> ~/.bashrc
```
### Устанавливаем vue cli
```
yarn global add @vue/cli
```
### Проверяем доступность vue cli
```
vue --version
```

## Команды для работы с проектом
### Запуск проекта
```
yarn install
```
### Компилирование проекта для dev
```
yarn serve
```
### Компилирование проекта для product
```
yarn build
```
### Lints and fixes files
```
yarn lint
```
### Запуск json сервера
```
yarn fake
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

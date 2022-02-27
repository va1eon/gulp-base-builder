# Базовая сборка Gulp для комфортной верстки сайтов


## Возможности


- Использование html инклудера (позволяет создовать отдельные блоки не заграмождая одну страницу)
- Использование CSS препроцессора SASS(SCSS)
- Использование Webpack для сборки JavaScript модулей
- Автоматическое создание файла шрифтов (_fonts.scss)
- Сборка иконок в SVG спрайт
- Конвертация изображений в современный формат webp
- Стартовый шаблон для верстки


## Установка


Для работы вам нужно скачать и устновить [nodejs](https://nodejs.org/),
если он отсутвует<br>
Установить пакет gulp-cli глобально `npm install --global gulp-cli`
вся необходимя информация есть на официальном сайте
[Gulp](https://gulpjs.com/docs/en/getting-started/quick-start)

Создайте папку с проектом и клонируйте репозиторий <br>
`$ git clone https://github.com/va1eon/gulp-base-builder .`

После того как все исходники будут скачаны, введите команду `npm install`.<br>
Все зависимости установятся автоматически.

## Запуск проекта и команды

`npm run start` - запустит локальный сервер http://localhost:3030 для разработки проекта

`npm run dev` - соберет проект в ***development*** режиме

`npm run build` - соберет проект в ***production*** режиме

`npm run sprite` - создает svg sprite

## Файловая структура


```
root-directory
|
|— dist
|— gulp
|   |— config
|   |   |— path.js
|   |   |— plugins.js
|— task
|   |— clean.js
|   |— copy.js
|   |— fonts.js
|   |— html.js
|   |— images.js
|   |— js.js
|   |— scss.js
|   |— server.js
|   |— svgSprite.js
|— src
|   |— fonts
|   |— html
|   |   |— blocks
|   |   |   |— _footer.html
|   |   |   |— _head.html
|   |   |   |— _header.html
|   |   |— pages
|   |   |   |— index.html
|   |— img
|   |— js
|   |   |— modules
|   |   |   |— supportsWebp.js
|   |   |— main.js
|   |— resources
|   |— scss
|   |   |— blocks
|   |   |   |— _header.scss
|   |   |— mixins
|   |   |— _functions.scss
|   |   |— _mixins.scss
|   |   |— _settings.scss
|   |   |— _variables.scss
|   |   |— _vendors.scss
|   |   |— main.scss
|   |— sprite
|— .babelrc
|— .gitignore
|— gulpfile.js
|— package.json
|— README.md
```

- в папку dist автоматически генерируются конечные файлы - html, css, js шрифты и изображения
- gulp - здесь находятся конфигурационные файлы проекта
  - path.js - пути к исходным файлам и конечная директория
  - plugins.js - общие плагины и их настройки
  - tasks - папка с задачами
- src папка с исходными файлами
- .babelrc файл настройки babel
- gulpfile.js файл настройки gulp
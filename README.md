# **Путеводитель по фильмам**

## _Учебный проект_ [Яндекс.Практикума](https://practicum.yandex.ru/)

## Автор: Ольга Любимова

<!--## [Ссылка на макет (dark-5)](https://www.figma.com/file/6FMWkB94wE7KTkcCgUXtnC/Дипломный-проект?type=design&node-id=1-11614&mode=design)

## [Ссылка на сайт](https://aelia.diploma.nomoredomainsmonster.ru/)-->

Фронтенд для дипломного проекта, бэкенд которого находится [здесь](https://github.com/Aelia5/movies-explorer-api): это сайт, на котором пользователь может регистрироваться, редактировать информацию в своём профиле, искать фильмы в базе данных и сохранять результаты поиска.


**Реализован следующий функционал:**

Получение пользователя по id.
Создание нового пользователя.
Авторизация пользователя.
Обновление профиля пользователя.
Сохранение данных пользователя и результатов поиска в локальном хранилище.
Получение карточек из базы данных.
Поиск по базе данных фильмов.
Добавление карточки в список сохранённых и её удаление из списка.
Обработка ошибок.

**Реализованы следующие технологии:**

1. Создание проекта с помощью библиотеки React.
2. Флексбокс-вёрстка.
3. Грид-вёрстка
4. Адаптивная вёрстка с использованием медиазапросов:
* страница свёрстана под четыре макета: 320px, 768px, 1280px;
* реализовано плавное сжатие и расширение элементов между точками перелома;
5. Анимация: прозрачность при наведении мыши.
6. Локальное подключение шрифта (Inter).
7. Создание и валидация форм.
8. Защита роутов авторизацией.
9. Использование контекста.

Для именования классов применяется методология БЭМ.

Используемые языки: HTML5, CSS, JavaScript, JSX.

**Инструкция для запуска**

1. Запустите бэкенд в соответствии с [инструкцией](https://github.com/Aelia5/movies-explorer-api).
2. Создайте пустую папку и перейдите в неё.
2. Склонируйте этот репозиторий.
3. Установите зависимости командой npm install.
4. Для запуска проекта выполните команды npm run build и serve -s build.
5. Откройте проект в браузере по ссылке http://localhost:3000.

**Системные требования**

Node.js, MongoDB 4.4.x

**Статус проекта**

Проект завершён.

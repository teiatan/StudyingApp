# Навчальна платформа StudyingApp
була створена в рамках кейсового завдання для Genesis Front-End School 2.0 на основі готового [АРІ](https://www.postman.com/aninix/workspace/genesis-front-end-school/overview).


## Технології

HTML, CSS, JS, REACT

Для реалізації було використано шаблон [Create React App](https://github.com/facebook/create-react-app). ([документація](https://facebook.github.io/create-react-app/docs/getting-started)).

Для стилізації використано біліотеку [@emotion](https://emotion.sh/docs/introduction) за допомогою компонентів styled.

Для живого відтворення відео використано бібліотеку [hls.js](https://www.npmjs.com/package/hls.js/v/canary).

## Перегляд проєкту через localhost

1. Перевірити наявність LTS-версії Node.js. Скачати і встановити можна [тут](https://nodejs.org/en/).
2. Встановити базові залежності командою `npm install`.
3. Запустити режим розробки командою `npm start`.
4. Перейти в браузер за адресою [http://localhost:3000](http://localhost:3000).

## Станом на 19.03.2023 реалізовано:

1. Додаток містить дві сторінки:

- сторінка з курсами (Courses)
- сторінка з переглядом уроків курсу (Lessons)

### Сторінка Courses

2. Отримано з АРІ і виведено 10 останніх курсів
3. Пагінація внизу сторінки коректно виводить запити решти курсів
4. Кнопка Learn more... у картці кожного курсу скеровує на сторінку Lessons, де підвантажується вибраний курс

### Сторінка Lessons

5. Якщо користувач не вибрав курс, виведено пропозицію обрати перейшовши по кнопці до сторінки з курсами
6. Якщо користувач обрав курс, то на сторінці виведено 3 блоки інформації:
   -інформація про поточний курс
   -список уроків курсу
   -поточний урок
7. Реалізовано локальне збереження інформації по курсу, уроку та часу відтворення відео

## Подальший план дій:

1. Провести рефакторинг. (Так як я тільки на 4 тижні з 8 по вивченню React-у, код написаний за допомогою класових компонентів, в деяких місцях хуки. В планах здійснити рефакторинг за допомогою Redux. Ну і прибрати хаотичність і зайвий код).
2. Стилізувати під планшетну і мобільну версії додавши медіазапити в файлах стилів.
3. Реалізувати на сторінці курсів відтворення відео 1 уроку по наведенню мишки (опрацювання подій onmouseenter та onmouseover, які змінюватимуть в стейті парамерт, що зумовлюватиме рендер відповідно тегу відео чи тегу з картинкою).
4. Реалізувати picture in picture шляхом створення окремого компоненту зі своїм незалежним стейтом з абсолютно спозиціонованою розміткою та великим z-індексом, через що відео буде поверх всього контенту та відтворюватиметься незалежно від змін інших частин застосунку, дані (посилання на відео та поточний час відтворення) буде отримано по натисканню кнопки поруч з поточним відтвореним відео.
5. Перемотування відео. Додати відслідковування подій натискання вибраних згодом конкретних кнопок для перемотування відео вперед і назад. У компонента, де відтворюється відео, створити свій стейт у якому буде значення параметра поточного часу відтворення time. Клік зумовлюватиме перезапис стейту time+прокрутка або time-прокрутка, задаватиме тегу відео атрибут currentTime. При unmount-і знімаються слухачі клавіатури, при маунті - вішаються.
6. Прописати відслідковування помилок запитів АРІ. Додати try catch. Виводити помилки різних статусів. Прописати виведення заглушок, якщо не прийшла з беку інформація по конкретному полю.
7. Додати стилізацію: ховерів і фокусів, відображення активної сторінки.
8. Доопрацювати Loader коли на сторінці з курсами натискається Courses. В правильних місцях задати setState loader:true чи false, а саме перед запитом до АРІ і після того, як прийшов результат (finally), не в функціях АРІ, а саме в функціях життєвого циклу.
9. Стилізувати дані, які рендеряться з классом isHidden у яких display:none. Це додаткова інформація по курсам і урокам. 
10. Перевірити семантичність використання тегів.

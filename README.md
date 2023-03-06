# haku-db
Простенькая и легкая дата база.

# введения

**установка**

```sh

npm haku-db@lastes

```

# Использования 

```js

const TinyDB  = require("./pkg/tibydb.js");

const db = new TinyDB('messages.json');

// загружаем данные из файла

db.load();

// добавляем новые данные

db.add({ username: 'Alice', message: 'Привет, мир!' });

db.add({ username: 'Bob', message: 'Как дела?' });

// удаляем все
db.remove();

// обновим чот
db.update(1, { name: pon } );
// получаем все данные

const allData = db.getAll();

console.log(allData);

// сохраняем данные в файл

db.save();

```

# Информация
- [npm click](https://www.npmjs.com/package/haku-db) 

## следущие обновления
**хз когда `будет`**

# haku-db
Простенькая и легкая дата база.

# введения

**установка**

```

npm haku-db@lastes

```

# Использования 

```

const TinyDB  = require("./pkg/tibydb.js");

const db = new TinyDB('messages.json');

// загружаем данные из файла

db.load();

// добавляем новые данные

db.add({ username: 'Alice', message: 'Привет, мир!' });

db.add({ username: 'Bob', message: 'Как дела?' });

// получаем все данные

const allData = db.getAll();

console.log(allData);

// сохраняем данные в файл

db.save();

```

# Информация
npm: https://www.npmjs.com/package/haku-db 

git hub: https://github.com/SkyShipGroup/haku-db

## следущие обновалния
**хз когда будет**

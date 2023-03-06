class TinyDB {

  constructor(filename) {

    this.filename = filename;

    this.data = [];

  }

  add(data) {

    this.data.push(data);

    this.save();

  }

  getAll() {

    return this.data;

  }

  save() {

    const fs = require('fs');

    fs.writeFileSync(this.filename, JSON.stringify(this.data));

  }

  load() {

    const fs = require('fs');

    if (fs.existsSync(this.filename)) {

      const rawData = fs.readFileSync(this.filename);

      this.data = JSON.parse(rawData);

    }

  }

}

module.exports = TinyDB;

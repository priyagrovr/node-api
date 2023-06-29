const { bookEntity } = require("../entity");

class Service {
  async get() {
    return bookEntity.find();
  }
}

module.exports = new Service();

const { bookService } = require("../services");
const { API_SUCCESS } = require("../constants/messages");

class controller {
  
  async getAllBooks(req, res, next) {
    const query = req.query;
    try {
      const books = await bookService.get(query);
      return res.json({ message: API_SUCCESS, data: { books } });
    // return res.json({ message: API_SUCCESS, data: 'I m working' });
    } catch (error) {
      return next(error);
    }
  }
  
  
}

module.exports = new controller();

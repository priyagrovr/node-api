const express = require("express");
const router = express.Router();
const controller = require("../api/controller");

// Routes list
const routes = [
  //Roles
  {
    method: "GET",
    path: "/books",
    handler: "BookController.getAllBooks",
    authenticate: true
  },
];


// Applying routes
routes.forEach(route => {
  const handler = route.handler.split(".");
  let middleware = [(req, res, next) => next()];

  router[route.method.toLowerCase()](route.path, ...middleware, controller[handler[0]][handler[1]]);
});

// router.get('/books', (req, res)=>{
//   res.send("Hello, This was a post Request");
// });
// router.get('/', (req, res)=>{
//   res.send("Hello, This was a post Request1");
// });

// exports.router = router;
module.exports = router;
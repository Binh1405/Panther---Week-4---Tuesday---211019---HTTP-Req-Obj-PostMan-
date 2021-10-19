var express = require('express');
var router = express.Router();

//As a Postman APP I can make a GET request to http://localhost:3000/news and 
//receive back a message Successfully get all news
// router.get('/', function(req, res, next){
//   console.log(req.query)
//   res.send("Successfully get all news")
// })

//As a Postman APP I can make a GET request to http://localhost:3000/news?page=2 and 
// receive an message, the Successfully get page 2 news
//fe: http://localhost:3000/news?page=2
/* GET home page. */
// router.get('/', function(req, res, next) { //fe: http://localhost:3000/news?page=2
//   console.log("this is request obj", req.query)
//   const {page} = req.query
//   res.send({title: `successfully get page ${page} news`})
// });

//As a Postman APP I can make a GET request to http://localhost:5000/news?page=3 
// and receive an message, the Successfully get page 3 news
// router.get('/', function(req, res, next){
//   const {page} = req.query
//   res.send(`successfully get page ${page} news`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?page=n and receive an message,
//  the Successfully get page n news
// router.get('/', function(req, res, next){
//   const {page} = req.query
//   res.send(`successfully get page ${page} news`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?q=Facebook 
// and receive back a message Successfully get all news related to query Facebook.
// router.get('/', function(req, res, next){
//   const {q} = req.query
//   res.send(`Successfully get all news related to query ${q}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?q=anyString
//  and receive back a message Successfully get all news related to query anySring.
// router.get('/', function(req, res, next){
//   const {q} = req.query
//   res.send(`successfully get all news related to query ${q}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?title=Mobile 
//and receive back a message Successfully get all news that have tittle Mobile or mobile
// router.get('/', function (req, res, next){
//   const {title} = req.query
//   res.send(`successfully get all news that have title ${title} or mobile`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?title=dynamicValue and 
// receive back a message Successfully get all news that have tittle according to dynamicValue.
// router.get('/', function (req, res, next){
//   const {title} = req.query
//   res.send(`successfully get all news that have title according to ${title}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?city=New York 
//and receive back a message located in New York.
// router.get('/', function(req, res, next){
//   const {city} = req.query
//   res.send(`this mess is located in ${city}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?category=dynamicValue. 
//and receive back a message Successfully get all news that have category according to dynamicValue.
// router.get('/', function (req, res, next){
//   const {category} = req.query
//   res.send(`successfully get all news that have category according to ${category}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news?category=dynamicValue&city=dynamicValue&title=dynamicValue. 
// and receive back a message Successfully get all news that have a string of all queries and theirs dynamicValue.
// router.get('/', function(req, res, next){
//   const {city, category, title} = req.query
//   res.send(`successfully get all news that have a string of all queries and their ${city}`)
// })

//As a Postman APP I can make a GET request to http://localhost:5000/news/:id and receive a 
//message Successfully get detail of 1 single new with the id is dynamicValue
// router.get('/:id', function (req, res, next){
//   console.log(req.params)
//   const {id} = req.params
//   res.send(`successfully get detail of 1 single news with the id is ${id}`)
// })

//As a Postman APP I can make a POST request to http://localhost:5000/news with a request body 
// title,category,city and receive a message Successfully create a news about title in city and related
// to category . Example below. Example request body
// router.post('/', (req, res, next) => {
//   console.log(req.body)
//   const {title, category, city} = req.body
//   res.send(`successfully create news about ${title} in ${city} and related to ${category}`)
// })

//As a Postman APP I can make a PUT request to http://localhost:5000/news/:id with a request body
// contain title,category,city and receive a message Successfully find the news with id , 
//and update the content with title in city and related to category . Example below.
// router.put('/:id', (req, res, next) =>{
//   const{title, city, category} = req.body
//   res.send(`successfully find the news with id, and update the content with ${title} in ${city} and related to ${category}`)
// })

//As a Postman APP I can make a DELETE request to http://localhost:5000/news/:id and receive a message
// Successfully find the news with id , and delete
// router.delete('/:id', (req, res, next) => {
//   const{id} = req.params
//   res.send(`successfully find the news with id ${id}, and delete`)
// })

module.exports = router;

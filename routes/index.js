var express = require('express');
var router = express.Router();

const students=[ 
  {   "ID":"1", "name":"Amit",  "age":"14", "rollno": "11", "class":"10"},
  {   "ID":"2", "name": "Rahul", "age": "12", "rollno": "18", "class": "8"},
  {   "ID":"3", "name": "Aniket", "age": "15", "rollno": "16", "class": "10"},
  {   "ID":"4", "name": "Ravi",  "age": "17", "rollno": "15", "class": "11"}
];

//Get all students
router.get('/stdata', function(req, res) {
  console.log("hii");
res.render('dashboard', { students: students});
});

//user input logic
router.post('/fetchstudent', function(req, res) {
var userinput = Number(req.body.id);
console.log(userinput);
var isMatch = false;

// students.forEach(userdata);

// function userdata(user,index){
//   console.log("user"+JSON.stringify(user));
//   console.log("user"+JSON.stringify(index));
//   if (user.ID === req.body.id) {
//     var stud=[];
//     stud.push(user);
// console.log("success");
// res.render('databyid', { students: stud});
// isMatch = true;
// }
// }
students.forEach(function(user) {
  console.log("user"+JSON.stringify(user));
if (user.ID === req.body.id) {
  var stud=[];
  stud.push(user);
console.log("success");
res.render('databyid', { students: stud});
isMatch = true;
}
});
if (!isMatch) {
// only logs once even though there are multiple users
console.log("No Match!");
} 
});

router.get('/',(req, res) => {
res.json(JSON.stringify((students)));
});

module.exports = router;

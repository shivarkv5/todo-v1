const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

//Setting up view engine to ejs. Also there are alternatives to ejs but ejs is easy one.
//Telling app to use ejs as its view engine
app.set('view engine', 'ejs')

let todoList = ["Eat", "Code", "Repeat"]
let worklist = [];

// 1. First Goes through this route
app.get('/', (req, res) => {
    //2. Render list.ejs which passes 2 variables 
    // Todolist getting started with 3 values and assigns it to todo key
    res.render('list', { kindOfDay: date.date(), todo: todoList })
})

app.post('/', (req, res) => {
    console.log(req.body.List)
    let newTodo = req.body.todo
    if (req.body.List === "Work") {
        worklist.push(newTodo);
        res.redirect("/work")
    } else {
        todoList.push(newTodo)
        res.redirect('/')
    }
    // Here it goes to line 14 app.get("/") with newly added item to the array todoList and renders list.ejs with new value the user entered)
})

app.get("/work", (req, res) => {
    res.render("list", { kindOfDay: "Work List", todo: worklist })
})

app.post("/work", (req, res) => {
    worklist.push(newWork);
    res.redirect("/work")
})

app.get("/about", (req, res) => {
    res.render("about")
})

app.listen(3000, () => console.log("server running on port 3000"))
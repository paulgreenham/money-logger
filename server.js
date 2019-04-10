const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const api = require('./server/routes/api')


const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/expensesDB', {useNewUrlParser: true})


const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/', api)

// const Expense = require('./server/models/Expense')

// const testData = require('./test-data')
// for(let item of testData) {
//     let entry = new Expense ({
//         name: item.item,
//         amount: item.amount,
//         date: item.date,
//         group: item.group
//     })
//     entry.save()
// }

const port = 3723
app.listen(port, function () {
    console.log(`Server running on port ${port}`)
})
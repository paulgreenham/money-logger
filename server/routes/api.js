const express = require('express')
// const request = require('request')
const router = express.Router()
const moment = require('moment')

const Expense = require('../models/Expense')

router.get('/expenses', function (req, res) {
    Expense.find({}).sort({date: -1}).exec(function (err, expenses) {
        res.send(expenses)
    })
})

router.get('/expenses/:group', function (req, res) {
    let groupSelection = req.params.group
    if(req.query.total) {
        Expense.aggregate([
            {$match: {group: groupSelection}},
            {$group: {_id: "$group", total: {$sum: "$amount"}}},
        ], 
        function (err, results) {
            res.send(results)
        }
        )
    }
    else {
        Expense.find({group: groupSelection}, function (err, expenses) {
            res.send(expenses)
        })
    }
})

router.post('/new', function (req, res) {
    let newExpense = new Expense ({
        name: req.body.name,
        amount: req.body.amount,
        group: req.body.group,
        date: (req.body.date) ? moment(req.body.date, "YYYY-MM-DD").format("LLLL") : moment().format("LLLL")
    })
    newExpense.save()
    console.log(`Spent ${newExpense.amount} on ${newExpense.name} on ${newExpense.date}`)
    res.end()
})

router.put('/update/:group1/:group2', function (req, res) {
    Expense.findOneAndUpdate(
        {group: req.params.group1},
        {group: req.params.group2},
        {new: true},
        function (err, expense) {
        res.send(`Expense: ${expense.name} on ${expense.date} has had group ${req.params.group1} changed to ${expense.group}`)
    })
})

module.exports = router
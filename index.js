const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/calculate', (req, res) => {
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const action = req.query.action

    let result = 0

    if (action === 'add') {
        result = num1 + num2
    } else if (action === 'subtract') {
        result = num1 - num2
    } else if (action === 'multiply') {
        result = num1 * num2
    } else if (action === 'divide') {
        if (num2 === 0) {
            return res.status(400).json({ error: "Denominator cannot be zero" })
        }
        result = num1 / num2
    }

res.json({ result: result })
})

app.listen(3000, () => {
    console.log("Calculator server running on port 3000")
})

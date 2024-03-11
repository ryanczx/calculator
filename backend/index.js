const express = require("express");
const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/', (req, res) => {
    var result = 0;
    const firstNumber = parseInt(req.body.firstNumber, 10)
    const secondNumber = parseInt(req.body.secondNumber, 10)

    if (req.body.type === "add") {
        result = firstNumber + secondNumber;
    } else if (req.body.type === "subtract") {
        result = firstNumber - secondNumber;
    }

    res.json({ result: result });
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
})

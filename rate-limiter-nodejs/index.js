import express from "express";
import rateLimit from "express-rate-limit"
const app = express();


const limiter = rateLimit({
    windowMs: 1000 * 60 * 15,
    max: 5,
    message: "rate limitb exised you can sent more requests for 15 minutes"

})


let a = 0
app.get('/users', limiter, (req, res) => {

    res.status(200).json({ count: a });
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`listening on ${port}`);
})

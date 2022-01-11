const router = require('express').Router();


router.get("/", (req, res) => {
    res.send("hi!")
});


router.post("/", (req, res)=>{
  res.send(req.body)
});

module.exports = router;
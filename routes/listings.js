var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("listings", { title: "listings" });
});

module.exports = router;

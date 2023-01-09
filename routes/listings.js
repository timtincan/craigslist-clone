var express = require("express");
var router = express.Router();

const listings = [
    {
        title: "kitten",
        location: "Rowland Heights",
        image: "images/rabbits.jpg",
    },
    {
        title: "Cute lionhead Baby Bunny Rabbits",
        location: "Glendale",
    },
    {
        title: "Cute lionhead Baby Bunny Rabbits",
        location: "Glendale",
    },
];

router.get("/", function (req, res) {
    res.render("listings", { title: "listings", listings: listings });
});

module.exports = router;

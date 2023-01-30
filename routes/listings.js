var express = require("express");
var router = express.Router();

const listings = [
    {
        title: "kitten",
        location: "Rowland Heights",
        date: new Date(),
        image: "images/rabbits.jpg",
    },
    {
        title: "Cute lionhead Baby Bunny Rabbits",
        location: "Glendale",
        date: new Date(),
    },
    {
        title: "Cute lionhead Baby Bunny Rabbits",
        location: "Glendale",
        date: new Date(),
    },
];

router.get("/", function (req, res) {
    res.render("listings", { title: "listings", listings: listings });
});

module.exports = router;

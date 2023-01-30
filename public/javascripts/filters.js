const hasImageFilter = document.getElementById("has-image");
const postedTodayFilter = document.getElementById("posted-today");

const listingCards = document.getElementsByClassName("listing-card");

hasImageFilter.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
        for (listing of listingCards) {
            if (
                listing.firstElementChild.firstElementChild.tagName.toLowerCase() !==
                "img"
            ) {
                listing.style.visibility = "hidden";
            }
        }
    } else {
        for (listing of listingCards) {
            listing.style.visibility = "";
        }
    }
});

postedTodayFilter.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {

    } else {

    }
})
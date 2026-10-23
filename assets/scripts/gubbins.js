function gubbins () {
    let pages = ["vinegarShelf", "salad", "chili", "warship", "terrarium"];
    let gubButton = document.getElementById("gubButton");
    let selection = Math.round(Math.random()*(pages.length-1));
    let link = `/assets/pages/gubbins/${pages[selection]}.html`;
    gubButton.href = link;
}

gubbins ()
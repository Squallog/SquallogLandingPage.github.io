function gubbins () {
    let pages = ["/assets/pages/gubbins/terrarium.html", "/assets/pages/gubbins/chilli.html"];
    let gubButton = document.getElementById("gubButton");
    let selection = Math.round(Math.random()*(pages.length-1));
    gubButton.href = pages[selection];
}

gubbins ()
var videoSects = document.querySelectorAll("[data-hasVideoEmbeds]");
var elementsArray = Array.from(videoSects);
console.log(elementsArray);

elementsArray.forEach(element => {
    element.addEventListener("click", () => {
        let players = Array.from(element.querySelectorAll("iframe[data-lowRes]"));
        console.log(players);
        players.forEach( function (n) {
            let nSource = n.src;
            n.src = nSource;
            n.removeAttribute("data-lowRes");
        });
    });  
});
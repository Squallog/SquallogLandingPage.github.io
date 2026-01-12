function playout(playerId) {
    let player = document.getElementById(playerId);
    let button = player.closest("button");
    let canvases = button.getElementsByTagName("canvas");
    let cArray = Array.prototype.slice.call(canvases);

    // console.log(player);
    // console.log(button);
    // console.log(cArray);
    // console.log(!player.paused);
    if (!player.paused) {
        player.pause();
        // console.log("pausing");
        cArray.forEach( (canvas) => {
            canvas.setAttribute('data-playing', "false");            
        });
    } else {
        player.play();
        // console.log("playing");
        cArray.forEach( (canvas) => {
            canvas.setAttribute('data-playing', "true");            
        });
    };
    return "button";
}
function innit(container, state) {
    let children = container.getElementsByTagName("div");
    let childArray = Array.prototype.slice.call(children);
    let count = childArray.length;
    if (container.getAttribute("data-alignment") == "left") {
        childArray.forEach((targ) => {
            let delay = childArray.indexOf(targ);
            animate(count, targ, delay, state);
        })
    } else {
        childArray.forEach((targ) => {
        let delay = childArray.slice().reverse().indexOf(targ);
        animate(count, targ, delay, state);
    })
    }
    return(childArray);
}

function animate(count, targ, del, state) {
    let duration = 2;
    let delay = (duration/(count)) * del;
    targ.style.animationName="bar";
    targ.style.animationDelay=`${delay}s`;
    targ.style.animationDuration=`${duration}s`;
    targ.style.animationIterationCount="infinite";
    targ.style.animationDirection="alternate";
    targ.style.animationPlayState=state;
    return("animating");
}

function animateButton (self) {
    let button = document.getElementById(self);
    let bars = button.getElementsByClassName("barContainer")
    let barArray = Array.prototype.slice.call(bars);
    if (button.getAttribute("animating") == "true") {
        button.setAttribute("animating", "false");
        barArray.forEach((child) => {
            innit(child, "paused");
        });
    } else {
        button.setAttribute("animating", "true");
        barArray.forEach((child) => {
            innit(child, "running");
        });
    };
    return("animating");
}
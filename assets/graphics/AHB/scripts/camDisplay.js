const body = document.body;
const count = document.getElementById("cam");
const config = {attributes: true, childList: false, subtree: false};

function updateCam (node) {
    const cam = document.getElementById("cam");
    let n = node.getAttribute("data-cam");
    console.log(n);
    cam.innerHTML = `CAM ${n}`;
};

function updateText (node) {
    const caption = document.getElementById("caption")
    let n = node.getAttribute("data-message");
    caption.innerHTML = n;
}

function callBack(mutationList, observer, node) {
    updateCam(node);
    updateText(node);
};

const observer = new MutationObserver((mutationList, observer) => {
    callBack(mutationList, observer, body);
})

observer.observe(body, config);

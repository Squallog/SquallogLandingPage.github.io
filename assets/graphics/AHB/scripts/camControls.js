console.log("starting");
const body = document.body;

function iterateUp (attribute) {
    const i = document.body.getAttribute(attribute);
    int = parseInt(i);
    document.body.setAttribute(attribute, int+1);
    return(i+1);
}

function iterateDown (attribute) {
    const i = document.body.getAttribute(attribute);
    int = parseInt(i);
    document.body.setAttribute(attribute, int-1);
    return(i-1);
}

function capSubmit (id) {
    const input = document.getElementById(id);
    const body = document.body;
    let string = input.value;
    body.setAttribute("data-message", string);
    input.value = '';
    console.log(body.getAttribute("data-message"));
}
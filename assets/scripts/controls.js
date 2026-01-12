let controls = document.getElementsByClassName("controls");
let graphics = document.getElementsByClassName("frame");
let ctrlArray = Array.prototype.slice.call(controls);
let graphArray = Array.prototype.slice.call(graphics);

const config = { attributes: true, attributeOldValue: true, childList: false, subtree: false };

// console.log(`graphics loaded: ${graphArray}
// control panels loaded: ${ctrlArray}`);

function report (id) {
    let doc = document.getElementById(id);
    let attributes = doc.attributes;
    const filtAttributes = [].filter.call(attributes, function (at) {
        return /^data-/.test(at.name);
    })
    var nodes = [];
    var values = [];
    // console.log(attributes.length);

    for (var att, i = 0, n = filtAttributes.length; i < n; i++ ) {
        att = filtAttributes[i];
        nodes.push(att.nodeName);
        values.push(att.nodeValue);
        // console.log(att);
    };
};


function testClick(id) {
    const name = `data-${Math.random()}`;
    document.getElementById(id).setAttribute(name, "value");
}

function makeObserver(node, index, array) {
    node.onload = function(){
        // getting body
        const body = node.contentWindow.document.body;
        // console.log(body);

        // declaring callBack function (nested arrow function to inherrit scope) =================================
        const callBack = (record, observer) => {
            // console.log("callBack");
            let attributes = [];
            let values =[];
            for (const mutation of record) {
                const name = mutation.attributeName;
                // console.log(mutation);
                const value = node.getAttribute(name);
                attributes.push(name);
            };
            // console.log(attributes);
            attributes.forEach((attribute) => {
                // console.log(body);
                // console.log(attribute);
                const value = body.getAttribute(attribute);
                // console.log(value);
                graphArray[index].contentWindow.document.body.setAttribute(attribute, value);
                // console.log(graphArray[index].contentWindow.document.body.getAttribute(attribute))
                return(value);
            })
        };

        // creating mutation observer ================================================================================
        // console.log(`making observer for ${body} (position ${index} in ${array}`);
        const observer = new MutationObserver(callBack);
        observer.observe(body, { attributes: true, attributeOldValue: true, childList: false, subtree: false });
        // console.log(observer);

    };
};

ctrlArray.forEach(makeObserver);

// const observer = new MutationObserver(callBack);
// observer.observe(imagingB, { attributes: true, attributeOldValue: true, childList: false, subtree: false });
// report("imagingB");

function emaLink(dom) {
    let rawText = dom.innerHTML;
    let noSpace = rawText.replaceAll(" ", "");
    let withAt = noSpace.replace("[at]", "@");
    let final = withAt.replaceAll("[dot]", ".")
    navigator.clipboard.writeText(final);
    console.log(final);
    return true
}
function SubmitURL() {
    const newa = document.createElement("a");
    newa.setAttribute("href", "https://www.youtube.com");
    const newtext = document.createTextNode("YouTube");
    newa.appendChild(newtext);
    const newdiv = document.createElement("div");
    newdiv.setAttribute("class", "card");
    newdiv.appendChild(newa);
    const parent = document.getElementsByClassName("basic-grid")[0];
    parent.appendChild(newdiv);
}
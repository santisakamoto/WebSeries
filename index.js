function myFunction (){
    let serie = document.getElementById("serie").value;
    let plataform = document.getElementById("plataform").value;
    let description = document.getElementById("description").value;
    const node = document.createElement("p");
    const serieNode = document.createTextNode(serie);
    const plataformNode = document.createTextNode(plataform);
    const descriptionNode = document.createTextNode(description);
    node.appendChild(serieNode);
    node.appendChild(plataformNode);
    node.appendChild(descriptionNode);
    document.getElementById("display").appendChild(node);
}
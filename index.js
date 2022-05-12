let count = 0;

function saludar(event) {
    if (count > 3) {
        console.log(`ya me ejecute ${count} veces`)
        return;
    }
    // capturamos el h1
    let h1DOM = document.querySelector("h1");
    // cambiamos el valor de la propiedad color del h1
    h1DOM.style.color = (h1DOM.style.color === "yellow")
        ? "white"
        : "yellow";
    // capturamos el body
    let bodyDOM = document.querySelector("body");
    // cambiamos el valor de la propiedad background-color del body
    bodyDOM.style.backgroundColor = (
        bodyDOM.style.backgroundColor === "purple"
    )
        ? "black"
        : "purple";
    // crear un h2
    let h2DOM;
    if (document.querySelector("h2") === null) {
        // no existe h2, tengo que crearlo
        h2DOM = document.createElement("h2");
        // agregarle el contenido '¿cómo estás?'
        // h2DOM.innerHTML = '<span>¿cómo estás?</span>';
        h2DOM.innerText = "¿cómo estás?";
        h2DOM.style.color = "white";
        bodyDOM.appendChild(h2DOM);
    } else {
        // sí existe, tengo que eliminarlo
        h2DOM = document.querySelector("h2");
        bodyDOM.removeChild(h2DOM);
    }
    count = count + 1;
}

window.onload = () => {
    console.log("hello js");

    let bodyDOM = document.querySelector("body");
    bodyDOM.style.flexDirection = "column";

    let buttonDOM = document.querySelector("button");
    buttonDOM.addEventListener(
        "click",
        saludar
    );
}

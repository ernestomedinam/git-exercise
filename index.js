function printEvent(event) {
    console.log(event);
}

function btnClickListener(event) {
    printEvent(event);
    console.log("soy el del boton");
    // event.stopPropagation();
    event.preventDefault();
    const button = event.target;
    button.removeEventListener("click", btnClickListener);

}

window.onload = () => {
    const button = document.querySelector('button');
    button.addEventListener(
        "click",
        btnClickListener
    );
    document.addEventListener(
        "click",
        (event) => {
            console.log(event);
            console.log("soy el del document")
        }
    );
    window.addEventListener(
        "click",
        (event) => {
            console.log(event);
            console.log("yo soy el del window")
        }
    );
    document.body.addEventListener(
        "click",
        (event) => {
            printEvent(event);
            console.log("soy el del body");
        }
    );
}

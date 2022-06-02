let inputPrincipal = document.querySelector(".input")
let botonAgregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea)
    };
    crearDiv(nuevaTarea) {

        let newDiv = document.createElement("div")
        newDiv.classList.add("Item")
        let inputItem = document.createElement("input");
        nuevaTarea = inputPrincipal.value
        inputItem.value = nuevaTarea
        inputItem.type = "text";
        inputItem.disabled = true
        inputItem.classList.add("item-input")
        newDiv.appendChild(inputItem)

        let botonEditar = document.createElement("button")
        newDiv.appendChild(botonEditar);
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add("boton-editar")

        let botonRemover = document.createElement("button")

        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add("boton-remover")
        newDiv.appendChild(botonRemover, botonEditar, inputItem)
        container.appendChild(newDiv)
        botonEditar.addEventListener("click", function (x) {

            inputItem.disabled = !inputItem.disabled;
            inputItem.innerHTML = inputItem.disabled

            if (inputItem.disabled == false) {
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            }
            else {
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
            }
        })
        botonRemover.addEventListener("click", function (params) {
            inputItem.style = "display:none"
            botonRemover.style = "display:none"
            botonEditar.style = "display:none"
        })
    }
}

botonAgregar.addEventListener("click", function (params) {
    chequearInput()
    inputPrincipal.value = ""
})

let chequearInput = () => {

    if (inputPrincipal.value !== "") {
        let nuevaTarea;
        new Item(nuevaTarea)
    };
    inputPrincipal.addEventListener("keypress", (event) => {
        if (event.key == 'Enter' && inputPrincipal.value !== "") {
            new Item();
            inputPrincipal.value = "";
        }
    })
}
chequearInput()







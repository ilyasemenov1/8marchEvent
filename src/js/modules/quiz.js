
export class Quiz {
    constructor() {
        this.buttons = document.querySelectorAll(".quiz_button");
    }

    event() {
        this.buttons.forEach(element => {
            element.addEventListener("click", () => {
                this.#addModalMenu(element);
                element.classList.add("active");
            });
        });
    }

    #addModalMenu(element) {
        let modal = document.createElement("div");
        modal.className = "modal-q";
        modal.innerHTML = `        
            <div class="modal-q_content">
                <h2 class="modal-q_label">#${element.innerText}</h2>
                <p>${element.dataset.q}</p>
            </div>`
        document.body.append(modal);
        let modalQ = document.querySelector(".modal-q");
        modalQ.addEventListener("click", () => {
            this.#removeModal();
        });
    }

    #removeModal() {
        let modal = document.querySelectorAll(".modal-q");
        modal.forEach(element => {
            element.remove();
        });
    }
}

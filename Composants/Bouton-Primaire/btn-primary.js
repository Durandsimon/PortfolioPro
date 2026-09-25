class CustomButton extends HTMLElement {

    connectedCallback() {

        const text = this.getAttribute("text");
        const href = this.getAttribute("href");

        this.innerHTML = `
            <a href="${href}" class="button">
                <span>${text}</span>
                <span class="material-symbols-outlined">arrow_forward</span>
            </a>
        `;
    }

}

customElements.define("custom-button", CustomButton);
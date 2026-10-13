class CustomButton extends HTMLElement {

    connectedCallback() {

        const text = this.getAttribute("text");
        const href = this.getAttribute("href");
        const target = this.getAttribute("target");
        const icon = this.getAttribute("icon");

        this.innerHTML = `
            <a href="${href}" class="button"  target="${target}">
                <span>${text}</span>
                <span class="material-symbols-outlined">${icon}</span>
            </a>
        `;
    }

}

customElements.define("custom-button", CustomButton);
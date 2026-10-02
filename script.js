document.title = "Portfolio";

// header
class CustomHeader extends HTMLElement {

    connectedCallback() {

        const breadcrumb = JSON.parse(this.getAttribute("breadcrumb"));

        this.innerHTML = `
            <header class="header">

                <nav class="header__breadcrumb" aria-label="Fil d'Ariane">
                ${breadcrumb.map((item, index) => ` 
                    ${index > 0 ? '<span class="header_breadcrumb">|</span>' : ''} 
                <a id="header" href="${item.url}">${item.name}</a> `).join("")}</nav

                <div>
                    <p>Simon DURAND</p>
                </div>

            </header>
        `;
    }

}

customElements.define("custom-header", CustomHeader);


// footer
class CustomFooter extends HTMLElement {

    connectedCallback() {

        const breadcrumb = JSON.parse(this.getAttribute("breadcrumb"));

        this.innerHTML = `
            <footer class="footer">

                <div style="margin:1rem 0rem 1rem 0rem">
                    <p>Portfolio 2026</p>
                </div>

            </footer>
        `;
    }

}

customElements.define("custom-footer", CustomFooter);
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
                <div>
                    <img src="../Images/-fonctionnement-/Triangle.svg">
                </div>

            </footer>
        `;
    }

}

customElements.define("custom-footer", CustomFooter);


// déroulant
document.querySelectorAll(".accordion").forEach((accordion) => {
    const header = accordion.querySelector(".accordion-header");
    const content = accordion.querySelector(".accordion-content");

    if (!header || !content) return;

    const mobile = window.matchMedia("(max-width: 768px)");

    function updateAccordion() {
        if (mobile.matches) {
            // Sur mobile, on conserve le comportement accordéon.
            const isClosed = accordion.classList.contains("is-closed");

            header.setAttribute("aria-expanded", !isClosed);

            if (isClosed) {
                content.hidden = true;
            } else {
                content.hidden = false;
            }
        } else {
            // Sur ordinateur, toutes les sections sont ouvertes.
            accordion.classList.remove("is-closed");
            content.hidden = false;
            header.setAttribute("aria-expanded", "true");
        }
    }

    header.addEventListener("click", () => {
        // Aucun clic fonctionnel sur ordinateur.
        if (!mobile.matches) return;

        const isClosed = accordion.classList.toggle("is-closed");

        header.setAttribute("aria-expanded", !isClosed);

        if (isClosed) {
            content.hidden = true;
        } else {
            content.hidden = false;
        }
    });

    // Actualisation au chargement et au changement de largeur.
    updateAccordion();
    mobile.addEventListener("change", updateAccordion);
});
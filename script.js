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
            <div class="block-landscape">
                <p>🔄 Merci de tourner votre appareil à la verticale pour une meilleure expérience.</p>
            </div>
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

    // Fermé par défaut sur mobile
    if (mobile.matches) {
        accordion.classList.add("is-closed");
    }

    function updateAccordion() {
        if (mobile.matches) {
            const isClosed = accordion.classList.contains("is-closed");

            header.setAttribute("aria-expanded", !isClosed);
            content.hidden = isClosed;
        } else {
            accordion.classList.remove("is-closed");
            content.hidden = false;
            header.setAttribute("aria-expanded", "true");
        }
    }

    header.addEventListener("click", () => {
        if (!mobile.matches) return;

        const isClosed = accordion.classList.contains("is-closed");

        // Ferme tous les autres accordéons
        document.querySelectorAll(".accordion").forEach((other) => {
            if (other === accordion) return;

            other.classList.add("is-closed");
            other.querySelector(".accordion-content").hidden = true;
            other.querySelector(".accordion-header")
                .setAttribute("aria-expanded", "false");
        });

        // Ouvre ou ferme l'accordéon cliqué
        accordion.classList.toggle("is-closed", !isClosed);
        content.hidden = isClosed;
        header.setAttribute("aria-expanded", isClosed);
    });

    updateAccordion();
    mobile.addEventListener("change", updateAccordion);
});


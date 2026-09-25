document.title = "Portfolio";

// pour les liens textes sur la droite en h1
const texts = document.querySelectorAll('a[id^="text-"]');

// État initial : le texte du milieu est le plus clair
texts[2].querySelector("h1").style.color = "var(--blue10)";
texts[1].querySelector("h1").style.color = "var(--blue30)";
texts[3].querySelector("h1").style.color = "var(--blue30)";

texts.forEach((text, index) => {


text.addEventListener("mouseenter", () => {

    texts.forEach((item, itemIndex) => {

        const title = item.querySelector("h1");
        const distance = Math.abs(index - itemIndex);

        if (distance === 0) {
            title.style.color = "var(--blue10)";
        }
        else if (distance === 1) {
            title.style.color = "var(--blue30)";
        }
        else {
            title.style.color = "var(--blue50)";
        }

    });

});

text.addEventListener("mouseleave", () => {

    texts.forEach((item, itemIndex) => {

        const title = item.querySelector("h1");

        // Retour à l'état initial
        texts[2].querySelector("h1").style.color = "var(--blue10)";
        texts[1].querySelector("h1").style.color = "var(--blue30)";
        texts[3].querySelector("h1").style.color = "var(--blue30)";
        texts[0].querySelector("h1").style.color = "var(--blue50)";
        texts[4].querySelector("h1").style.color = "var(--blue50)";

    });

});

});

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

                <div>
                    <p>Portfolio 2026</p>
                </div>

            </footer>
        `;
    }

}

customElements.define("custom-footer", CustomFooter);
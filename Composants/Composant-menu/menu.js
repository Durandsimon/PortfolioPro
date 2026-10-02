fetch("Composants/Composant-menu/menu.html")
    .then(response => {

        if (!response.ok) {
            throw new Error("Impossible de charger menu.html");
        }

        return response.text();
    })
    .then(html => {

        // Insère le HTML du menu
        const container = document.querySelector("#menu-container");

        if (!container) {
            throw new Error("L'élément #menu-container n'existe pas.");
        }

        container.innerHTML = html;

        // Récupère les liens APRÈS avoir chargé menu.html
        const texts = container.querySelectorAll('a[id^="text-"]');

        if (texts.length === 0) {
            throw new Error("Aucun élément #text- trouvé dans menu.html");
        }

        function resetColors() {

            texts.forEach((item, index) => {

                const title = item.querySelector("h1");

                if (index === 2) {
                    title.style.color = "var(--blue10)";
                }
                else if (index === 1 || index === 3) {
                    title.style.color = "var(--blue30)";
                }
                else {
                    title.style.color = "var(--blue50)";
                }

            });
        }

        // État initial
        resetColors();

        // Hover
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
                resetColors();
            });

        });

    })
    .catch(error => {
        console.error("Erreur du menu :", error);
    });
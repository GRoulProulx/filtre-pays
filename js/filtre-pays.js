document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".pays-button");
    const container = document.querySelector("#resultats");

    console.log("Boutons trouvés :", buttons);

    buttons.forEach((button) => {
        button.addEventListener("click", async (event) => {
            event.preventDefault();
            const pays = button.dataset.pays;
            console.log(`Pays sélectionné : ${pays}`);

            try {
                const response = await fetch(
                    `/31w12/wp-json/filtre-pays/v1/destinations?pays=${pays}`
                );
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                const destinations = await response.json();
                console.log("Destinations reçues :", destinations);

                
                if (destinations.length === 0) {
                    container.innerHTML =
                        "<p>Aucune destination trouvée pour ce pays.</p>";
                    return;
                }

                
                container.innerHTML = destinations
                    .map(
                        (destination) => `
              <article>
                <h5><a href="${destination.link}">${destination.title}</a></h5>
              </article>
            `
                    )
                    .join("");
            } catch (error) {
                console.error("Erreur lors de la requête :", error);
                container.innerHTML =
                    "<p>Une erreur est survenue lors de la récupération des données.</p>";
            }
        });
    });
});

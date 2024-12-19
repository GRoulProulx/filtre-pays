(function () {
    let filtre__bouton = document.querySelectorAll(".filtre__bouton button");
    console.log(filtre__bouton.length);

})()

for (const elm of filtre__bouton) {
    elm.addEventListener("mousedown", function() {
        console.log(e.target.dataset.id);
        
    });
}

function extraire_cours() {
    // Construction de l’URL pour appeler l’API REST en fonction de la catégorie sélectionnée
    fetch(
      `https://gftnth00.mywhc.ca/31w12/wp-json/wp/v2/posts?categories=
        
        ${categorie}
        
&per_page=30`
    )
      .then((response) => response.json()) // Conversion de la réponse en JSON
      .then((data) => {
        console.log("Articles récupérés: ", data); // Affiche les articles récupérés pour déboguer
        afficherArticles(data); // Appel à la fonction pour afficher les articles
      })
      .catch((error) => console.error("Erreur")); // En cas d’erreur
}

function afficherArticles(articles) {
// Sélectionne le conteneur où afficher les articles
const conteneurCours = document.getElementById("contenu__restapi");

// Vide le conteneur avant d’ajouter les nouveaux articles
conteneurCours.innerHTML = "";

// Pour chaque article, crée un élément HTML pour l’afficher
articles.forEach((article) => {
// Crée un nouvel élément div pour chaque article
const item = document.createElement("div");
item.className = "cours-item"; // Ajoute une classe pour la mise en forme

// Ajoute le titre de l’article dans le div
item.textContent = article.title.rendered;

// Ajoute le div créé dans le conteneur des cours
conteneurCours.appendChild(item);
});
};
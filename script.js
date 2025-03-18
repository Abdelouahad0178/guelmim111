document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const apiURL = "https://script.google.com/macros/s/AKfycby2U3GtWPthI__3Gr1jodIH3PElEz9HRVMMhZ86MC5YHo56v16RRst_CI-647hetmI/exec";  // Remplace par l'URL de ton script Google Apps Script

    fetch(apiURL)
        .then(response => response.json())
        .then(images => {
            gallery.innerHTML = images.map(img => `<img src="${img}" alt="Chantier">`).join('');
        })
        .catch(error => console.error("Erreur de chargement des images :", error));
});

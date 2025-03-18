document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("gallery");
    const apiURL = "https://script.google.com/macros/s/AKfycbw0QAsCtf_E3iBbhgv8MdyJH-s_b3GsZTq4VhXHloF4n6E-I2UABdipymUfAI6SoI-l/exec";  // Remplace par l'URL de ton script Google Apps Script

    fetch(apiURL)
        .then(response => response.json())
        .then(images => {
            gallery.innerHTML = images.map(img => `<img src="${img}" alt="Chantier">`).join('');
        })
        .catch(error => console.error("Erreur de chargement des images :", error));
});

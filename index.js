
document.getElementById("forma").addEventListener("submit",  function(event) {
    event.preventDefault(); // Sprečava reload stranice

    const username = document.getElementById("ime").value;
    const password = document.getElementById("sifra").value;

    // Privremena validacija (kasnije ćemo spajati s bazom ili API-jem)
    if (ime === "tetkica" && sifra === "1234") {
//         document.getElementById("message").style.color = "green";
//         document.getElementById("message").textContent = "Uspješna prijava!";
//         // Ovjde možeš preusmjeriti na drugu stranicu: window.location.href = "dashboard.html";
//     } else {
//         document.getElementById("message").style.color = "red";
//         document.getElementById("message").textContent = "Neispravno ime ili šifra.";
//     }
// });)
// deklarer min variabel: button
let mybutton = document.getElementById("myBtn");

// Når brugeren scroller den fra toppen af aktiveres knappen
window.onscroll = function() {scrollFunction()};

// Kalder funktionen
function scrollFunction() {
  console.log(document.documentElement.scrollTop)
}

// Når brugeren klikker på knappen, bliver brugeren til tilbage til toppen af siden
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

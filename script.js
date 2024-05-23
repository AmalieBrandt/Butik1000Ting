
//Variable til burger menu
const burgerknap = document.getElementById("burgerknap");
const burgermenu = document.getElementById("burgermenu");
const lukmenu = document.getElementById("lukmenu");
const logoMobile = document.getElementById("logo");

// Her bruger vi et event onclick til at kalde vi vores visMenu function
burgerknap.onclick = visMenu;

function visMenu(){
    burgermenu.style.display = "block";
    burgerknap.style.display = "none";
    logoMobile.style.display = "none";   
}

//Her bruger vi et event onclick til at kalde vi vores skjulMenu function
lukmenu.onclick = skjulMenu;

//Vores function skjulMenu
function skjulMenu(){
    burgermenu.style.display = "none";
    burgerknap.style.display = "block";
    logoMobile.style.display = "block";
}


// Variable for submenuerne for Inspiration, så de vises og lukkes
const inspoDrop = document.getElementById("menu_inspo");
const subInspo = document.getElementById("sub_inspo");
const subPil = document.getElementById("pil_inspo");

inspoDrop.onclick = visSub;

function visSub() {
    subInspo.style.display = "block";
    subPil.style.display = "block";
}

subPil.onclick = lukSub;

function lukSub() {
    subInspo.style.display = "none";
    subPil.style.display = "none";
}

// Variable for submenuerne for Om butikken, så de vises og lukkes
const butikkenDrop = document.getElementById("menu_butikken");
const subButikken = document.getElementById("sub_butikken");
const pilButik = document.getElementById("pil_butikken");

butikkenDrop.onclick = visButik;

function visButik(){
    subButikken.style.display = "block";
    pilButik.style.display = "block";
}

pilButik.onclick = lukButik;

function lukButik(){
    subButikken.style.display = "none";
    pilButik.style.display = "none";
}

// Variable for submenuerne for Kontakt, så de vises og lukkes
const kontaktDrop = document.getElementById("menu_kontakt");
const subKontakt = document.getElementById("sub_kontakt");
const pilKontakt = document.getElementById("pil_kontakt");

kontaktDrop.onclick = visKontakt;

function visKontakt(){
    subKontakt.style.display = "block";
    pilKontakt.style.display = "block";
}

pilKontakt.onclick = lukKontakt;

function lukKontakt(){
    subKontakt.style.display = "none";
    pilKontakt.style.display = "none";
}


// Karusel til forsiden:

// Variable til karusel:

const billede_karusel1 = document.getElementById("billede_karusel1");
const billede_karusel2 = document.getElementById("billede_karusel2");
const billede_karusel3 = document.getElementById("billede_karusel3");
const billede_karusel4 = document.getElementById("billede_karusel4");
const ventrepil = document.getElementById("venstrepil");
const hoejrepil = document.getElementById("hoejrepil");


// Vores array 
const carousel = [billede_karusel1, billede_karusel2, billede_karusel3, billede_karusel4];


// Her vises først et af billederne og de andre skjules imens:
carousel[0].style.display = "block";
carousel[1].style.display = "none";
carousel[2].style.display = "none";
carousel[3].style.display = "none";

// Knapper som skal være klikbare:
hoejrepil.addEventListener("click", naesteBillede);
venstrepil.addEventListener("click", forrigeBillede);

// Funktioner som fortæller hvornår billede vises og de andre skjules og hvordan 
// den skifter:
function naesteBillede(){
    carousel[0].style.display = "none"; // Skjul den viste
    carousel.push(carousel[0]); // Put den første ind til sidst
    carousel.shift(); // Fjern den første og flyt alle en ned
    carousel[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carousel[0].style.display = "none";
    carousel.unshift(carousel[2]);
    carousel.pop();
    carousel[0].style.display = "block";
}

// Inspirationsunderside
// Filtreringsfunktion 



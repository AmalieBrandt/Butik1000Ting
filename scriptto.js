

// Her vises vores karusel til udpluk fra kunder:

// Vores variable:

const insta1 = document.getElementById("insta1");
const insta2 = document.getElementById("insta2");
const insta3 = document.getElementById("insta3");

const venstrepil2 = document.getElementById("venstrepil2");
const hoejrepil2 = document.getElementById("hoejrepil2");


// Vores array:
const carouselkunder = [insta1, insta2, insta3];

// Den første vises og de andre skjules:
carouselkunder[0].style.display = "block";
carouselkunder[1].style.display = "none";
carouselkunder[2].style.display = "none";

// Knapper:
hoejrepil2.addEventListener("click", naesteBillede);
venstrepil2.addEventListener("click", forrigeBillede);

// Funktioner som fortæller hvornår billede vises og de andre skjules og hvordan 
// den skifter:
function naesteBillede(){
    carouselkunder[0].style.display = "none"; // Skjul den viste
    carouselkunder.push(carouselkunder[0]); // Put den første ind til sidst
    carouselkunder.shift(); // Fjern den første og flyt alle en ned
    carouselkunder[0].style.display = "block"; // Vis den der nu er først
}

function forrigeBillede(){
    carouselkunder[0].style.display = "none";
    carouselkunder.unshift(carouselkunder[2]);
    carouselkunder.pop();
    carouselkunder[0].style.display = "block";
}



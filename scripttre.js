
// Her laver vi en opasity på vores billede galleri på undersiden "unikke ting"

//Variabel for galleri
const unikContainer = document.getElementById("unik_container");

// Event der viser noget ændrer sig når man scroller
window.onscroll = fadeInd;

//Vi kalder en function der via en if-sætning, fortæller 
//at div'en skal få en opacity på 1, når den er 50px inde i vinduet:
function fadeInd(){
    let anden_positionsinfo = unikContainer.getBoundingClientRect();
       if (anden_positionsinfo.top < window.innerHeight - 100) {
         unikContainer.style.opacity = "1";
       }
}

    
// Her får vi vores tegninger til at bevæge sig

document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.tegninger_unik');
    elements.forEach(function(element) {
        element.classList.add('tip-animation');
    });
});



/* Variable for filtrering af inspirationssiden*/
const filterBad = document.getElementById("filter_bad");
const filterSov = document.getElementById("filter_sov");
const filterKokken = document.getElementById("filter_kokken");
const filterStue = document.getElementById("filter_stue");
const filterUde = document.getElementById("filter_uden");

/* Variable for de tilhørende sektioner til inspiration*/
const badevaerelse = document.getElementById("badevaerelse");
const sovevaerelse = document.getElementById("sovevaerelse");
const kokken = document.getElementById("kokken");
const stue = document.getElementById("stue");
const udendors = document.getElementById("udendors");  
const besog = document.getElementById("besog_section");


let valgt = false;

/* Filtrering af rummene, så det valgte rum vises og de andre skjules */ 
filterBad.onclick = visBad;

function visBad() {
    if(valgt == false) {
        sovevaerelse.style.display = "none";
        kokken.style.display = "none";
        stue.style.display = "none";
        udendors.style.display = "none";  
        filterBad.style.backgroundColor = "#edc6c6";
        besog.style.marginTop = "15rem";
        valgt = true;
    }
    else {
        filterBad.style.backgroundColor = "#fff";
        sovevaerelse.style.display = "";
        kokken.style.display = "";
        stue.style.display = "";
        besog.style.marginTop = "";
        udendors.style.display = ""; 
        valgt = false;
    }
}

// Vi laver filtrering af soveværelset
filterSov.onclick = visSov;

function visSov() {
    if(valgt == false) {
        badevaerelse.style.display = "none";
        kokken.style.display = "none";
        stue.style.display = "none";
        udendors.style.display = "none";  
        filterSov.style.backgroundColor = "#edc6c6";
        sovevaerelse.style.marginTop = "0";
        valgt = true;
    }
    else {
        filterSov.style.backgroundColor = "#fff";
        badevaerelse.style.display = "";
        kokken.style.display = "";
        stue.style.display = "";
        sovevaerelse.style.marginTop = "";
        udendors.style.display = ""; 
        valgt = false;
    }
}

//Vi laver filtrering af køkken
filterKokken.onclick = visKokken;

function visKokken() {
    if(valgt == false) {
        badevaerelse.style.display = "none";
        sovevaerelse.style.display = "none";
        stue.style.display = "none";
        udendors.style.display = "none";  
        kokken.style.marginTop = "0";
        filterKokken.style.backgroundColor = "#edc6c6";
        besog.style.marginTop = "15rem";
        valgt = true;
    }
    else {
        filterKokken.style.backgroundColor = "#fff";
        badevaerelse.style.display = "";
        sovevaerelse.style.display = "";
        stue.style.display = "";
        kokken.style.marginTop = "";
        besog.style.marginTop = "";
        udendors.style.display = "";  
        valgt = false;
    }
}

// Vi laver filtrering af stue 
filterStue.onclick = visStue;

function visStue() {
    if(valgt == false) {
        badevaerelse.style.display = "none";
        kokken.style.display = "none";
        sovevaerelse.style.display = "none";
        udendors.style.display = "none";  
        filterStue.style.backgroundColor = "#edc6c6";
        stue.style.marginTop = "0";
        valgt = true;
    }
    else {
        filterStue.style.backgroundColor = "#fff";
        badevaerelse.style.display = "";
        kokken.style.display = "";
        sovevaerelse.style.display = "";
        udendors.style.display = "";  
        stue.style.marginTop = "";
        valgt = false;
    }
}

//Vi laver filtrering for udendørs 
filterUde.onclick = visUde;

function visUde() {
    if(valgt == false) {
        badevaerelse.style.display = "none";
        kokken.style.display = "none";
        sovevaerelse.style.display = "none";
        stue.style.display = "none";
        udendors.style.display = "flex";  
        filterUde.style.backgroundColor = "#edc6c6";
        valgt = true;
    }
    else {
        filterUde.style.backgroundColor = "#fff";
        badevaerelse.style.display = "";
        kokken.style.display = "";
        sovevaerelse.style.display = "";
        stue.style.display = "";
        udendors.style.display = ""; 
        valgt = false;
    }
}
console.log("index.js uspješno učitan!")
var nBrojac = 0;

//alert("Hello js World!")

let oListItem = document.querySelectorAll(".nav-item");

/*
oListItem.forEach(
    function(element){
        element.addEventListener("mouseenter", function(){
            element.style.transform = "scale(1.2)";
            element.style.transition = "transform 0.3 ease";
            //element.classList.add("nav_item_test");
        });
        element.addEventListener("mouseleave", function(){
            element.style.transform = "scale(1)";
            //element.classList.remove("nav_item_test");
        });
    }
)
*/
/*
let oImgItem = document.querySelectorAll(".img-responsive");
oImgItem.forEach(
    function(element){
        element.addEventListener("mouseenter", function(){
            element.style.transform = "scale(1.2)";
            element.style.transition = "transform 0.3 ease";
            //element.style.cursor = "pointer";
            //element.classList.add("nav_item_test");
        });
        element.addEventListener("mouseleave", function(){
            element.style.transform = "scale(1)";
            //element.classList.remove("nav_item_test");
        });
    }
)*/
function checkScreenSize(){
    if(window.innerWidth > 991)
    {
        dodajEventListenere();
    }
    else{
        ukloniEventListenere();
    }
}

checkScreenSize();

window.addEventListener('resize',checkScreenSize);

function dodajEventListenere(){
    oListItem.forEach(
        function(element){
            element.addEventListener("mouseenter",handleMouseEnter);
            element.addEventListener("mouseleave",handleMouseLeave);
        }
    )
}

function ukloniEventListenere(){
    oListItem.forEach(
        function(element){
            element.removeEventListener("mouseenter",handleMouseEnter);
            element.removeEventListener("mouseleave",handleMouseLeave);
        }
    )
}

function handleMouseEnter(event){
    let element = event.target;
    //console.log("event.target: "+event.target);
    element.style.transform = "scale(1.2)";
    element.style.transition = "transform 0.3 ease";
    element.style.fontWeight = "800";
 
     
    //console.log(element.style);
}
function handleMouseLeave(event){
    let element = event.target;
    element.style.transform = "scale(1)";
    element.style.fontWeight = "400";
    element.style.border = "none";
   
}

function validateForm(event)
{
    let bIsValid = true;

    let sIme = document.getElementById("ime").value;
    //let sIme = document.getElementById("ime").value.trim();
    console.log("Uneseno ime: " + sIme);

    let sEmail = document.getElementById("email").value.trim();
    let sPoruka = document.getElementById("poruka").value.trim();

    let bEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // regex za provjeru e-maila

    /*
    if (sIme === "") {
        alert("Molimo unesite ime.");
        bIsValid = false;
    }
    if (sEmail === "") {
        alert("Molimo unesite e-mail.");
        bIsValid = false;
    }
    else if(!bEmailPattern.test(sEmail)) {

        alert("Molimo unesite ispravnu email adresu.");
        bIsValid = false;
    }
    if (sPoruka === "") {
        alert("Molimo unesite poruku.");
        bIsValid = false;
    } */
      
   
    if(sIme === "" || sPoruka === "" || sEmail === "")
    {
        alert("Molimo unesite sva polja!");
        bIsValid = false;
    }
    else if(!bEmailPattern.test(sEmail)){
        alert("Molimo unesite ispravnu email adresu.");
        bIsValid = false;
    }
    if(bIsValid === false)
    {
        event.preventDefault();//Sprječavamo submit
    }
    else
    {
        window.location.href = 'send_email.html';
    }
    //console.log(event)
}
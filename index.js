console.log("index.js uspješno učitan!");

//console.log(document.querySelectorAll("li"));

let oListItem = document.querySelectorAll(".nav-item");

let oImg = document.querySelectorAll(".img-responsive");

oImg.forEach(
    function(element){
        element.addEventListener("mouseenter", function(){
            element.style.transform = "scale(1.2)";
            element.style.transition = "transform 0.3 ease";
            element.style.cursor = "pointer";
            element.classList.add("image-tilt");
        });
        element.addEventListener("mouseleave", function(){
            element.style.transform = "scale(1)";
            element.style.transition = "transform 0.3 ease";
            //element.classList.remove("nav_item_test");
        });
    }
)

function checkScreenSize(){
    if(window.innerWidth > 991)
    {
        addEventListeners();
    }
    else{
        removeEventListeners();
    }
}

checkScreenSize();

window.addEventListener("resize",checkScreenSize);

function addEventListeners(){
    oListItem.forEach(
        function(element){
            element.addEventListener("mouseenter",handleMouseEnter);
            element.addEventListener("mouseleave",handleMouseLeave);
        }
    )
}

function removeEventListeners(){
    oListItem.forEach(
        function(element){
            element.removeEventListener("mouseenter",handleMouseEnter);
            element.removeEventListener("mouseleave",handleMouseLeave);
        }
    )
}

function handleMouseEnter(event){
    var element = event.target;
    element.style.transform = "scale(1.2)";
    element.style.transition = "transform 0.3 ease";
}

function handleMouseLeave(event){
    var element = event.target;
    element.style.transform = "scale(1)";
}

function validateForm(event){
    let bIsValid = true;

    let sIme = document.getElementById("ime").value.trim();
    let sEmail = document.getElementById("email").value.trim();
    let sPoruka = document.getElementById("poruka").value.trim();

    let bEmailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(sIme === "" || sEmail === "" || sPoruka === "")
    {
        alert("Molimo unesite sva polja!");
        bIsValid = false;
    }
    else if(!bEmailPattern.test(sEmail)){
        alert("Email nije dobar!");
        bIsValid = false;
    }

    if(bIsValid === false)
    {
        event.preventDefault();
    }
    else{
        window.location.href="send_email.html";
    }
}

function dohvatiVic(){
    let oVicElement = "";
    oVicElement = document.getElementById("vic_element");
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let sSingleJoke = "<br>" + data.joke;
        let sTwoPart = "<br>" + data.setup + "<br><br>"+data.delivery;
        if(data.type === "twopart")
        {
            oVicElement.innerHTML = sTwoPart;
        }
        else  
        {
            oVicElement.innerHTML =sSingleJoke;
        }
    });
}
//dohvatiVic();

function dohvatiMisaoDana(){
    let oMisaoDana = "";
    oMisaoDana = document.getElementById("misao_dana");
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
             
            let advice = data.slip.advice;
            //console.log(`Advice: ${advice}`);
            oMisaoDana.innerHTML= "<br>"+advice;
    }); 
}
dohvatiMisaoDana();

function prevediMisaoDana (){
    const res = fetch("https://libretranslate.com/translate", {
        method: "POST",
        body: JSON.stringify({
            q: "",
            source: "auto",
            target: "cro",
            format: "text",
            alternatives: 3,
            api_key: ""
        }),
        headers: { "Content-Type": "application/json" }
    });
    
    console.log(res.json());
}
function dohvatiMacu(){
    let sImgElement = "";
    let sUrl = "";
    let sAltText = "";
    let oMacaDana = "";
    oMacaDana = document.getElementById("maca_element");
     

    for (brojac = 0; brojac < 4; brojac++)
    {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
        .then(data => {
            sUrl = data[0].url;
            //CSS Klase: image-tilt image-grayscale bounce pulse fade-in-out wobble flip shrink-grow heartbeat glow
            let sKlase = "";
            sImgElement += "<img class='img-responsive img-circle margin "+sKlase+"' src='"+sUrl+"' style='border-radius:15%; width:300px;height:auto; cursor:pointer;'   />";
            oMacaDana.innerHTML = sImgElement;
      });
    }
    
}
dohvatiMacu();

async function dohvatiVrijeme(){
    const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5&units=imperial&lang=en';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '0c598a9abamsh11fe10efa38aa22p1ea192jsn12a94d1c68d4',
            'x-rapidapi-host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
//dohvatiVrijeme();
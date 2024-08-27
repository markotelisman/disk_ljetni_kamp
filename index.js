function validateForm(event)
{
    let bIsValid = true;

    let sIme = document.getElementById("ime").value;
    //let sIme = document.getElementById("ime").value.trim();
    console.log("Uneseno ime: " + sIme);

    let sEmail = document.getElementById("email").value.trim();
    let sPoruka = document.getElementById("poruka").value.trim();

    let bEmailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // regex za provjeru e-maila

    if(sIme === "" || sPoruka === "" || sEmail === "")
    {
        alert("Molimo unesite sva polja!");
        bIsValid = false;
    }
    else if(!bEmailPattern.test(sEmail)){
        alert("Molimo unesite ispravnu email adresu.");
        bIsValid = false;
    }
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
    } 
    */   
    if(bIsValid === false)
    {
        event.preventDefault();//Sprječavamo submit
    }
    else
    {
        window.location.href = 'send_email.html';
    }
    console.log(event)
}
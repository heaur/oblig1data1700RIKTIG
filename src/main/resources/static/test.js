let billetter = [];
let ut = "<table><tr>" +
    "</tr>Film</tr><tr>Antall</tr><tr>Fornavn</tr><tr>Etternavn</tr><tr>Telefonnummer</tr><tr>Email</tr>"+"</tr>";

function kjøpBilletter() {
    const billett = {
        film : document.getElementById("filmer").value,
        antall : document.getElementById("antall").value,
        fornavn : document.getElementById("forNavn").value,
        etternavn : document.getElementById("etterNavn").value,
        telefonnummer : document.getElementById("tlfnr").value,
        email : document.getElementById("email").value
    };

    //Sjekekr om feltene er fylt ut
    if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnummer || !billett.email){
        document.getElementById("antallError").innerHTML = "Feltet må fylles ut!";
        document.getElementById("fornavnError").innerHTML = "Feltet må fylles ut!";
        document.getElementById("etternavnError").innerHTML = "Feltet må fylles ut!";
        document.getElementById("tlfnrError").innerHTML = "Feltet må fylles ut!";
        document.getElementById("emailError").innerHTML = "Feltet må fylles ut!";
    }

    //Hvis alle fletene er fylt ut kjøp billett
    else {
        billetter.push(billett);

        //sjekker om en film har blitt valgt
        if (!billett.antall || !billett.fornavn || !billett.etternavn || !billett.telefonnummer || !billett.email || !billett.film) {
            // ... (eksisterende feilmeldinger)
            document.getElementById("filmError").innerHTML = "Du må velge en film!";
        } else {
            // ... (eksisterende logikk)
            document.getElementById("filmError").innerHTML = "";
        }

        //Sjekker om navn og etternavn bruker gyldige tegn
        const navnRegex = /^[a-zA-Z\s]+$/;

        if (!navnRegex.test(billett.fornavn)) {
            document.getElementById("fornavnError").innerHTML = "Ugyldige tegn i fornavn!";
        }

        if (!navnRegex.test(billett.etternavn)) {
            document.getElementById("etternavnError").innerHTML = "Ugyldige tegn i etternavn!";
        }

        //Sjekker om email og telefonnummer er gyldig
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonnummerRegex = /^\d{8,}$/;

        if (!emailRegex.test(billett.email)) {
            document.getElementById("emailError").innerHTML = "Ugyldig e-postadresse!";
        }

        if (!telefonnummerRegexRegex.test(billett.telefonnummer)) {
            document.getElementById("tlfnrError").innerHTML = "Ugyldig telefonnummer!";
        }


        for(let liste of billetter){
            ut += "<tr>"
            ut += "<td>" + liste.film + " - " + "</td>" +
                "<td>" + liste.antall + " biletter - " +
                "</td><td>" + liste.fornavn + " - " + "</td>" +
                "<td>" + liste.etternavn + " - " +
                "</td><td>" + liste.telefonnummer + " - " + "</td><td>" +
                liste.email + "</td>";

            ut += "</tr>"
        }
        document.getElementById("ut").innerHTML = "<table>" + ut + "</table>";

        billetter = [];

        document.getElementById("antallError").innerHTML = "";
        document.getElementById("fornavnError").innerHTML = "";
        document.getElementById("etternavnError").innerHTML = "";
        document.getElementById("tlfnrError").innerHTML = "";
        document.getElementById("emailError").innerHTML = "";
    }

    document.getElementById("antall").value = "";
    document.getElementById("forNavn").value = "";
    document.getElementById("etterNavn").value = "";
    document.getElementById("tlfnr").value = "";
    document.getElementById("email").value = "";
}

function slettBilletter(){
    document.getElementById("ut").innerHTML = "";
    billetter = [];
}


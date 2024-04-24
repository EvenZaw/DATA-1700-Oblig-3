
$(function (){
    hentAlle();
});


function hentAlle(){
    $.get("/visAlle", function (data){
        formaterData(data);
    });
}
function formaterData(kunder) {
    let ut = "<table class='table table-striped'>" +
        "<tr>" +
        "<th>Fornavn</th>" +
        "<th>Etternavn</th>" +
        "<th>Telefonnr</th>" +
        "<th>Epost</th>" +
        "<th>Film</th>" +
        "<th>Antall</th>" +
        "</tr>";
    for (const kunde of kunder) {
        ut += "<tr>" +
            "<td>" + kunde.fornavn + "</td>" +
            "<td>" + kunde.etternavn + "</td>" +
            "<td>" + kunde.telefonnr + "</td>" +
            "<td>" + kunde.epost + "</td>" +
            "<td>" + kunde.film + "</td>" +
            "<td>" + kunde.antall + "</td>" +
            "<td> <a class='btn btn-primary' href='endreKunde.html?id="+kunde.id+"'>Endre</a></td>" +
            "<td> <button class = 'btn btn-danger' onclick='slettEnKunde("+kunde.id+")'>Slett</button> </td>" +
            "</tr>";
    }
    ut += "</table>";
    $("#kundene").html(ut);
}

function slettEnKunde(id) {
    console.log("Slett kunde med ID:", id);
    const url = "/slettEnKunde?id=" + id;
    $.get(url, function () {
        console.log("Kunde slettet");
        window.location.href = "/";
    });
};
function hentAlleFilmer(){
    $.get("hentFilmer", function (filmer){
        formaterFilmer(filmer);
    });
}
function formaterFilmer(filmer){
    let ut = "<select id='valgtFilm'>";
    for (const film of filmer){
        ut+="<option value='"+film.film+"'>"+"</option>"
    }
    ut+="</select>";
    $("#film").html(ut);
}
function  slettAlle(){
    $.get("/slettKunde", function (){
        hentAlle();
    })
}

// Validation
function registrer() {

    $("#antallCheck").html("");
    $("#fornavnCheck").html("");
    $("#etternavnCheck").html("");
    $("#telefonnrCheck").html("");
    $("#epostCheck").html("");
    $("#filmCheck").html("");



    const film = document.getElementById('film').value;
    const antall = Number(document.getElementById('antall').value);
    const fornavn = document.getElementById('fornavn').value;
    const etternavn = document.getElementById('etternavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('epost').value;

    let isValid = true;

    console.log(film)
    if (film === "Velg film") {
        document.getElementById("filmCheck").textContent = "Velg en film";
        isValid = false;
    }
    if (isNaN(antall) || antall < 1) {
        document.getElementById("antallCheck").textContent = "Antall må være et tall større enn 0";
        isValid = false;
    }
    if (fornavn === "") {
        document.getElementById("fornavnCheck").textContent = "Vennligst fyll ut Fornavn";
        isValid = false;
    }

    if (etternavn === "") {
        document.getElementById("etternavnCheck").textContent = "Vennligst fyll ut Etternavn";
        isValid = false;
    }

    if (!/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("telefonnrCheck").textContent = "Skriv inn Telefonnr";
        isValid = false;
    }

    if (!/\S+@\S+.\S+/.test(epost)) {
        document.getElementById("epostCheck").textContent = "Skriv inn en gyldig E-postadresse";
        isValid = false;
    }



    if (isValid) {
        const buy = {
            film: film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };

        $.post("lagreKunde", buy, function (){
            hentAlle();

        })
        document.getElementById("film").value = "";
        document.getElementById("antall").value = "";
        document.getElementById("fornavn").value = "";
        document.getElementById("etternavn").value = "";
        document.getElementById("telefonnr").value = "";
        document.getElementById("epost").value = "";
    }
}

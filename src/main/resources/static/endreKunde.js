$(document).ready(function (){
    const id = window.location.search.substring(1);
    const url ="/hentEnKunde?"+id;

    $.get(url, function (kunde){
        $("#id").val(kunde.id);
        $("#fornavn").val(kunde.fornavn);
        $("#etternavn").val(kunde.etternavn);
        $("#epost").val(kunde.epost);
        $("#telefonnr").val(kunde.telefonnr);
        $("#film").val(kunde.film);
        $("#antall").val(kunde.antall);
    });

});

function endreKunden(){
    const kunde = {
        film : $("#film").val(),
        antall : $("#antall").val(),
        fornavn : $("#fornavn").val(),
        etternavn : $("#etternavn").val(),
        epost : $("#epost").val(),
        telefonnr: $("#telefonnr").val(),
        id : $("#id").val()

    };


    $.post("/endreEnKunde", kunde, function (){
        window.location.href = '/';
    });
}


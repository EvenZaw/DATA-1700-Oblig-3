package com.example.oblig3;

public class Kunde {
    private String film;
    private String antall;
    private String fornavn;
    private String etternavn;
    private String telefonnr;
    private String epost;
    private int id;

    public Kunde(String fornavn, String etternavn, String telefonnr, String epost, String film, String antall, int id) {
        this.fornavn = fornavn;
        this.etternavn = etternavn;
        this.telefonnr = telefonnr;
        this.epost = epost;
        this.film = film;
        this.antall = antall;
        this.id=id;
    }

    public String getFornavn() {
        return fornavn;
    }

    public void setFornavn(String fornavn) {
        this.fornavn = fornavn;
    }

    public String getEtternavn() {
        return etternavn;
    }

    public void setEtternavn(String etternavn) {
        this.etternavn = etternavn;
    }

    public String getTelefonnr() {
        return telefonnr;
    }

    public void setTelefonnr(String telefonnr) {
        this.telefonnr = telefonnr;
    }

    public String getEpost() {
        return epost;
    }

    public void setEpost(String epost) {
        this.epost = epost;
    }

    public String getFilm() {
        return film;
    }

    public void setFilm(String film) {
        this.film = film;
    }

    public String getAntall() {
        return antall;
    }

    public void setAntall(String antall) {
        this.antall = antall;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "Kunde{" +
                "film='" + film + '\'' +
                ", antall='" + antall + '\'' +
                ", fornavn='" + fornavn + '\'' +
                ", etternavn='" + etternavn + '\'' +
                ", telefonnr='" + telefonnr + '\'' +
                ", epost='" + epost + '\'' +
                ", id='" + id + '\'' +
                '}';
    }
    public Kunde(){

    }
}



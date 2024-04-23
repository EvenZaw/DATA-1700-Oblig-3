package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class KundeRepository {
    @Autowired
    private JdbcTemplate db;

    public void lagreKunde(Kunde innKunde){
        String sql = "INSERT INTO Kunde (film, antall, fornavn, etternavn, telefonnr, epost) VALUES(?,?,?,?,?,?)";
        db.update(sql, innKunde.getFilm(), innKunde.getAntall(), innKunde.getFornavn(), innKunde.getEtternavn(), innKunde.getTelefonnr(), innKunde.getEpost());
    }
    public List<Kunde> visAlle(){
        String sql = "SELECT * FROM Kunde ORDER BY etternavn";
        List<Kunde> visBillett = db.query(sql, new BeanPropertyRowMapper<>(Kunde.class));
        return visBillett;
    }

    public void slettKunde(){
        String sql = "DELETE FROM Kunde";
        db.update(sql);
    }
}

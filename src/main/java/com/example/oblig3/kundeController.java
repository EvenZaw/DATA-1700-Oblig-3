package com.example.oblig3;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class kundeController {

    @Autowired
    private KundeRepository rep;

    @PostMapping("lagreKunde")
    public void lagreKunde(Kunde innkunde){
        rep.lagreKunde(innkunde);
    }

    @GetMapping("visAlle")
    public List<Kunde> visAlle(){
        return rep.visAlle();
    }

    @GetMapping("slettKunde")
    public void slettKunder(){
        rep.slettKunde();
    }

    @GetMapping("hentFilmer")
    public List<film> hentFilmer(){
        List<film> listFilmer = new ArrayList<>();
        listFilmer.add(new film("Avengers"));
        listFilmer.add(new film("The Nun"));
        listFilmer.add(new film("Shrek"));
        listFilmer.add(new film("Forest Gump"));
        return listFilmer;
    }
    


}

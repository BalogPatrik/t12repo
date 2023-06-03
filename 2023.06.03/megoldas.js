function DiakInfo(nev, csoport, tipus) {
    if (tipus == true) {
        return "" + nev + " [Team" + csoport + "]" + " - Junior Frontend";
    }
    else {
        return "" + nev + " [Team" + csoport + "]" + " - Webprogramozó";
    }
}
console.log(DiakInfo("Minta Márton", 8, true));
function SzovegesErtekeles(jegy) {
    var szovegesErtekeles;
    if (jegy == 5) {
        szovegesErtekeles = ["Példás", "Példás"];
        return szovegesErtekeles;
    }
    else if (jegy == 4) {
        szovegesErtekeles = ["Jó", "Jó"];
        return szovegesErtekeles;
    }
    else if (jegy == 3) {
        szovegesErtekeles = ["Változó", "Változó"];
        return szovegesErtekeles;
    }
    else if (jegy == 2) {
        szovegesErtekeles = ["Hanyag", "Rossz"];
        return szovegesErtekeles;
    }
}
console.log(SzovegesErtekeles(2));
console.log(SzovegesErtekeles(4));
function HarommalOszthatokSzama(vizsgaltTomb) {
    var harommalOszthatokSzama = 0;
    for (var i = 0; i < vizsgaltTomb.length; i++) {
        if (vizsgaltTomb[i] % 3 == 0) {
            harommalOszthatokSzama++;
        }
    }
    return harommalOszthatokSzama;
}
var tomb = [10, 23, 12, 24, 31, 33, 42, 20];
console.log(HarommalOszthatokSzama(tomb));
function Nyeroszamok(mennyiseg, alsoHatar, felsoHatar) {
    var lottoSzamok = [];
    for (var i = 0; i < mennyiseg; i++) {
        var generaltSzam = Math.round(Math.random() * (felsoHatar - alsoHatar) + alsoHatar);
        var szerepelE = false;
        for (var j = 0; j < lottoSzamok.length; j++) {
            if (generaltSzam == lottoSzamok[j]) {
                szerepelE = true;
            }
        }
        if (szerepelE == false) {
            lottoSzamok.push(generaltSzam);
        }
        else {
            i--;
        }
    }
    return lottoSzamok;
}
console.log(Nyeroszamok(5, 1, 90));

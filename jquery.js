function myFunction() {
    var ascundeDescrierea = document.getElementById("descriere");
    var containerPos = document.getElementById("container");

    if (ascundeDescrierea.style.display === "block") {
        ascundeDescrierea.style.display = "none";
        containerPos.style.marginTop = '10%';

    } else {
        ascundeDescrierea.style.display = "block";
        containerPos.style.marginTop = '4%';
        containerPos.style.transition = 'all 0.5s ease-in-out'

    }
}

function verificareCNP() {
    var x = document.forms["cnp-validator"]["cnp"].value;
    var firstChar = parseInt(x.charAt(0));
    var secondChar = parseInt(x.charAt(1));
    var thirdChar = parseInt(x.charAt(2));
    var fourthChar = parseInt(x.charAt(3));
    var fifthChar = parseInt(x.charAt(4));
    var sixthChar = parseInt(x.charAt(5));
    var seventhChar = parseInt(x.charAt(6));
    var eightChar = parseInt(x.charAt(7));
    var ninethChar = parseInt(x.charAt(8));
    var tenth = parseInt(x.charAt(9));
    var eleventh = parseInt(x.charAt(10));
    var GenValoare = x.charAt(0);
    var ZiuaNasteriiValoare = x.charAt(5) + x.charAt(6);
    var LunaNasteriiValoare = x.charAt(3) + x.charAt(4);
    var ziuaSiDataNasterii = ZiuaNasteriiValoare + "/" + LunaNasteriiValoare + "/";
    var AnulNasteriiValoare = x.charAt(1) + x.charAt(2);
    var NNN = x.charAt(9) + x.charAt(10) + x.charAt(11);
    var numarControl = '279146358279';
    var suma = 0;
    for (i = 0; i < numarControl.length; i++) {
        suma = suma + x.charAt(i) * numarControl.charAt(i);
    }
    var rest = suma % 11;
    var JudetulValoare = parseInt(x.charAt(7) + x.charAt(8));
    var codJudet = new Array();
    codJudet[01] = "Alba";
    codJudet[02] = "Arad";
    codJudet[03] = "Argeș";
    codJudet[04] = "Bacau";
    codJudet[05] = "Bihor";
    codJudet[06] = "Bistrita-Năsăud";
    codJudet[07] = "Botoșani";
    codJudet[08] = "Brașov";
    codJudet[09] = "Brăila";
    codJudet[10] = "Buzau";
    codJudet[11] = "Caraș-Severin";
    codJudet[12] = "Cluj";
    codJudet[13] = "Constanța";
    codJudet[14] = "Covasna";
    codJudet[15] = "Dâmbovița";
    codJudet[16] = "Dolj";
    codJudet[17] = "Galati";
    codJudet[18] = "Gorj";
    codJudet[19] = "Harghita";
    codJudet[20] = "Hunedoara";
    codJudet[21] = "Ialomita";
    codJudet[22] = "Iasi";
    codJudet[23] = "Ilfov";
    codJudet[24] = "Maramures";
    codJudet[25] = "Mehedinti";
    codJudet[26] = "Mures";
    codJudet[27] = "Neamt";
    codJudet[28] = "Olt";
    codJudet[29] = "Prahova";
    codJudet[30] = "Satu Mare";
    codJudet[31] = "Salaj";
    codJudet[32] = "Sibiu";
    codJudet[33] = "Suceava";
    codJudet[34] = "Teleorman";
    codJudet[35] = "Timis";
    codJudet[36] = "Tulcea";
    codJudet[37] = "Vaslui";
    codJudet[38] = "Valcea";
    codJudet[39] = "Vrancea";
    codJudet[40] = "Bucuresti";
    codJudet[41] = "Bucuresti Sector 1";
    codJudet[42] = "Bucuresti Sector 2";
    codJudet[43] = "Bucuresti Sector 3";
    codJudet[44] = "Bucuresti Sector 4";
    codJudet[45] = "Bucuresti Sector 5";
    codJudet[46] = "Bucuresti Sector 6";
    codJudet[51] = "Calarasi";
    codJudet[52] = "Giurgiu";

    if (isNaN(x)) { //verifica daca CNP-ul contine litere sau alte caractere
        rezultat.innerHTML = "CNP-ul nu este valid.Va rugam sa introduceti doar caractere numerice.";
    } else if (x.length < 13 || x.length > 13) { //verifica daca CNP-ul este mai mic sau mai mare de 13 caractere
        rezultat.innerHTML = "CNP-UL nu este valid. Acesta trebuie sa contina 13 caractere numerice.";
        rezultatComplet.style.display = 'none';


    } else if (x < 0) { //verifica daca exista numere cu - in CNP
        rezultat.innerHTML = "CNP-ul nu poate incepe cu minus.";
        rezultatComplet.style.display = 'none';


    } else if (firstChar < 1 || firstChar > 9) { //verifica daca prima cifra este mai mica sau mai mare de 9
        rezultat.innerHTML = "CNP-UL nu este valid. Prima cifra introdusa trebuie sa fie intre 1 si 8.";
        rezultatComplet.style.display = 'none';


    } else if (ZiuaNasteriiValoare > 31 || ZiuaNasteriiValoare < 1) {
        rezultat.innerHTML = "CNP-UL nu este valid.O luna nu poate avea mai putin de 0 zile sau mai mult de 31 de zile.";
        rezultatComplet.style.display = 'none';


    } else if (LunaNasteriiValoare > 12 || LunaNasteriiValoare < 1) {
        rezultat.innerHTML = "CNP-UL nu este valid.Un an nu poate avea mai putin de 0 luni sau mult de 12 luni.";
        rezultatComplet.style.display = 'none';


    } else if (LunaNasteriiValoare == 02 && ZiuaNasteriiValoare > 29) {
        rezultat.innerHTML = "CNP-UL nu este VALID.Verificati luna introdusa.";
        rezultatComplet.style.display = 'none';


    } else if (NNN < 001) {
        rezultat.innerHTML = "CNP-ul nu este VALID. Verificati NNN";
        rezultatComplet.style.display = 'none';



    } else if (JudetulValoare < 01 || JudetulValoare > 52) {
        rezultat.innerHTML = "CNP-ul nu este valid. Verificati codul introdus pentru oras.";
        rezultatComplet.style.display = 'none';


    } else if (JudetulValoare > 46 & JudetulValoare < 51) {
        rezultat.innerHTML = "CNP-ul nu este valid. Verificati codul introdus pentru oras.";
        rezultatComplet.style.display = 'none';

    } else if ((GenValoare == 5 & AnulNasteriiValoare > 17) || (GenValoare == 6 & AnulNasteriiValoare > 17)) {
        rezultat.innerHTML = "CNP-ul nu este VALID. Verificati data nasterii.";
        rezultatComplet.style.display = 'none';


    } else if ((rest < 10 && rest != x.charAt(12)) || (rest == 10 && x.charAt(12) != 1)) {
        rezultat.innerHTML = " CNP-ul NU ESTE VALID. Cifra de control nu corespunde.";
        rezultatComplet.style.display = 'none';


    } else if (GenValoare == 9) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Cetatenie:" + "<strong>" + "Straina" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 19 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';


    } else if (GenValoare == 1 || GenValoare == 7) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + " Masculin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 19 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';


    } else if (GenValoare == 2 || GenValoare == 8) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + "Feminin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 19 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    } else if (GenValoare == 3) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + "Masculin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 18 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    } else if (GenValoare == 4) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + "Feminin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 18 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    } else if (GenValoare == 5) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + "Masculin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 20 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    } else if (GenValoare == 6) {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + "Feminin" + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + "<strong>" + ziuaSiDataNasterii + 20 + AnulNasteriiValoare + "</strong>";
        judetul.innerHTML = 'Judetul: ' + "<strong>" + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    } else {
        rezultat.innerHTML = "CNP VALID. Acestea sunt rezultatele:"
        gen.innerHTML = "Sex:" + "<strong>" + GenValoare + "</strong>";
        dataNasterii.innerHTML = "Data nasterii: " + ziuaSiDataNasterii + 19 + AnulNasteriiValoare;
        judetul.innerHTML = 'Judetul: ' + codJudet[JudetulValoare];
        rezultatComplet.style.display = 'block';

    }
}
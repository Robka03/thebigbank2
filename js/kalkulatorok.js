function slider_1Value() {
    document.getElementById("futamido_1").oninput = function() {
        document.getElementById("sliderValue_1").innerHTML = this.value + " év";
    }
}


function hitelKalkulalas() {
    let mennyiseg = parseInt(document.getElementById("hitelSzam").value);
    let futamido = parseInt(document.getElementById("futamido_1").value);

    futamido.oninput = function() {
        futamido = this.value;
    }

    szamitas_1(mennyiseg, futamido);

}

function szamitas_1(mennyiseg, futamido) {
    let teljesVisszafizetes = mennyiseg + (mennyiseg * kamatSzazalekok(mennyiseg, true));
    let onlyKamat = mennyiseg * kamatSzazalekok(mennyiseg, true);
    let haviTorleszto = teljesVisszafizetes / futamido;

    document.getElementById("kalkulatHitel").innerHTML = "A programunk számítása alapján ön " +
        mennyiseg + " Ft hitelt venne fel aminek a teljes visszafizetése " +
        teljesVisszafizetes + " Ft lenne mivel felszámolunk " + onlyKamat +
        " Ft kamatot is és a kiválasztott futamidővel a havi törlesztőrészlet " + haviTorleszto.toFixed(0) +
        " Ft-ra jön ki.";

}


function slider_2Value() {
    document.getElementById("futamido_2").oninput = function() {
        document.getElementById("sliderValue_2").innerHTML = this.value + " hónap";
    }
}

function lekotesKalkulalas() {
    let mennyiseg = parseInt(document.getElementById("kamatSzam").value);
    var futamido = parseInt(document.getElementById("futamido_2").value);

    futamido.oninput = function() {
        futamido = this.value;
    }

    szamitas_2(mennyiseg, futamido);

}

function szamitas_2(mennyiseg, futamido) {
    let teljesJovairas = parseInt(mennyiseg + (mennyiseg * kamatSzazalekok(mennyiseg, false)));
    let teljesProfit = parseInt(mennyiseg * kamatSzazalekok(mennyiseg, false));
    let haviProfit = teljesJovairas / futamido;

    document.getElementById("kamatkalkulator").innerHTML = "A programunk számítása alapján ön " +
        mennyiseg + " Ft-ot szeretne lekötni, aminek a teljes jóváírása " +
        teljesJovairas + " Ft lenne mivel kamatozna " + teljesProfit +
        " Ft-ot és a kiválasztott lekötési idővel a havi hozam " + haviProfit.toFixed(0) +
        " Ft-ra jön ki.";
}


function kamatSzazalekok(mennyiseg, hitele) {
    if (mennyiseg > 499999 && mennyiseg < 1099999) {
        return 0.2;
    } else if (mennyiseg > 1100000 && mennyiseg < 1999999) {
        return 0.18;
    } else if (mennyiseg > 2000000 && mennyiseg < 3099999) {
        return 0.16;
    } else if (mennyiseg > 3100000 && mennyiseg < 5099999) {
        return 0.14;
    } else if (mennyiseg > 5100000 && mennyiseg < 6099999) {
        return 0.13;
    } else if (mennyiseg > 6100000 && mennyiseg < 7099999) {
        return 0.11;
    } else if (mennyiseg > 7100000 && mennyiseg < 8000000) {
        return 0.08;
    } else if (mennyiseg > 8000001 && mennyiseg < 30000000 && hitele == true) {
        return 0.06;
    } else if (hitele == false) {
        return 0.35;
    } else {
        window.alert("A megadott összeg a megfelelő intervallumon kívül esik!");
    }
}
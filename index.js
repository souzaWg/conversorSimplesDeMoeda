const dollar = document.getElementById("Dollar"),
    yen = document.getElementById("Yen"),
    euro = document.getElementById("Euro"),
    yuan = document.getElementById("Yuan"),
    cor = document.querySelector(".box");

function realValueConvert(value) {

    let valDolar = (value * 0.21).toFixed(2);
    let valYen = (value * 28.84).toFixed(2);
    let valEuro = (value * 0.19).toFixed(2);
    let valYuan = (value * 1.49).toFixed(2);
    if (valDolar < value) {
        cor.style.color = "#00751d"
    }
    // else if (valDolar > value) {
    //     cor.style.color = "#f71933"
    // }
    if (valEuro > value) {
        euro.style.color = "#00751d"
    }
    else if (valEuro < value) {
        // euro.style.color = "#f71933"
    }
    else if (valYen < value) {
        // yen.style.color = "#00751d"
    }
    if (valYen < value) {
        yen.style.color = "#f71933"
    }
    if (valYuan < value) {
        // yuan.style.color = "#00751d"
    }
    else if(valYuan > value){
        yuan.style.color ="#f71933"
    }

    dollar.innerHTML = valDolar;
    yen.innerHTML = valYen;
    euro.innerHTML = valEuro;
    yuan.innerHTML = valYuan;
}
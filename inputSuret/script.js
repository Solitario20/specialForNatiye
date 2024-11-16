let hesabla = document.querySelector('.topla');

hesabla.onclick = function () {
    suret = +mes.value / +zam.value;
    document.getElementById('suret').innerHTML = `Əgər məsafə ${mes.value} km və zaman ${zam.value} saat olarsa sizin avtomobilinizin sürəti ${suret}km/saat dır`
}
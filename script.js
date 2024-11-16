let hesabla = document.querySelector('.topla');

hesabla.onclick = function () {
    dis = +b.value * +b.value - 4 * +a.value * +c.value;
    document.getElementById('dis').innerHTML = `Diskriminat = ${dis}`
}
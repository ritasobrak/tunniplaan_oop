//tunniplaani objekt


const tunniplaan = new Tunniplaan(346, '2021-01-11');

var teacherId = getParam('id');

if (teacherId) {
    tunniplaan.setTeacher(teacherId)
}

//kasutaja liidese objekt
const kl = new KasutajaLiides();

// tunnilaani valjastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);


function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
        kl.print(tunnid);
    }).catch(viga => console.log(viga));
}

function getParam(param) {
    return new URLSearchParams(window.location.search).get(param);
}

function changeTeacher() {
    const opetaja = document.getElementById("teacher").value;
    window.location.href = `?id=${opetaja}`;
}
//tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-04');

// tunnilaani valjastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        console.log(tunnid);
    }).catch(error => console.log(error));
}
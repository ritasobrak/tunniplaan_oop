//tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-04');

//kasutaja liidese objekt
const kl = new KasutajaLiides();

// tunnilaani valjastamine
document.addEventListener('DOMContentLoaded', valjastaTunniplaan);

function valjastaTunniplaan() {
    tunniplaan.opetajaTunniplaaniAndmed().then(tunnid => {
        kl.printNadalaKuupaevad(kl.nadalaKuupaevad(tunnid));
    }).catch(viga => console.log(viga));
}
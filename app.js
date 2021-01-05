//tunniplaani objekt
const tunniplaan = new Tunniplaan(346, '2021-01-11');

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
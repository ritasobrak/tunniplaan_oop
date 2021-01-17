class Tunniplaan {
    constructor(opetaja, kuupaev) {
        this.opetaja = opetaja;
        this.kuupaev = kuupaev;
    }

    async opetajaTunniplaaniAndmed() {
        const vastus = await fetch('https://siseveeb.khk.ee/veebilehe_andmed/tunniplaan?opetaja=' + this.opetaja + '&nadal=' + this.kuupaev);
        const andmed = await vastus.json();
        return andmed;
    }

    setTeacher(teacherId) {
        this.opetaja = teacherId;
    }
}

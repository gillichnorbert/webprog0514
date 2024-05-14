class AtlagSebesseg {
    idoInput: HTMLInputElement | null;
    utInput: HTMLInputElement | null;
    szamolButton: HTMLElement | null;
    atlag: HTMLInputElement | null;

    constructor() {
        this.startBind();
        this.eventHandler();
    }

    startBind() {
        this.utInput = document.querySelector('#utInput');
        this.idoInput = document.querySelector('#idoInput');
        this.szamolButton = document.querySelector('#szamolButton');
        this.atlag = document.querySelector('#atlag');
    }

    eventHandler() {
        this.szamolButton?.addEventListener("click",()=>{
            this.onClickCalcButton();
        })
    }

    onClickCalcButton() {
        if (this.idoInput && this.utInput && this.atlag) {
            const ido: number = Number(this.idoInput.value);
            const ut: number = Number(this.utInput.value);
            const atlagErtek: Number = ut / ido;
            this.atlag.value = atlagErtek.toString();
        }
    }
}

new AtlagSebesseg();

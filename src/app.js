var AtlagSebesseg = /** @class */ (function () {
    function AtlagSebesseg() {
        this.startBind();
        this.eventHandler();
    }
    AtlagSebesseg.prototype.startBind = function () {
        this.utInput = document.querySelector('#utInput');
        this.idoInput = document.querySelector('#idoInput');
        this.szamolButton = document.querySelector('#szamolButton');
        this.atlag = document.querySelector('#atlag');
    };
    AtlagSebesseg.prototype.eventHandler = function () {
        var _this = this;
        var _a;
        (_a = this.szamolButton) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            _this.onClickCalcButton();
        });
    };
    AtlagSebesseg.prototype.onClickCalcButton = function () {
        if (this.idoInput && this.utInput && this.atlag) {
            var ido = Number(this.idoInput.value);
            var ut = Number(this.utInput.value);
            var atlagErtek = ut / ido;
            this.atlag.value = atlagErtek.toString();
        }
    };
    return AtlagSebesseg;
}());
new AtlagSebesseg();

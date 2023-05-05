class Termek {
  #adat;
  #divElem;
  #torolButtonElem;
  #kedvencButtonElem;

  constructor(adat, szuloElem) {
    this.#adat = adat;
    szuloElem.append(
      `<div><p>${this.#adat.nev}</p><p>${this.#adat.kor}</p><p>${
        this.#adat.sport
      }</p><button class="kedvenc">Kedvencekhez ad</button><button class="torol">Töröl</button></div>`
    );
    this.#divElem = szuloElem.children("div:last-child");
    this.#kedvencButtonElem = this.#divElem.children(".kedvenc");
    this.#torolButtonElem = this.#divElem.children(".torol");

    this.#kedvencButtonElem.on("click", () => {
      this.esemenyTrigger("gombkattintas");
    });

    this.#torolButtonElem.on("click", () => {
      this.esemenyTrigger("torol");
    });
  }

  esemenyTrigger(esemenyNev) {
    const E = new CustomEvent(esemenyNev, { detail: this.#adat.id });
    window.dispatchEvent(E);
  }
}

export default Termek;

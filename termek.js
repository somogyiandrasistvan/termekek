class Termek {
  #adat;
  #divElem;
  #buttonElem;
  #id;
  constructor(adat, szuloElem, index) {
    this.#id = index;
    this.#adat = adat;
    szuloElem.append(
      `<div><p>${this.#adat.nev}</p><p>${this.#adat.kor}</p><p>${
        this.#adat.sport
      }</p><button id="${adat.id}">Kedvencekhez ad</button></div>`
    );
    this.#divElem = szuloElem.children("div:last-child");
    this.#buttonElem = this.#divElem.children("button");

    this.#buttonElem.on("click", () => {
      this.esemenyTrigger();
    });
  }

  esemenyTrigger() {

    const E = new CustomEvent("gombkattintas", { detail: this.#adat });
    window.dispatchEvent(E);
  }
}

export default Termek;

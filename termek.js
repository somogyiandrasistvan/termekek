class Termek {
  #adat;
  #divElem;
  #buttonElem;
  constructor(adat, szuloElem) {
    this.#adat = adat;
    szuloElem.append(
      `<div><p>${this.#adat.nev}</p><p>${this.#adat.kor}</p><p>${
        this.#adat.sport
      }</p><button>Kedvencekhez ad</button></div>`
    );
    this.#divElem = szuloElem.children("div:last-child");
    this.#buttonElem = this.#divElem.children("button");
    
  }

}


export default Termek;

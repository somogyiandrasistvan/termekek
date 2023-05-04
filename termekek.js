import { LISTA } from "./adatok.js";
import Termek from "./termek.js";

class Termekek {
  #kedvencek = [];

  constructor() {
    const SZULOELEM = $("article");

    for (let index = 0; index < LISTA.length; index++) {
      const t1 = new Termek(LISTA[index], SZULOELEM);
    }
    this.#buttonElem.on("click", function () {
      this.#kedvencek.append(this.adat);
    });
  }
}

export default Termekek;

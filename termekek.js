import { LISTA } from "./adatok.js";
import Termek from "./termek.js";

class Termekek {
  #kedvencek = [];

  constructor() {
    const SZULOELEM = $("article");

    for (let index = 0; index < LISTA.length; index++) {
      const t1 = new Termek(LISTA[index], SZULOELEM, index);
    }
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
  }
}

export default Termekek;

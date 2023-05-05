import Termek from "./termek.js";
import Aszinkron from "./Aszinkron.js";

class Termekek {
  #kedvencek = [];

  constructor() {
    const ASZINKRON = new Aszinkron();
    let vegpont = "adatok.json";
    ASZINKRON.adatBeolvas(vegpont, this.#termekMegjelenito);
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
  }

  #termekMegjelenito(lista) {
    let sajatLista = lista.LISTA;
    const ARTICLE = $("article");
    for (let index = 0; index < sajatLista.length; index++) {
      const TERMEK = new Termek(sajatLista[index], ARTICLE, index);
    }
  }
}

export default Termekek;

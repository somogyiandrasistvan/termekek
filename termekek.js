import Termek from "./termek.js";
import Aszinkron from "./Aszinkron.js";

class Termekek {
  #kedvencek = [];

  constructor() {
    const ASZINKRON = new Aszinkron();
    let vegpont = "http://localhost:3000/LISTA";
    ASZINKRON.adatBeolvas(vegpont, this.#termekMegjelenito);
    $(window).on("gombkattintas", (event) => {
      this.#kedvencek.push(event.detail);
      console.log(this.#kedvencek);
    });
    $(window).on("torol", (event) => {
      ASZINKRON.adatTorles(vegpont, event.detail);
    });
  }

  #termekMegjelenito(lista) {
    let sajatLista = lista;
    const ARTICLE = $("article");
    for (let index = 0; index < sajatLista.length; index++) {
      const TERMEK = new Termek(sajatLista[index], ARTICLE);
    }
  }
}

export default Termekek;

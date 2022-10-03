var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { obtenerPersonaje } from "./components/tarjeta/tarjeta.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            const personajes = yield obtenerPersonaje();
            this.render(personajes);
        });
    }
    render(personajes) {
        if (!this.shadowRoot)
            return;
        const components = personajes.map(({ gender, id, image, name, species, status }) => `
        <link rel="stylesheet" href=" ./app/components/tarjeta/style.css"
        <section>
        <article>
        <div class="contenedor">
        <image class="imagen" src="${image}"></image>
        <h1 class="genero">Gender: ${gender}</h1>
        <h1 class="id">Id: ${id}</h1>
        <h1 class="nombre">Name: ${name}</h1>
        <h1 class="especie">Species: ${species}</h1>
        <h1 class="estatus">Status: ${status}</h1>
        </div>
        </article>
        </section>
        `);
        this.shadowRoot.innerHTML = `<section>
            ${components.join("")}
        </section>`;
    }
}
customElements.define("app-container", AppContainer);

import {obtenerPersonaje} from "./components/tarjeta/tarjeta.js";
import { Personajes } from "./dataApi.js";

class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    async connectedCallback() {
        const personajes = await obtenerPersonaje();
        this.render(personajes);
    }

    render(personajes: Array<Personajes>) {
        if (!this.shadowRoot) return;

        const components = personajes.map(({gender, id, image, name, species, status}) => `
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

//https://swapi.dev/api/
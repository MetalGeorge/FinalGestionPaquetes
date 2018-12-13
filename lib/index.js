class MiBoton extends HTMLElement {
  constructor () {
    super();
    this.addEventListener('click', function(e){
      if (confirm(this.attributes["textoConfirmacion"].value) )
      {
        eval(this.attributes["funcion"].value);
      }

    });
  }
}

customElements.define('mi-boton', MiBoton);
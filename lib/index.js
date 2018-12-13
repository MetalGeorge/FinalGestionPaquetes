class MiBoton extends HTMLElement {
  constructor () {
    super();
    this.addEventListener('click', function(e){
      if (confirm(this.attributes[0].value) )
      {
        eval(this.attributes[1].value);
      }

    });
  }
}
customElements.define('mi-boton', MiBoton);
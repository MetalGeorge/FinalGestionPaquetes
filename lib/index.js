class MiBoton extends HTMLElement {
  constructor () {
    super();
    this.addEventListener('click', function(e){
      alert('hola');
    });
  }
}
customElements.define('mi-boton', MiBoton);


customElements.define('mi-boton-2', class extends HTMLElement {
  constructor () {
    super();
    this.addEventListener('click', function(e){
      alert('hola soy boton 2');
    });
  }
});
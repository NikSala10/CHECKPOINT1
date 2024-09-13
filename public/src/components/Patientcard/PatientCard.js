class PatientCard extends HTMLElement {
	static get observedAttributes() {
		return ['nombre', 'especie', 'fecha', 'sintomas', 'state'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
      
	}

	connectedCallback() {
		this.render();

	}

    attributeChangedCallback(propName, oldValue, newValue) {
		this.render()

		if (oldValue !== newValue) {
            this[propName] = propName === 'state' ? newValue === 'true' : newValue
            this.render()
        }
	}

    changeState(){
		this.state = !this.state
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `

       <div class="pacientes">
            <p>${!this.state ? "Pendiente" : "Atendido"}</p>
			<h4>Nombre:${this.nombre}</h4>
			<p>Especie: ${this.especie}</p>
            <p>Sintomas: ${this.sintomas}</p>
            <p>Fecha de ingreso: ${this.fecha}</p>
			<input type="checkbox" name="" ${this.state ? "checked": ""} id="checkbox">
		</div>
    `;

	const checkbox = this.shadowRoot.getElementById("checkbox")
	checkbox.addEventListener('click', ()=>{
		this.changeState()
		if (this.state) {
			this.shadowRoot.querySelector('.pacientes').appendChild(container-pendientes);
		}
	})
	}
}

customElements.define('patient-card', PatientCard);
export default PatientCard;
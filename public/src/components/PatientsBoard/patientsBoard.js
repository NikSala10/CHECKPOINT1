import '../Patientcard/PatientCard.js'
class PatientBoard extends HTMLElement {
	static get observedAttributes() {
		return ['form'];
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
        this.pacientes = []
	}

	connectedCallback() {
		this.render();

        const btn = this.shadowRoot.getElementById('agregar')
		
		const inputNombre = this.shadowRoot.getElementById('nombre')
		const inputEspecie = this.shadowRoot.getElementById('especie')
        const inputFecha = this.shadowRoot.getElementById('fecha')
        const inputSintomas = this.shadowRoot.getElementById('sintomas')
        

		btn.addEventListener('click', (e) =>  {
			e.preventDefault()
			this.pacientes.push({nombre: inputNombre.value, especie: inputEspecie.value, fecha: inputFecha.value, sintoma: inputSintomas.value, state: false})
			this.addPacientes()
		})

	}

    addPacientes() {
        this.pacientes.forEach(paciente => {
            const pendienteContainer = this.shadowRoot.querySelector('.container-pendientes');
            const atendidoContainer = this.shadowRoot.querySelector('.container-historial')

            if (this.pacientes.state = true) {
                pendienteContainer.innerHTML += 
		`<div><patient-card  nombre=${paciente.nombre} especie=${paciente.especie} sintomas=${paciente.sintoma} fecha=${paciente.fecha} state=${paciente.state}></patient-card> </div>` 
            } else  {
                atendidoContainer.innerHTML += 
                `<div><patient-card  nombre=${paciente.nombre} especie=${paciente.especie} sintomas=${paciente.sintoma} fecha=${paciente.fecha} state=${paciente.state}></patient-card> </div>` 
            }
        });
    }



    attributeChangedCallback(propName, oldValue, newValue) {
		if (oldValue !== newValue) {
			this[propName] = newValue;
			this.render();
		}
	}

    changeState(){
		this.state = !this.state
		this.render()
	}

	render() {
		this.shadowRoot.innerHTML = `

        <h1>Añadir paciente</h1>
        <form action="">
            <p>Nombre:</p>
            <input id="nombre" type="text">
           
            <p>Especie:</p>
            <input id="especie" type="text">
            
            <p>Raza:</p>
            <input id="raza" type="text">
            <p>Fecha de ingreso:</p>
            <input type="date" name="" id="fecha">
            
            <p>Sintomas:</p>
            <input type="text" name="" id="sintomas">
            <input id="agregar" type="submit" value="Añadir">
        </form>
        <div class="container">
            <div class="container-pendientes">
                <h1>Pacientes Pendientes</h1>
        
		    </div>
           
            <div class="container-historial">
                <h1>Historial de Pacientes</h1>
        
		    </div>

		</div>
        
        
    `;

	}
}

customElements.define('patient-board', PatientBoard);
export default PatientBoard;
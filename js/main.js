const nombre = document.getElementById('nombre');
const monto = document.getElementById('monto');
const total = document.getElementById('total');
const lista = document.getElementById('lista');
const set = new Set();

let people = 0;
let sum = 0;

const sumo = () => {
	sum += parseInt(monto.value);

}

function esta() {
	const esta = !set.has(nombre.value);
	return esta
}

function act(){
	total.innerHTML = `Total: ${sum} y cada uno debe pagar ${sum/people}`;
}

const addPeople = () => {
	people++;
	set.add(nombre.value);
	sumo()
	act()
}

const myFunction=() => {
	if(nombre.value == ""){
        alert('debe completar los campos')
        
    } else {

        if(esta()){
            addPeople();
            act();
            lista.innerHTML += `<p>${nombre.value} gasto $${monto.value}</p>`;
        }
        else{
            sumo()
            act()
        }
            
            
    }

}

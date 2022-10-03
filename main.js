/*efecto explocion de color con click---------------------------------------------------------------------*/
//efecto 1
const top_right = document.getElementsByClassName('top_right')[0];
const boton1 = document.getElementsByClassName("uno")[0];

top_right.classList.remove('animacion1')

boton1.addEventListener("click", () => {
	top_right.classList.toggle('animacion1')
}); 

//efecto dos
const bottom_left = document.getElementsByClassName('bottom_left')[0];
const boton2 = document.getElementsByClassName("dos")[0];

bottom_left.classList.remove('animacion2')

boton2.addEventListener("click", () => {
	bottom_left.classList.toggle('animacion2')
}); 

//efecto tres
const top_center = document.getElementsByClassName('top_center')[0];
const boton3 = document.getElementsByClassName("tres")[0];

top_center.classList.remove('animacion3');

boton3.addEventListener("click", () => {
	top_center.classList.toggle('animacion3')
}); 

//BOTONES REDONDOS
const length = document.querySelector("li:nth-child(1) path").getTotalLength();
//console.log(length);

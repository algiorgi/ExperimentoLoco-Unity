#pragma strict

var velocidadDeDesplazamiento : float = 2;
var limiteInferior : int = -6;

var posicionInicial : Vector3;

function Start () {

	posicionInicial = transform.position;
}

function Update () {

	transform.Translate(Vector3.down * Time.deltaTime * velocidadDeDesplazamiento);

	if (transform.position.y < limiteInferior) {

		transform.position = posicionInicial;
	}  
}
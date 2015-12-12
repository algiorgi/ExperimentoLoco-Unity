#pragma strict

var velocidadDeDesplazamiento : float = 2;

function Start () {

}

function Update () {

	transform.Translate(Vector3.down * Time.deltaTime * velocidadDeDesplazamiento);
}
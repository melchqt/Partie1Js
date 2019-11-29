//declaration de la fontcionn division nous permettant d'afficher le reste de la division (% reste)
function division(){
  var numberOne = document.getElementById('numberOne').value;
  var numberTwo = document.getElementById('numberTwo').value;
// if= si
// isNan  = est ce que "numberOne" n'est pas un nombre ? si ce n'est pas un nombre on met une alert
// && = ET
// || = OU
  if (isNaN(numberOne) == true || isNaN(numberTwo)){
    alert('erreur');
// else= sinon
  }else{
    if (numberTwo != 0) {
    // si "numberTwo" n'est pas égal à (!) 0
  // declaration d'une variable contenant le reste de la division du numberOne et numberTwo
  var result = numberOne%numberTwo;
  //affichage du resultat
  alert(Math.round(result));
  //math.round(result)); permet d'arrondir à l'entier le plus proche du nombre entier
  }else{
  alert('erreur:division par 0 impossible');
  }
 }
}

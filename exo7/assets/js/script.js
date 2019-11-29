function validate(){
  var age = document.getElementById('age').value;
if(isNaN(age) == true){
  alert("erreur ceci n'est pas valable");
}else{
  if(age >= 18){
    alert("Vous êtes majeur!");
  }else{
     alert("Vous êtes mineur!");
   }
 }
}


var validar = () =>{
  
  var nome = document.getElementById("nome");
  var email = document.getElementById("email");
  var telefone = document.getElementById("telefone");
  var selecione = document.getElementById("selecione");
  var mensagem = document.getElementById("mensagem");


  // verificar se o nome está vazio
  if (nome.value == "") {
    alert("Nome não informado");

    // Deixa o input com o focus
   
    // retorna a função e não olha as outras linhas
    return;
  }

  if (email.value == "") {
    alert("E-mail não informado");
    return;
  }

  if (telefone.value == "") {
    alert("Telefone não informado");
    return;
  }
  if (selecione.value == "") {
    alert(" selecione uma opção ");
    return;
  }
  if (mensagem.value == "") {
    alert(" Digite sua mensagem");
    return;
  }
  else{
     alert("Formulário enviado!");
  }
}
 
 

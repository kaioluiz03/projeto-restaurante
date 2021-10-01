var validarCampos = () => { 
    if(document.getElementById("nomeLogin").value == "") {
      alert("Por favor verifique se todos os dados foram preenchidos.");
    }
    else if(document.getElementById("senhaLogin").value == ""){
        alert("Por favor verifique se todos os dados foram preenchidos.");
    }
    else{
        alert("Seja bem vinde ao Restaurante Start!");
    }
}
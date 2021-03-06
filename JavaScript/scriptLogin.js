    // VALIDAÇÃO DE CAMPOS //

var validarCampos = () => { 
    const emailLogin = document.getElementById('emailLogin').value;
    
    let testRegex = function () {
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(emailLogin);
    }
    
    if(testRegex() === true){

        if(document.getElementById("emailLogin").value == "" && document.getElementById("senhaLogin").value == "") {
            alertify.error('Por favor, prencha os dados de login');  
    
        }  
        else if(document.getElementById("emailLogin").value == "" || document.getElementById("senhaLogin").value == ""){
            alertify.error('Por favor, verifique se todos os dados foram preenchidos.');
    
        }    
        else{
            alertify.success('Seja bem vinde ao Restaurante Buenos Nachos!'); alertify.alert('Agora você esta logado em sua conta!').set({onshow:null, onclose:function(){
                    window.location.href = '../index.html'
                }
            });
        }    
    }
    else {
        alertify.error('O email está incorreto, tente novamente! Lembre-se de usar o "@" e o ".com"');
    }
};   

    // POP-UP //
const abrir = document.getElementById("abrirPopUp");
const fechar = document.getElementById("fecharPopUp")
const popUpElement = document.getElementById("pop_up");
    
    abrir.addEventListener("click", () => {
        pop_up.classList.add("active")
    });
    
    fechar.addEventListener("click", () => {
        pop_up.classList.remove("active")
    });
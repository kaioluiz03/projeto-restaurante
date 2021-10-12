

let validacao = ()=> {
    let dataAgend = document.getElementById("data");
    let horaAgend = document.getElementById("hora");
    let pessoasAgend = document.getElementById("pessoas");
    let nomeAgend = document.getElementById("nome");
    let emailAgend = document.getElementById("email");
    

    if (dataAgend.value == "" || horaAgend.value == "" || pessoasAgend.value == "" || nomeAgend.value == "" || emailAgend.value == "" ) {
        alertify.error('Por favor verifique se todos os dados foram preenchidos.'); 
    } else if (pessoasAgend.value <= 0) {
        alertify.error('Insira um numero de pessoas valido')
    } else if (horaAgend.value > "22:00" || horaAgend.value < "18.00") {
        alertify.error("Horario Indisponivel")
    }
     else{
        alertify.success('Sua Reserva foi salva, estamos te aguardando no Restaurante Start!')
    }

}
let cancelamento = () => {
    document.getElementById("data").value = ""
    document.getElementById("hora").value = ""
    document.getElementById("pessoas").value = ""
    document.getElementById("nome").value = ""
    document.getElementById("email").value = ""
    
    alertify.success('Sua reserva foi cancelada!')
}
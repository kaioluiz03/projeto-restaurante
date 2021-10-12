/* Script Home page Desktop*/

const redirecionarHome = document.getElementById('home');
redirecionarHome.addEventListener("click", (e) => {
    if(redirecionarHome.href === "http://127.0.0.1:5500/projeto-restaurante/index.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/index.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarLogin = document.getElementById("login")
        redirecionarLogin.addEventListener("click", (e) => {
            if(redirecionarLogin.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html"){
                window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html";
            }else{
                alert('A tela não foi encontrada. Entre em contato com o restaurante.')
                e.preventDefault();
            }
        });

const redirecionarCardapio = document.getElementById('cardapio');
redirecionarCardapio.addEventListener("click", (e) => {
    if(redirecionarCardapio.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/cardapio.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/cardapio.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarPratos = document.getElementById('pratos');
redirecionarPratos.addEventListener("click", (e) => {
    if(redirecionarPratos.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/pratosPopulares.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/pratosPopulares.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarReservas = document.getElementById('reservas');
redirecionarReservas.addEventListener("click", (e) => {
    if(redirecionarReservas.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/telaAgendamento.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/telaAgendamento.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarContatos = document.getElementById('contatos');
redirecionarContatos.addEventListener("click", (e) => {
    if(redirecionarContatos.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/tela_contato.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/tela_contato.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const boasVindas = document.getElementById('bem-vindo');
const abrirTexto = document.getElementById('texto');

boasVindas.addEventListener('click', () => {
    if(abrirTexto.style.display == 'none'){
        boasVindas.style.display  = 'none';
        abrirTexto.style.display = 'flex';
    }
    else{
            boasVindas.style.display = 'flex';
            abrirTexto.style.display = 'none';
    }
});

abrirTexto.addEventListener('click',() =>{
    if(boasVindas.style.display == 'none'){
        abrirTexto.style.display = 'none';
        boasVindas.style.display = 'flex';
    }
});

/* Script Home page Mobile*/


const verificarMenu = document.getElementById('listaNavegacaoMobile');
const abrirBarraMenu = document.getElementById('abrirMenu');

abrirBarraMenu.addEventListener('click', () => {
    if(verificarMenu.style.display == 'flex'){
        verificarMenu.style.display = 'none';
    }else{
        verificarMenu.style.display = 'flex';
    }
});

const redirecionarHomeMobile = document.getElementById('homeMobile');
redirecionarHomeMobile.addEventListener("click", (e) => {
    if(redirecionarHomeMobile.href == "http://127.0.0.1:5500/projeto-restaurante/index.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/index.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarLoginMobile = document.getElementById("loginMobile")
        redirecionarLoginMobile.addEventListener("click", (e) => {
            if(redirecionarLoginMobile.href == "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html"){
                window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html";
            }else{
                alert("Error")
                e.preventDefault();
            }
        });

const redirecionarCardapioMobile = document.getElementById('cardapioMobile');
redirecionarCardapioMobile.addEventListener("click", (e) => {
    if(redirecionarCardapioMobile.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/cardapio.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/cardapio.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarPratosMobile = document.getElementById('pratosMobile');
redirecionarPratosMobile.addEventListener("click", (e) => {
    if(redirecionarPratosMobile.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/pratosPopulares.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/pratosPopulares.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarReservasMobile = document.getElementById('reservasMobile');
redirecionarReservasMobile.addEventListener("click", (e) => {
    if(redirecionarReservasMobile.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/telaAgendamento.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/telaAgendamento.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarContatosMobile = document.getElementById('contatosMobile');
redirecionarContatosMobile.addEventListener("click", (e) => {
    if(redirecionarContatosMobile.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/tela_contato.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/tela_contato.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});
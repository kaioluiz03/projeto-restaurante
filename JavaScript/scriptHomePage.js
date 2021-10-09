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

const redirecionarLogin = document.getElementById('login');
redirecionarLogin.addEventListener("click", (e) => {
    if(redirecionarLogin.href === "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html"){
        window.location.href = "http://127.0.0.1:5500/projeto-restaurante/HTML/loginPage.html";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarCardapio = document.getElementById('cardapio');
redirecionarCardapio.addEventListener("click", (e) => {
    if(redirecionarCardapio.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarPratos = document.getElementById('pratos');
redirecionarPratos.addEventListener("click", (e) => {
    if(redirecionarPratos.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarReservas = document.getElementById('reservas');
redirecionarReservas.addEventListener("click", (e) => {
    if(redirecionarReservas.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

const redirecionarContatos = document.getElementById('contatos');
redirecionarContatos.addEventListener("click", (e) => {
    if(redirecionarContatos.href === ""){
        window.location.href = "";
    }else{
        alert('A tela não foi encontrada. Entre em contato com o restaurante.');
        e.preventDefault();
    }
});

/* Script Home page Mobile*/

// const verificarMenu = document.getElementById('listaNavegacaoMobile');
// const abrirBarraMenu = document.getElementById('abrirMenu');
// var lista = document.getElementsByName('')

// abrirBarraMenu.addEventListener('click', () => {
//     verificarMenu.classList.remove('.navOff')
//     if(verificarMenu.style.display = "none" === true){
//         verificarMenu.style.display = "flex"
//     }else if(verificarMenu.style.display = "flex"){
//         verificarMenu.style.display = "none"
//     }
    
// });

const verificarMenu = document.getElementById('listaNavegacaoMobile');
const abrirBarraMenu = document.getElementById('abrirMenu');

abrirBarraMenu.addEventListener('click', () => {
    if(verificarMenu.style.display = 'flex'){
        verificarMenu.style.display = 'none'
    }else{
        return
    }
});

abrirBarraMenu.addEventListener('click', () => {
    if(verificarMenu.style.display = 'none'){
        verificarMenu.style.display = 'flex'
    }else{
        return
    }
});



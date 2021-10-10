let tudoCerto=true;
let celular=document.getElementById("celular");
function efeito() {
    document.body.style.overflow=tudoCerto ? "hidden" : "initial";
    let nav=document.getElementById("nav");
    nav.classList.toggle("ativado",tudoCerto) ; 
    tudoCerto=!tudoCerto;
}
celular.addEventListener("click", efeito);

document.querySelector(".btn-login").addEventListener("click", () => {
  alert("Login enviado! (Aqui você pode integrar com backend)");
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
        btn.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.6)"; 
        btn.style.transition = "all 0.25s ease";
    });

    
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
        btn.style.boxShadow = "none";
    });
    btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
});

btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1.08)";
});

function abrirAlerta() {
  document.getElementById("alerta").style.display = "flex";
  document.body.classList.add("no-scroll");  // BLOQUEIA ROLAGEM E CLIQUES
}

function fecharAlerta() {
  document.getElementById("alerta").style.display = "none";
  document.body.classList.remove("no-scroll"); // LIBERA A PÁGINA
}


});

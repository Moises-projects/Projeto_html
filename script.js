console.log("Site carregado! Você pode adicionar scripts aqui.");
const botoes = document.querySelectorAll("button, .btn");

botoes.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
        btn.style.transition = "transform 0.2s ease, box-shadow 0.2s ease";
        btn.style.boxShadow = "0 0 12px rgba(255, 0, 0, 0.6)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1.0)";
        btn.style.boxShadow = "none";
    });
    btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
});

btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1.08)";
});
const banner = document.querySelector(".banner");

banner.addEventListener("mousemove", (e) => {
    const x = (e.offsetX / banner.offsetWidth) - 0.5;
    const y = (e.offsetY / banner.offsetHeight) - 0.5;

    banner.style.transform = `scale(1.05) translate(${x * 12}px, ${y * 12}px)`;
});

banner.addEventListener("mouseleave", () => {
    banner.style.transform = "scale(1)";
    banner.style.transition = "transform 0.4s ease";
});

});
// When clicking Code or Demo buttons
document.querySelectorAll(".code-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const link = btn.getAttribute("data-code");
        window.open(link, "_blank");
    });
});

document.querySelectorAll(".demo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const link = btn.getAttribute("data-demo");
        window.open(link, "_blank");
    });
});

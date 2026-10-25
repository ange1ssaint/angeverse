document.getElementById("year").textContent = new Date().getFullYear();
const seal = document.getElementById("soundless-secret");
const secret = document.getElementById("secret");
seal?.addEventListener("click", () => secret?.showModal());

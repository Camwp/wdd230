const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const section = document.getElementById("card");
const info = document.getElementById("information");
const header = document.querySelector("h3");
const headerThree = document.getElementById("header");


modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		main.style.background = "#1a1c1d";
		main.style.color = "#f2f2f2";
        section.style.background = "#1d3557";
        info.style.backgroundColor = "#1d3557";
        header.style.color = "#f2f2f2";
        headerThree.style.color = "#f2f2f2";
		modeButton.textContent = "❎";
	} else {
        section.style.background = "#fff";
        info.style.backgroundColor = "#fff";
        headerThree.style.color = "#1d3557";
        header.style.color = "#1d3557";
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "☑️";
	}
});
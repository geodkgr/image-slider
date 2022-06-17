const buttons = document.querySelectorAll(".carousel-button");
let newIndex = 1;
let img = document.getElementById("image");
const extension = ".jpg";

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let btnValue = button.getAttribute("data-value");

        if (btnValue === "next") {
            img.src = "gallery/" + ++newIndex + extension;
        }

        if (btnValue === "prev") {
            img.src = "gallery/" + --newIndex + extension;
        }

        if (newIndex > 4) {
            newIndex = 1;
            img.src = "gallery/" + newIndex + extension;
        }

        if (newIndex < 1) {
            newIndex = 4;
            img.src = "gallery/" + newIndex + extension;
        }

        console.log(newIndex);
    })
})
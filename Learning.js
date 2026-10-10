const dateTime = document.getElementById("time");
const options = { weekday: "long", year: "numeric", month: "numeric", day: "numeric"};
dateTime.textContent = new Date().toLocaleDateString("en-BD", options);






const darkDictionary = document.getElementById ("toggle");


if (localStorage.getItem("theme")=== "dark") {
    document.body.classList.add ("dark-theme");
}
darkDictionary.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");



const isDark = document.body.classList.contains ("dark-theme");

localStorage.setItem("theme", isDark ? "dark" : "light");

});





const navbar = document.getElementById ("navbar");

const stickyPoint = navbar.offsetTop;

window.addEventListener("scroll", ()=> {
    if (window.pageYOffset >= stickyPoint) {
        navbar.classList.add("sticky");
    } else {
     
     -   navbar.classList.remove("sticky");
    }

});






// The White News Address is added in About option in Fotter option.
//It will shaow and hide address when user click on about button.

const aboutButton = document.getElementById("aboutButton");

const address = document.getElementById("address");

aboutButton.addEventListener("click", function() {

    if (address.style.display === "none") {
        address.style.display = "block";
    } else {
        address.style.display = "none";
    }

});




















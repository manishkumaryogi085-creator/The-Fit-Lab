function calculateBMI() {
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value / 100;

    let bmi = weight / (height * height);

    if (!weight || !height) {
        document.getElementById("result").innerHTML = "Please enter weight and height.";
        return;
    }

    document.getElementById("result").innerHTML =
        "Your BMI is: " + bmi.toFixed(1);
}window.addEventListener("load", function () {
    setTimeout(function () {
     document.getElementById("loader").style.display = "none";
    }, 1500);
});
 
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}

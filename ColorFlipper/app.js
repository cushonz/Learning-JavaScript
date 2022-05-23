const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function (){
    
    const Rand = getRandomNumber();
    document.body.style.backgroundColor = colors[Rand];
    color.textContent = colors[Rand];
    console.log(Rand);
});

function getRandomNumber(){
    return Math.random();
}
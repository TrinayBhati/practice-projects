const button = document.getElementById("btn");

const getColor = ()=>{
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomColor = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomColor;
    const code = document.getElementById("color-code");
    code.innerText = randomColor;
    navigator.clipboard.writeText(randomColor);
}

getColor();

button.addEventListener("click", getColor);























// const getColor = () => {
//     // Hex Code
//     const randomNumber = Math.floor(Math.random() * 16777215);
//     const randomCode = "#" + randomNumber.toString(16);
//     document.body.style.backgroundColor = randomCode;
//     document.getElementById("color-code").innerText = randomCode;

//     navigator.clipboard.writeText(randomCode)
// }

// //event call
// document.getElementById("btn").addEventListener(
//     "click",
//     getColor
// )


// // init call
// getColor();
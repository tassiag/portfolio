function random() {
    let name = ['aissát', 'aaisst', 'tass', 'tassi'];

    let para = document.querySelector('.logo-link');
    let calc = name[Math.floor(Math.random() * name.length)];
    para.innerHTML = calc;

}


// função está ok
function handleMouseOut(event) {
    event.preventDefault();
    let returnName = document.querySelector(".logo-link");
    returnName.innerHTML = "tássia"
}

let returnLogo = document.querySelector(".logo-link");
returnLogo.addEventListener("mouseout", handleMouseOut);





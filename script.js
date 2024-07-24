const box = document.querySelectorAll(".box")
const body = document.querySelector("body")
function execute(e){
    
    let c = e.target.id
    console.log(c)
    function changer(event){
         body.style.backgroundColor = `${c}`
         
            // const box = document.querySelector(`#${c}`)
            // box.style.transition= 'all 0.09s ease-in-out';
            // box.style.transform= 'scale(1.2)';
            // box.style.boxShadow ='5px 5px 5px black';
            // box.style. borderRadius= '15%';
    }
    switch (c) {
        case "red":
            changer(`${c}`)
            break;
        case "blue":
            changer(`${c}`)
            break;
        case "green":
            changer(`${c}`)
            break;
        case "yellow":
            changer(`${c}`)
            break;

        default: body.style.backgroundColor = "white"
            break;
    }
}
function refresh() {
    location.reload()
}    

box.forEach((b) => {
    // console.log(b)
    b.addEventListener('click', execute )
    // b.addEventListener('click', refresh )
})
const b = document.querySelector('.btn')
// console.log(b)
function button(temp) {
    body.style.backgroundColor = "white"
    const a = b.innerHTML
    // a.style.color =`${c}`
    // console.log(a)

}
b.addEventListener('click', button)
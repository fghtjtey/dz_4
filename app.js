let substract = document.querySelector('#substract')
let add = document.querySelector('#add')
console.log(substract)

substract.addEventListener("click", function () {
    //substract value (-1)
    let output = document.querySelector('#result')
    let result = Number(output.innerHTML) - 1

    output.innerHTML = result
    console.log(output)
})
add.addEventListener("click", function () {
    // add value (-1)
    let output = document.querySelector('#result')
    let result = Number(output.innerHTML) + 1

    output.innerHTML = result
    console.log(output)
})
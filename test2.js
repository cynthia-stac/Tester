let sumation = () => {
    let arr = [1,2,3,4,5]
    return arr.reduce((sum, v) => sum + v, 0)
}

let para = document.getElementById('para')
para.textContent = sumation()
console.log(sumation()) 
//const divGroup = document.createElement('div')
//const input = document.createElement('input')
//const button = document.createElement('button')
const isPrime = (num) => {
    for (let i= 2; i<num ; i++) {
        if (num%i===0) return false
    }
    return num > 1
}

let li
const numbers = (nbr) => {
    for (let i = 0; i< nbr; i++) {
        li = document.createElement('li')
        li.setAttribute('id','number')
        li.textContent = i

        if (i===0) {
            li.style.background = '#34495e'
            li.style.color = 'red'
        }
    
        if (i===1) {
            li.style.background = '#f1c40f'
        }
    
        if (i===2) {
            li.style.background = 'rgb(46,204,113)'
            li.style.background = 'linear-gradient(225deg, rgba(46,204,113,1) 50%, rgba(231,76,60,1) 50%)'
        }
    
        if (i>=3) {
            if (i%2===0) {
                li.style.background = '#2ecc71'
            } else {
                li.style.background = '#f1c40f'
            }
    
            if (isPrime(i)) {
                li.style.background = 'rgb(241,196,15)'
                li.style.background = 'linear-gradient(225deg, rgba(241,196,15,1) 50%, rgba(231,76,60,1) 50%)'
            }
        }

        const ul = document.querySelector('ul')
        ul.appendChild(li)
    }
}


const button = document.querySelector('button')
const ul = document.querySelector('ul')
const input = document.querySelector('input')
button.addEventListener('click', (e) => {
    ul.innerHTML = ''
    numbers(input.value)
})

numbers(12)


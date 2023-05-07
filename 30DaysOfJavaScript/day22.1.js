const container = document.getElementById('number-container')

for (let i=1; i<=100; i++) {
    const numberDiv = document.createElement("div")
    numberDiv.innerHTML = i
            
    if (i % 2 === 0) {
        numberDiv.style.backgroundColor = 'green'
    } else {
        numberDiv.style.backgroundColor = 'yellow'
    }

    if (isPrime(i)) {
        numberDiv.style.backgroundColor = 'red'
    }

    container.appendChild(numberDiv)
}

function isPrime(num) {
    if (num <= 1) {
        return false
    }

    for (let i=2; i<= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }

    return true
}
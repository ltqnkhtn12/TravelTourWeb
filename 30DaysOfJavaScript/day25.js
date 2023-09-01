const population = document.querySelector('#population')
            const changeDescription = document.querySelector('#change-description')
            population.addEventListener('click', () => {
                fetch('https://restcountries.com/v3.1/all')
                .then (response => response.json())
                .then (data => {
                changeDescription.innerHTML = '10 Most Populated Countries In The World'
                changeDescription.style.marginTop = '20px'
                // Sắp xếp theo dân số giảm dần
                const sortedByPopulation = data.sort((a, b) => b.population - a.population);
                // Lấy ra 10 quốc gia có dân số cao nhất
                const top10Population = sortedByPopulation.slice(0, 10);
                
                console.log(top10Population)

                top10Population.forEach (country => {
                    const container = document.createElement('div')
                    container.classList.add('container-chart')
                    const chart = document.createElement('div')
                    chart.classList.add('chart')
                    const bar = document.createElement('div')
                    bar.classList.add('bar')
                    const textBar = document.createTextNode(country.name.common)
                    bar.appendChild(textBar)
                    chart.style.width = `${(country.population / top10Population[0].population) * 100}%`
                    const chartText = document.createTextNode(country.population)
                    chart.appendChild(chartText)
                    container.appendChild(bar)
                    container.appendChild(chart)
                    console.log(container)
                    const body = document.querySelector('#body-container')
                    body.appendChild(container)
                    console.log(body)
                  

                })
                
            })

            const languages = document.querySelector('#languages')
            languages.addEventListener('click', () => {
                changeDescription.innerHTML = '10 Most Spoken Languages In The World'
                changeDescription.style.marginTop = '20px'
            })
            })
        
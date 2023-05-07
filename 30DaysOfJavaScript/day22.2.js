fetch('https://restcountries.com/v3.1/all')
.then (response => response.json())
.then (data => {
    const container = document.getElementById('countries-container')

    const table = document.createElement('table')
    const thead = document.createElement('thead')
    const tbody = document.createElement('tbody')

    const headers = ['Name', 'Capital', 'Alpha-2 code', 'Region', 'Population','Languages']
    const headerRow = document.createElement('tr')
    headers.forEach(headerText => {
        const header = document.createElement('th')
        const textNode = document.createTextNode(headerText)
        header.appendChild(textNode)
        headerRow.appendChild(header)
    })
    thead.appendChild(headerRow)
    table.appendChild(thead)
    container.appendChild(table)

    data.forEach (country => {
        const row = document.createElement('tr')
    
        const nameCell = document.createElement('td')
        const nameText = document.createTextNode(country.name.common)
        nameCell.appendChild(nameText)
        row.appendChild(nameCell)
    
        const capitalCell = document.createElement('td')
        const capitalText = document.createTextNode(country.capital)
        capitalCell.appendChild(capitalText)
        row.appendChild(capitalCell)
    
        const codeCell = document.createElement('td');
        const codeText = document.createTextNode(country.cca2);
        codeCell.appendChild(codeText);
        row.appendChild(codeCell);
    
        const regionCell = document.createElement('td');
        const regionText = document.createTextNode(country.region);
        regionCell.appendChild(regionText);
        row.appendChild(regionCell);
    
        const populationCell = document.createElement('td');
        const populationText = document.createTextNode(country.population);
        populationCell.appendChild(populationText);
        row.appendChild(populationCell);
    
        const languagesCell = document.createElement('td');
        const languagesText = document.createTextNode(Object.values(country.languages).join(', '));
        languagesCell.appendChild(languagesText);
        row.appendChild(languagesCell);

        table.appendChild(row)
    })
})

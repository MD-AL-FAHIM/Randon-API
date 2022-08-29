const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(  res => res.json())
    .then( data => displayCountries(data))
}

const displayCountries = countries => {
    // for (const country of countries) {
        //     const countryDiv = document.createElement('div');
        //     countryDiv.innerHTML = `
        
        //     `;
        //     countriesContainer.appendChild(div);
        // }
        
    const countriesContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
                <h3>Name: ${country.name.common}</h3>
                <h3>Name: ${country.capital ? country.capital[0]: 'No Capital'}</h3>
                <button onclick="loadCountryDetail('${country.cca2}')"> Display Details</button>

            `;
        countriesContainer.appendChild(countryDiv);
    });
}


const loadCountryDetail = (code) => {
    // https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    fetch(url)
    .then( res => res.json())
    .then( data => displayCountry(data[0]))

    // console.log('get countryCode :', countryCode)
}

const displayCountry = country => {
    // console.log(country);
    const countryDetail = document.getElementById('country-detail');
    countryDetail.innerHTML = `
        <h2> Details: ${country.name.common}</h2>
        <img src="${country.flags.png}">
    `;
}

loadCountries();
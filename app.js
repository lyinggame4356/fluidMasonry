document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const abvDisplay = document.querySelector('.abv')
    const foodPairing = document.querySelector('.food')
    const debug = false

    function log(data) {
        if (debug) {
            console.log(data)
        }
    }

    function getData(e){
        e.preventDefault()
        
        fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            log(data)
            const name = data[0].name
            log(name)
            let description = data[0].description
            const abv = data[0].abv
            const food = data[0].food_pairing
            const {volume} = data[0]
            const volumeValue = volume.value
            const volumeUnit = volume.unit
            log(volume.value + " " + volume.unit)
            log(food)
        
            randomBeer.innerHTML = name // + ' ' + volumeValue + ' ' + volumeUnit
            abvDisplay.innerHTML = abv + "%"
            descriptionDisplay.innerHTML = description
            foodPairing.innerHTML = '<b>' + "Goes great with: " + '</b><br/>' + food.join('<br/>');
        })
    }

    startBtn.addEventListener('click', getData)

})
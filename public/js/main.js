// client side js
document.querySelector('button').addEventListener('click', getFetch)
// console.log('can this work please')

// console.log('hi')

// JSON.stringify(url)

function getFetch(){
    const url = 'https://sneaker-brands-api-try.herokuapp.com/api/:sneakerBrand'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
}
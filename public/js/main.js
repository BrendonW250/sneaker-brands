// client side js
document.querySelector('button').addEventListener('click', getFetch)
// console.log('can this work please')

// console.log('hi')

// JSON.stringify(url)

function getFetch(){
    const userBrand = document.querySelector('#brands').value


    const url = 'https://sneaker-brands-api-try.herokuapp.com/api/:sneakerBrand'+userBrand



    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        document.querySelector('h2').innerHTML = 'Brand: ' + userBrand

        .catch(err => {
            console.log(`error ${err}`)
        })
}
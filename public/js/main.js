// client side js
document.querySelector('button').addEventListener('click', getFetch)
// console.log('can this work please')

// console.log('hi')

// JSON.stringify(url)

function getFetch(){
    const userBrand = document.querySelector('#brands').value


    const url = 'https://sneaker-brands-api-try.herokuapp.com/api/'+userBrand



    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)

            document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            document.querySelector('.name').innerHTML = 'Name: ' + data.nameOfShoe
            document.querySelector('.retail-price').innerHTML = 'Price: ' + data.price
        })

        

        .catch(err => {
            console.log(`error ${err}`)
        })
}
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

            if (data.brand === 'Jordan'){ // Jordan brand
                document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
                document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
                document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
                document.querySelector('.name3').innerHTML = 'Name: ' + data.nameOfShoes.shoe3
            }else if (data.brand === 'Nike'){ //Nike brand
                document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
                document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
                document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
            }else if (data.brand === 'Adidas'){ //Adidas brand
                document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
                document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
                document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
            }else if (data.brand === 'Puma'){
                document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
                document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
                document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
            }else if (data.brand === 'Vans'){
                document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
                document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            }
            // }else if (data.brand === 'Unknown'){
            //     document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            //     document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            //}
            // for jordans
            // document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            // document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            // document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
            // document.querySelector('.name3').innerHTML = 'Name: ' + data.nameOfShoes.shoe3
            
            
            // document.querySelector('.name').innerHTML = 'Name: ' + data.nameOfShoes.shoe1 + ' ' + data.nameOfShoes.shoe2 + ' ' + data.nameOfShoes.shoe3
            // document.querySelector('.retail-price').innerHTML = 'Price: ' + ' ' + data.price.shoe1 + ' ' + data.price.shoe2 + ' ' + data.price.shoe3

            // for nikes
            // document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            // document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            // document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2

            // for adidas
            // document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            // document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            // document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2

            // for puma
            // document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            // document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoes.shoe1
            // document.querySelector('.name2').innerHTML = 'Name: ' + data.nameOfShoes.shoe2
            
            // for vans
            // document.querySelector('.brand-heading').innerHTML = 'Brand: ' + data.brand
            // document.querySelector('.name1').innerHTML = 'Name: ' + data.nameOfShoe

        })

        

        .catch(err => {
            console.log(`error ${err}`)
        })
}
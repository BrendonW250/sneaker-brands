// client side js
// document.querySelector('')
// console.log('can this work please')

// console.log('hi')



function getFetch(){
    const url = 'https://sneaker-brands-api-try.herokuapp.com/'

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

        .catch(err => {
            console.log(`error ${err}`)
        })
}
const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')


// so the app can use cors
app.use(cors())

// so client side js can work
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(express.static('public'))
// creation of an object to be used to respond

// testing if I declare another variable within this sneakers object

const sneakers = {
    'Jordan': {
        'brand': 'Jordan',
        'nameOfShoes': {
            'shoe1': `Infrared 6's`,
            'shoe2': `Concord 11's`,
            'shoe3': `Shadow 10's`
        },
        'price': {
            'shoe1': '$319',
            'shoe2': '$220',
            'shoe3': '$220'
        }
    },

    'Nike': {
        'brand': 'Nike',
        'nameOfShoes': {
            'shoe1': `Kyrie 2's`,
            
        },
        'price': '$220'
    },

    'Adidas': {
        'brand': 'Adidas',
        'nameOfShoe': 'T-Mac',
        'price': '$200'
    },

    'Unknown': {
        'brand': 'unknown',
        'nameOfShoe': 'unknown',
        'price': 'unknown'
    }
}


// set up server to hear request w/ route and response
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

// creating a different path
// route is tailored to the user typing in a sneaker brand name
app.get('/api/:sneakerBrand', (request,response) => {
    // console.log(request.params.sneakerBrand)

    const sneakerBrandName = request.params.sneakerBrand

    // conditional on whether the brand is within the object (sneakers)
    // if so give the info of that sneakerbrand
    // using square bracket in the event of a space for property name
    // if entered sneaker brand exists in query parameter respond with that brands info
    if (sneakers[sneakerBrandName]){
        response.json(sneakers[sneakerBrandName])
    }else {
        response.json(sneakers['Unknown'])
    }


    // response.json(sneakers)
})

// telling the app to listen
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on ${PORT}!`)
})


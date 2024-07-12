let products=[
    {
        name :'Adidas Alphabounce',
        price: 5000
    },
    {
        name :'Sanddisk USB',
        price: 300
    },
    {
        name :'Adidas Ultraboost',
        price: 8000
    },
    {
        name :'ASamsung Led TV',
        price: 50000
    },
    {
        name :'Cadbury 5 star',
        price: 10
    },
]

function printArray(array)
{
    for(let item of array)
        {
            console.log(item);
        }
}

printArray(products);
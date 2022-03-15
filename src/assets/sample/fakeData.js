const restaurant = {
    name: 'BTM Layout',
    menu:[
        {
            name: 'Pizza',
            description: 'Pizza description',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            price: '$10',
            discountPrice: '$5',
            isDiscount: true,
            likes: 89,
            category: 'Pizza',
        },
        {
            name:"Burger",
            description: 'Burger description',
            image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
            price: '$10',
            discountPrice: '$5',
            isDiscount: true,
            likes: 89,
            category: 'Burger',

        }
    ],
    addOns:{
        "Breakfast For Two":[
            {
                name: '7up',
                description: 'Breakfast For Two description',
                price: '$10',
            }
        ]
    }
}
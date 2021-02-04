export const initialState = {
    basket: [
        {
            id: '12345',
            title:
                'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
            price: 11.96,
            rating: 5,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
        },
        {
            id: '12345',
            title:
                'The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback',
            price: 11.96,
            rating: 5,
            image:
                'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg',
        },
    ],
};

const reducer = (state, action) => {
    console.log(action.id);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            // Logic
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'REMOVE_FROM_BASKET':
            // Logic
            let newBasket = [ ...state.basket ];

            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            if (index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it is not in basket`
                );
            }

            return { 
                ...state, 
                basket: newBasket,
            };
        default:
            return state;
    }
};

export default reducer;

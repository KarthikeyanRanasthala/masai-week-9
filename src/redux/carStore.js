const addToCart = (selectedCar) => ({
    type: 'ADD_TO_CART',
    selectedCar
})

const userSignUp = (cred) => ({
    type: 'SIGNUP',
    cred
})

const userLogin = (cred) => ({
    type: 'LOGIN',
    cred
})

const userLogout = () => ({
    type: 'LOGOUT'
})

const placeOrder = (details) => ({
    type: 'PLACE_ORDER',
    details
})

const initState = {
    homePage: {
        workingDetails: [
            {
                imgLink: 'https://www.zoomcar.com/build/img/book.f804056bb2429eeabf95836bdf8865e1.svg',
                title: 'BOOK',
                text: 'Search for and book a car on our site!',
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/dl.99966c7703663379725f13d45663b372.svg',
                title: 'FILL DETAILS',
                text: "Upload your driver’s license, and pay a small security deposit.",
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/zoom.db4f328f3f4b83596bb3f2aefd04a864.svg',
                title: 'VROOM VROOM',
                text: 'Fill the start checklist in the app. Grab the keys from the glove-box and drive.'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/return.c50e35f6ae4b2891e95c121082d968f0.svg',
                title: 'RETURN',
                text: 'Return the car to the same location and fill the end checklist to end your trip.'
            }
        ],
        statistics: [
            {
                imgLink: 'https://www.zoomcar.com/build/img/steering-wheel.121c23ffa50aa2da7a1e1f829048dd90.svg',
                title: '3,000+',
                text: 'Rides Daily'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/happy.c650409b5435456374eca19943b697f0.svg',
                title: '48,00,000+',
                text: 'Happy users'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/kms.4dc69060e383492afc70514e93ca766c.svg',
                title: '3,60,00,000+',
                text: 'Km Travelled'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/cars.fcc55acb001edaad3d14055517a1e1b4.svg',
                title: '6,500+',
                text: 'Number of Cars'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/star_rating.5999c91406d9adad8f35df39ef055ec5.svg',
                title: 'Rating 4.7/5.0',
                text: 'Rated by 3,00,000+ customers'
            }
        ]
    }, 
    availableCars: [
        {
            id: 0,
            imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/1f3585c2e226fb30f85664a669b8c2ee1fdc1703.png?-1503039545',
            title: 'Maruti Swift',
            seater: '5',
            type: 'Manual',
            bags: '2',
            age: '18+',
            distance: '3.5',
            price: '3,500',
            excess: '8'
        },
        {
            id: 1,
            imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/8e78d99a6ddd6b6e6c858dad6f223fe74875e370.jpg?-1506410553',
            title: 'Tata Tiago',
            seater: '5',
            type: 'Manual',
            bags: '3',
            age: '18+',
            distance: '5.0',
            price: '3,468',
            excess: '8'
        },
        {
            id: 2,
            imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/964a9433a21c9b95c25217ecdbe653abb658c9f1.png?-1521810661',
            title: 'Maruti Swift AT',
            seater: '5',
            type: 'Automatic',
            bags: '3',
            age: '18+',
            distance: '3.5',
            price: '5,003',
            excess: '11'
        },
        {
            id: 3,
            imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/dc50c77aa094cf6a8795d35a0bf75db465d44152.png?-1530600432',
            title: 'Ford Freestyle',
            seater: '5',
            type: 'Manual',
            bags: '0',
            age: '18+',
            distance: '7.5',
            price: '3,958',
            excess: '10'
        },
        {
            id: 4,
            imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/b5cffd4b8ab18106411293b3666486a5bd691755.png?-1503044921',
            title: 'Mahindra KUV 100',
            seater: '5',
            type: 'Manual',
            bags: '3',
            age: '18+',
            distance: '2.0',
            price: '3,250',
            excess: '8'
        }
    ],
    inCart: undefined,
    users: [],
    isAuth : false,
    currentUser: '',
    currentUserDetails: ''

}

const reducer = (state = initState, action) => {
    if(action.type === 'ADD_TO_CART') {
        return { ...state, inCart: action.selectedCar }
    }
    if(action.type === 'LOGIN') {
        let isSignedUp = false;
        let failedLogin = false; 
        state.users.map(ele => {
            if(ele.email === action.cred.email) {
                if(ele.password === action.cred.password) {
                    isSignedUp = true;     
                }
                else if(ele.password !== action.cred.password) {
                    failedLogin = true;
                }
            }
            return ele;
        })

        if(isSignedUp) {
            alert('logged in')
            return { ...state, isAuth: true, currentUser: action.cred.email}
        }
        else if(failedLogin) {
            alert('Please Check Your Password & Try Again');
            return state;
        }
        else {
            alert("It seems you're new here, Please SignUp to proceed further");
            return state;
        }
        
    }
    if(action.type === 'LOGOUT') {
        return { ...state, isAuth: false}
    }
    if(action.type === 'SIGNUP') {
        alert('SignUp Successful');
        return { ...state, users: [...state.users, action.cred]}
    }
    if(action.type === 'PLACE_ORDER') {
        let updatedUserState = state.users.map(ele => {
            if(ele.email === state.currentUser) {
                let temp = ele.orders;
                temp.push(state.inCart);
                return {...ele, orders: temp}
            }
            else return ele;
        })

        return { ...state, users: updatedUserState, currentUserDetails: action.details }
    }
    return state;
}

export default reducer;
export{ addToCart, userLogin, userLogout, userSignUp, placeOrder };
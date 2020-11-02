export default (state, action) => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
            break;
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload ]
            }
            break;    
        case 'GET_ALL_TRANSACTION':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
            break;
        case 'TRANSACTION_ERROR':
            return {
                ...state,
                error: action.payload
            }
            break;
        default:
            return state;


    }
}
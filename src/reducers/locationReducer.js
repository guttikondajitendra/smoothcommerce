export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_LOCATION_DATA':
            return {
                result: action.payload
            }
            default:
                return state
    }
}
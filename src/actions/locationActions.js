const SET_LOCATION_DATA = "SET_LOCATION_DATA";

export const fetchLocationData = () => dispatch => {
    const url = "https://api.mocki.io/v1/276a0d5c";
    return fetch(url, {
        method: 'GET',
      }).then(res => res.json())
      .then( data => {
        dispatch({
            type: SET_LOCATION_DATA,
            payload: data
        })
    }).catch(err => {
        console.log(err);
    });
}
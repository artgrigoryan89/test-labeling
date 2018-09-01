import 'babel-polyfill';

export const GET_DATA = 'GET_DATA';
export const SEND_DATA = 'SEND_DATA';

// ACTIONS

export const getData = () => {
    /*let request = fetch('https://www.robus.io/api/labeling/get_task', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
    let response = await request;
    let payload = await response.json();
    return {
        type: GET_DATA,
        payload: payload,
    } */
}

export const sendData =  () => {
  /* let postData = JSON.stringify({data});
   let request = fetch('https://www.robus.io/api/labeling/post_label', {
        metod: 'POST',
        body: postData,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
   });
   let response = await request;
   let payload = await response.json();
        return {
            type: SEND_DATA,
            payload: payload,
        }
        */
}


//REDUCER

export function formFieldReducer(state = null, action) {
    switch (action.type) {
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload
            }
        case 'SEND_DATA':
            return {
                ...state,
                data: action.payload
            }
        default:
            return {...state}
    }
}
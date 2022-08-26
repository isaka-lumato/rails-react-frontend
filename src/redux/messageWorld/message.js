import axios from 'axios';

const API_URL = 'http://localhost:8000';

function getHelloFromAPI() {
  return axios.get(API_URL).then((response) => response.data);
}

export const GET_HELLO = 'GET_HELLO';

export const initialState = {};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HELLO: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export const getHello = (data) => ({
  type: GET_HELLO,
  payload: data,
});

export const getHelloDispatcher = () => async (dispatch) => {
  const hello = await getHelloFromAPI();
  dispatch(getHello(hello));
};

export default messageReducer;

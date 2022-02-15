import axios from "axios";
const BASE_URL = "https://localhost:5001/api";

export function getList() {
  return (dispacth) => {
    return axios.get(`${BASE_URL}/billingCycles`).then((res) =>
      dispacth({
        type: "BILLING_CYCLES_FETCHED",
        payload: res.data,
      })
    );
  };
}

export function create(billingCycle) {
  axios.post(`${BASE_URL}/billingCycles`, billingCycle);
  return {
    type: "BILLING_CYCLES_CREATED",
  };
}

export function read(id) {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/billingCycles/${id}`).then((res) =>
      dispatch({
        type: "BILLING_CYCLES_READED",
        payload: res.data,
      })
    );
  };
}

export function update(billingCycle) {
  axios.put(`${BASE_URL}/billingCycles`, billingCycle);
  return {
    type: 'BILLING_CYCLES_UPDATED',
  };
}

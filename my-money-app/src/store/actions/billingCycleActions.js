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

export function getBillingCycles(){
  return{
    type: 'GET_BILLING_CYCLES'
  }
}

export function create(billingCycle) {
  axios.post(`${BASE_URL}/billingCycles`, billingCycle);
  console.log(billingCycle)
  return {
    type: "BILLING_CYCLES_CREATED",
    payload: billingCycle
  };
}

export function read(id) {
  return (dispatch) => {
    return axios.get(`${BASE_URL}/billingCycles/${id}`).then((res) =>
      dispatch({
        type: "BILLING_CYCLES_READED",
        billingCycle: res.data,
        credits: res.data.credits,
        debts: res.data.debts
      })
    );
  };
}

export function update(billingCycle) {
  axios.put(`${BASE_URL}/billingCycles`, billingCycle);
  return {
    type: "BILLING_CYCLES_UPDATED",
  };
}

export function remove(id) {
  axios.delete(`${BASE_URL}/billingCycles/${id}`);
  return {
    type: "BILLING_CYCLES_REMOVED",
  };
}

export function addCredit(credit){
  return{
    type: 'CREDIT_ADDED',
    payload: credit
  }
}

export function returnState(){
  return{
    type: 'RETURN_STATE'
  }
}

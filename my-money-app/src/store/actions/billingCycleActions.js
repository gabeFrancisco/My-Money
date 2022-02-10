import axios from "axios";
const BASE_URL = "https://localhost:5001/api";

export function getList(){
  return(dispacth) => {
    return axios.get(`${BASE_URL}/billingCycles`)
      .then((res) => dispacth(
        {
          type: 'BILLING_CYCLES_FETCHED',
          payload: res.data
        }
      ))
  }
}

export function create(values){
  axios.post(`${BASE_URL}/billingCycles`, values)
  return{
    type: 'CREATED'
  }
}
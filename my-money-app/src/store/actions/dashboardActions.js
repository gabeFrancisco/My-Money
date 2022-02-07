import axios from "axios";
const BASE_URL = "https://localhost:5001/api";

export function getSummary() {
  return (dispatch) => {
      return axios.get(`${BASE_URL}/billingCycles/summary?id=1`)
      .then((res) => dispatch(
        {
          type: 'BILLING_SUMMARY_FETCHED',
          payload: res.data
        }
      ))
  };
}

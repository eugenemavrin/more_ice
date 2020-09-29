import { finishFetchData, failFetchData } from "../actions";
import axios from 'axios'

export const loadData = () => {

  return (dispatch: any, getState: any) => {
    axios.get('https://localhost:44330/weatherforecast').then(function (response) {
      dispatch(finishFetchData(response.data));
    }).catch(function (error) {
      dispatch(failFetchData(error))
    })
  }

}
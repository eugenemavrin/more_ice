import { finishFetchData, failFetchData } from "../actions";
import axios from 'axios'

export const loadData = () => {

  return (dispatch: any, getState: any) => {
    /*    axios.get('https://localhost:44330/weatherforecast').then(function (response) {
         dispatch(finishFetchData(response.data));
       }).catch(function (error) {
         console.log("----------------------------------")
         console.log(error)
         dispatch(failFetchData(error))
       })
     } */

    fetch('https://localhost:44330/weatherforecast')
      .then(res => res.json())
      .then(
        (result) => {
          dispatch(finishFetchData(result));
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          console.log("----------------------------------")
          console.log(error)
          dispatch(failFetchData(error))
        }
      )


  }
}
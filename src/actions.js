import axios from "axios"
import * as actions from './actionType';

export const onGetData = () => {


    return (dispatch) => {

        let url = 'https://newsapi.org/v2/everything?q=wildlife&pageSize=15&language=en&from=2022-11-12&sortBy=publishedAt&apiKey=f9e1a8212dca4f9b8f87de54cbb1223f';
        axios.get(url).then((res => {

            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_POSTS,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )
        })).catch(err => console.log(err))
    }
}

export const onGetAnimals = () => {
    return (dispatch) => {
        let url = 'https://zoo-animal-api.herokuapp.com/animals/rand/10';
        axios.get(url).then((res => {

            dispatch(
                ((data) => {
                    return {
                        type: actions.GET_ANIMALS,
                        payload: {
                            httpResponse: data
                        }
                    }
                })(res.data)
            )
        })).catch(err => console.log(err))
    }
}


export const onPostRequest = (user) => {
    return (dispatch) => {

        // axios.post(postApi, JSON.stringify(user)).then(res => {
        //     console.log('post success')
        //     console.log(res);
        //     dispatch(
        //         ((data) => {
        //             return {
        //                 type: actions.POST_USERS,
        //                 payload: data
        //             }
        //         })(res.data)
        //     )
        // }).catch(err => console.log(err));

        window.localStorage.setItem('user', JSON.stringify(user));
        return {
            type: actions.POST_USERS,
            payload: {
                response: user
            }
        }

    }

}







// export const onGetService = () =>{
//     return (dispatch) => {
//         let url = 'https://api.gbif.org/v1/species/search?q=Lion';
//         axios.get(url).then((res => {

//             dispatch(
//                 ((data) => {
//                     return {
//                         type: actions.GET_POSTS,
//                         payload: {
//                             httpResponse: data
//                         }
//                     }
//                 })(res.data)
//             )

//         })).catch(err => console.log(err))
//     }
// }


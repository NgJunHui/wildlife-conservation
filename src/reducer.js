import * as actions from './actionType';

const initState = {
    posts: [],
    members: [],
    postUsers: [],
    animals: [],
}


const reducer = (state = initState, action) => {

    switch (action.type) {

        case actions.GET_POSTS:
            return { ...state, posts: action.payload.httpResponse.articles }

        case actions.POST_USERS:
            return { ...state, postUsers: [...state.postUsers, action.payload.response] }

        case actions.GET_ANIMALS:
            return { ...state, animals: action.payload.httpResponse }

        default:
            return state;
    }
}
export default reducer;
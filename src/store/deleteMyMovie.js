import firebase from 'firebase'
import { getMyMovieList } from './myMovieReducer'


const DELETE_MY_MOVIE_REQUEST = 'DELETE_MY_MOVIE_REQUEST';
export const DELETE_MY_MOVIE_SUCCESS = 'DELETE_MY_MOVIE_SUCCESS';
const DELETE_MY_MOVIE_FAILED = 'DELETE_MY_MOVIE_FAILED';

function deleteMyMovieRequest() {
    return {
        type: DELETE_MY_MOVIE_REQUEST
    }
}

function deleteMyMovieSuccess(id) {
    return {
        type: DELETE_MY_MOVIE_SUCCESS,
        payload : id,
    }
}

function deleteMyMovieFailed(error) {
    return {
        type: DELETE_MY_MOVIE_FAILED,
        payload: error
    }
}

export function deleteMyMovie(movieId) {
    return (dispatch,getState) => {
        dispatch(deleteMyMovieRequest());

        const userId = getState().auth.user.uid;

        // movieId 데이터를 가져옴

        // user id가 로그인한 userid인지 확인
        
        //맞으면 삭제

        // 아니면 권한 오류 발생

        

        firebase.firestore().collection('movies').doc(movieId)
        .delete()
        .then(()=>{
            dispatch(deleteMyMovieSuccess(movieId));
            // dispatch(getMyMovieList());
        }).catch(()=>{
            dispatch(deleteMyMovieFailed());
        })
    }   
}

const initialState = {
    isloading: false,
    isSuccess: false,
    isFailed: false,
    error: null
}

export default function deleteMyMovieReducer(state = initialState, action) {
    switch (action.type) {
        case DELETE_MY_MOVIE_REQUEST:
            return Object.assign({}, state, {
                isloading: true,
                isSuccess: false,
                isFailed: false,
            })
        case DELETE_MY_MOVIE_SUCCESS:
            return Object.assign({}, state, {
                isloading: false,
                isSuccess: true,
                isFailed: false,
            })

        case DELETE_MY_MOVIE_FAILED:
            return Object.assign({}, state, {
                isloading: false,
                isSuccess: false,
                isFailed: true,
                error : action.payload
            })
        default : 
            return state;
    }
}
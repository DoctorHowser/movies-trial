import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects'
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchMovies)
    yield takeEvery('FETCH_MOVIE', fetchSingleMovie)
    yield takeEvery('UPDATE_MOVIE', updateMovie)

}

function* updateMovie(action) {
    try{
        console.log(action)
        yield axios.put(`/api/movie/${action.payload.id}`, action.payload);
        yield put({type: 'FETCH_MOVIES'  })
    } catch (err) {
        console.log(err)
        yield put({type: 'PUT_ERROR', payload: err  })

    }
}

function* fetchMovies() {
    try{        
        let {data} = yield axios.get('/api/movie');
        yield put({type: 'SET_MOVIES', payload: data  })
    } catch (err) {
        console.log(err)
        yield put({type: 'FETCH_MOVIES_ERROR', payload: err  })

    }
    
}

function* fetchSingleMovie(action) {
    try{
        yield put({type: 'SET_ACTIVE_MOVIE', payload: action.payload})
        let {data} = yield axios.get(`/api/genre/${action.payload}`);
        yield put({type: 'SET_TAGS', payload: data  })
    } catch (err) {
        console.log(err)
        yield put({type: 'FETCH_MOVIES_ERROR', payload: err  })

    }
    
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        default:
            return state;
    }
}

const currentMovie = (state = null, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_MOVIE':
            return action.payload
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        currentMovie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();

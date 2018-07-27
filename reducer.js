const START_TIMER = 'START_TIMER';
const RESTART_TIMER = 'RESTART_TIMER';
const ADD_SECOND = 'ADD_SECOND';

//action

function startTimer() {
    return {
        type: START_TIMER
    };
}

function restartTimer() {
    return{
        type: RESTART_TIMER
    };
}

function addSecond() {
    return{
        type: ADD_SECOND
    };
}

const TIME_DURATION = 1500;

const initialState = {
    isPlaying: false,
    elapsedTime: 0,
    timeDuration: TIME_DURATION
}

//reducer
function reducer(state = initialState, action) {
    switch (action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state);
        case ADD_SECOND:
            return applyAddSecond(state);
        default:
             return state;
    }
}

//reducer funtion

function applyStartTimer(state) {
    return{
        ...state, //이전state는 남기고 isPlaying만 교체 덮어쓰기같은 역할
        isPlaying:true
    }
}

function applyRestartTimer(state) {
    return{
        ...state,
        isPlaying:false,
        elapsedTime:0
    }
}

function applyAddSecond(state) {
    if(state.elapsedTime < TIME_DURATION){
        return{
            ...state,
            elapsedTime: state.elapsedTime + 1
        };
    }
    else {
        return{
            ...state,
            isPlaying:false
        };
    }
}

//export action creator

const actionCreators ={
    startTimer,
    restartTimer,
    addSecond
}

export { actionCreators };

//export reducer

export default reducer;
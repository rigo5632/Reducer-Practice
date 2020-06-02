export const TabReducer = (state, action) =>{
    switch(action.type){
        case 'SWITCH_DISPLAY':
            state[action.id].display = !state[action.id].display;
            if(action.prevId !== -1) state[action.prevId].display = false;
            return state;
        default:
            return state;
    }
}
export const TabReducer = (state, action) =>{
    switch(action.type){
        case 'SWITCH_DISPLAY':
            state.map(tab => action.counter++ === action.id ? tab.display = !tab.display : tab.display = false);
            return state;
        default:
            return state;
    }
}
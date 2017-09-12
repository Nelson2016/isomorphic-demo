/*
 * Javascript Document
 * Creat by Nelson on 2017/7/11
 * 
 * Website:https://segmentfault.com/u/nelson2016
 * 
 * QQ:616859570
 * Email:Nelson_Lee@outlook.com
 * */
import initState from '../store/init-state';

let reducer = (state = initState, action) => {
    switch (action.type) {
        case 'TEST':
            let newState = state;
            newState.data = state.data + 1;
            return Object.assign({}, state, newState);
        default :
            return state;
    }
}

export default reducer;
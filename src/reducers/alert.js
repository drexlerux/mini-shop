import ActionFlags from '../ActionFlags';
const alert = (state = [], action) => {
    if(action.type === ActionFlags.TOGGLE_ALERT){
        return action.alert
    }
    return state
}

export default alert;

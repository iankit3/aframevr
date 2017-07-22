const selected = (state = {},action) => {
    console.log(action)
    console.log(state)
    switch(action.type){
        case "SELECT":{
            return Object.assign({},state,{selected: action.text});
        }
        default:
            return state
    }
}

export default selected
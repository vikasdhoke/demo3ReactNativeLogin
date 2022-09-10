// import { BUY_CAKE } from "./cakeTypes"

const initialState = {
    numOfCakes : 10
}


const cakereducer = (state = initialState , action) =>{
// export default cakereducer = (state = initialState , action) =>{
   if(action.type =='buyCake'){
    return state - action.payload
   }
   else{
    return state
   }
}

export default cakereducer
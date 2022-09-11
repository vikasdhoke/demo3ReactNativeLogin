// import { BUY_CAKE } from "./cakeTypes";


export const buyCake = (numOfCakes) =>{
    return (dispatch)=>{
        dispatch ({
            type : 'buyCake',
            payload: numOfCakes

        })
       

    }
}
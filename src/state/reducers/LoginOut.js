// import { View } from "react-native";
// import Homescreen from "../../screens/Homescreen";
// import SignInscreen from "../../screens/SignInscreen";

//Reducer
const initialState = {
  username: '',
  password: ''
};
  
const navigatetoa = (state = initialState, action)=> {
    switch (action.type) {
        case "LOGIN":
           return {
            username : "Vikas",
            password : "123"           
                  
           };  

        // case "LOGOUT":
        // return {
        //   page : (<SignInscreen />)
        // };     

        default:
            return state;
        }  

}

export default navigatetoa;
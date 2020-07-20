import { stateList } from './states';

const checkState = () => {

}

export const registerAccount = (user) => {
    console.log(user);
    if(stateList.indexOf(user.state.toUpperCase()) >= 0) {
        console.log("EXISTS!");
    }else{
        console.log("STATE DOES NOT EXIST");
    }
    }
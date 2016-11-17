import { browserHistory } from 'react-router'


function redirectToHome(error){
    alert(error + " you will be redirected to the home page")
    browserHistory.push("/")
}


export { redirectToHome };

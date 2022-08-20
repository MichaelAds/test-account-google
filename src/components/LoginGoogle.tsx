import { useContext } from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { UserYouTube } from "../App";



const clientId = "184281426172-8en32p2vhcae3i26cqgtatk633p3uk93.apps.googleusercontent.com";


export function LoginGoogle() {
    const history = useHistory();
    const { userCode, setUserCode } = useContext(UserYouTube)

    async function onSuccess(res: any) {
        console.log("LOGIN SUCCESS! Current user: ", res, res.accessToken)
        setUserCode(res.accessToken);

        if(res.accessToken){
            history.push('/dashboard-search');
        }
    }
    
    console.log(userCode);
    const onFailure = (res: any) => {
        console.log("LOGIN FAILED! res: ", res)
    }
    

    return(
        <div id="signInButton">
            <GoogleLogin 
                clientId={clientId}
                buttonText="Connect to"
                scope= "https://www.googleapis.com/auth/youtube"
                onSuccess={onSuccess}
                onFailure={onFailure}
                accessType="offline"
                prompt="consent"
                responseType="token"
                isSignedIn={true}
    
            />

        </div>
    )
}
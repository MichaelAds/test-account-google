
import '../styles/auth.scss'
import googleIconImg from '../assets/images/google-icon.svg'
import { useAuth } from '../hooks/useAuth'
import { useHistory } from 'react-router-dom';

import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "184281426172-8en32p2vhcae3i26cqgtatk633p3uk93.apps.googleusercontent.com";

export function Home() {
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: 'https://www.googleapis.com/auth/youtube.readonly',
                discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
            })
        };
        gapi.load('client:auth2', start);
    })

    // var acessToken = gapi.auth?.getToken().access_token;

    // console.log(acessToken);

    const history = useHistory();

    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom() {
        console.log(user)
        if(!user) {
            await signInWithGoogle();

        }
        history.push('/dashboard-search')
    }

    return (
        <div id="page-auth">
            <main>
                <div className="main-content">
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="logo do google" />    
                        Access acount Google
                    </button>
                </div>
            </main>
        </div>
    )
}

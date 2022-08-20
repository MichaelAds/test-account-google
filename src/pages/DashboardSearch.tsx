import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { UserYouTube } from "../App";
import { Header } from "../components/Header";
import { ProgressBar } from "../components/ProgressBar";
import google from "../services/google";


export function DashboardSearch() {
    const { userCode, setUserCode } = useContext(UserYouTube) 
    const history = useHistory();
    const [ channelId, setChannelId ] = useState('');
    const [ Industry, setIndustry ] = useState('');
    const [ niche, setNiche ] = useState('');

    // const notify = () => toast("download started", {
    //     position: "top-right",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     });
    
    async function handleSearchChannel(event: any) {
        event.preventDefault();
        console.log(userCode);


        const response = await google.get('/report', {
            params: { channelId: 'UCRE-DeSs2bFkTu86r0BQW1w', industry: 'Marketing',
            niche: 'Ads'},
            headers: { 'Authorization': userCode}
        })

        console.log(response);
        
    }
    return(
        <div>
            <Header />

            <main>
                <h2>Search Channel</h2>
                <form onSubmit={handleSearchChannel}>
                    <input 
                        type="text" 
                        placeholder="Channel ID"
                        onChange={event => setChannelId(event.target.value)}
                        value={channelId}
                    />

                    <input 
                        type="text" 
                        placeholder="Industry"
                        onChange={event => setIndustry(event.target.value)}
                        value={Industry}
                    />

                    <input 
                        type="text" 
                        placeholder="niche"
                        onChange={event => setNiche(event.target.value)}
                        value={niche}
                    />

                    <button type="submit" className="button">search</button>
                </form>

                <ProgressBar value={100} max={400} />
            </main>
        </div>  
    );
}
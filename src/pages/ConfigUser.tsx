import { Header } from "../components/Header";
import { LoginGoogle } from "../components/LoginGoogle";

import "../styles/config.scss";

export function ConfigUser() {
    return (
        <div>
            <Header />

            <main>
                <div className="title">
                    <h2>Connections</h2>

                    <p>connect other accounts</p>
                </div>

                <LoginGoogle />
            </main>
        </div>
    )
}
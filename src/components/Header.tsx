import { useAuth } from "../hooks/useAuth";
import '../styles/header.scss'

export function Header() {
    const { user } = useAuth()

    return(
        <header>
            <div className="header">
                <img src={user?.avatarURL} alt={user?.name} />
                <h2>{user?.name}</h2>
            </div>
        </header>
    );
}
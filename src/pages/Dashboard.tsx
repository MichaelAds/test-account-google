import { Header } from "../components/Header";

import '../styles/dashboard.scss';

export function Dashboard() {
    return (
        <div>
            <Header />
            <aside>
                <div className="line"></div>
                <div className="form-checkbox">
                    <form>
                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value="love"
                                />
                                <span>Exclude new videos ( 14 days old)</span>
                            </label>{' '}

                            <label>
                                <input
                                type="checkbox"
                                value="love"
                                />
                                <span>Exclude aged videos (1 YR+)</span>
                            </label>{' '}
                        </div>

                        <div className="checkbox">
                            <label>
                                <input
                                type="checkbox"
                                value="love"
                                />
                                <span>Exclude low videos (300 views)</span>
                            </label>{' '}

                            <label>
                                <input
                                type="checkbox"
                                value="love"
                                />
                                <span>Filter by video duration?</span>
                            </label>{' '}
                        </div>

                    </form>
                </div>
            </aside>
        </div>
    )
}
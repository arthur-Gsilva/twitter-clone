import { MainHeader } from "../MainHeader"

import '../../styles/sass/main/styles.scss'
import { Tweet } from "../Tweet"

export const MainArea = () => {
    return(
        <main className="main">
            <div className="main-content">
                <MainHeader />

                <div className="user-profile">
                    <div className="profile-banner"></div>
                </div>

                <div className="profile-info">
                    <div className="user-info">
                        <div className="user-avatar"></div>

                        <h2 className="userName">Arthur</h2>
                        <p className="nickName">@arthur7gd</p>

                        <div className="follows">
                            <div>
                                <div className="follows-number">99</div>
                                seguindo
                            </div>
                            <div>
                                <div className="follows-number">99</div>
                                seguidores
                            </div>
                        </div>
                    </div>

                    <div className="edit-btn">
                        <button>Editar perfil</button>
                    </div>
                </div>

                <div className="main-nav">
                    Tweets
                    <div className="main-bar"></div>
                </div>

                <Tweet />
                <Tweet />
                <Tweet />
                <Tweet />
            </div>
        </main>
    )
}
import '../../styles/sass/rightside/styles.scss'

import { HiOutlineSearch } from 'react-icons/hi'

export const RightSide = () => {
    return(
        <aside className="right-side">
            <div className="right-content">

                <div className="input-area">
                    
                    <HiOutlineSearch />
                    <input type="text" placeholder='Buscar no Twitter'/>
                    
                </div>

                <div className="maybe-like">
                    <div className="maybe-container">
                        <h3>Talvez você curta</h3>

                        <div className="maybe-content">
                            <div className="maybe-user">
                                <div className="user-avatar"></div>
                                <div className="user-info">
                                    <h5>usuario</h5>
                                    <p>@usuario</p>
                                </div>
                            </div>

                            <div className="follow-btn">
                                <button>Seguir</button>
                            </div>
                        </div>
                        <div className="maybe-content">
                            <div className="maybe-user">
                                <div className="user-avatar"></div>
                                <div className="user-info">
                                    <h5>usuario</h5>
                                    <p>@usuario</p>
                                </div>
                            </div>

                            <div className="follow-btn">
                                <button>Seguir</button>
                            </div>
                        </div>
                        <div className="maybe-content">
                            <div className="maybe-user">
                                <div className="user-avatar"></div>
                                <div className="user-info">
                                    <h5>usuario</h5>
                                    <p>@usuario</p>
                                </div>
                            </div>

                            <div className="follow-btn">
                                <button>Seguir</button>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="trending">
                    <div className="trending-container">
                        <h3>O que está acontecendo</h3>

                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                        <div className="trending-content">
                            <p>assunto do momento no Brasil</p>
                            <h4>programação react</h4>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}
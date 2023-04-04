import { BsArrowLeft } from 'react-icons/bs'

export const MainHeader = () => {
    return(
        <div className="header-main">
            <div className="header-main-content">
                <BsArrowLeft />

                <div className="header-user-info">
                    <h5>Arthur</h5>
                    <p>999 tweets</p>
                </div>
            </div>
        </div>
    )
}
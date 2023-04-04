import '../../styles/sass/tweet/styles.scss'

import { BsFillChatDotsFill } from 'react-icons/bs'
import { VscArrowSwap } from 'react-icons/vsc'
import { AiFillHeart } from 'react-icons/ai'

export const Tweet = () => {
    return(
        <div className="tweet">
            <div className="tweet-content">
                <div className="user-avatar"></div>

                <div className="tweet-info">
                    <p>
                        <span>Arthur </span>
                        @arthur7gd - 30 de fev
                    </p>
                    <p className='tweet-text'>
                        Isto é um tweet
                    </p>

                    <div className="tweet-image"></div>

                    <div className="tweet-interactions">
                        <div className="comment">
                            <BsFillChatDotsFill className='tweet-icon'/>
                            999
                        </div>
                        <div className="retweet">
                            <VscArrowSwap className='tweet-icon'/>
                            999
                        </div>
                        <div className="like">
                            <AiFillHeart className='tweet-icon'/>
                            999
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
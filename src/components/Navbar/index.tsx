import '../../styles/sass/navbar/styles.scss'

import { BsTwitter } from 'react-icons/bs'
import { BiHomeCircle } from 'react-icons/bi'
import { FiHash } from 'react-icons/fi'
import { VscBell } from 'react-icons/vsc'
import { BiEnvelope } from 'react-icons/bi'
import { BsBookmark } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { CiCircleMore } from 'react-icons/ci'
import { FiMoreHorizontal } from 'react-icons/fi'
import { RiQuillPenLine } from 'react-icons/ri'
import {AiOutlineSearch} from 'react-icons/ai'


export const Navbar = () => {
    return(
        <nav className='nav'>
            <div className="nav-content">
                <div className="nav-item">
                    <BsTwitter />
                </div>
                <div className="nav-item">
                    <BiHomeCircle />
                    <p>Página Inicial</p>
                </div>
                <div className="nav-item search-btn">
                    <AiOutlineSearch />
                </div>
                <div className="nav-item">
                    <FiHash />
                    <p>Explorar</p>
                </div>
                <div className="nav-item">
                    <VscBell />
                    <p>Notificações</p>
                </div>
                <div className="nav-item">
                    <BiEnvelope />
                    <p>Mensagens</p>
                </div>
                <div className="nav-item">
                    <BsBookmark />
                    <p>Salvos</p>
                </div>
                <div className="nav-item">
                    <AiOutlineUser />
                    <p>Perfil</p>
                </div>
                <div className="nav-item">
                    <CiCircleMore />
                    <p>Mais</p>
                </div>
                <div className="nav-item tweet-button small-size">
                    <RiQuillPenLine />
                </div>
                <div className='nav-item tweet-button large-size'>
                    <button>Tweetar</button>
                </div>

                <div className="user-avatar"></div>
            </div>
        </nav>
    )
}
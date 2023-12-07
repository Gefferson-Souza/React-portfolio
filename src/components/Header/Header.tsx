import { Link } from 'react-router-dom';
import './Header.scss'
import HeaderLogo from './HeaderLogo';
import { HoverContext } from '../../context/Hover';
import { useContext } from 'react';

const Header = () => {

    const { setIsHover } = useContext(HoverContext);

    return (
        <header>
            <div>
                <HeaderLogo />
            </div>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} to="/sobre" >Sobre Mim</Link></li>
                    <li><Link onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} to="/projetos" >Projetos</Link></li>
                    <li><Link onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)} to="/contato" >Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
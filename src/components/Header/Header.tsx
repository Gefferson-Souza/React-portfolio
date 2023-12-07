import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss'

const Header = () => {

    const frases: string[] = useMemo(() => ['Gefferson T. de Souza', 'Front End DEV', 'Meu Portfólio'], []);

    const [ponteiro, setPonteiro] = useState<number>(0)

    const [frase, setFrase] = useState<string>(frases[ponteiro])

    useEffect(() => {
        const interval = setInterval(() => {
            setPonteiro((ponteiro + 1) % frases.length)
            setFrase(frases[ponteiro])
        }, 2000)

        return () => clearInterval(interval);
    }, [ponteiro, frases])

    return (
        <header>
            <div>
                <div className="logo" key={frase} >
                    {frase}
                </div>
            </div>
            <nav>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/sobre" >Sobre Mim</Link></li>
                    <li><Link to="/projetos" >Projetos</Link></li>
                    <li><Link to="/contato" >Contato</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
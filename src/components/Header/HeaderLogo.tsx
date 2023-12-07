import { useState, useEffect, useMemo } from 'react';

const HeaderLogo = () => {
    const phrases: string[] = useMemo(() => ['Gefferson T. de Souza', 'Front End DEV', 'Meu Portfólio'], []);

    const [pointer, setPointer] = useState<number>(0)

    const [phrase, setPhrase] = useState<string>(phrases[pointer])

    useEffect(() => {
        const interval = setInterval(() => {
            setPointer((prevPointer) => (prevPointer + 1) % phrases.length)
            setPhrase(phrases[pointer])
        }, 2000)

        return () => clearInterval(interval);
    }, [pointer, phrases])

    return (
        <div className="logo" key={phrase} >
            {phrase}
        </div>
    )
}

export default HeaderLogo;
import { useState, useContext, useLayoutEffect } from 'react';
import { HoverContext } from '../../context/Hover';
import { Icon, dataIcons } from '../../api/dataIcons';
import './Home.scss'

const icons: Icon[] = dataIcons;

const Home = () => {

    const { isHover } = useContext(HoverContext);

    const [iconState, setIconState] = useState<string>('initial');

    useLayoutEffect(() => {
        if (isHover) {
            setIconState('hovered')
        }
    }, [isHover]);

    function setItemDataState(e: HTMLElement, state: string): void {
        const item = e;
        item.dataset.set = state;
    }

    function checkIfHoverIsFalse(): void {
        if (!isHover) setIconState('final');
    }

    function tiltText(e: React.MouseEvent<HTMLHeadingElement, MouseEvent>): void {
        const title = e.currentTarget;
        const { offsetX, offsetY, target } = e.nativeEvent;
        const { clientWidth, clientHeight } = target as HTMLElement;
        const xPos = (offsetX / clientWidth) * 2 - 1 ; // Normaliza para o intervalo [-1, 1]
        const yPos = (offsetY / clientHeight) * 2 - 1; // Normaliza para o intervalo [-1, 1]
        const tiltX = xPos * 10; // Ajuste a inclinação conforme necessário
        const tiltY = yPos * 10; // Ajuste a inclinação conforme necessário
        const textShadowX = xPos * 10; // Ajuste conforme necessário
        const textShadowY = yPos * 10; // Ajuste conforme necessário
        title.style.transition = 'transform 0.3s ease-in-out, text-shadow 0.3s ease-in-out';
        title.style.transform = `perspective(1200px) rotateX(${tiltY}deg) rotateY(${tiltX}deg)`;
        title.style.textShadow = `${textShadowX}px ${textShadowY}px 5px rgba(0, 0, 0, 0.5)`;
      }

    return (
        <main className='home-container'>
            <h1 onMouseMove={tiltText} 
                onMouseLeave={() => {
                    setIconState('final');
                    const title = document.querySelector('.title') as HTMLElement;
                    title.style.transition = 'transform 1s linear';
                    title.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
                    title.style.textShadow = '0px 0px 0px rgba(0, 0, 0, 0.5)';
                    }} 
                    data-text='Desenvolvedor Front End'
                    className='title'>
                        Desenvolvedor <br />
                        Front End
            </h1>
            <div className='title-icons-wrapper'>
                    {icons.map((icon, index) => {
                        const { className, delay, color, phrase } = icon;
                        return (
                            <i
                                key={index}
                                onAnimationIteration={checkIfHoverIsFalse}
                                onAnimationEnd={(e) => setItemDataState(e.target as HTMLElement, 'final')}
                                data-set={iconState}
                                data-phrase={phrase}
                                className={`${className}`}
                                style={{ '--delay': delay, '--cor': color } as React.CSSProperties}
                            ></i>
                        );
                    })}
                </div>
        </main >
    )
}

export default Home;
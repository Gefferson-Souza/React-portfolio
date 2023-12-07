
import { useState, useContext, useEffect } from 'react';
import './Home.scss'
import { HoverContext } from '../../context/Hover';
import { Icon, dataIcons } from '../../api/dataIcons';

const icons: Icon[] = dataIcons;

const Home = () => {

    const { isHover } = useContext(HoverContext);

    const [iconState, setIconState] = useState<string>('initial');

    useEffect(() => {
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

    return (
        <main className='main-container'>
            <h1 className='title'>Desenvolvedor <br /> Front End <br />
                <div className='title-icons-wrapper'>
                    {icons.map((icon, index) => {
                        const { className, delay, color, phrase } = icon;
                        return (
                            <i
                                key={index}
                                onAnimationIteration={() => checkIfHoverIsFalse()}
                                onAnimationEnd={(e) => setItemDataState(e.target as HTMLElement, 'final')}
                                data-set={iconState}
                                data-phrase={phrase}
                                className={`${className}`}
                                style={{ '--i': delay, '--cor': color } as React.CSSProperties}
                                onMouseOver={(e) => setItemDataState(e.target as HTMLElement, 'hovered')}
                                onMouseOut={(e) => setItemDataState(e.target as HTMLElement, 'final')}

                            ></i>
                        );
                    })}
                </div>
            </h1>
        </main >
    )
}

export default Home;
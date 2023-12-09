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

    return (
        <main className='home-container'>
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
                                style={{ '--delay': delay, '--cor': color } as React.CSSProperties}
                            ></i>
                        );
                    })}
                </div>
            </h1>
        </main >
    )
}

export default Home;
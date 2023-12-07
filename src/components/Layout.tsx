import { ReactNode } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'

interface ILayoutProps {
    children: ReactNode
}

const Layout = ({ children }: ILayoutProps) => {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Layout;
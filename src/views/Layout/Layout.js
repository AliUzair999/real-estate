import { Link, Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import '../../App.css'

export default function Layout() {

    return <>
        <header>
            <Header />
        </header>

        <div id='body'>
            <Outlet />
        </div>

        <footer>
            <Footer />
        </footer>
    </>
}
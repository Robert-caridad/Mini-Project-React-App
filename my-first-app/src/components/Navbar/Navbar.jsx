import './Navbar.css'
import logo from './../../assets/logo.png'
const Navbar = () => {
    return (
        <header className='Navbar'>

            <nav>
                <img src={logo} alt="Logotipo" />
                <h1>Mar de apartamentos</h1>
            </nav>

        </header>

    )
}

export default Navbar
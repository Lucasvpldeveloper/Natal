import logo from '../assets/logo.png'
import './style.module.scss'

export default function Header() {
    return(
        <header>
            <img src={logo} alt="árvore de natal" />
            <nav>
                <h1>Feliz Natal!</h1>
                <ul>
                    <li>Inicio</li>
                    <li>Curiosidade</li>
                    <li>Galeria</li>
                </ul>
            </nav>
        </header>
    )
}
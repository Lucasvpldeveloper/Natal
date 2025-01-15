import './style.module.scss'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'
import presente from '../assets/presente.png'

export default function Footer() {
    return(
        <footer>
            <div>
                <img src={linkedin} alt="Logo linkedin" />
                <img src={instagram} alt="Logo instagram" />
                <img src={github} alt="Logo GitHub" />
            </div>
            <nav>
                <p>Lucas Vinicius</p>
                <p>Instrutor: Vinicius</p>
                <p>Facilitadora: Marina</p>
                <p>Layout criado para fins natalistícos na escola vai na web</p>
            </nav>
            <section>
                <img src={presente} alt="Presentes" />
            </section>
        </footer>
    )
}
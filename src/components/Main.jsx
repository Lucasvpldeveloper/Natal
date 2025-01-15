import principalMain from '../assets/principalMain.png'
import arvoreGlobo from '../assets/arvoreGlobo.png'
import cidade1 from '../assets/cidade1.png'
import cidade2 from '../assets/cidade2.png'
import cidade3 from '../assets/cidade3.png'
import S from './style.module.scss'


export default function Main() {
    return(
        <main>
            <section className={S.imgPrincipal}>
                <img src={principalMain} alt="Papai noel fazendo presentes" />
            </section>
            <section className={S.origemBox}>
                <img src={arvoreGlobo} alt="Globo de natal com arvore dentro" />
                <p>A origem do globo de neve é incerta, mas acredita-se que tenha surgido na Europa no século XIX, tornando-se um símbolo de magia, afeto e encantamento, especialmente no Natal, trazendo um toque de nostalgia e maravilha para as celebrações e encantando gerações ao redor do mundo.</p>
            </section>
            <section className={S.imagensBox}>
                <img src={cidade1} alt="Cidades para viajar no natal" />
                <img src={cidade2} alt="Cidade para viajar no natal" />
                <img src={cidade3} alt="Cidade para viajar no natal" />
            </section>
        </main>
    )
}
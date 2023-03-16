import React from 'react'
import Link from 'next/link'
import image1 from '@/public/image1.png'

const Home = () =>{

    return(
        <>
          <div className="main_content">
            <div className="container">
                <div className="main_home">
                    <div className="main_home_header d-flex justify-content-md-between align-items-center flex-md-row flex-column">
                        <div className='col-12 col-md-4' >
                            <div className="main_home_text">
                                <h1><span>Implemente</span> <br/>
                                o seu futuro global agora!</h1>
                                <p>
                                Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.
                                </p>
                            <br/>
                            <div className="main_home_btn">
                                <div className="mbtn1_after">
                                    <div className='mbtn1' >
                                        <Link href="/login">Começar agora.</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className='main_home_figure' >
                            <img src={image1.src} alt="imagem 1" />
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
        </>
    )
}
export default Home
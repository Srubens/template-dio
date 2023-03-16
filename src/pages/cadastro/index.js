import React from 'react'
import Link from 'next/link'
import { FaRegEnvelope, FaLock, FaUserAlt } from 'react-icons/fa';

const cadastro = () =>{
    return(
        <div className="main_content">
            <div className="container">
                <div className="main_login">
                    <div className="main_login_header d-flex justify-content-md-between align-items-center flex-md-row flex-column">
                        <div className='col-12 col-md-5' >
                            <div className="main_login_text">
                                <h1>
                                A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
                                </h1>
                            <br/>
                            
                            </div>
                        </div>
                        <div className='main_login_form col-12 col-md-4' >
                            <h1>
                            Comece agora grátis
                            </h1>
                            <p>Crie sua conta e make the change._</p>
                            <div>
                                <form className='main_form_login' >
                                    <div className="input_name">
                                        <span className='main_icon'><FaUserAlt />
                                        </span>
                                        <input type="text" placeholder='Nome completo' />
                                    </div>
                                    <div className="input_email">
                                        <span className='main_icon'><FaRegEnvelope />
                                        </span>
                                        <input type="text" placeholder='E-mail' />
                                    </div>
                                    <div className="input_password">
                                        <span className='main_icon'><FaLock/>
                                        </span>
                                        <input type="text" placeholder='Password' />
                                    </div>
                                    <div className="d-flex text-center mx-4">
                                        <div className='mbtn1_entrar' >
                                            <Link href="#" >Entrar</Link>
                                        </div>
                                    </div>
                                </form>
                                <div className="d-flex mt-4 flex-column">
                                    <p>
                                    Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                                    </p>
                                    <p>Já tenho conta. 
                                    <span><Link href="/login">Fazer login</Link></span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
          </div>
    )
}

export default cadastro
import Link from 'next/link'
import Logo from '@/public/logo.png'

const Header = () =>{
    return(
        <header className='main_header_top' >
            <div className="container">
                <div className="d-flex justify-content-between align-items-center flex-md-row flex-column">
                    <div className='main_logo' >
                        <Link href="/">
                            <img src={Logo.src} alt="logo-dio" />
                        </Link>
                    </div>
                    <div className='main_menu_list' >
                        <ul className='main_ul_menu d-flex flex-md-row flex-column' >
                            <li>Home</li>
                            <li className='mbtn' >
                                <Link href="/login">Entrar</Link>
                            </li>
                            <li className='mbtn' >
                                <Link href="/cadastro" >Cadastrar</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
          </header>
    )
}
export default Header
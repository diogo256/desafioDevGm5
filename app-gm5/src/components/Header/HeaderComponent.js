import React, { Component } from 'react'
import Logo from '../../static/image/LogoGM5.png'

import './HeaderComponent.scss'


class Header extends Component {
    render(){
        return(
            <header>
                <div className="container">
                    <div className="row-no-gutters">
                        <div id="logo" className="col-xs-4 col-md-2">
                            <a href="/"><img alt="teste" src={Logo}/></a>
                        </div>
                        <div className="visible-xs-4 menumob">1</div>
                        <nav className="col-xs-12 col-md-10">
                            <ul>
                                <li>
                                    <a href="/">home</a> 
                                </li>
                                <li>
                                    <a href="/#quem-somos">quem somos</a>
                                </li>
                                <li>
                                    <a href="/#nossos-servicos">nosso serviços</a>
                                </li>
                                <li>
                                    <a href="/#contato">contato</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header
import React, { Component } from 'react'

import './Footer.scss'


class FooterComponent extends Component{
    render(){
        return(
            <footer>
                <div className="footer"> 
                    <div className="container">
                        <div className="navsecundario hidden-xs col-md-4">
                            <nav>
                                <ul>
                                    <li>
                                        <a href="/">home</a> 
                                    </li>
                                    <li>
                                        <a href="/#quem-somos">quem somos</a>
                                    </li>
                                    <li>
                                        <a href="/#nossos-servicos">serviços</a>
                                    </li>
                                    <li>
                                        <a href="/#contato">contato</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="dadosempresa col-md-5">
                            <strong>endereço</strong>
                            <p>nullam lacinia justo sit amet quam porta tempor.</p>
                            <strong>contato</strong>
                            <a href="mailto:contato@gm5.com.br">contato@gm5.com.br</a>
                        </div>
                        <div className="redesociais col-md-3">
                            <strong>redes sociais</strong>
                            <ul>
                                <li className="facebook">
                                    <a href="#facebook">facebook</a>
                                </li>
                                <li className="instagram">
                                    <a href="#instagram">instagram</a>
                                </li>
                                <li className="twitter">
                                    <a href="#twitter">twitter</a>
                                </li>
                                <li className="linkedin">
                                    <a href="#linkedin">linkedin</a>
                                </li>
                            </ul>
                            <p>copyright 2019 - gm5 tecnologia</p>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent
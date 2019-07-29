import React, { Component } from 'react'
import Logo from '../../static/image/LogoGM5.png'

import './HeaderComponent.scss'


class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            isMenu: ''
        }

        this.isMenu = this.isMenu.bind(this)
    }

    isMenu(e){
        console.log(e.currentTarget.className)
        e.currentTarget.className === ''?(
            this.setState({
                isMenu: 'active'
            })
        ):(
            this.setState({
                isMenu: ''
            })
        )
    }

    render(){
        const isMenuBox = this.state.isMenu;

        return(
            <header>
                <div className="container">
                    <div className="row-no-gutters">
                        <div id="logo" className="col-xs-4 col-md-2">
                            <a href="/"><img alt="teste" src={Logo}/></a>
                        </div>
                        <div className="visible-xs col-xs-4 visible-sm menumob">
                            <div className="menu-button">
                                <a href="#menu" onClick={this.isMenu} className={this.state.isMenu}>
                                    <span>Menu</span>
                                    <span></span>
                                    <span></span>
                                </a>
                            </div>
                        </div>
                        <nav className={isMenuBox !== ''? 'col-xs-12 col-md-10 open': 'col-xs-12 col-md-10 '}>
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
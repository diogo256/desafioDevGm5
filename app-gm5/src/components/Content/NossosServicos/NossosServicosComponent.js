import React, { Component } from 'react'

import './NossosServicos.scss'
import image1 from '../../../static/image/servico-1.png'
import image2 from '../../../static/image/servico-2.png'
import image3 from '../../../static/image/servico-3.png'

class NossosServicos extends Component{
    render(){
        
        return(
            <div className="col-xs-12 col-md-9 nossoservico">
                <h2>NOSSOS SERVIÇOS</h2>
                <ul className="col-xs-12 col-md-12 row">
                    <li className="col-xs-12 col-md-4 row">
                        <a href="#teste">
                            <div className="col-xs-12 col-md-8 row imgservico">
                                <img src={image1} alt="serviço 1" />
                            </div>
                            <h3>SITES</h3>
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. </p>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="#teste">
                            <div className="col-md-8 row imgservico">
                                <img src={image2} alt="serviço 2" />
                            </div>
                            <h3>APPS</h3>
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. </p>
                        </a>
                    </li>
                    <li className="col-md-4">
                        <a href="#teste">
                            <div className="col-md-8 row imgservico">
                                <img src={image3} alt="serviço 3" />
                            </div>
                            <h3>MKT DIGITAL</h3>
                            <h4>Lorem ipsum dolor sit amet</h4>
                            <p>Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. </p>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default NossosServicos
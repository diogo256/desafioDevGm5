import React, { Component } from 'react'
import imageQuemSomos from '../../../static/image/quem-somos.png'

import './QuemSomosComponent.scss'

class QuemSomosComponent extends Component{
    render(){
        return(
            <React.Fragment>                
                <div className="col-xs-12 col-md-7 boxquemsomos1">
                    <img src={imageQuemSomos} alt="imagem azul" />
                </div>
                <div className="col-xs-12 col-md-5 boxquemsomos2">
                    <h2>QUEM SOMOS</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia justo sit amet quam porta tempor. Etiam eros sem, mollis eget risus eget, viverra gravida orci. Sed non arcu id nulla fringilla ultricies. Ut aliquet convallis cursus. Pellentesque tincidunt, libero ut volutpat gravida, tellus velit porta lacus, vitae pellentesque urna erat ac eros. In quis ante fermentum, ullamcorper velit ut, viverra risus. Cras volutpat justo tellus, in convallis augue sodales at. Cras varius semper metus laoreet aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus luctus convallis metus. Cras et elit eu diam rutrum iaculis. Morbi malesuada efficitur justo a tincidunt.</p>
                </div>
            </React.Fragment>
        )
    }
}

export default QuemSomosComponent
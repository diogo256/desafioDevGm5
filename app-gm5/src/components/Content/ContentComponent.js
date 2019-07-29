import React, { Component } from 'react'

import './Content.scss'

import QuemSomosComponent from './QuemSomos/QuemSomosComponent';
import NossosServicos from './NossosServicos/NossosServicosComponent';
import LinksComponent from './Links/LinksComponent';


class ContentComponent extends Component{
    render(){
        return(
            
            <div className="container"> 
                <QuemSomosComponent />
                <NossosServicos />
                <LinksComponent />
            </div>
            
        )
    }
}

export default ContentComponent
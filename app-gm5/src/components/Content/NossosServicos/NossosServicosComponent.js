import React, { Component } from 'react'
import axios from 'axios'

import './NossosServicos.scss'

class NossosServicos extends Component{
    constructor(props){
        super(props)

        this.state = {
            estaCarregando: false,
            listaNossoServicos: []
        }

        this.getServico = this.getServico.bind(this);
    }


    getServico(){
        this.setState({
            estaCarregando: true
        })


        axios.get('http://localhost:3001/Servico').then(response => {
            this.setState({
                estaCarregando: false,
                listaNossoServicos: response.data
            })
        })
    }

    componentDidMount(){
        this.getServico();
    }

    render(){
        const listaServicos = this.state.listaNossoServicos || []
        const estaCarregando = this.state.estaCarregando
        
        return(
            <div className="col-xs-12 col-md-9 nossoservico">
                <h2>NOSSOS SERVIÇOS</h2>
                
                {estaCarregando && <div className="loading-icon"></div>}
                <ul className="col-xs-12 col-md-12 row">
                    {
                        listaServicos.map((item, i) =>
                                <React.Fragment key={item.Posicao}>
                                    <li className={i === 0 ? "col-xs-12 col-md-4 row": "col-xs-12 col-md-4"}>
                                        <a href={item.URL}>
                                            <div className="col-xs-12 col-md-8 row imgservico">
                                                <img src={require('../../../static/image/'+item.Imagem)} alt={item.Titulo} />
                                            </div>
                                            <h3>{item.Titulo}</h3>
                                            <h4>{item.Subtitulo}</h4>
                                            <p>{item.Descricao}</p>
                                        </a>
                                    </li>
                                </React.Fragment>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default NossosServicos
import React, { Component } from 'react'
import Header from '../Header/HeaderComponent'
import BannerComponent from '../Banner/BannerComponent'
import ContentComponent from '../Content/ContentComponent'
import FooterComponent from '../Footer/FooterComponent';




class HomePage extends Component {
    render(){
        return (        
            <React.Fragment>
                <Header />
                <section id="main">
                    <BannerComponent />
                    <ContentComponent />                
                </section>   
                <FooterComponent />
            </React.Fragment>    
        );
    }
}

export default HomePage
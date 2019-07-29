import React, { Component } from 'react'

import './Links.scss'

class LinksComponent extends Component{
    render(){
        
        return(
            <div className="col-md-3 links">
                <h2>LINKS</h2>
                <ul>
                   <li>
                       <a href="#link1">
                            <span>1.</span>
                            Lorem ipsum dolor sit amet
                       </a>
                    </li>
                   <li>
                        <a href="#link2">
                            <span>2.</span>
                            Lorem ipsum dolor sit amet
                        </a>
                   </li>
                   <li>
                        <a href="#link3">
                            <span>3.</span>
                            Lorem ipsum dolor sit amet
                        </a>
                   </li>
                </ul>
            </div>
        )
    }
}

export default LinksComponent
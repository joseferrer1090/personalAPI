import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                 <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Consumo API</a>
                    </div>
                    
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        
                            <ul className="nav navbar-nav">    
                                <li>
                                   <Link to={'/'}>
                                        Get
                                   </Link>                              
                                </li>
                                <li>
                                    <Link to={'/posteo'}>
                                        Post
                                    </Link>
                                </li>
                                <li>
                                    <Link to={'/update'}>
                                        Put
                                    </Link>
                                </li>

                                <li>
                                    <Link to={'/delete'}>
                                        Delete
                                    </Link>
                                </li>

                            </ul>
                       
                    </div>
                    
                </div>
                
            </nav>
            </div>
        );
    }
}

export default Header;
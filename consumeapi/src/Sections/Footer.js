import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
               <footer className="container-fluid text-center bg-lightgray">
                    <div className="copyrights">
                        <p>
                                Bogota D.C City © 2017, All Rights Reserved
                                <br/>
                                <span>Web Development Junior By: Jose Carlos Ferrer</span>
                            </p>
                        <p><a href="#" target="_blank">Jose Carlos Ferrer</a></p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;
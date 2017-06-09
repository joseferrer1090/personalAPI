import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './../Sections/Header';
import Footer from './../Sections/Footer';
import moment from 'moment';
import {getTasks} from './../services/tasks';

require('moment/locale/es.js');
moment.locale('es');
class Home extends Component {
    
     constructor(props){
		super(props)
		this.state = {
			tasks: []
		}
        this.getTask();
        
	}
    getTask(){
        getTasks().then(tasks=> {
            this.setState ({
                tasks: tasks
            });
        });
    }
    render() {
        
        let listTasks = this.state.tasks.map(function(e){
            return(
                // El td de la Tabla donde va a ir
                <tr key={e.id}>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td>{moment(e.created_at).format('LL')}</td>
                    <td>{moment(e.updated_at).format('LL')}</td>
                </tr>
            )
        })

        return (
            <div>
                <Header/>
                <div className="container contentPersonal">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Get Task List</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="panel-content">
                                       <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th>id</th>
                                                        <th>Name</th>
                                                        <th>Description</th>
                                                        <th>Fecha Creacion</th>
                                                        <th>Fecha Modificado</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {listTasks}
                                                </tbody>
                                            </table>
                                       </div>
                                    </div>
                                </div>
                                 <div className="panel-footer">
                                    
                                    <a className="btn btn-default" onClick={this.getTask.bind(this)}> <i className="fa fa-refresh"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Home;
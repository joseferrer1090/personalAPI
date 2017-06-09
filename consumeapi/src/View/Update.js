import React, { Component } from 'react';
import {Link} from 'react-dom';
import {getTasks} from './../services/tasks';
import {putTasks} from './../services/tasks';

import Header from './../Sections/Header';
import Footer from './../Sections/Footer';

import moment from 'moment';

require('moment/locale/es.js');
moment.locale('es');

class Update1 extends Component {
    constructor(props){
        super(props)
        this.state = {
            updateTask: [],
            tasksID: '',
            tasksAuxi: {}, 
        }
        getTasks().then(updateTask => {
            this.setState({
                updateTask: updateTask
            });
        });
    }
    
    handleChangeName(event){
        var value = event.target.value;
        var data = this.state.tasksAuxi;
        data.name = value;
        this.setState({tasksAuxi: data});
        //console.log(data);
    }

    handleChangeDescription(event){
        var value = event.target.value;
        var data = this.state.tasksAuxi;
        data.description = value;
       this.setState({tasksAuxi: data});
       // console.log(data);
    }

     updateDatos(){
         console.log('lo que sea');
       putTasks(this.state.tasksAuxi.id, this.state.tasksAuxi)
        .then(tasks => {
            console.log(tasks);
            getTasks().then(updateTask => {
                this.setState({
                    updateTask: updateTask
                });
            });
        })
    }

    render() {
        let listTask = this.state.updateTask.map(function(e){
            return(
                <tr key={e.id}> 
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.description}</td>
                    <td className="text-center">{moment(e.created_at).format('LL')}</td>
                    <td className="text-center">{moment(e.updated_at).format('DD')}</td>
                    <td>  <button type="button" data-target="#exampleModal" data-toggle="modal" className="btn btn-warning btn-xs" onClick={() => {this.setState({tasksAuxi: JSON.parse(JSON.stringify(e))})}}> <i className="fa fa-pencil"></i> </button>  </td>
                </tr>
            );
        }.bind(this))
        return (
            <div>
                <Header/>
                <div className="container contentPersonal">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Task Put</h4>
                                </div>
                                <div className="panel-body">
                                    <div className="panel-content">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                               <thead>
                                                   <tr>
                                                       <th>id</th>
                                                       <th>Nombre</th>
                                                       <th>Descripcion</th>
                                                       <th>Fecha de Creacion</th>
                                                       <th>Fecha Modificado</th>
                                                       <th>Modificar</th>
                                                   </tr>
                                               </thead>
                                               <tbody>
                                                   {listTask}
                                               </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Consumo API</h5>
                        </div>
                        <div className="modal-body">
                        <form>
                            <div className="form-group">
                            <label htmlFor="recipient-name" className="form-control-label">Nombre:</label>
                            <input type="text" className="form-control" id="recipient-name" value={this.state.tasksAuxi.name} onChange={this.handleChangeName.bind(this)} />
                            </div>
                            <div className="form-group">
                            <label htmlFor="message-text" className="form-control-label">Description:</label>
                            <textarea className="form-control" id="message-text" value={this.state.tasksAuxi.description} onChange={this.handleChangeDescription.bind(this)}  />
                            </div>
                        </form>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-warning" onClick={this.updateDatos.bind(this)}>Modificar</button>
                        </div>
                    </div>
                    </div>
                </div>
            <Footer/>
            </div>
        );
    }
}

export default Update1;
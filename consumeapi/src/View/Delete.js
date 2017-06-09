import React, { Component } from 'react';
import {Link} from 'react-dom';

import Header from './../Sections/Header';
import Footer from './../Sections/Footer';

import {deleteTasks} from './../services/tasks';
import {getTasks} from './../services/tasks';

import moment from 'moment';

require('moment/locale/es.js');
moment.locale('es');
class Delete extends Component {
    constructor(props){
        super(props)
        this.state = {
            tasksUpdate: [], 
            taskid: '', 
            tasksAuxi: {}            

        }
        
        getTasks().then(tasksUpdate => {
            this.setState({
                tasksUpdate: tasksUpdate
            });
        });

       getTasks().then(tasksAuxi => {
           this.setState({
               tasksAuxi: tasksAuxi
           });
       });

    }
    
    //Delete deleteTasks
    delete(){
        //console.log("Elimino");
         deleteTasks(this.state.taskid)
        .then(tasks =>{
            getTasks().then(tasksUpdate => {
                this.setState({
                    tasksUpdate: tasksUpdate
                });
            });
        }) 

    }

    render() {

        let listTasks = this.state.tasksUpdate.map(function(e){
            return(
                 <tr key={e.id}>
                    <td className="text-center">{e.id}</td>
                    <td className="text-center">{e.name}</td>
                    <td className="text-center">{e.description}</td>
                    <td className="text-center">{moment(e.created_at).format('LL')}</td>
                    <td className="text-center">{moment(e.updated_at).format('DD')}</td>
                    <td className="text-center"> <a className="btn btn-danger btn-xs" onClick={()=>{this.setState({taskid: e.id})}} data-target="#exampleModalLong" data-toggle="modal"> <i className="fa fa-times"></i> </a></td>
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
                                    <h4 className="panel-title">  Delete Task  </h4>
                                </div>
                                <div className="panel-body">
                                    <div className="panel-content">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center"> id </th>
                                                        <th className="text-center"> Name</th>
                                                        <th className="text-center"> descripsion</th>
                                                        <th className="text-center"> fecha de creacion</th>
                                                        <th className="text-center"> fecha modificaco</th>
                                                        <th className="text-center"> Operacion</th>
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
                                    <p> Los Task eliminar teniendo en cuenta la seleccion del proceso en lista anterios. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="modal fade" id="exampleModalLong" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">Consumo API</h5>
                        </div>
                        <div className="modal-body">
                            <h3 className="text-center"> ¿Desear Eliminar este registro? </h3>
                        </div>
                        <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">No</button>
                        <button type="button" className="btn btn-danger" onClick={this.delete.bind(this)}>Si</button>
                        </div>
                    </div>
                    </div>
                 </div>                               
                <Footer/>
            </div>
        );
    }
}

export default Delete;
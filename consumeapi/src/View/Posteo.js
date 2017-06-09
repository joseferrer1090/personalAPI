import React, { Component } from 'react';
import { Link } from 'react-dom';


import Header from './../Sections/Header';
import Footer from './../Sections/Footer';

import {postTasks} from './../services/tasks';

class Posteo extends Component {
   constructor(props){
        super(props)
        this.state = {
            tasks: {
                name: '',
                description: ''
            }
        }
   }

   handleChangeName(event){
        var value = event.target.value;
        var data = this.state.tasks;
        data.name = value;
        this.setState({tasks: data});
   }

   handleChangeDescription(event){
       var value = event.target.value;
       var data = this.state.tasks;
       data.description = value;
       this.setState({tasks: data});
   }

   CreacteTasks(){
        postTasks(this.state.tasks)
        //console.log('hola');
   }

    render() {
        return (
           <div>
                <Header/>
                <div className="container contentPersonal">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading">
                                    <h4 className="panel-title"> Task Post </h4>
                                </div>
                                <div className="panel-body">
                                    <div className="panel-content">
                                        <form role="form">
                                           <div className="row">
                                                <div className="col-md-4 col-md-offset-4 panel panel-default">
                                                    <div className="form-group">
                                                        <label htmlFor="">Nombre del Tasks</label>
                                                        <input type="text" className="form-control" value={this.state.name} onChange={this.handleChangeName.bind(this)}/>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="">Descripcion</label>
                                                        <textarea name="" id="" cols="30" rows="10" className="form-control" value={this.state.description} onChange={this.handleChangeDescription.bind(this)}></textarea>
                                                    </div>
                                                    <div className="form-group col-md-offset-2">   
                                                        <button type="button" className="btn btn-success" onClick={this.CreacteTasks.bind(this)}> <i className="fa fa-check" ></i> Enviar Datos</button>
                                                        &nbsp;
                                                    <button type="reset" className="btn btn-danger"> <i className="fa fa-times"></i> Cancelar</button>
                                                    </div>
                                                </div>
                                           </div>
                                        </form>

                                    </div>
                                </div>
                                <div className="panel-footer">
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

export default Posteo;
import axios from './axios';

//Funcion para Get de los Task
export function getTasks (){
    return new Promise ((resolve, reject) => {
        axios.get('/tasks')
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            //En caso que me de error
            //alert('error:' +error);
            console.log('error');
            reject(error)
        })
    })
}

//Funcion para el Post de los Task
export function postTasks (data){
    return new Promise((resolve, reject)=>{
        axios.post('/tasks/', {
            name: data.name,
            description: data.description
        })
        .then(response => {
            resolve(response.data)
        })
        .catch(error => {
            reject(error)
        })
    })
}

//Funcion para el Put de los Task
export function putTasks (id, data){
    return new Promise((resolve, reject)=>{
        console.log('put', data);
        axios.put('/tasks/'+id, data)
        .then(response => {
            resolve(response.data)
        })
        .catch(error =>{
            console.log(error.response.data)
            reject(error)
        })
    })
}

//Funcion para el delete de los getTasks
export function deleteTasks (id){
    return new Promise((resolve, reject)=>{
        console.log('delete', id);
        axios.delete('/tasks/'+id)
        .then(response =>{
            resolve(response.data)
        })
        .catch(error =>{
            console.log(error.response.data)
            reject(error)
        })
    })
}

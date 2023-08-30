import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit{
  ngOnInit(): void {
    this.getUsuarios().then(usuario => {
      console.log(usuario);
    })
  //   const promesa = new Promise((resolve, reject) => {
  //     if(true){
  //       resolve('Hola');
  //     }else{
  //       reject('algo salio mal');
  //     }
  //   });
  //
  //   promesa.then((mensaje) => {
  //     console.log(mensaje);
  //   }).catch( error => console.log('error en mi promesa', error));
  //   console.log('fin de init');

  this.getUsuarios();
  }
  getUsuarios(){
    return  new Promise(resolve => {
      fetch('https://reqres.in/api/users')
        .then(response => response.json())
        .then(body => resolve(body.data));
    });
  }
}

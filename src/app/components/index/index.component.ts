import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  frase = '';
  isPalindromo : boolean = false;

  constructor() { 
    
  }

  ngOnInit(): void {
  }



  validarPalindromo(){
    let re =  /[^A-Za-z0–9]/g;
    let lowRegStr = this.frase.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    this.isPalindromo = reverseStr === lowRegStr;
    if (this.isPalindromo){
      Swal.fire({
        title: 'Bien, encontraste un Palíndromo!!',
      })
    }else{
      Swal.fire({
        title: 'Probá con otro!',
        confirmButtonText: 'Volvé a intentar!'
      })
    }
    // return console.log(reverseStr === lowRegStr);

  }

}

import { Component, OnInit } from '@angular/core';
import { LoaderComponent } from '../loader/loader.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'My First Angular App!';

  searchStr = '';

  constructor(public router: Router) {


  }

  ngAfterViewInit() {

    VANTA.BIRDS({ 
      el: "#birds"
    });

  }

  ngOnInit() {

  }

  searchMusic(){

    this.router.navigate(['loader']);

  }

}

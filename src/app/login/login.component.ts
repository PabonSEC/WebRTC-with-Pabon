import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'My First Angular App!';

  searchStr = '';

  constructor() {

  }

  ngAfterViewInit() {

    VANTA.BIRDS({ 
      el: "#birds"
    });

  }

  ngOnInit() {
  }

  searchMusic(){

  }

}

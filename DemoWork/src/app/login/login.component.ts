import { APP_ID, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DemoWorkServiceService } from '../demo-work-service.service';
import { loginmodel } from './loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,private demo:DemoWorkServiceService) { }
login:loginmodel=new loginmodel();
  ngOnInit(): void {
    
  }
  onClickOverride(){
    this.demo.Login(this.login).subscribe(data=>{alert("logged in successfully")},error=>{alert("error with username or password, try again")});

  }
}

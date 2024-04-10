import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
  
})
export class LoginFormComponent {

  constructor(private router:Router){

  }

  createprofile()
  {
    this.router.navigate(['/profile']);
  }
}

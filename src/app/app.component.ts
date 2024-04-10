import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginFormComponent } from './Components/login-form/login-form.component';
import { CreatprofileComponent } from './Components/creatprofile/creatprofile.component';
import { BringsyoutoComponent } from './Components/bringsyouto/bringsyouto.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginFormComponent,CreatprofileComponent,RouterLink,BringsyoutoComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MultiLoginPage';
}

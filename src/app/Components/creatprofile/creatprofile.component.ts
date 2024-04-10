import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-creatprofile',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './creatprofile.component.html',
  styleUrl: './creatprofile.component.css'
})
export class CreatprofileComponent {

  constructor(private router:Router){

  }

  brings(){
    this.router.navigate(['/brings']);
  }

  Get_Img(input:any){
    // if (input.files && input.files[0]) {
    //     const reader = new FileReader();

    //     reader.onload = function (e) {
    //     document.querySelector('#img').setAttribute('src',e.target.result)

    //     };

    //     reader.readAsDataURL(input.files[0]);
    // }
    // $('#Display-img').html(input);
}
}

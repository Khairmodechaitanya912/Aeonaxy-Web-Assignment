import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { getEventListeners } from 'node:events';

@Component({
  selector: 'app-bringsyouto',
  standalone: true,
  imports: [CommonModule,RouterOutlet],
  templateUrl: './bringsyouto.component.html',
  styleUrl: './bringsyouto.component.css'
})
export class BringsyoutoComponent {

  isDisable:boolean = false;
  isVisible:boolean = false;
  isHighlighted = [false, false, false];

  constructor(private router:Router){

  }

  finish(){
    this.router.navigate(['/last']);
  }

  back(){
    this.router.navigate(['/profile'])
  }
  
  handleRadioChange(idx:number) {
    this.isDisable = true;
    this.isVisible = true;
    this.isHighlighted[idx] = true;

  }
}

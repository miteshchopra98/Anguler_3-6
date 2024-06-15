import { Component } from '@angular/core';
import { truncate } from 'node:fs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  a: number = 12
  b: string = 'oreo'
  c:boolean = true
  d:string[] = ['Mitesh', 'Chopra']
  e:number[] = [1,2,3]
  
}

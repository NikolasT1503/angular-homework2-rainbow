import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-homework2-rainbow';
  red = 'rgb(255,0,0)';
  orange = 'rgb(255,91,0)';
  yellow = 'rgb(255,255,0)';
  green = 'background-color: rgb(0,255,0)';
  deepskyblue = 'background-color: rgb(128,166,255)';
  blue = 'background-color: rgb(0,0,255)';
  purple = 'background-color: rgb(128,0,255)';

  classParam: string = 'visible';

  hided: boolean = false;

  @Input() 
  inputParam:string;

  @Output()
  userChange = new EventEmitter<string>();

  hideRows(e : any): void{
    this.classParam = e.target?.value||e.value;
    console.log('Событие пришло: ', this.classParam);
    this.classParam = this.hided ? 'visible' : 'collapse';
    console.log('Установка classParam: ', this.classParam);

    this.hided = this.hided ? false : true;
    this.userChange.emit(this.classParam);
  }


}

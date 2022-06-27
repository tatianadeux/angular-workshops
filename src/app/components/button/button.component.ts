import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Button } from '../../models/button.model';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()
  childBackground: string = "";

  @Input()
  childIndex: number = 0;

  @Input()
  childColors: string = "";

  @Output()
  public sendButtonClickedToParent: EventEmitter<string> = new EventEmitter();

  buttonClicked: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  buttonClickedToParent(childIndex: number): void{
    this.sendButtonClickedToParent.emit(this.buttonClicked)
    console.log(this.buttonClicked)
  }


  /* je veux envoyer le nom du bouton envoyé */
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  parentColors: string[] = ["#9B1D20", "#F96900", "#ACC12F", "#14ADB8", "#65256A"]

  parentIndex: number[] = [0, 1, 2, 3, 4];

  receivedButtonFromChild: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  catchButtonFromChild(buttonClicked: string): void {
    this.receivedButtonFromChild = buttonClicked;

  }
}

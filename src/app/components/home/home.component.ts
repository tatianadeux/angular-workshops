import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  studentName: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigateToStudent(): void{
  // navigation vers la route de l'étudiant recherché
  //this. > représente l'objet en cours
  console.info(this.studentName)
  this.router.navigate(['/student', this.studentName]);

  }

}

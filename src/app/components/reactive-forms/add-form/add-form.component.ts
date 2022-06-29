import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article.model';
import { referenceValidator } from 'src/app/validators/reference-validator';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  article: Article = new Article("","","");

  articleList: Article[] = [];

  addForm = this.formbuilder.group({
    name: ['', Validators.required],
    reference: ['', referenceValidator],
    description: ['', Validators.required]
  })

  isSubmitted: boolean = false;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }



  onSubmit(){
    console.log(this.addForm);
    this.isSubmitted = true;
    this.articleList.push(new Article(this.addForm.get("name")?.value, this.article.reference, this.article.description));
  }
}

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
  isValid: boolean = true;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit(): void {
  }



  onSubmit(){
    if (this.addForm.valid) {
      console.log(this.addForm);
      this.isSubmitted = true;
      let name = this.addForm.get("name")?.value;
      let reference = this.addForm.get("reference")?.value;
      let description = this.addForm.get("description")?.value;

      this.articleList.push(new Article(name, reference, description));
    }

    if (this.addForm.invalid) {
      this.isValid = false;
    }
    }

    get name(){
      return this.addForm.controls['name']
    }
  }


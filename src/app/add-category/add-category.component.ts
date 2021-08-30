import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../services/category.service";
import {Category} from "../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
  providers: [CategoryService]
})
export class AddCategoryComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    nameController: new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(30)],)
  });

  constructor(private categoryService: CategoryService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  onSaveButtonPressed() {
    const category: Category = ({
      id: 0,
      name: this.formGroup.value.nameController,
    });

    console.log(category);

    this.categoryService.save(category).subscribe(data => this.router.navigate(["/"]));
  }
}

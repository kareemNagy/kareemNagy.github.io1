import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "login.component.html",
})
export class LoginComponent implements OnInit {
  @Output() logged = new EventEmitter();

  form: FormGroup = this.formBuilder.group({
    username: ["", Validators.required],
    password: ["", Validators.required],
  });
  loading = false;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {}

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;
    this.loading = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    if (
      this.form.controls["username"].value === "sdb2030" &&
      this.form.controls["password"].value === "SdB@2023"
    ) {
      this.logged.emit();
    }
    console.log(this.form.controls["username"].value);
    console.log(this.form.controls["password"].value);

    this.loading = false;
  }
}

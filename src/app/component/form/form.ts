import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  submitLogin(form: any) {
  alert('Signed in successfully!');
  form.reset();
}

}

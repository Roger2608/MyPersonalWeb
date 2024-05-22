import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'my_web-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  contactForm = this.fb.group({
    name: ['', Validators.required],
    company: [''],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.contactForm.value);
  }
}

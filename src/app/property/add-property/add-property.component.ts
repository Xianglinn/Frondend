import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  constructor(private route: Router) { }

  ngOnInit() {

  }

  onBack(){
    this.route.navigate(['/']);
  }

  onSubmit(){
    console.log('congrat form submited');
    console.log(this.addPropertyForm);
  }
}

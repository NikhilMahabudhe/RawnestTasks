import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  constructor(private fb: FormBuilder) {}
  
  
  frmInput:any;
  
  ngOnInit(): void {
    this.frmInput = this.fb.group({
      name: this.fb.control(' ',[Validators.required,Validators.minLength(4)]),
      dob: this.fb.control(' ',[Validators.required]),
      phone: this.fb.control(' ',[Validators.required,Validators.minLength(10)]),
      gender: this.fb.control(' ')
    });
  }
  get Name(){
    return this.frmInput.get("name") as FormControl;
  }
  get Dob(){
    return this.frmInput.get("dob") as FormControl;
  }
  get Phone(){
    return this.frmInput.get("phone") as FormControl;
  }
  
  
  

  
  
  @Output() sendDetails: EventEmitter<any> = new EventEmitter<any>();

  
  onSubmit(e: any) {
    this.sendDetails.emit(e);
    this.frmInput.reset();
  }
}

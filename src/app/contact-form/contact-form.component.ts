import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
  
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'], 
  providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting:ContactFormComponent,
            multi: true,
        },
    ],
})

export class ContactFormComponent implements OnInit {
     contact: FormGroup;
    clear:boolean=false;
    error:boolean =false;     
   ngOnInit(): void {
    this.contact = new FormGroup({
    name: new FormControl(null,[Validators.minLength(5),Validators.maxLength(15),Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    company: new FormControl(null,[Validators.required]),
    title: new FormControl(null),
    message: new FormControl(null),
    check: new FormControl(null)
  });
   }
 onSubmit(contact:FormGroup){
  if ((contact.status == 'VALID')){
      this.contact.setValue({
      name: '', 
      email: '',
      company:'',
      title:'',
      message:'',
      check:false,
    });
      this.clear=true;
      this.error =false;
      }
    else   {this.error =true;
            this.clear=false;
           }
  }
  

}

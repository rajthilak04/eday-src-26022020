import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less']
})
export class ContactComponent implements OnInit {
    edayContactForm: FormGroup;
    submitted = false;
    mailnotsent = true;
    errorMessage: string; 

    constructor(private formBuilder: FormBuilder, private productService: ProductService, private spinner: NgxSpinnerService) { }

    ngOnInit() {
        this.edayContactForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            mobile: ['', Validators.required],
            subject: ['', Validators.required],
            message: ['', Validators.required]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.edayContactForm.controls; }

    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.edayContactForm.invalid) {
            return;
        }
        this.spinner.show();
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.edayContactForm.value));
        this.productService.sendMail(this.edayContactForm.value).subscribe({
            next: data => {            
                this.mailnotsent = false;
                this.spinner.hide();
            },
            error: err => this.errorMessage = err                
        });
    }

    hideNotify() {
        debugger;
        this.mailnotsent = true;
    }

}

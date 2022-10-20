import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { dateValidation } from '../../../../shared/directive/date-validation/date-validation.directive'

const urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  form = this.fb.group({
    title: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]],
    description: ['', Validators.maxLength(255)],
    image: ['', [Validators.required, Validators.pattern(urlRegEx)]],
    video: ['', [Validators.required, Validators.pattern(urlRegEx)]],
    date: ['', [Validators.required, dateValidation()]],
  })

  constructor(private fb: FormBuilder) {
  }

  onSubmit() {
  }

  get title() {
    return this.form.get('title')
  }

  get description() {
    return this.form.get('description')
  }

  get image() {
    return this.form.get('image')
  }

  get video() {
    return this.form.get('video')
  }

  get date() {
    return this.form.get('date')
  }
}

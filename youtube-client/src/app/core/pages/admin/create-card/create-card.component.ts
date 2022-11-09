import { Component } from '@angular/core'
import { FormBuilder, Validators } from '@angular/forms'
import { Store } from '@ngrx/store'
import { dateValidation } from '../../../../shared/directive/date-validation/date-validation.directive'
import {
  ICustomCard,
  postCustomCard,
} from '../../../../redux/actions/customCard.actions'

const urlRegEx = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss'],
})
export class CreateCardComponent {
  form = this.fb.group({
    title: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(20)],
    ],
    description: ['', Validators.maxLength(255)],
    imageUrl: ['', [Validators.required, Validators.pattern(urlRegEx)]],
    videoUrl: ['', [Validators.required, Validators.pattern(urlRegEx)]],
    publishedAt: ['', [Validators.required, dateValidation()]],
  })

  constructor(private fb: FormBuilder, private store: Store) {}

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

  onSubmit() {
    const {
      title, description, imageUrl, publishedAt,
    } = <ICustomCard> this.form.value
    const card = {
      snippet: {
        title,
        description,
        publishedAt,
        thumbnails: {
          medium: {
            url: imageUrl,
          },
          high: {
            url: imageUrl,
          },
        },
      },
      statistics: {
        viewCount: '111',
        likeCount: '121',
        dislikeCount: '12',
        commentCount: '44',
      },
    }
    this.store.dispatch(postCustomCard({ card }))
  }
}

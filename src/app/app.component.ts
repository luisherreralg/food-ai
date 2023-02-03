import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { OpenAiApiService } from './services/open-ai-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  generatedResponse$ = new Observable<any>();
  clicked = false;

  form = new FormGroup({
    recipeName: new FormControl('', Validators.required),
    numOfPeople: new FormControl('', Validators.required),
  });

  constructor(private aiApi: OpenAiApiService) {}

  generateRecipe = () => {
    this.clicked = true;
    this.generatedResponse$ = this.aiApi.generateResponse(
      this.form.get('recipeName')!.value as string,
      Number(this.form.get('numOfPeople')!.value)
    );
  };
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OpenAiApiService {
  OPEN_API_GENERATE_URL: string;
  OPEN_API_KEY: string;

  constructor(private http: HttpClient) {
    this.OPEN_API_GENERATE_URL = environment.OPEN_API_GENERATE_URL;
    this.OPEN_API_KEY = environment.OPEN_API_KEY;
  }

  generateResponse = (
    recipeName: string,
    numOfPeople: number
  ): Observable<any> => {
    return this.http.post(
      this.OPEN_API_GENERATE_URL,
      {
        model: 'text-davinci-003',
        prompt: `Escribe una receta para ${recipeName} para ${numOfPeople} personas. Escribir los ingredientes necesarios para comprar y los pasos a seguir.`,
        temperature: 0,
        max_tokens: 3500,
        top_p: 1,
        frequency_penalty: 0.5,
        presence_penalty: 0,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.OPEN_API_KEY}`,
        },
      }
    );
  };
}

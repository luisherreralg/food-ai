import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OpenAiApiService {
  OPEN_API_GENERATE_URL: string;
  OPEN_API_KEY: string;

  constructor(private http: HttpClient) {
    this.OPEN_API_GENERATE_URL = 'https://api.openai.com/v1/completions';
    this.OPEN_API_KEY = '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';
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

// curl https://api.openai.com/v1/completions \
//   -H "Content-Type: application/json" \
//   -H "Authorization: Bearer $OPENAI_API_KEY" \
//   -d '{
//   "model": "text-davinci-003",
//   "prompt": "Escribe la lista de la compra y los pasos para hacer una tarta de queso para 2 personas\n\nLista de la compra:\n\n- 200 gramos de queso crema\n- 200 gramos de queso azul\n- 2 huevos\n- 1/2 taza de harina\n- 1/2 taza de mantequilla sin sal\n- 1/4 taza de azúcar morena\n- 1 cucharadita de vainilla\n- 2 cucharadas de mermelada (opcional)\n\n\nPasos para hacer una tarta de queso para 2 personas: \n1. Precalentar el horno a 180°C. \n2. Mezclar los quesos crema y azul en un recipiente grande. \n3. Agregar los huevos, la harina, la mantequilla, el azúcar morena y la vainilla y mezclar bien hasta obtener una masa homogénea. \n4. Engrasar un molde para tartas con mantequilla o aceite vegetal y verter la mezcla dentro del mismo. \n5. Hornear durante 25 minutos o hasta que al insertar un palillo en el centro salga limpio. \n6. Dejar enfriar completamente antes de desmoldar y servir con mermelada (opcional).",
//   "temperature": 0,
//   "max_tokens": 3500,
//   "top_p": 1,
//   "frequency_penalty": 0.5,
//   "presence_penalty": 0
// }'

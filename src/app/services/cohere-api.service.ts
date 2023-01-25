import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CohereApiService {
  COHERE_API_KEY: string;
  COHERE_API_GENERATE_URL: string;

  constructor(private http: HttpClient) {
    this.COHERE_API_KEY = 'MbkIaME1yrmt6wRT1npd5Nn8P7NLNV8AttFBJZRb';
    this.COHERE_API_GENERATE_URL = 'https://api.cohere.ai/generate';
  }

  generateResponse = (
    recipeName: string,
    numOfPeople: number
  ): Observable<any> => {
    return this.http.post(
      this.COHERE_API_GENERATE_URL,
      {
        model: 'command-xlarge-nightly',
        prompt: `Write a recipe for ${recipeName} for ${numOfPeople} people. Writing the necessary ingredients to buy and the steps to follow.`,
        max_tokens: 500,
        k: 0,
        p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        stop_sequences: ['--'],
        return_likelihoods: 'NONE',
      },
      {
        headers: {
          Authorization: `Bearer ${this.COHERE_API_KEY}`,
        },
      }
    );
  };
}

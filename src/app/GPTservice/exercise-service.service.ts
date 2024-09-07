import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExerciseServiceService {
  private apiUrl = `https://api.openai.com/v1/completions`

  constructor(private http: HttpClient) { }


  generateExercises(prompt: string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.openaiApiKey}`

    });

    const body ={
      model:`gpt-3.5-turbo`,
      prompt: prompt,
      max_tokens:150,
      n:1,
      stop:null,
    };

    return this.http.post<any>(this.apiUrl,body,{headers})
  }



}

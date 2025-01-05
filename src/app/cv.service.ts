import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Définir le type des lignes
export interface CvLine {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class CvService {

  private apiPostUrl = 'http://localhost:8080/admin/cv/v1/postData'; // URL de l'API pour POST
  private apiGetUrl = 'http://localhost:8080/cv/v1/getDatas'; // URL de l'API pour GET

  constructor(private http: HttpClient) {}

  // Méthode pour envoyer les lignes de CV
  postCvData(cvLines: { title: string }[]): Observable<any> {
    return this.http.post<any>(this.apiPostUrl, cvLines);
  }

  // Méthode pour récupérer les lignes de CV
  getCvData(): Observable<CvLine[]> {
    return this.http.get<CvLine[]>(this.apiGetUrl);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AjudaInterativaService {

  constructor(private http: HttpClient) { }

  salvar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.post<any>("http://localhost:3000/ajudasInterativas", data).subscribe(response => {
        console.log('eeee',response);
        r();
      });
    })  
  }

  getAll(): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.get<any>("http://localhost:3000/ajudasInterativas").subscribe(response => {
        r(response);
      });
    })
  }
  


}

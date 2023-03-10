import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VersaoService {

  constructor(private http: HttpClient) { }
  

  salvar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.post<any>("http://localhost:3000/versoes", data).subscribe(response => {
        console.log('eeee',response);
        r();
      });
    })  
  }
  
  getAll(): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.get<any>("http://localhost:3000/versoes").subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }

  atualizar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.put<any>(`http://localhost:3000/versoes/${data.id}`, data).subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }

  remover(id: number): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.delete<any>(`http://localhost:3000/versoes/${id}`).subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }
}
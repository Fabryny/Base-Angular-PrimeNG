import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OperadorService {

  constructor(private http: HttpClient) { }

  salvar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.post<any>("http://localhost:3000/operadores", data).subscribe(response => {
        r();
      });
    })  
  }

  
  getAll(): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.get<any>("http://localhost:3000/operadores").subscribe(response => {
        r(response);
      });
    })
  }

  remover(id: number): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.delete<any>(`http://localhost:3000/operadores/${id}`).subscribe(response => {
        r(response);
      });
    })
  }

  atualizar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.put<any>(`http://localhost:3000/operadores/${data.id}`, data).subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }

}

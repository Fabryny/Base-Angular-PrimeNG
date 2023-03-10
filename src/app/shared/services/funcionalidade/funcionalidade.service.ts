import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FuncionalidadeService {

  constructor(private http: HttpClient) { }

  salvar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.post<any>("http://localhost:3000/funcionalidades", data).subscribe(response => {
        console.log('eeee',response);
        r();
      });
    })  
  }
  
  getAll(): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.get<any>("http://localhost:3000/funcionalidades").subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }
  
  atualizar(data: any): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.put<any>(`http://localhost:3000/funcionalidades/${data.id}`, data).subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }

  remover(id: number): Promise<void> {/* fazer dto console.log */
    return new Promise((r, e) => {
      this.http.delete<any>(`http://localhost:3000/funcionalidades/${id}`).subscribe(response => {
        console.log('eeee',response);
        r(response);
      });
    })
  }

}

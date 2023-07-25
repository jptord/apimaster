import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class {xnombrecapx}Service {
  apiUrl = environment.apiUrl ;
  apiName = '{xapix}';
  constructor(private http: HttpClient) { }

  register(datos: any) {
    return this.http.post(this.apiUrl + `/${this.apiName}`, datos);
  }

  update(datos: any, id: any): Observable<any> {
    return this.http.put(this.apiUrl + `/${this.apiName}/${id}`, datos);
  }

  find(id:string = '') {
    return this.http.get(this.apiUrl + `/${this.apiName}/${id}`);
  }

  getAll(size: number = 100, page: number = 1, sortBy:string = 'id', descending:false, keyword:any = '') {
    return this.http.get(this.apiUrl + `/${this.apiName}?size=${size}&page=${page-1}&sortBy=${sortBy}&descending=${descending}&keyword=${keyword}`);
  }

  delete(id: string | number): Observable<any> {
    return this.http.delete(this.apiUrl + `/${this.apiName}/${id}`);
  }

  habilitar(datos:any,id: string | number): Observable<any> {
    datos['{xtitulox}'] = '{xestadoenabledx}';
    return this.http.put(this.apiUrl + `/${this.apiName}/${datos.id}`, datos);
  }

  deshabilitar(datos:any,id: string | number): Observable<any> {
    datos['{xtitulox}'] = '{xestadodisabledx}';
    return this.http.put(this.apiUrl + `/${this.apiName}/${datos.id}`, datos);
  }
}

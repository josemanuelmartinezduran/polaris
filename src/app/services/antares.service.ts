import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, lastValueFrom } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class AntaresService {
  url: string = "https://api.lauva.net/api";
  //url: string = "http://127.0.0.1:3000/api";
  //url:string = "http://127.0.0.1:3000/api"

  constructor(private http: HttpClient) {}

  getAllData(model: string): Observable<[{}]> {
    return this.http.patch<[{}]>(this.url, {
      model: model,
      domain: [],
    });
  }

  async execute(model: string, method: string, args: any[]) {
    const res = await lastValueFrom(this.http.patch<[{}]>(this.url + '/execute', {
      model: model,
      method: method,
      params: args,
    }));
    return {"success": "ok"};
  }

  async getFolio(args: any[]) {
    const result = await this.http.patch<[{}]>(this.url + '/execute', {
      model: "uva.venta",
      method: "getFolio",
      params: args,
    })
    return result.toPromise();
  }

  getData(model: string, domain: any[]): Observable<[{}]> {
    console.log("Dominio")
    console.log(domain);
    return this.http.patch<[{}]>(this.url, {
      model: model,
      domain: domain,
    });
  }

 getTwoData(model: string, domain: [{},{}]): Observable<[{}]> {
    console.log("Dominio")
    console.log(domain);
    return this.http.patch<[{}]>(this.url, {
      model: model,
      domain: domain,
    });
  }

  getThreeData(model: string, domain: [{},{},{}]): Observable<[{}]> {
    console.log("Dominio")
    console.log(domain);
    return this.http.patch<[{}]>(this.url, {
      model: model,
      domain: domain,
    });
  }

  postData(model: string, data: {}): Observable<number> {
    return this.http.post<number>(this.url, {
      model: model,
      data: data,
    });
  }

  putData(model: string, id: number, data: {}): Observable<string> {
    return this.http.put<string>(this.url, {
      model: model,
      id: id,
      data: data,
    });
  }

  deleteData(model:string, id:number): Observable<string>{
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        model: model,
        id: id,
      },
    };
    return this.http.delete<string>(this.url, options);
  }

  async getAllDataAsync(model: string){
    const result = await this.http.patch<[{}]>(this.url, {
      model: model,
      domain: [],
    });
    return result.toPromise();
  }

  async getDataAsync(model: string, domain: any[]){
    const result = await this.http.patch<[{}]>(this.url, {
      model: model,
      domain: domain,
    });
    return result.toPromise();
  }

  async postDataAsync(model: string, data: {}){
    const result = await this.http.post<number>(this.url, {
      model: model,
      data: data,
    });
    return result.toPromise();
  }

  async putDataAsync(model: string, id: number, data: {}){
    const result = await this.http.put<string>(this.url, {
      model: model,
      id: id,
      data: data,
    });
    return result.toPromise();
  }

  async deleteDataAsync(model:string, id:number){
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        model: model,
        id: id,
      },
    };
    const result = await this.http.delete<string>(this.url, options);
    return result.toPromise();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmenu } from './model/IEmenu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private _url: string = 'https://run.mocky.io/v3/8189a948-cdf2-47a1-9698-f765d50f0f94';

  constructor(private http: HttpClient) { }

  getMenuData(): Observable<IEmenu[]>{
    return this.http.get<IEmenu[]>(this._url);
  }


  
}

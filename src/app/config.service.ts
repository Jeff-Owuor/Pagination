import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Freedom } from './musica/freedom';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  apikey = 'CqC7JG0o5S6pIOyraKGh8ADc15U06G3t'
  private _url: string = `https://api.giphy.com/v1/gifs/random?api_key=kF19EcBNSNbMku60pbVJ7ioBz29sxsaF&limit=20&rating=g`
  constructor(private http: HttpClient) { 
  }

  getMusic(){
    return this.http.get(this._url)
  }
}


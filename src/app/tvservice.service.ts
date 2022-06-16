import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ITVData } from './itvdata';

@Injectable({
  providedIn: 'root'
})
export class TVServiceService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTVData(name: string) {
    return this.httpClient.get<ITVData>(`https://api.tvmaze.com//singlesearch/shows?q=:${name}`);
      }

  transformToITV(data: ITVData) {
    return {
      name: data.name,
      network: data.network,
      premiered: data.premiered,
      status: data.status,
      runtime: data.runtime,
      rating: data.rating,
    }
  }
}

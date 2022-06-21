import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ITVData } from './itvdata';
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class TVServiceService {

  constructor(private httpClient: HttpClient) { }

  getCurrentTVData(name: string) {
    return this.httpClient.get<ITVData>(`https://api.tvmaze.com//singlesearch/shows?q=:${name}`).pipe(map(data => this.transformToITV(data) ));
      }

  transformToITV(data: ITVData) {
    return {
      name: data.name,
      network: data.network,
      premiered: data.premiered,
      status: data.status,
      runtime: data.runtime,
      rating: data.rating,
      img: data.image[0]
    }
  }
}

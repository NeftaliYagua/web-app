/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VersionService {

  constructor(private http: HttpClient) { }

  getBackendInfo(): Observable<any> {
    return this.http.get(`${environment.baseApiUrl}/fineract-provider/actuator/info`);
  }

}

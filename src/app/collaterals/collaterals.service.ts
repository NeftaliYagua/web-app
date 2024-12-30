/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
/**
 * Collaterals service.
 */
@Injectable({
  providedIn: 'root'
})
export class CollateralsService {
  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  getFilteredClients(orderBy: string, sortOrder: string, orphansOnly: boolean, displayName: string, officeId?: any): Observable<any> {
    let httpParams = new HttpParams()
      .set('displayName', displayName)
      .set('orphansOnly', orphansOnly.toString())
      .set('sortOrder', sortOrder)
      .set('orderBy', orderBy);
    if (officeId) {
      httpParams = httpParams.set('officeId', officeId);
    }
    return this.http.get(`${environment.serverUrl}/clients`, { params: httpParams });
  }

  /**
   * @returns {Observable<any>} Collaterals data
   */
   getClientCollateral(clientId: any, clientCollateralId: any): Observable<any> {
    return this.http.get(`${environment.serverUrl}/clients/${clientId}/collaterals/${clientCollateralId}`);
  }

  /**
   * @returns {Observable<any>} Collaterals data
   */
   updateClientCollateral(clientId: any, clientCollateralId: any, clientCollateralData: any): Observable<any> {
    return this.http.put(`${environment.serverUrl}/clients/${clientId}/collaterals/${clientCollateralId}`, clientCollateralData);
  }

  /**
   * @returns {Observable<any>} Delete Collaterals data
   */
   deleteCollateral(clientId: any, clientCollateralId: any): Observable<any> {
    return this.http.delete(`${environment.serverUrl}/clients/${clientId}/collaterals/${clientCollateralId}`);
  }
}

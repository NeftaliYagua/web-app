/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Home Service
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getCollectedAmount(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/Demand Vs Collection`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getDisbursedAmount(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/Disbursal Vs Awaitingdisbursal`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getClientTrendsByDay(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/ClientTrendsByDay`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getClientTrendsByWeek(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/ClientTrendsByWeek`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getClientTrendsByMonth(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/ClientTrendsByMonth`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getLoanTrendsByDay(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/LoanTrendsByDay`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getLoanTrendsByWeek(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/LoanTrendsByWeek`, { params: httpParams });
  }

  /**
   * @param {number} officeId Office Id.
   * @returns {Observable<any>}
   */
  getLoanTrendsByMonth(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
        .set('R_officeId', officeId.toString())
        .set('genericResultSet', 'false');
    return this.http.get(`${environment.serverUrl}/runreports/LoanTrendsByMonth`, { params: httpParams });
  }

}

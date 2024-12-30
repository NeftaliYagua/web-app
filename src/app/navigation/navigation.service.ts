/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Navigation service.
 */
@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @returns {Observable<any>} Offices.
   */
  getOffices(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/offices`);
  }

  /**
   * @param {number} officeId Office Id to get employees from.
   * @returns {Observable<any>} Employees
   */
  getEmployees(officeId: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('officeId', officeId.toString());
    return this.http.get(`${environment.serverUrl}/staff`, { params: httpParams });
  }

  /**
   * @param {number} staffId Staff Id to get centers from.
   * @returns {Observable<any>} Centers
   */
  getCentersFromStaffId(staffId: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('R_staffId', staffId.toString())
      .set('genericResultSet', false.toString());
    return this.http.get(`${environment.serverUrl}/runreports/GroupNamesByStaff`, { params: httpParams });
  }

  /**
   * @param {number} centerId Center ID of center
   * @returns {Observable<any>} Center
   */
  getCenter(centerId: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('associations', 'groupMembers');
    return this.http.get(`${environment.serverUrl}/centers/${centerId}`, { params: httpParams });
  }

  /**
   * @param {number} centerId Center ID of center to retrieve accounts of
   * @returns {Observable<any>} Center Accounts
   */
  getCenterAccounts(centerId: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/centers/${centerId}/accounts`);
  }

  /**
   * @param {number} centerId Center ID of center to retrieve summary of
   * @returns {Observable<any>} Center Accounts
   */
  getCenterSummary(centerId: number): Observable<any> {
    const httpParams = new HttpParams()
    .set('R_groupId', centerId.toString())
    .set('genericResultSet', false.toString());
    return this.http.get(`${environment.serverUrl}/runreports/GroupSummaryCounts`, { params: httpParams });
  }

  /**
   * @param {number} groupId Group ID of group
   * @returns {Observable<any>} Group
   */
  getGroup(groupId: number): Observable<any> {
    const httpParams = new HttpParams()
      .set('associations', 'all');
    return this.http.get(`${environment.serverUrl}/groups/${groupId}`, { params: httpParams });
  }

  /**
   * @param {number} groupId Group ID of group to retrieve accounts of
   * @returns {Observable<any>} Group Accounts
   */
  getGroupAccounts(groupId: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/groups/${groupId}/accounts`);
  }

  /**
   * @param {number} clientId Client ID of client
   * @returns {Observable<any>} Client
   */
  getClient(clientId: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/clients/${clientId}`);
  }

  /**
   * @param {number} clientId Client ID of client to retrieve accounts of
   * @returns {Observable<any>} Client Accounts
   */
  getClientAccounts(clientId: number): Observable<any> {
    return this.http.get(`${environment.serverUrl}/clients/${clientId}/accounts`);
  }

}

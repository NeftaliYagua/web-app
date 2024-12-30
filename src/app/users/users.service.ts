/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Users service.
 */
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @returns {Observable<any>} Users data
   */
  getUsers(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/users`);
  }

  /**
   * @returns {Observable<any>} Users template data
   */
  getUsersTemplate(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/users/template`);
  }

  /**
   * @param {any} user User to be created.
   * @returns {Observable<any>}
   */
  createUser(user: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}/users`, user);
  }

  /**
   * @param {string} userId user ID of user.
   * @param {any} user user to be updated.
   * @returns {Observable<any>} User.
   */
  editUser(userId: string, user: any): Observable<any> {
    return this.http.put(`${environment.serverUrl}/users/${userId}`, user);
  }

  /**
   * @param {string} userId user ID of user.
   * @returns {Observable<any>} User.
   */
  getUser(userId: string): Observable<any> {
    return this.http.get(`${environment.serverUrl}/users/${userId}`);
  }

  /**
   * Change User Password
   * @param userId User Id of users
   * @param password New Password of the user
   * @returns {Observable<any>}
   */
  changePassword(userId: string, passwordObj: any) {
    return this.http.put(`${environment.serverUrl}/users/${userId}`, passwordObj);
  }

  /**
   * @param {string} userId user ID of user.
   * @returns {Observable<any>}
   */
  deleteUser(userId: string): Observable<any> {
    return this.http.delete(`${environment.serverUrl}/users/${userId}`);
  }

  /**
   * @param {any} officeId ID of office to retrieve staff from.
   * @returns {Observable<any>} Staff data.
   */
  getStaff(officeId: any): Observable<any> {
    const httpParams = new HttpParams()
      .set('officeId', officeId.toString())
      .set('status', 'all');
    return this.http.get(`${environment.serverUrl}/staff`, { params: httpParams });
  }

}

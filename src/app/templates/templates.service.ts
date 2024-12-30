/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Templates service.
 */
@Injectable({
  providedIn: 'root'
})
export class TemplatesService {

  /**
   * @param {HttpClient} http Http Client to send requests.
   */
  constructor(private http: HttpClient) { }

  /**
   * @returns {Observable<any>} Templates data
   */
  getTemplates(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/templates`);
  }

  /**
   * @param templateId Template ID.
   * @returns {Observable<any>} Fetches Template.
   */
  getTemplate(templateId: string): Observable<any> {
    return this.http.get(`${environment.serverUrl}/templates/${templateId}`);
  }

  /**
   * @returns {Observable<any>}.
   */
  getCreateTemplateData(): Observable<any> {
    return this.http.get(`${environment.serverUrl}/templates/template`);
  }

  /**
   * @param templateId Template Id.
   * @returns {Observable<any>}.
   */
  getEditTemplateData(templateId: string): Observable<any> {
    return this.http.get(`${environment.serverUrl}/templates/${templateId}/template`);
  }

  /**
   * @param templateData Template to be created.
   * @param templateId Template Id.
   * @returns {Observable<any>}.
   */
  createTemplate(templateData: any): Observable<any>  {
    return this.http.post(`${environment.serverUrl}/templates`, templateData);
  }

  /**
   * @param templateData Templete Data to be edited.
   * @param templateId Template Id.
   * @returns {Observable<any>}.
   */
  updateTemplate(templateData: any, templateId: any): Observable<any>  {
    return this.http.put(`${environment.serverUrl}/templates/${templateId}`, templateData);
  }

  /**
   * @param templateId Template ID.
   * @returns {Observable<any>}
   */
  deleteTemplate(templateId: string): Observable<any> {
    return this.http.delete(`${environment.serverUrl}/templates/${templateId}`);
  }

}

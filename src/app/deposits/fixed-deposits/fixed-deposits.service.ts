/** Angular Imports */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

/** rxjs Imports */
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

/**
 * Fixed Deposits Service.
 */
@Injectable({
  providedIn: 'root'
})
export class FixedDepositsService {

  /**
   * @param {HttpClient} http HttpClient
   */
  constructor(private http: HttpClient) {}

  /**
   * @param accountId Account Id.
   * @returns {Observable<any>} Fixed Deposits data.
   */
  getFixedDepositsAccountData(accountId: string): Observable<any> {
    const httpParams = new HttpParams().set('associations', 'all');
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/${accountId}`, { params: httpParams });
  }

  /**
   * @param {string} accountId fixed deposits account Id
   * @returns {Observable<any>}
   */
  deleteFixedDepositsAccount(accountId: string): Observable<any> {
    return this.http.delete(`${environment.serverUrl}/fixeddepositaccounts/${accountId}`);
  }

  /**
   * @param {string} accountId Account Id
   * @param {string} command Command
   * @param {any} data Data
   * @returns {Observable<any>}
   */
  executeFixedDepositsAccountCommand(accountId: string, command: string, data: any): Observable<any> {
    const httpParams = new HttpParams().set('command', command);
    return this.http.post(`${environment.serverUrl}/fixeddepositaccounts/${accountId}`, data, { params: httpParams });
  }

  /**
   * @param {string} accountId Fixed Deposits Account Id
   * @param {string} transactionId Transaction Id
   * @returns {Observable<any>}
   */
  getFixedDepositsAccountTransaction(accountId: string, transactionId: string): Observable<any> {
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/${accountId}/transactions/${transactionId}`);
  }

  /**
   * @param {string} accountId Fixed Deposits Account Id
   * @param {string} command Command
   * @param {any} data Data
   * @param {string} transactionId Transaction Id
   * @returns {Observable<any>}
   */
  executeFixedDepositsAccountTransactionsCommand(accountId: string, command: string, data: any, transactionId?: any): Observable<any> {
    const httpParams = new HttpParams().set('command', command);
    return this.http.post(`${environment.serverUrl}/fixeddepositaccounts/${accountId}/transactions/${transactionId}`, data, { params: httpParams });
  }

  /**
   * @param {string} accountId Fixed Deposits Account Id
   * @returns {Observable<any>}
   */
  getFixedDepositsAccountClosureTemplate(accountId: string): Observable<any> {
    const httpParams = new HttpParams().set('command', 'close');
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/${accountId}/template`, { params: httpParams });
  }

  /**
   * @param {string} accountId Fixed Deposits Account Id
   * @returns {Observable<any>}
   */
  getFixedDepositsAccountTransactionTemplate(accountId: string): Observable<any> {
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/${accountId}/transactions/template`);
  }

  /**
   * @param clientId Client Id assosciated with fixed deposits account.
   * @returns {Observable<any>} Fixed Deposits account template.
   */
  getFixedDepositsAccountTemplate(clientId: string, productId?: string): Observable<any> {
    let httpParams = new HttpParams().set('clientId', clientId);
    httpParams = productId ? httpParams.set('productId', productId) : httpParams;
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/template`, { params: httpParams });
  }

  /**
   * @param {string} accountId Fixed Deposits Account Id
   * @returns {Observable<any>}
   */
  getFixedDepositsAccountAndTemplate(accountId: any) {
    const httpParams = new HttpParams().set('associations', 'charges,+linkedAccount')
      .set('template', 'true');
    return this.http.get(`${environment.serverUrl}/fixeddepositaccounts/${accountId}`, { params: httpParams });
  }

  /**
   * @param fixedDepositAccount Fixed Deposit Account
   * @returns {Observable<any>}
   */
  createFixedDepositAccount(fixedDepositAccount: any): Observable<any> {
    return this.http.post(`${environment.serverUrl}/fixeddepositaccounts`, fixedDepositAccount);
  }

  /**
   * @param {any} accountId Account Id
   * @param {any} fixedDepositAccount Fixed Deposit Account
   * @returns {Observable<any>}
   */
  updateFixedDepositAccount(accountId: any, fixedDepositAccount: any): Observable<any> {
    return this.http.put(`${environment.serverUrl}/fixeddepositaccounts/${accountId}`, fixedDepositAccount);
  }

  /**
   * @param clientId Client Id
   * @param clientName Client Name
   * @param fromAccountId Account Id
   * @param locale Locale
   * @param dateFormat Date Format
   * @returns {Observable<any>} Standing Instructions
   */
  getStandingInstructions(
    clientId: string, clientName: string, fromAccountId: string,
    locale: string, dateFormat: string): Observable<any> {
    const httpParams = new HttpParams()
      .set('clientId', clientId)
      .set('clientName', clientName)
      .set('fromAccountId', fromAccountId)
      .set('fromAccountType', '2')
      .set('locale', locale)
      .set('dateFormat', dateFormat);
    return this.http.get(`${environment.serverUrl}/standinginstructions`, { params: httpParams });
  }

}

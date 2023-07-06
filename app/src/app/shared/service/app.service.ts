import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConfig, APP_CONFIG } from 'src/app/shared/config/app-config';

@Injectable({
    providedIn: 'root'
})
export class AppService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) { }

    public getDepartmentList(data: any): Observable<any> {
        return this.http.post(this.appConfig.apiEndPoint + '/department/query', data);
    }

    public getDepartmentWithAssociatedEmployees(): Observable<any> {
        return this.http.get(this.appConfig.apiEndPoint + '/department/get-department-with-employee');
    }
    public getEmail(): Observable<any> {
        return this.http.get(this.appConfig.apiEndPoint + '/employee/mail');
    }
    public getEmployee(): Observable<any> {
        return this.http.get(this.appConfig.apiEndPoint + '/employee/list');
    }

}
import { InjectionToken } from '@angular/core';
export interface AppConfig {
    apiEndPoint: string;
    environment: string;
}
export const APP_CONFIG = new InjectionToken('AppConfig');

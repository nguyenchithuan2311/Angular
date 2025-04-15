import { InjectionToken } from '@angular/core';

export const ConfigToken = new InjectionToken<string>('App Config');
export const MultiLoggerToken = new InjectionToken<Function[]>('Multi Logger');

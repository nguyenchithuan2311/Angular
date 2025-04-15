import { Injectable } from '@angular/core';
import { randomInt } from 'node:crypto';
@Injectable({providedIn: 'root'})
export class LogService {
  private logCount = Math.random();
  log(message: string): void {
    console.log(message);
    console.log(`Log count: ${this.logCount}`);
  }
}
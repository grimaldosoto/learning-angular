import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AwesomeService {
  sharedMessage = signal(':D');
}

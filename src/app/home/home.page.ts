import { Component } from '@angular/core';
import { SecureStorageService } from '../services/secure-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  email: string;

  constructor(private secureStorageService: SecureStorageService) {}

  setEmail(){
    let result = this.secureStorageService.setSetting('email', this.email);
    console.log('set home result', result);
  }

  getEmail(){
    let result = this.secureStorageService.getSettings('email');
    console.log('get home result', result);
  }

}

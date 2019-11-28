import { Injectable } from '@angular/core';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage/ngx';

const SECURE_KEY = 'SS_SETTINGS';

@Injectable({
  providedIn: 'root'
})
export class SecureStorageService {

  constructor(private secureStorage: SecureStorage) { }

  setSetting(key: string, value: any){
    return this.storage().then((storage: SecureStorageObject) => {
      return storage.set(key, value)
        .then(
          data => {
            console.log('success set', data)
            return data;
          },
          error => {
            console.log('error set', error)
            return error;
          }
        );
    });
  }

  getSettings(key: string){
    this.storage().then((storage: SecureStorageObject) => {
      storage.get(key)
        .then(
          data => {
            console.log('success get', data)
            return data;
          },
          error => {
            console.log('error get', error)
            return error;
          }
        );
    });
  }

  storage(){
    return this.secureStorage.create(SECURE_KEY);
  }
}

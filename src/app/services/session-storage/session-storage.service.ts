import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SessionStorageService {
  constructor() {}

  public saveData(key: string, value: any) {
    if (value) sessionStorage.setItem(key, JSON.stringify(value));
  }

  public getData(key: string) {
    const data = sessionStorage.getItem(key);
    return data === 'undefined' || data === 'null' || !data
      ? undefined
      : JSON.parse(data);
  }

  public removeData(key: string) {
    sessionStorage.removeItem(key);
  }

  public clearData() {
    sessionStorage.clear();
  }
}

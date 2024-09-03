import { Injectable } from '@angular/core';

declare let window: any;

@Injectable({
  providedIn: 'root'
})
export class MetamaskService {

  constructor() { }

  async connectMetamask(): Promise<string> {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        return accounts[0];
      } catch (error: any) {
        console.error('Error conectando con Metamask:', error);
        throw new Error('No se pudo conectar con Metamask');
      }
    } else {
      throw new Error('Metamask no está instalado');
    }
  }

  disconnectMetamask() {
    window.ethereum = null;
  }
}

import { Component } from '@angular/core';
import { MetamaskService } from './service/metamask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Metamask Angular Example';
  userAddress: string | null = null;
  errorMessage: string | null = null;

  constructor(private metamaskService: MetamaskService) {}

  async connectWallet() {
    try {
      this.userAddress = await this.metamaskService.connectMetamask();
      this.errorMessage = null;
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  }

  disconnectWallet() {
    this.metamaskService.disconnectMetamask();
    this.userAddress = null;
  }
}

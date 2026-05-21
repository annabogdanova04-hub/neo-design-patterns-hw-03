import { PaymentProviderFactory } from "../core/PaymentProviderFactory";
import { PaymentProvider } from "../core/PaymentProvider";

export class PaymentContext {
  private provider: PaymentProvider;

  constructor(factory: PaymentProviderFactory) {
    this.provider = factory.createPaymentProvider();
  }

  processPayment(amount: number): void {
    this.provider.authorize(amount);
    const transactionId = Math.random().toString(36).substring(2, 7);
    this.provider.capture(transactionId);
    this.provider.refund(transactionId);
  }
}

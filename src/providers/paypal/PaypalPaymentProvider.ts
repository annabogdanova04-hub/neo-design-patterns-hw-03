// TODO: Implement the PaypalPaymentProvider class
// TODO: Implement the StripePaymentProvider class
import { PaymentProvider } from "../../core/PaymentProvider";

export class PaypalPaymentProvider implements PaymentProvider {
    authorize(amount: number): void {
    console.log(`[Paypal] Authorizing $${amount}`);
    }
    capture(transactionId: string): void {
    console.log(`[Paypal] Capturing transaction ${transactionId}`);   
    }
    refund(transactionId: string): void {
    console.log(`[Paypal] Refunding transaction ${transactionId}`);
    }
}
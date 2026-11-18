export interface PaymentMethod {
  pay(amount: number): void;
}

export class CardPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} con tarjeta`);
  }
}

export class CashPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} en efectivo`);
  }
}

export class TransferPayment implements PaymentMethod {
  pay(amount: number): void {
    console.log(`Pagando $${amount} por transferencia`);
  }
}

export class PaymentProcessor {
  private readonly method: PaymentMethod;

  constructor(method: PaymentMethod) {
    this.method = method;
  }

  pay(amount: number): void {
    this.method.pay(amount);
  }
}

new PaymentProcessor(new CardPayment()).pay(100);

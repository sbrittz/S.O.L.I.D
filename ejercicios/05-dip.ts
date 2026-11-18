export interface Notifier {
  send(to: string, message: string): void;
}

export class EmailSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`Correo para ${to}: ${message}`);
  }
}

export class SmsSender implements Notifier {
  send(to: string, message: string): void {
    console.log(`SMS para ${to}: ${message}`);
  }
}

export class OrderService {
  private readonly notifier: Notifier;

  constructor(notifier: Notifier) {
    this.notifier = notifier;
  }

  createOrder(customerEmail: string): void {
    console.log("Pedido creado");
    this.notifier.send(customerEmail, "Tu pedido fue creado");
  }
}

new OrderService(new EmailSender()).createOrder("ana@example.com");

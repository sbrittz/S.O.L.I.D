export interface Printer {
  print(document: string): void;
}

export interface Scanner {
  scan(document: string): void;
}

export interface Fax {
  fax(document: string): void;
}

export class SimplePrinter implements Printer {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }
}

export class MultifunctionPrinter implements Printer, Scanner, Fax {
  print(document: string): void {
    console.log(`Imprimiendo: ${document}`);
  }

  scan(document: string): void {
    console.log(`Escaneando: ${document}`);
  }

  fax(document: string): void {
    console.log(`Enviando fax: ${document}`);
  }
}

new SimplePrinter().print("tarea.txt");

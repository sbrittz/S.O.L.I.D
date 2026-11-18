export interface User {
  username: string;
  email: string;
}

export class UserValidator {
  validate(email: string): void {
    if (!email.includes("@")) {
      throw new Error("El correo no es valido");
    }
  }
}

export class UserRepository {
  readonly users: User[] = [];

  add(user: User): void {
    this.users.push(user);
  }
}

export class EmailService {
  sendWelcomeEmail(email: string): string {
    return `Email enviado a ${email}`;
  }
}

export class UserRegistrationService {
  private readonly validator: UserValidator;
  private readonly repository: UserRepository;
  private readonly emailService: EmailService;

  constructor(
    validator: UserValidator = new UserValidator(),
    repository: UserRepository = new UserRepository(),
    emailService: EmailService = new EmailService(),
  ) {
    this.validator = validator;
    this.repository = repository;
    this.emailService = emailService;
  }

  register(username: string, email: string): string {
    this.validator.validate(email);
    this.repository.add({ username, email });
    return this.emailService.sendWelcomeEmail(email);
  }

  get users(): readonly User[] {
    return this.repository.users;
  }
}

export class UserManager extends UserRegistrationService {}

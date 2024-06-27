export default class Email {
  private value: string;

  constructor(readonly email: string) {
    if (!this.isValid(email)) {
      throw new Error('Invalid Email');
    }
    this.value = email.toLowerCase();
  }

  private isValid(email: string) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  }

  getEmail() {
    return this.value;
  }

  getObfuscatedEmail() {
    const [alias, domain] = this.value.split('@');
    if (domain == 'niuco.com.br') {
      return this.value;
    }

    let obfuscatedAlias;
    if (alias.length <= 4) {
      // com a logica de 2 primeiros e 2 ultimos caracteres visiveis o email todo seria visivel, então optarei por outra abordagem para
      // manter o email ofuscado
      obfuscatedAlias = alias[0] + '*'.repeat(4) + alias[alias.length - 1];
    } else {
      obfuscatedAlias = alias.slice(0, 2) + '*'.repeat(4) + alias.slice(-2);
    }
    return `${obfuscatedAlias}@${domain}`;
  }
}

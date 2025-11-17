// access->modify
class BankAccount {
  readonly userId: number;
  userName: string;
  private userBalance: number;
  constructor(userId: number, userName: string, userBalance: number) {
    this.userBalance = userBalance;
    this.userId = userId;
    this.userName = userName;
  }
  addbalance(amount: number) {
    this.userBalance += amount;
  }
  checkBalance() {
    console.log(
      `Dear ${this.userName} sir, your current balance is ${this.userBalance}`
    );
  }
}
const asifAccount = new BankAccount(1231, "asif", 100);
asifAccount.addbalance(100);
asifAccount.checkBalance();

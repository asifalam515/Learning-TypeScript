{
  // getter and setter

  // getter
  class BankAccount {
    readonly userId: number;
    protected userName: string; // we can access on our child/derived class also
    private userBalance: number;
    constructor(userId: number, userName: string, userBalance: number) {
      this.userBalance = userBalance;
      this.userId = userId;
      this.userName = userName;
    }
    //   set the balance

    // addbalance(amount: number) {
    //   this.userBalance += amount;
    // }
    // setter use kore korte cai
    set AddBalance(amount: number) {
      this.userBalance += amount;
    }
    // get data by using getter
    get getBalance() {
      return this.userBalance;
    }

    checkBalance() {
      console.log(
        `Dear ${this.userName} sir, your current balance is ${this.userBalance}`
      );
    }
  }
  const asifAccount = new BankAccount(123, "asif", 123);
}

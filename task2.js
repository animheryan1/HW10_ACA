class Account {
    constructor(id, name, balance) {
        this._id = id;
        this._name = name;
        this._balance = balance;
    }

    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get balance() {
        return this._balance;
    }

    set balance(value) {
        this._balance = value;
    }

    credit(amount) {
        this.balance += amount;
        return this.balance;
    }

    debit(amount) {
        if (amount > this.balance) {
            console.log("“Amount exceeded balance.”");
            return;
        }
        this.balance -= amount;
        return this.balance;
    }

    transferTo(anotherAccount, amount) {
        if (amount > this.balance) {
            console.log("“Amount exceeded balance.”");
            return;
        }
        this.balance -= amount;
        anotherAccount.balance += amount;
    }

    static identifyAccounts(accountFirst, accountSecond) {
        return accountFirst.id === accountSecond.id && accountFirst.name === accountSecond.name && accountFirst.balance === accountSecond.balance;
    }

    toString() {
        return this.name + " has " + this.balance + " money and id is " + this.id;
    }
}

const account1 = new Account(1, "acc1", 1000);
account1.id = 4;
console.log(account1.id);//prints 1

account1.credit(20);
console.log(account1.balance);

account1.debit(5000);
console.log(account1.balance);

const account2 = new Account(2, "acc2", 10);

account1.transferTo(account2, 20);
console.log(account1.balance);
console.log(account2.balance);

console.log(Account.identifyAccounts(account1, account2));
console.log(account1.toString());


class Ducat {
    // data member
    data = "Hello Ducat Student";
    #password = "12345";

    //  method
    hello() {
        return this.data;
    }
    Welcome() {
        return this.data;
    }
    get getPassword() {
        return this.#password;
    }
    set setPassword(hack) {
        this.#password = hack;
    }
}
const app1 = new Ducat;
app1.data = "Ducat";
console.log(app1.data);
// console.log(app1.password);
app1.setPassword = "98745";
console.log(app1.getPassword);
console.log(app1.hello())
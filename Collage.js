class Collage {
    email = "admin@collage.com";
    #pass = "12345";

    welcome(email) {
        return `<h1>${email} ${this.email}</h1>`
    }

    get getPassword() {
        return `<h1>${this.#pass}</h1>`;
    }
    set setPassword(value) {
        this.#pass = value;
    }
}

const app = new Collage;

console.log(app.email);
// console.log(app.pass);

document.write(app.welcome("Yugal"));
app.setPassword = "hello123";
document.write(app.getPassword);




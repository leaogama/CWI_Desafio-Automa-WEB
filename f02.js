const faker = require('faker');
faker.locale = 'pt_BR';
const nome = faker.name.findName();
const email = faker.internet.email(nome)
const phoneNumber = faker.phone.phoneNumber()
const birth = faker.date.past(30, 2000)
console.log(nome)
client = {
    nome,
    email,
    phoneNumber,
    birth,
}
console.log(client)

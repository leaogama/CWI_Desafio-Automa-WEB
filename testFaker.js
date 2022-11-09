const faker = require('faker');
const clients = []
faker.locale = 'pt_BR';
for (let index = 0; index < 10; index++) {
    const nome = faker.name.findName();
    const email = faker.internet.email(nome)
    const phoneNumber = faker.phone.phoneNumber()
    const birth = faker.date.past(30, 2000)
    client = {
        nome,
        email,
        phoneNumber,
        birth,
    }
    clients.push(client)

}
console.log(clients)
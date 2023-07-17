
const {faker, th} = require('@faker-js/faker');


class RandomDataGenerator{

    async getFullName (){
        const name = faker.person.fullName()
        return name
    }      

    async getMail (){
        const mail = faker.internet.email()
        return mail
    }

    async getSex (){
        const sex = faker.person.sex()
        return sex
    }

    async getFirstName (){
        const firstName = faker.person.firstName()
        return firstName
    }

    async getLastName (){
        const lastName = faker.person.lastName()
        return lastName
    }
    
    async getZipCode (){
        const zipCode = faker.location.zipCode()
        return zipCode
    }

    
}


module.exports = {RandomDataGenerator}
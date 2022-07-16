//import all dependencies
const express = require("express")
const app = express()
const { faker } = require('@faker-js/faker')

//express configuration
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// faker: create a class
class Animal {
    constructor() {
        this.type = faker.animal.type()
        this.name = faker.name.firstName()
    }
}


class User {
    constructor() {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.jobTitle = faker.name.jobTitle()
        this.jobType = faker.name.jobType()
    }
}

class Company {
    constructor() {
        this.companyName = faker.company.companyName()
        this.catchPhrase = faker.company.catchPhrase()

    }
}


//routes
app.get("/api/randomName", (req, res) => {
    const randomName = faker.name.findName();
    res.json(randomName)
})

app.get("/api/users/new", (req, res) => {
    const newUser = new User()
    res.json(newUser)
})

app.get("/api/companies/new", (req, res) => {
    const newCompany = new Company()
    res.json(newCompany)
})

app.get("/api/user/company", (req, res) => {
    const newCompany = new Company();
    const newUser = new User();
    const userCompany = {
        ...newCompany,
        ...newUser
    }

    res.json(userCompany)

})

app.get("/api/animals/new", (req, res) => {
    const newAnimal = new Animal()
    res.json(newAnimal)
})

//listen to the port
app.listen(8000, () => console.log(`Listening to port : 8000`))
const express = require("express");
const faker = require("faker");
const app = express();
const port = 8000;

// make sure these lines are above any app.get or app.post code blocks
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


// Class Constructors:
class User {
    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}

class Company {
    constructor() {
        this.name = faker.company.companyName();
        this.address = [{
            streetName: faker.address.streetAddress()
        },
        {
            city: faker.address.city()
        }, 
        {
            state: faker.address.state()
        }, 
        {
            zipCode: faker.address.zipCode()
        },
        {
            country: faker.address.country()
        }]
    }
}

app.get("/api/users/new", (req, res) => {
    res.json(new User());
})

app.get("/api/companies/new", (req, res) => {
    res.json(new Company());
})

app.get("/api/user/company", (req,res) => {
    res.json({user: new User(),
        company: new Company()});
    
})


const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
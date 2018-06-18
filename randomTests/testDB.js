"use strict";
const db = require("./app/database/models");

db.company.create({
    name: "Goje Corps",
    url: "www.goje-corps.com",
    timezone: "2",
    lang: "RO",
    phone: "+40756500902",
    email: "gojedan98@gmail.com"
}).then(company => {
    return db.route.create({
        shortName: "Cancer Street",
        longName: "Cancer Street by Ulcer Road",
        type: "1",
        companyId: company.id
    });
}).then(route => {
    return db.driver.create({
        firstName: "Vlad",
        lastName: "Dinu",
        birthDate: new Date(1998, 10, 12),
        gender: 2
    }).then(driver => {
        return db.route.findOne({ where: { id: route.id } })
            .then(route =>  {
                return route.addDriver(driver.id);
            });
    });
}).then(() => {
    db.driver.findOne({ where: { id: 7 }, include: ["route"] })
        .then(console.log);
});
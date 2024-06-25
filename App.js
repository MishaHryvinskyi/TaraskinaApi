const works = require('./books');

const invokeAction = async ({ action, id, name, year }) => {
    switch (action) {
        case "read":
           const allWorks = await works.getAll();
           return console.log(allWorks);
    }
}

invokeAction({ action: "read"});
const fs = require('fs/promises');
const path = require('path');

const workPath = path.join(__dirname, "book.json")

const getAll = async () => {
   const data = await fs.readFile(workPath, 'utf-8');
   return JSON.parse(data);
};

const getById = async ({ id }) => {
    const data = await fs.readFile(`${__dirname}/book.json`, 'utf-8');
    return JSON.parse(data);
 };

module.exports = {
    getAll,
}
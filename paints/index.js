const fs = require('fs/promises');
const path = require('path');
const { nanoid } = require("nanoid");

const paintsPath = path.join(__dirname, "paint.json")

const getAll = async () => {
   const data = await fs.readFile(paintsPath);
   return JSON.parse(data);
};

const getById = async (id) => {
   const paints = await getAll();
   const result = paints.find(item => item.id === id);
   return result || null;
};

const add = async(data) => {
    const paints = await getAll();
    const newPaint = {
        id: nanoid(),
        ...data,
    }
    paints.push(newPaint);
    await fs.writeFile(paintsPath, JSON.stringify(paints, null, 2));
    return newPaint;
};

const updateById = async(id, data) => {
    const paints = await getAll();
    const index = paints.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }
    paints[index] = { id, ...data };
    await fs.writeFile(paintsPath, JSON.stringify(paints, null, 2));
    return paints[index];
};

const deleteById = async(id, data) => {
    const paints = await getAll();
    const index = paints.findIndex(item => item.id === id);
    if(index === -1) {
        return null;
    }
    const [result] = paints.splice(index, 1);
    await fs.writeFile(paintsPath, JSON.stringify(paints, null, 2));
    return result;
};
module.exports = {
    getAll,
    getById,
    add,
    updateById,
    deleteById,
};
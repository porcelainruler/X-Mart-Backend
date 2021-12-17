let loki = require("lokijs");
let db = new loki("inmemory.json");

const dbInstances = {};

const createNewCollection = (collectionName, uniqueField) => {
  if (uniqueField !== null) {
    dbInstances[collectionName] = db.addCollection(collectionName, { unique: uniqueField });
  } else {
    dbInstances[collectionName] = db.addCollection(collectionName);
  }
};

const addDataToCollection = (collectionName, dataObject) => {
  if (collectionName === null || dataObject === null) {
    return false;
  }
  if (collectionName in dbInstances) {
    dbInstances[collectionName].insert(dataObject);
  } else {
    console.log("Unable To write");
  }
};

const findOneInCollection = (collectionName, params) => {
  if (collectionName in dbInstances) {
    return dbInstances[collectionName].findOne(params);
  } else {
    return null;
  }
};

const findAllInCollection = (collectionName, params) => {
  if (collectionName in dbInstances) {
    return dbInstances[collectionName].find(params);
  } else {
    return null;
  }
};

const updateDataToCollection = (collectionName, dataObject) => {
  dbInstances[collectionName].update(dataObject);
};

const findAndOrUpdate = (collectionName, target, newData, newField) => {
  try {
    let tempRes = findOneInCollection(collectionName, target);
    if (tempRes === null) {
      addDataToCollection(collectionName, newData);
    } else {
      tempRes[newField] = newData[newField];
      updateDataToCollection(collectionName, tempRes);
    }
  } catch (error) {
    console.log(error);
  }
};

const getCollection = (collectionName) => {
  return dbInstances[collectionName];
};

const removeDataFromColl = (collectionName, params) => {
  dbInstances[collectionName].remove(params);
};

const findWithWhere = (collectionName, whereFunc) => {
  if (collectionName) {
    return dbInstances[collectionName].where(whereFunc);
  } else {
    return null;
  }
};

module.exports = {
  createNewCollection,
  addDataToCollection,
  findAllInCollection,
  findAndOrUpdate,
  findOneInCollection,
  updateDataToCollection,
  getCollection,
  removeDataFromColl,
  findWithWhere,
};

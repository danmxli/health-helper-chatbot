const userConfig = require("../../mongodb/userConfigData");

const getAllConfigData = async () => {
    try {
        data = await userConfig.getData();
        return data;
    }
    catch (error) {
        throw error;
    }
}

const addNewConfig = async (newDoc) => {
    try {
        data = await userConfig.addDocument(newDoc);
        return data;
    }
    catch (error) {
        throw error;
    }
}

const deleteConfig = async (name) => {
    try {
        data = await userConfig.deleteDocument(name);
        return data;
    }
    catch (error) {
        throw error;
    }
}

module.exports = {
    getAllConfigData,
    addNewConfig,
    deleteConfig
};
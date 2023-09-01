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

const addNewConfig = async () => {
    return;
}

const deleteConfig = async () => {
    return;
}

module.exports = {
    getAllConfigData,
    addNewConfig,
    deleteConfig
};
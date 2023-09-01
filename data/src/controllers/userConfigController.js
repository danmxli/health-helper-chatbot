const userConfigServices = require("../services/userConfigServices");

const getAllConfigData = async (req, res) => {
    try {
        const allConfigData = await userConfigServices.getAllConfigData();
        res.send({
            status: "OK",
            data: allConfigData
        });
    }
    catch (error) {
        throw error;
    }

}

const addNewConfig = (req, res) => {
    const newConfig = userConfigServices.addNewConfig();
    res.send("Add new config");
}

const deleteConfig = (req, res) => {
    userConfigServices.deleteConfig();
    res.send("Delete config");
}

module.exports = {
    getAllConfigData,
    addNewConfig,
    deleteConfig
};
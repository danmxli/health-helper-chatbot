const { dockStart } = require('@nlpjs/basic');
const express = require('express');
const app = express();
const port = 3001;

const cors = require('cors');
app.use(cors());

app.post('/process-text', async (req, res) => {
    try {
        const text = req.query.text;
        const dock = await dockStart();
        const nlp = dock.get('nlp');
        await nlp.train();
        const response = await nlp.process('en', text);
        // console.log(response);
        res.send(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(port, () => {
    console.log('Server is running on port 3001');
});
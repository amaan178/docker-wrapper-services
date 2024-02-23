const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Hardcoded interactsh ID obtained from your command line
const interactshId = 'cnc4gi3vpk514j2ot970bxjd7mur3f1fh.oast.online';

app.get('/api/getURL', (req, res) => {
    // Returning the hardcoded interactsh ID as the URL
    res.json({ url: interactshId });
});

app.get('/api/getInteractions', (req, res) => {
    // res.json({ url: interactshId });
    const url = req.query.url;
    console.log(url);
    if (url !== interactshId) {
        res.status(400).json({ error: 'Invalid URL parameter' });
        return;
    }
    // Add your logic to retrieve interactions for the specified interactsh ID
    // For demonstration purposes, let's just return a sample response
    const interactions = [
        { interaction_type: 'DNS', caller_ip: '192.168.1.1', timestamp: '2024-02-23 10:30' },
        { interaction_type: 'HTTP', caller_ip: '192.168.1.2', timestamp: '2024-02-23 10:35' }
    ];
    res.json({ interactions });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

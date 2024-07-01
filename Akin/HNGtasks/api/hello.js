const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
    const visitorName = req.query.visitor_name;
    const clientIp = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

    const location = 'Lagos, Nigeria';
    const temperature = 32;

    res.json({
        client_ip: clientIp,
        location: location,
        greeting: `Hello, ${visitorName}!, the temperature is ${temperature} degrees Celsius in ${location}`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;

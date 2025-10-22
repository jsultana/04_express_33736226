// index.js
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

// Mount routes from routes/main.js
const mainRoutes = require("./routes/main");
app.use("/", mainRoutes);

// Start server
app.listen(port, () => {
    console.log(`Node server is running on port ${port}...`);
});

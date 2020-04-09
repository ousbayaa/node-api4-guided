const server = require("./api/server.js");

// make the port dynamic, so heroku can assign one
const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});

const app = require("./src/app");
const morgan = require('morgan');
const PORT = 3055;

const server = app.listen(PORT, ()=> {
    console.log(`Server listen port ${PORT}`);
})

process.on('SIGINT', () => {
    server.close(() => console.log('Exit Server Express'));
})
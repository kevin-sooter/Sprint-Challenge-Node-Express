// IMPORTS
const express = require('express');
const ProjectsRoutes = require('./ProjectsRoutes/ProjectsRoutes.js');
const ActionsRoutes = require('./ActionsRoutes/ActionsRoutes.js');
const port = 6000;

// SERVER SETUP
const server = express();
server.use(express.json());

// ROUTE HANDLERS
server.use('/projects', ProjectsRoutes);
server.use('/actions', ActionsRoutes);

// PORT LISTENERS
server.listen(port, () => console.log(`Server is running on ${port}!`));

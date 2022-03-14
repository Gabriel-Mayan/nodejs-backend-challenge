const { Router } = require('express');
const { login } = require('./controllers/login');
const { createUser } = require('./controllers/user');
const { getAllTasks } = require('./controllers/admin');
const { createTask, finalizeTask, updateTask, listTask } = require('./controllers/task');

const { loginSchema } = require('./validations/loginSchema');
const { createUserSchema } = require('./validations/userSchema');
const { createTaskSchema, updateTaskSchema } = require('./validations/taskSchema');
const { testParamsSchema, checkEmptyRequestSchema } = require('./validations/genericSchema');
const { isAdmin, getTasksSchema } = require('./validations/adminSchema');

const authentication = require('./middlewares/authentication');
const { validateBody, validateParams, validateRequest, validateQuery, validateUser } = require('./middlewares/validateRequest');

const routes = Router();

routes.get('/', (_, response) => response.status(200).json({ message: 'Teste OK' }));

routes.post('/login', validateBody(loginSchema), login);
routes.post('/user/create', validateBody(createUserSchema), createUser);
routes.get('/task/list', authentication, listTask);
routes.post('/task/create', authentication, validateBody(createTaskSchema), createTask);
routes.post('/task/finalize/:id', authentication, validateParams(testParamsSchema), finalizeTask);
routes.post('/task/update/:id', authentication, validateRequest(checkEmptyRequestSchema), validateParams(testParamsSchema), validateBody(updateTaskSchema), updateTask);
routes.get('/admin/list-all-tasks', authentication, validateUser(isAdmin), validateQuery(getTasksSchema), getAllTasks);

module.exports = routes;

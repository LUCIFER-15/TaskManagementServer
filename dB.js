
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// const tasksFilePath = './tasks.json';

// // Ensure tasks.json exists
// if (!fs.existsSync(tasksFilePath)) {
//   fs.writeFileSync(tasksFilePath, JSON.stringify([]));
// }

// // Endpoint to get tasks
// app.get('/tasks', (req, res) => {
//   fs.readFile(tasksFilePath, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error reading tasks file');
//     }
//     res.json(JSON.parse(data));
//   });
// });

// // Endpoint to add a new task
// app.post('/tasks', (req, res) => {
//   const newTask = req.body;
//   fs.readFile(tasksFilePath, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error reading tasks file');
//     }
//     const tasks = JSON.parse(data);
//     newTask.id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
//     tasks.push(newTask);
//     fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (err) => {
//       if (err) {
//         return res.status(500).send('Error writing tasks file');
//       }
//       res.json(newTask);
//     });
//   });
// });

// // Endpoint to update an existing task
// app.put('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id, 10);
//   const updatedTask = req.body;
//   fs.readFile(tasksFilePath, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error reading tasks file');
//     }
//     const tasks = JSON.parse(data);
//     const taskIndex = tasks.findIndex(task => task.id === taskId);
//     if (taskIndex === -1) {
//       return res.status(404).send('Task not found');
//     }
//     tasks[taskIndex] = { ...tasks[taskIndex], ...updatedTask };
//     fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (err) => {
//       if (err) {
//         return res.status(500).send('Error writing tasks file');
//       }
//       res.json(tasks[taskIndex]);
//     });
//   });
// });

// // Endpoint to delete a task
// app.delete('/tasks/:id', (req, res) => {
//   const taskId = parseInt(req.params.id, 10);
//   fs.readFile(tasksFilePath, (err, data) => {
//     if (err) {
//       return res.status(500).send('Error reading tasks file');
//     }
//     let tasks = JSON.parse(data);
//     tasks = tasks.filter(task => task.id !== taskId);
//     fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2), (err) => {
//       if (err) {
//         return res.status(500).send('Error writing tasks file');
//       }
//       res.status(200).send();
//     });
//   });
// });

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

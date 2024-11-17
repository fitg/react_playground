const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());

// In-memory database
let customers = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/build')));

// API endpoint to get a message
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// API endpoints for customers
app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/customers', (req, res) => {
  const newCustomer = { id: customers.length + 1, ...req.body };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});

app.put('/api/customers/:id', (req, res) => {
  const { id } = req.params;
  const index = customers.findIndex(customer => customer.id === parseInt(id));
  if (index !== -1) {
    customers[index] = { id: parseInt(id), ...req.body };
    res.json(customers[index]);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

app.delete('/api/customers/:id', (req, res) => {
  const { id } = req.params;
  const index = customers.findIndex(customer => customer.id === parseInt(id));
  if (index !== -1) {
    const deletedCustomer = customers.splice(index, 1);
    res.json(deletedCustomer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

// Catch-all handler to serve the React app for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
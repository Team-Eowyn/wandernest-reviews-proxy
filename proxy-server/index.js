const express = require('express');
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.join(__dirname, './public')));
// app.use('/:id', express.static(path.join(__dirname, './public')))

// PHOTOCAROUSEL
app.use('/api/hotels', createProxyMiddleware({target: 'http://ec2-18-220-158-65.us-east-2.compute.amazonaws.com:3001', changeOrigin: true}));
app.use('/api/hotels/:id', createProxyMiddleware({target: 'http://ec2-18-220-158-65.us-east-2.compute.amazonaws.com:3001', changeOrigin: true}));

// BOOKINGS
app.use('/api/bookings/:id', createProxyMiddleware({target: 'http://ec2-18-191-247-25.us-east-2.compute.amazonaws.com:3002', changeOrigin: true}));
app.use('/api/bookings', createProxyMiddleware({target: 'http://ec2-18-191-247-25.us-east-2.compute.amazonaws.com:3002', changeOrigin: true}));

// ABOUT
app.use('/about/:id', createProxyMiddleware({target: 'http://ec2-3-135-240-238.us-east-2.compute.amazonaws.com:3003', changeOrigin: true}));

// REVIEWS
app.use('/roomtips', createProxyMiddleware({target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true}));
app.use('/qas', createProxyMiddleware({target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true}));
app.use('/reviews', createProxyMiddleware({target: 'http://ec2-54-153-71-183.us-west-1.compute.amazonaws.com:3004', changeOrigin: true}));

// HEADER
app.use('/header/:id', createProxyMiddleware({ target: 'http://ec2-3-135-240-27.us-east-2.compute.amazonaws.com:3005', changeOrigin: true}));

/*
// PHOTOCAROUSEL
app.use('/api/hotels', createProxyMiddleware({target: 'http://localhost:3001', changeOrigin: true}));
app.use('/api/hotels/:id', createProxyMiddleware({target: 'http://localhost:3001', changeOrigin: true}));

// BOOKINGS
app.use('/api/bookings/:id', createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true}));
app.use('/api/bookings', createProxyMiddleware({target: 'http://localhost:3002', changeOrigin: true}));

// ABOUT
app.use('/about/:id', createProxyMiddleware({target: 'http://localhost:3003', changeOrigin: true}));

// REVIEWS
app.use('/roomtips', createProxyMiddleware({target: 'http://localhost:3004', changeOrigin: true}));
app.use('/qas', createProxyMiddleware({target: 'http://localhost:3004', changeOrigin: true}));
app.use('/reviews', createProxyMiddleware({target: 'http://localhost:3004', changeOrigin: true}));
*/

const port = 3000;

app.listen(port, (err) => {
  console.log(`Server running on port ${port}!`);
});
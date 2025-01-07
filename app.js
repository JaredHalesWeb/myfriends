//const express = require('express');
import express from 'express';
const app = express();
const port = process.env.PORT || 3000;
const friends = []
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));
app.get('/getCurrentDate', (req, res) => {
    const date = new Date()
    res.send({'currentDate':date});
});
app.post('/addFriend', (req, res) => {
    console.log(`adding a friend ${req.body.name}`)
    
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const age = req.body.age;
    const friend = {
        name: name, 
        email: email,
        phone: phone,
        age: age
    };
    friends.push(friend);
    res.json({'friends':friends})
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
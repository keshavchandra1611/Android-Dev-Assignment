// const path = require('path');
const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 4000;
var cors = require('cors')
app.use(cors())


// app.use(express.static(path.join(__dirname, /* Public Folder */)))
// Middleware to read the body data
app.use(express.urlencoded({ extended: true }));

app.get('/api/contacts', (req, res) => {
    res.json({
        success: true,
        Data: {
            "date": "2025-05-13",
            "totalUsers": 5,
            "users": [
                {
                    "id": "usr_001",
                    "fullName": "Rohit Sharma",
                    "phone": "+91-9876543210",
                    "email": "rohit.sharma@example.com",
                    "course": "Data Science Bootcamp",
                    "enrolledOn": "2025-05-13"
                },
                {
                    "id": "usr_002",
                    "fullName": "Sneha Verma",
                    "phone": "+91-9123456789",
                    "email": "sneha.verma@example.com",
                    "course": "Android Development",
                    "enrolledOn": "2025-05-13"
                },
                {
                    "id": "usr_003",
                    "fullName": "Arjun Mehta",
                    "phone": "+91-9988776655",
                    "email": "arjun.mehta@example.com",
                    "course": "Full Stack Web Development",
                    "enrolledOn": "2025-05-13"
                },
                {
                    "id": "usr_004",
                    "fullName": "Priya Singh",
                    "phone": "+91-9876512345",
                    "email": "priya.singh@example.com",
                    "course": "Cloud Computing",
                    "enrolledOn": "2025-05-13"
                },
                {
                    "id": "usr_005",
                    "fullName": "Ankit Rawat",
                    "phone": "+91-9765432109",
                    "email": "ankit.rawat@example.com",
                    "course": "Machine Learning with Python",
                    "enrolledOn": "2025-05-13"
                }

            ]

        }
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:` + PORT);
    let time = Date();
    console.log(time, `\n`);
})
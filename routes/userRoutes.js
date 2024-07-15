const express = require('express');
const { registerUser, getUsers, getUserById, updateUser, deleteUser, signInUser, signOutUser } = require('../controllers/userController');
const router = express.Router();

// Create a new user
router.post('/users', registerUser);

// List all users
router.get('/users', getUsers);

// Fetch a user by ID
router.get('/user/:id', getUserById);

// Update a user by ID
router.put('/users/:id', updateUser);

// Delete a user by ID
router.delete('/users/:id', deleteUser);

// User sign in
router.post('/auth/signin', signInUser);

// User sign out
router.post('/auth/signout', signOutUser);

module.exports = router;

const users = [];

// Add new user
const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Username already taken OR user already exist
  const existingUser = users.find((user) => user.name === name && user.room === room);
  if (existingUser) {
    return { error: 'Username is taken' };
  }

  // New user adding to users array
  const user = { id, name, room };
  users.push(user);
  return { user };
}

// Remove any user
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

const getUser = (id) => users.find((user) => user.id === id);

const getUserInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUserInRoom };
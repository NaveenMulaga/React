import bcrypt from 'bcryptjs'
const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: 'Rahul',
    email: 'rahul@gmail.com',
    password: bcrypt.hashSync('pass', 10),
    isAdmin: false,
  },
  {
    name: 'kumar',
    email: 'kumar@gmail.com',
    password: bcrypt.hashSync('pass', 10),
  },
]

export default users

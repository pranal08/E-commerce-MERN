import bcrypt from 'bcryptjs'

const users = [
    {
        name: "Admin User",
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: "Chris Evans",
        email: 'chrisevans@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: "Emma Green",
        email: 'emmagreen@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users
import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Rishabh Khuswaha',
        password: bcrypt.hashSync('123456', 10),
        email: 'rishabh.admin@email.com',
        isAdmin: true,
        role: "Seller"
    },
    {
        name: 'Omit Kumar',
        password: bcrypt.hashSync('654321', 10),
        email: 'omit.admin@email.com',
        isAdmin: true,
        role: "Seller"
    },
    {
        name: 'Aryan Kumar',
        password: bcrypt.hashSync('123123', 10),
        email: 'aryan@email.com',
        isAdmin: false,
        role: "user"
    }
]

export default users;
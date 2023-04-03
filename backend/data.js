import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Sriya',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      //_id: '1',
      name: 'Pentel A105-K Caplet',
      slug: 'Pentel-A105-K-Caplet',
      category: 'Pens',
      image: '/images/1.png',
      price: 20,
      countStock: 10,
      brand: 'Pentel',
      rating: 4.5,
      noReviews: 10,
      description: 'ball point pen, black ink',
    },
    {
      //_id: '2',
      name: 'Pilot A105-K Caplet Automatic Pencil',
      slug: 'Pilot-A105-K-Caplet-Automatic-Pencil',
      category: 'Pens',
      image: '/images/2.jpg',
      price: 20,
      countStock: 15,
      brand: 'Pilot',
      rating: 3.5,
      noReviews: 10,
      description: 'ball point pen, black ink',
    },
    {
      //_id: '3',
      name: 'Faber castell',
      slug: 'Faber-castell',
      category: 'Pens',
      image: '/images/3.jpg',
      price: 20,
      countStock: 25,
      brand: 'Faber castell',
      rating: 4.2,
      noReviews: 10,
      description: 'ball point pen, black ink',
    },
  ],
};

export default data;


import bcrypt from 'bcrypt'

let data = [
  {
    url:
      'https://menback.com/wp-content/uploads/2019/08/c%C3%A1c-ki%E1%BB%83u-%C3%A1o-thun-nam-kinh-%C4%91i%E1%BB%83n-ph%E1%BA%A3i-c%C3%B3-trong-t%E1%BB%A7-%C4%91%E1%BB%93-c%E1%BB%A7a-%C4%91%C3%A0n-%C3%B4ng.jpg',
    name: 'Labcial',
    stars: 3.5,
    reviews: 3,
    price: 60,
    label: 'Lee',
    countInStock: 10,
  },
  {
    url:
      'https://salt.tikicdn.com/cache/w1200/ts/product/4e/b2/d1/246cc84d846e404002c58d743327a603.png',
    name: 'Belaw',
    stars: 5,
    reviews: 2,
    price: 30,
    label: 'Gucchi',
    countInStock: 4,
  },
  {
    url:
      'https://cdn-img-v2.webbnc.net/uploadv2/web/11/11014/menutop/2020/05/27/03/13/1590549190_avm005.jpg_resize1190x950.jpg',
    name: 'Hash',
    stars: 4,
    reviews: 1,
    price: 50,
    label: 'Gucchi',
  },
  {
    url:
      'https://hstatic.net/955/1000008955/1/2015/12-17/ao-mua__2__master.jpg',
    name: 'Kija',
    stars: 1,
    reviews: 5,
    price: 31,
    label: 'Gucchi',
    countInStock: 12,
  },
  {
    url:
      'https://www.celeb.vn/wp-content/uploads/2017/10/ao-nam-thoi-trang-2018-5-554x800.jpg',
    name: 'Kwai',
    stars: 5,
    reviews: 2,
    price: 30,
    label: 'Gucchi',
    countInStock: 13,
  },
  {
    url:
      'https://i.pinimg.com/736x/b9/a2/db/b9a2db8bfeff4028fe881da0d6fc7a9f.jpg',
    name: 'Poper',
    stars: 5,
    reviews: 2,
    price: 38,
    label: 'Gucchi',
    countInStock: 3,
  },
  {
    url: 'https://toplist.vn/images/800px/thoi-trang-nam-owen-319872.jpg',
    name: 'Laer',
    stars: 5,
    reviews: 2,
    price: 37,
    label: 'Gucchi',
    countInStock: 10,
  },
  {
    url:
      'https://image.voso.vn/users/vosoimage/images/284f32b04df383b28fc9de1efd213e0f?t%5B0%5D=compress%3Alevel%3D100&accessToken=e01355c64ae77f45b2c76e81e0c792999266febdadc811a4c25b7f63d61970bd',
    name: 'Whash',
    stars: 5,
    reviews: 2,
    price: 20,
    label: 'Gucchi',
    countInStock: 9,
  },
  {
    url: 'https://cardino.com.vn/wp-content/uploads/2018/04/1-4.jpg',
    name: 'Oil',
    stars: 5,
    reviews: 22,
    price: 10,
    label: 'Gucchi',
    countInStock: 6,
  },
  {
    url:
      'https://thoitrangngaynay.com/upload/sanpham/large/ao-thun-nam-thoi-trang-blue-front-242-1.jpg',
    name: 'Cash',
    stars: 5,
    reviews: 10,
    price: 60,
    label: 'Gucchi',
    countInStock: 11,
  },
];

/* data = data.map((product, index) => ({ ...product, id: index + 1 })); */

data = {
  product: data,
  users: [
    {
      name: 'Basir',
      email: 'admin@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('1234', 8),
      isAdmin: false,
    },
  ],
};

export default data;

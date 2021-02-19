
import mongoose from 'mongoose'

/* 
url:
'https://thoitrangngaynay.com/upload/sanpham/large/ao-thun-nam-thoi-trang-blue-front-242-1.jpg',
name: 'Cash',
stars: 5,
reviews: 10,
price: 60,
label: 'Gucchi',
countInStock: 11, */

const productSchema = mongoose.Schema({
    url: String,
    name: String,
    stars: Number,
    reviews: Number,
    price: Number,
    label: String,
    countInStock: Number
});

export default mongoose.model('product', productSchema);
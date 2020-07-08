// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const PostSchema = new Schema({
//   user: {
//     type: Schema.Types.ObjectId
//   },
//   text: {
//     type: String,
//     required: true
//   },
//   name: {
//     type: String
//   },
//   avatar: {
//     type: String
//   },
//   likes: [
//     {
//       user: {
//         type: Schema.Types.ObjectId
//       }
//     }
//   ],
//   comments: [
//     {
//       user: {
//         type: Schema.Types.ObjectId
//       },
//       text: {
//         type: String,
//         required: true
//       },
//       name: {
//         type: String
//       },
//       avatar: {
//         type: String
//       },
//       date: {
//         type: Date,
//         default: Date.now
//       }
//     }
//   ],
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = mongoose.model('post', PostSchema);

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    user: {
             type: Schema.Types.ObjectId
           },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    productImage: { type: String, required: true }
});

module.exports = mongoose.model('Product', productSchema);
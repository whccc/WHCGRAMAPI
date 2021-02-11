const mongoose = require('mongoose');

const ConnectionDB = async () => {
  try {
    const Uri = 'mongodb://localhost/WHCGRAM';
    await mongoose.connect(Uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
    console.log('DB start with success');
  } catch (Error) {
    console.log(Error);
  }
};

module.exports = ConnectionDB;

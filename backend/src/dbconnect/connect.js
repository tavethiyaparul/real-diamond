const mongoose = require('mongoose');
const allconfig = require('../config/allConfig');

mongoose.connect(allconfig.DB_URL).then(() => {
    console.log({db:allconfig.DB_URL})
  console.log(`DB Connected Successfully..`);
}).catch(err => console.log(`DB Err: ${err}`))



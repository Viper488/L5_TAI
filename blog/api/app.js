let express = require('express');
const app = express();

app.use(express.static('public'));
app.listen(3000, () => {
  console.info('Server is running on 3000')
})


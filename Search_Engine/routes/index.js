var express = require('express');
var router = express.Router();
const {spawn} = require('child_process');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', {});
});

router.post('/results', function(req, res) {
  console.log(req.body.searchBar)
  const python = spawn('python3', ['/Users/sohamsavalapurkar/Spring 22/OOAD/Search_engine/Search_Engine/python_file/search.py','./' + req.body.searchBar])
  var output = []
  python.stdout.on('data', function (data) {
    console.log('Pipe data from python script ...');
    dataToSend = data.toString('UTF8');
   
   });
   // in close event we are sure that stream from child process is closed
   python.on('close', (code) => {
   console.log(`child process close all stdio with code ${code}`);
   // send data to browser
   output = dataToSend.split("\n")
   console.log(output)     
   res.render('results',{output: output});
    })
    
});

module.exports = router;

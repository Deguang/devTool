console.log('[INFO]: pre-commit install begin...')
var fs = require('fs'),
    exec = require('child_process').exec;

if(!fs.existsSync('.git/hooks/')) {
    console.log('[INFO]: pre-commit installed failed.');
    console.log('Please run this cmd on the root of project.');
    return false;
}
var download = exec('curl https://raw.githubusercontent.com/Deguang/devTool/master/pre-commit', (error, stdout, stderr) => {
    if (error) {
        console.log(error.stack);
        console.log('`Error code: ' + error.code);
    }

    //写入文件
    fs.writeFile('.git/hooks/pre-commit', stdout, {
        mode: '0755'
    }, function(err) {
        if(err){
            return console.log('[ERROR]:%s',err);
        }
        console.log('[INFO]: pre-commit installed successfully.');
    })
});
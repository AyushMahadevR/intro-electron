const {app,BrowserWindow} = require('electron'); // getting all required modules from corresponding modules (objects)
const path = require('path');
const url = require('url');

//creating global varible called win(global reference for the window object)
let win; //initialised

function createWindow(){  //to create a browser window
  win = new BrowserWindow({width:800, height:600 , icon:__dirname+'img/icon.png'}) //creates the object // url module then calling format
  //load the index page
  win.loadURL(url.format({
    pathname: path.join(__dirname,'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  //open development tools
  win.webContents.openDevTools();
  //when window closed put win = null
  win.on('closed',() => { //arrow function (no idea)
    win = null;
  });
}
//load app
app.on('ready',createWindow);

//quit when all windows are closed(using event)
app.on('windows-all-closed',() => { //if the user is on a Mac
  if(process.platform !== 'darwin'){
    app.quit();
  }
});

# Learning-React
My first React Project!

## Tic-Tac-Toe (Done)
I learned the basic concepts from this project. (Tutorial from <https://zh-hans.reactjs.org/tutorial/tutorial.html>)
Just do:
```bash
cd tic-tac-toe
npm install
npm start
```

## UI-Example (In Progress)
My **real** first `React` project. Re-designed parts of a webpage using `Bootstrap`.

To see dev version:
```bash
cd ui-example
npm install
npm start
```

To see stable:
```bash
cd ui-example
npm run build
npm install -g http-server
cd build
http-server
```

Then you should see:
```
Starting up http-server, serving ./

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://**.**.**.**:8080
  ...
Hit CTRL-C to stop the server
```

Visit port 8080 and you should see the stable version of the project.
(P.S. You can also use `serve`(which is recommended by `npm run build`) to set up a server but **Remember to `cd build` first or there will be errors(return 200 on nonexistent files)**)
Yay!

## LICENSE
This project is GPL-3.0 licensed.
Plus, Bootstrap is under the MIT license. (See `/build/css` after `npm run build` or peek `/src` in the repo.)
Changed for a little little bit since `npm start` will warn me for unknown name `color-adjust`(actually `print-color-adjust`).
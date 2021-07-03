# Fullstack evaluation template

## How to use
The files included in this repository are here to get you started by giving
you an idea on how you might start the project.

To start the server open a terminal window on unix/linux based systems and change
directory to the project root. Then execute this command:
```
  ./server
```

The command assumes you have a PHP binary in your system path. If you don't you
will get an error and the server will not start.

After starting the server go to:
```
http://localhost:8765/index.html  
```

To compile JSX into JS, run:
```
npx babel --watch src --out-dir webroot/js --presets react-app/prod
```
(This is not required to run the server, only to update webroot/js/ files while making changes to src/ files.)

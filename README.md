# react_playground
## Build the React app:
```
cd client && npm run build
```

## Test the React app:
Before first test run:
```
cd client
npm install --save-dev @babel/plugin-syntax-jsx
npm install --save-dev @testing-library/react @testing-library/jest-dom jest-fetch-mock
```

Then run:
```
cd client && npm test
```

## Start the server:
```
cd ../server && node index.js
```

this should start the server on port 5001
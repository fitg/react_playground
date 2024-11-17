# react_playground
## Before all
```
cd client && npm install
cd ../server && npm install
```

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
cd ../server && node index.tsx
```

this should start the server on port 5001

## Set up and run the linter for the client
```
cd client
npm install eslint --save-dev
npx eslint --init
npx eslint . --fix
```

Then add the following to eslint.config.mjs:
```
...
  {
    ignores: ["build/*", "node_modules/*"],
  },
...
```
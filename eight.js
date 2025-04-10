//html--->should run only in browser not in vscode node environment as it needs type as module
<!DOCTYPE html>
<html>
<head>
  <title>Module Example</title>
</head>
<body>
  <script type="module" src="main.js"></script>
</body>
</html>

// greetings.js
export const sayHello = (name) => {
  console.log(`Hello, ${name}!`);
};

// main.js
import { sayHello } from './greetings.js';
sayHello("Alice");



# wrapper-kaze-apis

A JavaScript wrapper library for KAZE APIs.

## Installation

```bash
npm install wrapper-kaze-apis
```

## Getting Started with KAZE APIs

Before using this wrapper, you need to:

1.  **Create an Account:** Sign up for a free account at [https://kaze-apis.my.id/](https://kaze-apis.my.id/)
2.  **Get Your API Key:** Find your API key in the dashboard after logging in.

## Usage

**ESM (JavaScript Modules):**

```javascript
import KazeAPI from 'wrapper-kaze-apis'

const kaze = new KazeAPI('YOUR_API_KEY')

async function testAPI() {
  try {
    const blackboxResponse = await kaze.blackbox('What is the capital of France?')
    console.log('Blackbox response:', blackboxResponse)

    const askgptResponse = await kaze.askgpt('Tell me a joke.')
    console.log('Askgpt response:', askgptResponse)

    const ailogicResponse = await kaze.ailogic('Is the sky blue?', 'Answer with yes or no.')
    console.log('Ailogic response:', ailogicResponse)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

testAPI()
```

**CommonJS (Node.js):**

```javascript
const KazeAPI = require('wrapper-kaze-apis')

// Initialize the API client with your API key
const kaze = new KazeAPI('YOUR_API_KEY')

// Example usage
async function testAPI() {
  try {
    const blackboxResponse = await kaze.blackbox('What is the capital of France?')
    console.log('Blackbox response:', blackboxResponse)

    const askgptResponse = await kaze.askgpt('Tell me a joke.')
    console.log('Askgpt response:', askgptResponse)

    const ailogicResponse = await kaze.ailogic('Is the sky blue?', 'Answer with yes or no.')
    console.log('Ailogic response:', ailogicResponse)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

testAPI()
```

## API

### `KazeAPI(apiKey)`

*   `apiKey`: Your KAZE APIs API key (required).  You can find this in your KAZE APIs dashboard after registering.

### `blackbox(query)`

*   `query`: The query string for the blackbox API.

### `askgpt(text)`

*   `text`: The text for the askgpt API.

### `ailogic(query, prompt)`

*   `query`: The query string for the ailogic API.
*   `prompt`: The prompt for the ailogic API.
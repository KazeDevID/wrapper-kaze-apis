# wrapper-kaze-apis

A JavaScript wrapper library for KAZE APIs.

## Installation

```bash
npm install wrapper-kaze-apis
```

## Getting Started with KAZE APIs

Before using this wrapper, you need to:

1.  **Create an Account:** Sign up for a free account at [https://kaze-apis.my.id/]
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

    const textToImageResponse = await kaze.textToImage('cat')
    console.log('Text to image response:', textToImageResponse)
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

    const textToImageResponse = await kaze.textToImage('cat')
    console.log('Text to image response:', textToImageResponse)
  } catch (error) {
    console.error('An error occurred:', error)
  }
}

testAPI()
```

## API

### `KazeAPI(apiKey)`

- **Parameters:**
  - `apiKey`: Your KAZE APIs API key (required). You can find this in your KAZE APIs dashboard after registering.

### `blackbox(query)`

- **Parameters:**
  - `query`: The query string for the blackbox API.

### `askgpt(text)`

- **Parameters:**
  - `text`: The text for the askgpt API.

### `ailogic(query, prompt)`

- **Parameters:**
  - `query`: The query string for the ailogic API.
  - `prompt`: The prompt for the ailogic API.

### `textToImage(query)`

- **Parameters:**
  - `query`: The query string for generating an image from text.

### `chatAI(query)`

- **Parameters:**
  - `query`: The query string for the chat AI API.

### `aoyoai(query)`

- **Parameters:**
  - `query`: The query string for the AoyoAI API.

### `agentgpt(query)`

- **Parameters:**
  - `query`: The query string for the AgentGPT API.

### `ai4chat(query)`

- **Parameters:**
  - `query`: The query string for the AI4Chat API.
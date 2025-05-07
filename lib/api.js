class KazeAPI {
  constructor(apiKey) {
    if (!apiKey) {
      throw new Error("API key is required.  Please initialize with your API key: `new KazeAPI('YOUR_API_KEY')`")
    }
    this.apiKey = apiKey
    this.baseUrl = 'https://kaze-apis.my.id/api/ai'
  }

  async _post(endpoint, data) {
    const url = `${this.baseUrl}/${endpoint}`
    const headers = {
      'accept': '*/*',
      'x-api-key': this.apiKey,
      'Content-Type': 'application/json'
    }

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
      })

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  async blackbox(query) {
    const data = { query: query }
    return this._post('blackbox', data)
  }

  async askgpt(text) {
    const data = { text: text }
    return this._post('askgpt', data)
  }

  async ailogic(query, prompt) {
    const data = { query: query, Prompt: prompt }
    return this._post('ailogic', data)
  }
}

module.exports = KazeAPI;
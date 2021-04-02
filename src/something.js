const fetch = require("node-fetch");

class Something {
  
  async fetchAdvice() {
    let json = await fetch("https://api.adviceslip.com/advice");
    let advice = await json.json();
    
    if(!advice) {
      throw new Error("[SRP] API Unavailable. Try again later.");
    }
    
    return advice.slip.advice;
  }
  
  async fetchJoke() {
    let json = await fetch("https://jastinch-api.ml/randomjoke");
    let joke = await json.json();
    
    if(!joke) {
      throw new Error("[SRP] Api Unavailable. Try again later.");
    }
    
    return {
      setup: joke.setup,
      punchline: joke.punchline
    }
  }
  
  async fetchLyrics(song) {
    if(!song) {
      throw new Error("[SRP] Provide a song name for it to work.")
    }
    
    let json = await fetch(`https://jastinch-api.ml/lyrics?song=${song}`);
    let lyrics = await json.json();
    
    if(!lyrics) {
      throw new Error("[SRP] No lyrics found.")
    }
    
    return lyrics.lyrics;
  }

  async fetchMeme() {
    let json = await fetch("https://jastinch-api.ml/meme");
    let meme = await json.json();
    
    if(!meme) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return {
      url: meme.urlimg,
      title: meme.caption
    }
  }
  
  async fetchQuote() {
    let json = await fetch("https://jastinch-api.ml/quotes");
    let quotes = await json.json();
    
    if(!quotes) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return quotes.quote;
  }
  
  async fetchNeko() {
    let json = await fetch("https://neko-love.xyz/api/v1/neko");
    let neko = await json.json();
    
    if(!neko) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return neko.url;
  }
  
  async fetchNekoGif() {
    let json = await fetch("https://nekos.life/api/v2/img/ngif");
    let neko = await json.json();
    
    if(!neko) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return neko.url;
  }
  
  async fetchNSFWNeko() {
    let json = await fetch("https://jastinch-api.ml/nsfwneko");
    let neko = await json.json();
    
    if(!neko) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return neko.urlimg;
  }
  
  async fetchNSFWNekoGif() {
    let json = await fetch("https://nekos.life/api/v2/img/nsfw_neko_gif");
    let neko = await json.json();
    
    if(!neko) {
      throw new Error("[SRP] API Unavailable. Try again later.")
    };
    
    return neko.url;
  }
  
}

module.exports = Something;

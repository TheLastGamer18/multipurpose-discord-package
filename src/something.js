const fetch = require("node-fetch")
const functions = require("../functions/function")

class Something {
  
  async fetchAdvice() {
    let json = await fetch("https://api.adviceslip.com/advice")
    let advice = await json.json()
    
    if(!advice) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return advice.slip.advice
  }
  
  async fetchJoke() {
    let json = await fetch("https://jastinch-api.ml/randomjoke")
    let joke = await json.json()
    
    if(!joke) {
      throw new Error("[MDP] Api Unavailable. Try again later.")
    }
    
    return {
      setup: joke.setup,
      punchline: joke.punchline
    }
  }
  
  async fetchLyrics(song) {
    if(!song) {
      throw new Error("[MDP] Provide a song name for it to work.")
    }
    
    let json = await fetch(`https://jastinch-api.ml/lyrics?song=${song}`)
    let lyrics = await json.json()
    
    if(!lyrics) {
      throw new Error("[MDP] No lyrics found.")
    }
    
    return lyrics.lyrics
  }

  async fetchMeme() {
    let subreddits = ["memes", "me_irl", "dankmemes", "comedyheaven", "Animemes"]
    subreddits = subreddits[Math.floor(Math.random() * subreddits.length)]
    
    let json = await fetch(`https://reddit.com/r/${subreddits}/random/.json`)
    let meme = await json.json()
  
    if(!meme[0]) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    meme = meme[0].data.children[0].data
    
    return {
      title: meme.title,
      image: meme.url
    }
  }
  
  async fetchQuote() {
    let json = await fetch("https://jastinch-api.ml/quotes")
    let quotes = await json.json()
    
    if(!quotes) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return quotes.quote
  }
  
  async fetchNeko() {
    let json = await fetch("https://neko-love.xyz/api/v1/neko")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return neko.url
  }

  async fetchNekoGif() {
    let json = await fetch("https://nekos.life/api/v2/img/ngif")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return neko.url
  }
  
  async fetchNSFWNeko() {
    let json = await fetch("https://nekos.life/api/v2/img/lewd")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return neko.url
  }
  
  async fetchNSFWNekoGif() {
    let json = await fetch("https://nekos.life/api/v2/img/nsfw_neko_gif")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return neko.url
  }
  
  async fetchWaifu() {
    let json = await fetch("https://waifu.pics/api/sfw/waifu")
    let waifu = await json.json()
    
    if(!waifu) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return waifu.url
  }
  
  async fetchNSFWWaifu() {
    let json = await fetch("https://waifu.pics/api/nsfw/waifu")
    let waifu = await json.json()
    
    if(!waifu) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return waifu.url
  }
  
  async owoify(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to owoify!")
    }
    
    let json = await fetch(`https://nekos.life/api/v2/owoify?text=${text}`)
    let owo = await json.json()
    
    if(!owo) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return owo.owo
  }
  
  async emojify(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to emojify!")
    }
    
    "abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
      functions.mapping[c] = functions.mapping[c.toUpperCase()] = ` :regional_indicator_${c}:`
    })
    
    return text.split("").map(c => functions.mapping[c] || c).join("")
  }
  
  async reverse(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to reverse!")
    }
    
    return text.split("").reverse().join("")
  }
  
  async shuffle(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to reverse!")
    }
    
    return text.split("").sort(() => 0.5 - Math.random()).join("")
  }
  
  async fetchDogFact() {
    let json = await fetch("https://some-random-api.ml/facts/dog")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }  
  
  async fetchCatFact() {
    let json = await fetch("https://some-random-api.ml/facts/cat")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }
  
  async fetchBirdFact() {
    let json = await fetch("https://some-random-api.ml/facts/bird")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }
  
  async fetchKoalaFact() {
    let json = await fetch("https://some-random-api.ml/facts/koala")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }
  
  async fetchPandaFact() {
    let json = await fetch("https://some-random-api.ml/facts/panda")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }
  
  async fetchFoxFact() {
    let json = await fetch("https://some-random-api.ml/facts/fox")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return fact.fact
  }
  
  async fetchRawMCSkin(name) {
    let id = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    if(id.status !== 200) {
      throw new Error("[MDP] UUID isn't valid. Please check the name again.")
    }
    
    let uuid = await id.json()
    uuid = uuid.id
    
    let json = await fetch(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`)
    let profile = await json.json()
    let skin = await JSON.parse(Buffer.from(profile.properties[0].value, 'base64').toString('utf-8'))
      
    return skin.textures.SKIN.url
  }
  
  async fetchMCSkin(name) {
    let id = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    if(id.status !== 200) {
      throw new Error("[MDP] UUID isn't valid. Please check the name again.")
    }
    
    return `https://minotar.net/body/${name}/100.png`
  }
  
  async fetchMCNameHistory(name) {
    let id = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    if(id.status !== 200) {
      throw new Error("[MDP] UUID isn't valid. Please check the name again.")
    }
    
    let uuid = await id.json()
    uuid = uuid.id
    
    let json = await fetch(`https://api.mojang.com/user/profiles/${uuid}/names`)
    
    let names = await json.json()
    return names.map(e => e.name)
  }
  
  async textToBinary(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let binary = ""
    
    for(let i = 0; i < text.length; i++) {
      binary += text[i].charCodeAt(0).toString(2) + " "
    }
    
    return binary
  }
  
  async binaryToText(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let result = ""
    
    text.split(" ").map(binary => {
      result += String.fromCharCode(parseInt(binary, 2))
    })
    
    return result
  }
  
  async ascii(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let json = await fetch(`https://artii.herokuapp.com/make?text=${text}`)
    let ascii = await json.text()
    
    if(!ascii) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return ascii
  }
  
  async piglatin(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let json = await fetch(`https://api.funtranslations.com/translate/pig-latin.json?text=${text}`)
    let piglatin = await json.json()
    
    if(!piglatin.contents) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return piglatin.contents.translated
  }
  
  async pirateSpeak(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let json = await fetch(`https://pirate.monkeyness.com/api/translate?english=${text}`)
    let pirate = await json.text()
    
    if(!pirate) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    return pirate
  }
  
  async yodaSpeak(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let json = await fetch(`http://yoda-api.appspot.com/api/v1/yodish?text=${text}`)
    let yoda = await json.json()
    
    return yoda.yodish
  }
  
}

module.exports = Something;

const fetch = require("node-fetch")
const functions = require("../functions/function")

class Something {
  
  constructor(options = { sendAsEmbed: false, embedColor: "" }) {
    if(!options.sendAsEmbed && options.embedColor) {
      throw new Error("You need to set sendAsEmbed option true before using embedColor.")
    }
    
    this.sendAsEmbed = options.sendAsEmbed === true ? true : false
    this.color = options.embedColor === "" ? "RANDOM" : options.embedColor
  }
  
  async fetchAdvice() {
    let json = await fetch("https://api.adviceslip.com/advice")
    let advice = await json.json()
    
    if(!advice) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Advice!",
          description: advice.slip.advice,
          timestamp: new Date()
        }
      }
    }
    
    return advice.slip.advice
  }
  
  async fetchJoke() {
    let json = await fetch("https://api.jastinch.xyz/randomjoke")
    let joke = await json.json()
    
    if(!joke) {
      throw new Error("[MDP] Api Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: joke.setup,
          description: joke.punchline,
          timestamp: new Date()
        }
      }
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
    
    let json = await fetch(`https://api.jastinch.xyz/lyrics?song=${song}`)
    let lyrics = await json.json()
    
    if(!lyrics) {
      throw new Error("[MDP] No lyrics found.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Lyrics!",
          description: lyrics.lyrics,
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: meme.title,
          image: {
            url: meme.url
          },
          timestamp: new Date()
        }
      }
    }
    
    return {
      title: meme.title,
      image: meme.url
    }
  }
  
  async fetchQuote() {
    let json = await fetch("https://api.jastinch.xyz/quotes")
    let quotes = await json.json()
    
    if(!quotes) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Quote!",
          description: quotes.quote,
          timestamp: new Date()
        }
      }
    }
    
    return quotes.quote
  }
  
  async fetchNeko() {
    let json = await fetch("https://neko-love.xyz/api/v1/neko")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Neko!",
          image: {
            url: neko.url
          },
          timestamp: new Date()
        }
      }
    }
    
    return neko.url
  }

  async fetchNekoGif() {
    let json = await fetch("https://nekos.life/api/v2/img/ngif")
    let neko = await json.json()
    
    if(!neko) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Neko gif!",
          image: {
            url: neko.url
          },
          timestamp: new Date()
        }
      }
    }
    
    return neko.url
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Owoified text!",
          description: owo.owo,
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Emojified text!",
          description: text.split("").map(c => functions.mapping[c] || c).join(""),
          timestamp: new Date()
        }
      }
    }
    
    return text.split("").map(c => functions.mapping[c] || c).join("")
  }
  
  async reverse(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to reverse!")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Reversed text!",
          description: text.split("").reverse().join(""),
          timestamp: new Date()
        }
      }
    }
    
    return text.split("").reverse().join("")
  }
  
  async shuffle(text) {
    if(!text) {
      throw new Error("[MDP] Provide some text to reverse!")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Shuffled text!",
          description: text.split("").sort(() => 0.5 - Math.random()).join(""),
          timestamp: new Date()
        }
      }
    }
    
    return text.split("").sort(() => 0.5 - Math.random()).join("")
  }
  
  async fetchDogFact() {
    let json = await fetch("https://some-random-api.ml/facts/dog")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Dog fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
    }
    
    return fact.fact
  }  
  
  async fetchCatFact() {
    let json = await fetch("https://some-random-api.ml/facts/cat")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Cat fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
    }
    
    return fact.fact
  }
  
  async fetchBirdFact() {
    let json = await fetch("https://some-random-api.ml/facts/bird")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Bird fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
    }
    
    return fact.fact
  }
  
  async fetchKoalaFact() {
    let json = await fetch("https://some-random-api.ml/facts/koala")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Koala fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
    }
    
    return fact.fact
  }
  
  async fetchPandaFact() {
    let json = await fetch("https://some-random-api.ml/facts/panda")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Panda fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
    }
    
    return fact.fact
  }
  
  async fetchFoxFact() {
    let json = await fetch("https://some-random-api.ml/facts/fox")
    let fact = await json.json()
    
    if(!fact) {
      throw new Error("[MDP] API Unavailable. Try again later.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: "Fox fact!",
          description: fact.fact,
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: `${name}'s minecraft skin!`,
          image: {
            url: skin.textures.SKIN.url
          },
          timestamp: new Date()
        }
      }
    }
      
    return skin.textures.SKIN.url
  }
  
  async fetchMCSkin(name) {
    let id = await fetch(`https://api.mojang.com/users/profiles/minecraft/${name}`)
    if(id.status !== 200) {
      throw new Error("[MDP] UUID isn't valid. Please check the name again.")
    }
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: `${name}'s minecraft skin!`,
          image: {
            url: `https://minotar.net/body/${name}/100.png`
          },
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          title: `${name}'s name history!`,
          description: names.map(e => e.name).join(", "),
          timestamp: new Date()
        }
      }
    }
    
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          description: binary,
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          description: result,
          timestamp: new Date()
        }
      }
    }
    
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
    
    return "```" + ascii + "```"
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          description: piglatin.contents.translated,
          timestamp: new Date()
        }
      }
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
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          description: pirate,
          timestamp: new Date()
        }
      }
    }
    
    return pirate
  }
  
  async yodaSpeak(text) {
    if(!text) {
      throw new Error("[MDP] Please provide some text to convert!")
    }
    
    let json = await fetch(`http://yoda-api.appspot.com/api/v1/yodish?text=${text}`)
    let yoda = await json.json()
    
    if(this.sendAsEmbed) {
      return {
        embed: {
          color: this.color,
          description: yoda.yodish,
          timestamp: new Date()
        }
      }
    }
    
    return yoda.yodish
  } 
  
}

module.exports = Something;

# A package that is helpful in bot making!
- Make commands easily using this package!

# How To Install:
- `npm i some-random-package`

# Example
```javascript
const Discord = require("discord.js");
const client = new Discord.Client();
const { Something } = require("some-random-package");
const something = new Something();

client.on("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}!`)
});

client.on("message", async message => {
   if(message.content.startsWith(`!joke`)) {
     
      let joke = await something.fetchJoke();
      
      let embed = new Discord.MessageEmbed()
      .setTitle(something.setup)
      .setDescription(something.punchline)
      .setColor("RANDOM")
      message.channel.send(embed)
     
   } else if(message.content.startsWith(`!meme`)) {
   
   let meme = await util.fetchMeme()
   
   let embed = new Discord.MessageEmbed()
   .setTitle("Meme!")
   .setDescription(meme.title)
   .setImage(meme.url)
   .setColor("RANDOM")
   message.channel.send(embed);
   
   }
});

client.login("Your Token Here");
```
<br>

# All methods.
<br>

## fetchAdvice(): Returns random advice.
```javascript
   let data = await something.fetchAdvice()
   message.channel.send(data)
```

## fetchJoke(): Returns random joke. Data is fetched in the form of fetchJoke().setup (Setup of the joke) and fetchJoke().punchline (Punchline of the joke).
```javascript
   let data = await something.fetchJoke()
   message.channel.send(`${data.setup}\n${data.punchline}`)
```

## fetchLyrics(song): Returns lyrics of provided song.
```javascript
   let data = await something.fetchLyrics("Perfect")
   message.channel.send(data)
```

## fetchMeme(): Returns random meme. Data is fetched in the form of fetchMeme().title (Title of meme) and fetchMeme().url (Image of the meme).
```javascript
   let data = await something.fetchMeme()
   message.channel.send(`${data.title}\n${data.url}`)
```

## fetchQuote(): Returns random quote.
```javascript
   let data = await something.fetchQuote()
   message.channel.send(data)
```

## fetchNeko(): Returns random neko image.
```javascript
   let data = await something.fetchNeko()
   message.channel.send(data)
```

## fetchNekoGif(): Returns random neko gif.
```javascript
   let data = await something.fetchNekoGif()
   message.channel.send(data)
```

<br>

# NSFW Methods.
<br>

## fetchNSFWNeko(): Returns random nsfw neko image.
```javascript
   let data = await something.fetchNSFWNeko()
   message.channel.send(data)
```

## fetchNSFWNekoGif(): Returns random nsfw neko gif.
```javascript
   let data = await something.fetchNSFWNekoGif()
   message.channel.send(data)
```

# Will be adding more soon!

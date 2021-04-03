# A package that is helpful in bot making! Make commands easily using this package!

# Note:
- If you are facing any type of bugs with any of the methods, report it [here](https://github.com/TheLastGamer18/multipurpose-discord-package/issues).

# Reasons to use this package.
- This package will work with any version! Because the methods return only the data, and how to represent that data is depended upon you!  

# Example
```javascript
const Discord = require("discord.js");
const client = new Discord.Client();
const { Something } = require("multipurpose-discord-package");
const something = new Something();

client.on("ready", () => {
  console.log(`Ready! Logged in as ${client.user.tag}!`)
});

client.on("message", async message => {
   if(message.content.startsWith("!joke")) {
     
     let joke = await something.fetchJoke();
     let embed = new discord.MessageEmbed()
     .setTitle(joke.setup)
     .setDescription(joke.punchline)
     .setColor("RANDOM")
     message.channel.send(embed)
     
   } else if (message.content.startsWith("!neko")) {
     
     let neko = await something.fetchNeko();
     let embed = new discord.MessageEmbed()
     .setTitle("Neko!")
     .setImage(neko)
     .setColor("RANDOM")
     message.channel.send(embed)
     
   }
});

client.login("Your Token Here");
```
<br>

# All methods.
<br>

<b>fetchAdvice()</b>: Returns random advice.
```javascript
   let data = await something.fetchAdvice()
   message.channel.send(data)
```

<b>fetchJoke()</b>: Returns random joke. Data is fetched in the form of fetchJoke().setup (Setup of the joke) and fetchJoke().punchline (Punchline of the joke).
```javascript
   let data = await something.fetchJoke()
   message.channel.send(`${data.setup}\n${data.punchline}`)
```

<b>fetchLyrics(song)</b>: Returns lyrics of provided song.
```javascript
   let data = await something.fetchLyrics("Perfect")
   message.channel.send(data)
```

<b>fetchMeme()</b>: Returns random meme. Data is fetched in the form of fetchMeme().title (Title of meme) and fetchMeme().url (Image of the meme).
```javascript
   let data = await something.fetchMeme()
   message.channel.send(`${data.title}\n${data.url}`)
```

<b>fetchQuote()</b>: Returns random quote.
```javascript
   let data = await something.fetchQuote()
   message.channel.send(data)
```

<b>fetchNeko()</b>: Returns random neko image.
```javascript
   let data = await something.fetchNeko()
   message.channel.send(data)
```

<b>fetchNekoGif()</b>: Returns random neko gif.
```javascript
   let data = await something.fetchNekoGif()
   message.channel.send(data)
```

<b>fetchWaifu()</b>: Returns random waifu gif.
```javascript
   let data = await something.fetchWaifu()
   message.channel.send(data)
```

<br>

# NSFW Methods.
<br>

<b>fetchNSFWNeko()</b>: Returns random nsfw neko image.
```javascript
   let data = await something.fetchNSFWNeko()
   message.channel.send(data)
```

<b>fetchNSFWNekoGif()</b>: Returns random nsfw neko gif.
```javascript
   let data = await something.fetchNSFWNekoGif()
   message.channel.send(data)
```

<b>fetchNSFWWaifu()</b>: Returns random nsfw waifu image.
```javascript
   let data = await something.fetchNekoGif()
   message.channel.send(data)
```

# Will be adding more soon!

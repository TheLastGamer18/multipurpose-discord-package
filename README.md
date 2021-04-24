[![downloadsBadge](https://img.shields.io/npm/dt/multipurpose-discord-package?style=for-the-badge)](https://npmjs.com/multipurpose-discord-package) [![versionBadge](https://img.shields.io/npm/v/multipurpose-discord-package?style=for-the-badge)](https://npmjs.com/multipurpose-discord-package)

# A package that is helpful in bot making! Make commands easily using this package.

# Note:
- If you are facing any type of bugs with any of the methods, report it [here](https://github.com/TheLastGamer18/multipurpose-discord-package/issues).

# Reasons to use this package.
- This package will work with any version! Because the methods return only the data, and how to represent that data is depended upon you! The package is frequently updated.

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
     
   } else if (message.content.startsWith("!meme")) {
     
     let meme = await something.fetchMeme();
     let embed = new discord.MessageEmbed()
     .setTitle(meme.title)
     .setImage(meme.image)
     .setColor("RANDOM")
     message.channel.send(embed);
     
   }
});

client.login("Your Token Here");
```
<br>

# Constructor options.
While instantiating the package, you can use some options which ease up your work more!
```javascript
   const { Something } = require("multipurpose-discord-package")
   const something = new Something({ sendAsEmbed: true, embedColor: 0x00ff00 })
```
- sendAsEmbed: it will make the package send the data using a pre-made embed, so all you need to do is use a method you want and directly send it into a channel and it will be an embed! Personally, it is preferred to keep this option off and to use manually made embeds are you can't add anything in the pre-made embeds.
- embedColor: sets the color of your embed to provided hex code. If left empty it will choose a random color. Can only be used when sendAsEmbed is enabled.

<br>

# Methods.

# Fetching methods.

<b>fetchAdvice()</b>: Returns random advice.
```javascript
   let data = await something.fetchAdvice() // "Respect your elders."
   message.channel.send(data)
```

<b>fetchJoke()</b>: Returns random joke. Returns data.setup (Setup of the joke) and data.punchline (Punchline of the joke).
```javascript
   let data = await something.fetchJoke() // {setup: "Why did the invisible man turn down the job offer?", punchline: "He couldn't see himself doing it"}
   message.channel.send(`${data.setup}\n${data.punchline}`)
```

<b>fetchLyrics(song)</b>: Returns lyrics of provided song.
```javascript
   let data = await something.fetchLyrics("Perfect") // "I found a love for me\nOh darling ... You look perfect tonight"
   message.channel.send(data)
```

<b>fetchMeme()</b>: Returns random meme. Returns data.title (meme title) and data.image (meme image).
```javascript
   let data = await something.fetchMeme() // {title: "me_irl", image: "https://i.redd.it/9pi03fh30wt61.png"}
   message.channel.send(`${data.title}\n${data.image}`)
```

<b>fetchQuote()</b>: Returns random quote.
```javascript
   let data = await something.fetchQuote() // "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world."
   message.channel.send(data)
```

<b>fetchNeko()</b>: Returns random neko image.
```javascript
   let data = await something.fetchNeko() // ""https://neko-love.xyz/v1/neko/neko-love_395.jpg"
   message.channel.send(data)
```

<b>fetchNekoGif()</b>: Returns random neko gif.
```javascript
   let data = await something.fetchNekoGif() // "https://cdn.nekos.life/ngif/neko_026.gif"
   message.channel.send(data)
```

<b>fetchWaifu()</b>: Returns random waifu image.
```javascript
   let data = await something.fetchWaifu() // "https://i.waifu.pics/i1QE8~W.com_0265.jpg"
   message.channel.send(data)
```

<b>fetchDogFact()</b>: Returns random dog fact.
```javascript
   let data = await something.fetchDogFact() // "Puppies are born without teeth and eyesight. They're also born deaf."
   message.channel.send(data)
```

<b>fetchCatFact()</b>: Returns random cat fact.
```javascript
   let data = await something.fetchCatFact() // "Cats only sweat through their foot pads."
   message.channel.send(data)
```

<b>fetchBirdFact()</b>: Returns random bird fact.
```javascript
   let data = await something.fetchBirdFact() // "Flamingos pair for a lifetime. Some stay with their mates for 50 years or more."
   message.channel.send(data)
```

<b>fetchFoxFact()</b>: Returns random fox fact.
```javascript
   let data = await something.fetchFoxFact() // "Foxes dig underground dens where they take care of their kits and hide from predators"
   message.channel.send(data)
```

<b>fetchKoalaFact()</b>: Returns random koala fact.
```javascript
   let data = await something.fetchKoalaFact() // "These magnificent mammals get their name form an Aborigina…oisture from the leaves they eat, and rarely drink water."
   message.channel.send(data)
```

<b>fetchPandaFact()</b>: Returns random panda fact.
```javascript
   let data = await something.fetchPandaFact() // "After 1 month the cub is 1 cm. long."
   message.channel.send(data)
```

<b>fetchRawMCSkin(name)</b>: Returns minecraft skin texture of provided username. You can download the image and select it as your own skin.
```javascript
   let data = await something.fetchRawMCSkin("Technoblade") // "http://textures.minecraft.net/texture/786c039d969d1839155255e38e7b06a626ea9f8baf9cb55e0a77311efe18a3e"
   message.channel.send(data)
```

<b>fetchMCSkin(name)</b>: Returns minecraft skin of provided username.
```javascript
   let data = await something.fetchRawMCSkin("Technoblade") // https://minotar.net/body/Technoblade/100.png
   message.channel.send(data)
```

<b>fetchMCNameHistory(name)</b>: Returns minecraft skin of provided username.
```javascript
   let data = await something.fetchRawMCSkin("some name here") // ["first name", "second name", "third name", "and so on"]
   message.channel.send(data)
```

<br>

# Text-manipulation methods.

<b>owoify(text)</b>: Returns owoified text.
```javascript
   let data = await something.owoify("hello friends!") // "hewwo fwienyds UwU"
   message.channel.send(data)
```

<b>emojify(text)</b>: Returns emojified text.
```javascript
   let data = await something.emojify("something to emojify.") // " :regional_indicator_s: :regional_indicator_o: :regional_i … dicator_i: :regional_indicator_f: :regional_indicator_y:."
   message.channel.send(data)
```

<b>reverse(text)</b>: Returns reversed text.
```javascript
   let data = await something.reverse("this will be reversed.") // ".desrever eb lliw siht"
   message.channel.send(data)
```

<b>shuffle(text)</b>: Returns shuffled text.
```javascript
   let data = await something.shuffle("some shuffled text.") // " t.osefshxtdf eluem"
   message.channel.send(data)
```

<b>textToBinary(text)</b>: Returns provided text into binary.
```javascript
   let data = await something.textToBinary("binary test") // "1100010 1101001 1101110 1100001 1110010 1111001 100000 1110100 1100101 1110011 1110100"
   message.channel.send(data)
```

<b>binaryToText(binary)</b>: Returns provided binary into text.
```javascript
   let data = await something.binaryToText("1100010 1101001 1101110 1100001 1110010 1111001 100000 1110100 1100101 1110011 1110100") // "binary test"
   message.channel.send(data)
```

<b>ascii(text)</b>: Returns provided text into ascii.
```javascript
   let data = await something.ascii("e") //  "___/ _ \|  __/\___|" (will be formatted when used)
   message.channel.send(data)
```

<b>piglatin(text)</b>: Returns provided text into piglatin.
```javascript
   let data = await something.piglatin("this is piglatin text") // "is-thay is-way iglatin-pay ext-tay"
   message.channel.send(data)
```

<b>pirateSpeak(text)</b>: Returns provided text into pirate speak.
```javascript
   let data = await something.pirateSpeak("this is some pirate text my friend") // "'tis some pirate text me bucko"
   message.channel.send(data)
```

<b>yodaSpeak(text)</b>: Returns provided text into yoda speak.
```javascript
   let data = await something.yodaSpeak("I am speaking like yoda!") // "Speaking like yoda!, I am."
   message.channel.send(data)
```

<br>

# NSFW methods.

<b>fetchNSFWNeko()</b>: Returns random nsfw neko image.
```javascript
   let data = await something.fetchNSFWNeko() // "https://cdn.nekos.life/lewd/lewd_neko***.jpg"
   message.channel.send(data)
```

<b>fetchNSFWNekoGif()</b>: Returns random nsfw neko gif.
```javascript
   let data = await something.fetchNSFWNekoGif() // "https://cdn.nekos.life/nsfw_neko_gif/hneko**.gif"
   message.channel.send(data)
```

<b>fetchNSFWWaifu()</b>: Returns random nsfw waifu image.
```javascript
   let data = await something.fetchNSFWWaifu() // "https://i.waifu.pics/jjc***d.png"
   message.channel.send(data)
```
<br>

## Want to contribute? Feel free to make a pull request [here](https://github.com/TheLastGamer18/multipurpose-discord-package) and I will be happy to review it.

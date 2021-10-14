module.exports = {
  Admins: ["704285324905283654", "UserID"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || "s!", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/T8VUwQ898N", //Support Server Link
  Token: process.env.Token || "NzYwNTI3MzQwMTM1Nzc2MzE3.X3NWRw.zgSAPgxWpa14u1cZDZPDFv1aZ_g", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "760527340135776317", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "-htiMTjk6U4J-GJvhq0LPViJVrdioDWP", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": false, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "PINK", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "https://github.com/Devnando01", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "dnd", // You can show online, idle, and dnd
    name: "s!help | 🙌 Love u all", // The message shown
    type: "LISTENING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "Main",
    host: "13.67.94.172",
    port: 2333, // The port that lavalink is listening to. This must be a number!
    pass: "barbar123",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "d1e9c875631145e0bf63c5cc1053f1ad", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "b000d93d5da9414fa816a65cada358a3", //Spotify Client Secret
  },
};

//Pirple.com ES6 course: song.js homework solution


//Metallica is one of my favourite bands
var metallica = {
		name: "Metallica",
		members: {
				vocal: "James Hetfield",
				leadGuitar: "Kirk Hammett",
				bass: "Robert Trujillo",
				drums: "Lars Ulrich",
		},
		formerMembers: {
				leadGuitar: "Dave Mustain",
				bass: ["Ron McGovney", "Cliff Burton", "Jason Newsted",]
		},
		activeYears: "1981-present",
		genres: ["heavy metal", "trash metal"],
		website: "https://www.metallica.com",
		origin: "Los Angeles"
};

/* These variables describe
* the song Fuel from Metallica,
* which is one of the best
* heavy metal song ever.
*
* I used variables and not an Object cause it was the homework. :/
* */
var band = metallica;
var song = "Fuel";
var genre = "heavy metal";
var album = "Reload";
var writers = [band.members.vocal, band.members.drums, band.members.leadGuitar];
var recorded = 1996;
// JavaScript Date Object lets us work with dates:
var releaseDate = new Date(1998, 6, 16);
var bestVersion = {
		album: "S&M",
		youtubeVideo: "https://www.youtube.com/watch?v=VGD6ZLICTG0"
};
var lengthInSeconds = 270;
// I put the whole lirycs here cause it's cool.
var lirycs = "Gimme fuel, gimme fire, gimme that which I desire, ooh!\n" +
		"Turn on I see red\n" +
		"Adrenaline crash and crash my head\n" +
		"Nitro junkie, paint me dead\n" +
		"And I see red\n" +
		"One hundred plus through black and white\n" +
		"War horse, warhead\n" +
		"Fuck 'em man, white knuckles tight\n" +
		"Through black and white\n" +
		"Oh, on I burn,\n" +
		"Fuel is pumping engines,\n" +
		"Burning hard, loose and clean\n" +
		"And I burn,\n" +
		"Turning my direction,\n" +
		"Quench my thirst with gasoline\n" +
		"So gimme fuel, gimme fire, gimme that which I desire,\n" +
		"Hey\n" +
		"Turn on beyond the bone\n" +
		"Swallow future, spit out home\n" +
		"Burn your face upon the chrome\n" +
		"Yeah\n" +
		"Take the corner, going to crash,\n" +
		"Headlights (head-on), headlines\n" +
		"Another junkie lives too fast\n" +
		"Yeah lives way too fast, fast, fast, oh-aye\n" +
		"Oh, on I burn\n" +
		"Fuel is pumping engines\n" +
		"Burning hard, loose and clean\n" +
		"And on…";

console.log("\nGet to know this great song!(But never listen it while you are driving, cause it's dangerous!)\n");

console.log("Band: " + band.name);
console.log("Song: " + song);
console.log("Genre: " + genre);
console.log("Album: " + album);
console.log("Writers: " + writers);
console.log("Recorded: " + recorded);
console.log("Date of release: " + releaseDate.getDate() + "." + releaseDate.getMonth() + "." + releaseDate.getFullYear());
console.log("My favourite version: " + bestVersion.album);
console.log("Youtube URL for this version: " + bestVersion.youtubeVideo);
console.log("Length in seconds: " + lengthInSeconds);
console.log("\nLirycs: \n\n" + lirycs + "\n");

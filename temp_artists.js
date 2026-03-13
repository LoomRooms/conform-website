const fs = require('fs');

const roles = [
  "Mastermind---Head Of Finace",
  "VOX---Artist/A&R",
  "Kreddy--Artist",
  "Mr Shola--Creative Director/CEO",
  "Jackefa---Creative",
  "Limz---Producer",
  "Zenith---Event Organizer/Admin Manager/Marketing Lead/PA",
  "Snow---Cinematographer",
  "Doyin--Talent and community manger",
  "Honeybelle---PR Manager/artist",
  "IFE---Fashion designer/OAP",
  "Uduak---Communication Lead/OAP",
  "KidHillz---Artist/Producer",
  "Oporshevy----Talent manger",
  "KayCee---Dance Instructor/Artist manger",
  "Creddy----Artist",
  "Geexen-----Artist/Head of Artist Manager",
  "LarryStix----Producer/Production Manager",
  "SVNTN---Artist/Stage manger",
  "BIDEX----Artist",
  "Arewa---Artist",
  "Mercy----Creative/",
  "DJ Yinkus-----DJ/Artist"
];

const images = [
  "Arewa.jpeg", "Bidex.jpeg", "Creddy.jpeg", "DJ Yinkus.jpeg", "Doyin.jpeg",
  "GEEXEN.jpeg", "Honeybelle.jpeg", "IFE.jpeg", "Jackefa.jpeg", "KayCee.jpeg",
  "KidHillz.jpeg", "Kreddy.jpeg", "Larry.jpeg", "Limz.jpeg", "Lumi.jpeg",
  "Mastermind.jpeg", "Mercy.jpeg", "Oporshevy.jpeg", "SVNTN.jpeg", "Shola.jpeg",
  "Snow.jpeg", "Uduak.jpeg", "VOX.jpeg", "Zenith.jpeg"
];

const quotes = {
  "Mastermind": "Culture is the ultimate asset, and we are its stewards.",
  "VOX": "The sound of tomorrow is built on the rhythms of today.",
  "Kreddy": "True art is uncomfortable; it challenges the status quo.",
  "Mr Shola": "Design is not just what it looks like; it's how it shapes reality.",
  "Jackefa": "Innovation begins where tradition meets exploration.",
  "Limz": "Every beat tells a story that words cannot reach.",
  "Zenith": "Excellence is in the details of the experience we craft.",
  "Snow": "Framing the world through a lens of infinite possibility.",
  "Doyin": "Community is the heart of every creative movement.",
  "Honeybelle": "The narrative we build is the legacy we leave behind.",
  "IFE": "Fashion is the language we speak before we say a word.",
  "Uduak": "Voices amplified through clarity and purpose.",
  "KidHillz": "Soundwaves that bridge the gap between dreams and reality.",
  "Oporshevy": "Guiding the stars of tomorrow toward their zenith.",
  "KayCee": "Motion is the purest form of human expression.",
  "Creddy": "Visions translated into vibrant strokes of creativity.",
  "Geexen": "Leadership is about empowering every voice in the room.",
  "LarryStix": "Precision in production, passion in every sound.",
  "SVNTN": "The stage is where our collective energy comes alive.",
  "BIDEX": "Rhythms that resonate with the soul of the culture.",
  "Arewa": "Beauty and strength redefined through artistic vision.",
  "Mercy": "Details define the difference between good and great.",
  "DJ Yinkus": "The pulse of the city, captured one track at a time.",
  "Lumi": "Illuminating the path for future culture shapers."
};

const artists = roles.map(line => {
  const [namePart, rolePart] = line.split(/-+/);
  const name = namePart.trim();
  const role = rolePart.trim().replace(/\/$/, '');
  
  let image = images.find(img => img.toLowerCase().startsWith(name.toLowerCase()));
  if (!image && name === "Mr Shola") image = "Shola.jpeg";
  if (!image && name === "LarryStix") image = "Larry.jpeg";
  if (!image && name === "Geexen") image = "GEEXEN.jpeg";

  return {
    name,
    role,
    category: role.includes("Artist") || role.includes("DJ") || role.includes("Producer") ? "Music" : 
              role.includes("Fashion") ? "Fashion" :
              role.includes("Cinematographer") ? "Film" : "Visual Art",
    bio: quotes[name] || "A visionary creative shaping the future of African culture.",
    image: `/The Creatives Shaping Culture/${image || 'placeholder.jpeg'}`,
    handle: name.replace(/\s+/g, '') // Remove spaces for handle
  };
});

if (!artists.some(a => a.name === "Lumi")) {
    artists.push({
        name: "Lumi",
        role: "Creative",
        category: "Visual Art",
        bio: quotes["Lumi"],
        image: "/The Creatives Shaping Culture/Lumi.jpeg",
        handle: "Lumi"
    });
}

fs.writeFileSync('temp_artists.json', JSON.stringify(artists, null, 2));

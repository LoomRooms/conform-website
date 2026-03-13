const people = [
  { name: "Mastermind", title: "Head Of Finance", image: "Mastermind.jpeg", quote: "Culture is the ultimate asset, and we are its stewards." },
  { name: "VOX", title: "Artist / A&R", image: "VOX.jpeg", quote: "The sound of tomorrow is built on the rhythms of today." },
  { name: "Kreddy", title: "Artist", image: "Kreddy.jpeg", quote: "True art is uncomfortable; it challenges the status quo." },
  { name: "Mr Shola", title: "Creative Director / CEO", image: "Shola.jpeg", quote: "Design is not just what it looks like; it's how it shapes reality." },
  { name: "Jackefa", title: "Creative", image: "Jackefa.jpeg", quote: "Innovation begins where tradition meets exploration." },
  { name: "Limz", title: "Producer", image: "Limz.jpeg", quote: "Every beat tells a story that words cannot reach." },
  { name: "Zenith", title: "Event Organizer / Admin Manager", image: "Zenith.jpeg", quote: "Excellence is in the details of the experience we craft." },
  { name: "Snow", title: "Cinematographer", image: "Snow.jpeg", quote: "Framing the world through a lens of infinite possibility." },
  { name: "Doyin", title: "Talent & Community Manager", image: "Doyin.jpeg", quote: "Community is the heart of every creative movement." },
  { name: "Honeybelle", title: "PR Manager / Artist", image: "Honeybelle.jpeg", quote: "The narrative we build is the legacy we leave behind." },
  { name: "IFE", title: "Fashion Designer / OAP", image: "IFE.jpeg", quote: "Fashion is the language we speak before we say a word." },
  { name: "Uduak", title: "Communication Lead / OAP", image: "Uduak.jpeg", quote: "Voices amplified through clarity and purpose." },
  { name: "KidHillz", title: "Artist / Producer", image: "KidHillz.jpeg", quote: "Soundwaves that bridge the gap between dreams and reality." },
  { name: "Oporshevy", title: "Talent Manager", image: "Oporshevy.jpeg", quote: "Guiding the stars of tomorrow toward their zenith." },
  { name: "KayCee", title: "Dance Instructor / Artist Manager", image: "KayCee.jpeg", quote: "Motion is the purest form of human expression." },
  { name: "Creddy", title: "Artist", image: "Creddy.jpeg", quote: "Visions translated into vibrant strokes of creativity." },
  { name: "Geexen", title: "Artist / Head of Artist Manager", image: "GEEXEN.jpeg", quote: "Leadership is about empowering every voice in the room." },
  { name: "LarryStix", title: "Producer / Production Manager", image: "Larry.jpeg", quote: "Precision in production, passion in every sound." },
  { name: "SVNTN", title: "Artist / Stage Manager", image: "SVNTN.jpeg", quote: "The stage is where our collective energy comes alive." },
  { name: "BIDEX", title: "Artist", image: "Bidex.jpeg", quote: "Rhythms that resonate with the soul of the culture." },
  { name: "Arewa", title: "Artist", image: "Arewa.jpeg", quote: "Beauty and strength redefined through artistic vision." },
  { name: "Mercy", title: "Creative", image: "Mercy.jpeg", quote: "Details define the difference between good and great." },
  { name: "DJ Yinkus", title: "DJ / Artist", image: "DJ Yinkus.jpeg", quote: "The pulse of the city, captured one track at a time." },
  { name: "Lumi", title: "Creative", image: "Lumi.jpeg", quote: "Illuminating the path for future culture shapers." }
];

const speakers = people.map(p => ({
  name: p.name,
  title: p.title,
  org: "CONFORM",
  topic: p.quote,
  bio: `${p.name} is a key architect in the movement shaping contemporary culture. With a focus on ${p.title.toLowerCase()}, they bring a unique perspective to CON/FORM.`,
  image: `/The Creatives Shaping Culture/${p.image}`,
  handle: p.name.replace(/\s+/g, ''),
  day: "Day 1",
  type: (p.title.includes("CEO") || p.title.includes("Director")) ? "Keynote" : (p.title.includes("Artist") ? "Talk" : "Workshop"),
}));

console.log(JSON.stringify(speakers, null, 2));

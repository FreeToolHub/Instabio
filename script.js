const niches = {

creator:[
"🎥 Creating stories that inspire",
"📸 Turning moments into memories",
"✨ Content • Creativity • Consistency",
"🎬 Living behind the lens"
],

fitness:[
"💪 Stronger every day",
"🏋️ Fitness is my lifestyle",
"🔥 Train hard stay humble",
"⚡ Building strength daily"
],

business:[
"📈 Building brands online",
"💼 Entrepreneur mindset",
"🚀 Scaling digital businesses",
"💰 Business growth enthusiast"
],

tech:[
"💻 Tech lover",
"🤖 Exploring AI daily",
"⚡ Future driven",
"🧠 Building digital products"
],

gamer:[
"🎮 Gaming daily",
"🏆 Competitive player",
"🔥 Leveling up every day",
"👾 Born to game"
],

student:[
"📚 Learning every day",
"🎓 Future professional",
"💡 Growth mindset",
"🚀 Student with big dreams"
],

motivation:[
"🔥 Dream big work harder",
"✨ Success starts today",
"🚀 Progress over perfection",
"💪 Discipline beats motivation"
]

};

const endings = [
"👇 Follow the journey",
"📩 DM for collaboration",
"🌍 Making impact daily",
"🚀 Let's grow together",
"⚡ Be your best version",
"💯 One step at a time"
];

function randomItem(arr){
return arr[Math.floor(Math.random()*arr.length)];
}

function generateBio(){

let name=document.getElementById("name").value || "Creator";

let niche=document.getElementById("niche").value;

let bio=
`${name}

${randomItem(niches[niche])}
${randomItem(niches[niche])}
${randomItem(endings)}`;

document.getElementById("output").value=bio;
}

function copyBio(){

let text=document.getElementById("output");

text.select();

navigator.clipboard.writeText(text.value);

alert("Bio Copied!");
}

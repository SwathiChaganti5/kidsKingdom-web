import React,{useEffect,useState}from"react";
import"./styles.css";
import"./hero-animation.css";
import"./branch-links.css";
import"./staff-profiles.css";
import"./footer.css";
import"./program-selection.css";
import"./program-dialog.css";
const gallery=[
["Best Student - Nursery",`/images/gallery-nursery-1.png`],
["Best Students - Junior K.G.",`/images/gallery-junior-kg-1.png`],
["Best Students - Senior K.G.",`/images/gallery-senior-kg-1.png`],
["Best Students - Nursery",`/images/gallery-nursery-2.png`],
["Best Students - Junior K.G.",`/images/gallery-junior-kg-2.png`],
["Best Students - Senior K.G.",`/images/gallery-senior-kg-2.png`]];
const programs=[
["🧸","Play Group","A joyful first step into school life with play, movement and social learning."],
["🌱","Nursery","Early learning through language, numbers, colouring, rhymes and motor skills."],
["🎨","Junior K.G.","Creative learning with English, Telugu, Hindi, maths, EVS and storytelling."],
["🚀","Senior K.G.","Confident school readiness through academics, activities and communication."]];
const programTimetables={
 bheemili:[
    {image:`/images/timetable-bheemili-play-group.png`,sourceClass:"Play Group"},
    {image:`/images/timetable-bheemili-nursery.png`,sourceClass:"Nursery"},
    {image:`/images/timetable-bheemili-junior-kg.png`,sourceClass:"Jr.K.G."},
    {image:`/images/timetable-bheemili-senior-kg.png`,sourceClass:"Sr.K.G."}
 ],
 sangivalasa:[
  {unavailable:true},
    {image:`/images/timetable-sangivalasa-nursery.png`,sourceClass:"Nursery"},
    {image:`/images/timetable-sangivalasa-junior-kg.png`,sourceClass:"Jr.K.G."},
    {image:`/images/timetable-sangivalasa-senior-kg.png`,sourceClass:"Sr.K.G."}
 ]
};
const activities=[
["🔤","English","Letters, phonics, CVC words and comprehension"],
["🔢","Mathematics","Numbers, tables, shapes and early problem solving"],
["🎵","Rhymes","Rhymes, songs and expressive speaking"],
["📖","Story Telling","Stories that build imagination and listening"],
["🎨","Colouring","Creative expression and hand-eye coordination"],
["🏃","Motor Skills","Think-smart activities, patterns and coordination"],
["✏️","Drawing","Free-hand drawing, strokes and patterns"],
["🌍","EVS & G.A.","Animals, birds, family, colours and general awareness"]];
function App(){
 const[menu,setMenu]=useState(false),[lightbox,setLightbox]=useState(null),[selectedBranch,setSelectedBranch]=useState("bheemili"),[activeProgram,setActiveProgram]=useState(null);
 useEffect(()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add("show")),{threshold:.12});document.querySelectorAll(".reveal").forEach(x=>o.observe(x));return()=>o.disconnect()},[]);
 const go=id=>{document.getElementById(id)?.scrollIntoView({behavior:"smooth"});setMenu(false)};
 const closeProgramDetails=()=>{setActiveProgram(null);window.history.replaceState(null,"","#home");document.getElementById("home")?.scrollIntoView({block:"start",behavior:"instant"})};
 useEffect(()=>{if(!activeProgram)return;const closeOnEscape=e=>e.key==="Escape"&&closeProgramDetails();document.addEventListener("keydown",closeOnEscape);return()=>document.removeEventListener("keydown",closeOnEscape)},[activeProgram]);
 return <div>
 <div className="top"><a href="tel:9492725670" aria-label="Call 9492725670">📞 9492725670</a><a href="tel:9492773774" aria-label="Call 9492773774">📞 9492773774</a><a href="mailto:kidskingdombml@gmail.com" aria-label="Email Kids Kingdom">✉️ kidskingdombml@gmail.com</a><b>Admissions Open • 2026–27</b></div>
 <header><button className="brand" onClick={()=>go("home")}><img src={`/images/kids-kingdom-logo.png`}/></button>
 <nav className={menu?"open":""}>{["home","about","programs","play","activities","gallery","staff","contact"].map(x=><button key={x} onClick={()=>go(x)}>{x==="play"?"Kids Play Time":x[0].toUpperCase()+x.slice(1)}</button>)}</nav>
 <button className="admit" onClick={()=>go("contact")}>Enquire Now ✨</button><button className="hamb" onClick={()=>setMenu(!menu)}>☰</button></header>
 <section id="home" className="hero"><div className="cloud a">☁️</div><div className="cloud b">☁️</div><div className="sun">☀️</div>
 <div className="copy reveal"><small>NURSERY & KINDERGARTEN</small><h1>Where Little Minds<br/><span>Grow Big Dreams</span> 🌈</h1><p>Welcome to Kids Kingdom — a happy place where children learn, play, create, explore and grow with confidence.</p>
 <button className="primary" onClick={()=>go("programs")}>Explore Our World 🚀</button><button className="secondary" onClick={()=>go("contact")}>Admissions 2026–27</button><aside>🎨 Creative　 🎵 Playful　 🌱 Caring</aside></div>
 <div className="heroart"><div className="rainbow">🌈</div><div className="school">🏫</div><div className="ball">⚽</div><div className="kite">🪁</div><div className="grass"/></div><div className="wave"/></section>
 <div className="stats reveal"><div><b>4</b><span>Learning Stages</span></div><div><b>2</b><span>Branches</span></div><div><b>8+</b><span>Activity Areas</span></div><div><b>❤️</b><span>Happy Learning</span></div></div>
 <section id="about" className="section"><div className="heading reveal"><small>ABOUT OUR KINGDOM</small><h2>A Little Place With a <span>Big Heart</span> 💛</h2><p>Kids Kingdom Nursery & Kindergarten welcomes children at Bheemili and Sangivalasa with a colourful, activity-rich learning environment.</p></div>
 <div className="aboutgrid"><article className="aboutcard"><i>🏫</i><h3>Learn Through Experience</h3><p>Children explore language, maths, general awareness, stories, rhymes, colouring and motor skills through age-appropriate activities.</p></article><div className="aboutkid">🧒<em>🎨</em><label>“Learning can be<br/><b>so much fun!</b>”</label></div><article className="aboutcard green"><i>🌱</i><h3>Grow With Confidence</h3><p>We make room for creativity, communication, movement and curiosity — helping little learners become confident and happy school-goers.</p></article></div></section>
 <section id="programs" className="section programs"><div className="heading reveal"><small>OUR PROGRAMS</small><h2>Choose Your <span>Adventure</span> 🛝</h2></div><div className="program-branches" role="group" aria-label="Choose a branch">{[["bheemili","Bheemili"],["sangivalasa","Sangivalasa"]].map(([id,label])=><button type="button" key={id} className={selectedBranch===id?"active":""} aria-pressed={selectedBranch===id} onClick={()=>setSelectedBranch(id)}>{label}</button>)}</div><div className="cards">{programs.map(([i,t,d],n)=><article className={`pc p${n} reveal`} key={t}><b>0{n+1}</b><i>{i}</i><h3>{t}</h3><p>{d}</p><button className="program-arrow" type="button" onClick={()=>setActiveProgram({branch:selectedBranch,index:n})} aria-label={`View ${t} timetable and program content for ${selectedBranch}`}>→</button></article>)}</div></section>
 <section id="play" className="play"><div className="playcopy reveal"><small>OUR FAVOURITE CORNER</small><h2>Kids <span>Play Time</span> 🥳</h2><p>Because little learners need plenty of room to move, imagine, laugh and discover!</p><div>⚽ Ball play　 🛝 Outdoor fun　 🪁 Creative play</div></div><div className="playground reveal"><div className="slide" aria-hidden="true"><img src="https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.3/assets/svg/1f6dd.svg" alt="" draggable="false"/></div><div className="roll">{'\u26BD'}</div><div className="tree">{'\u{1F333}'}</div><div className="ground"/></div></section>
 <section id="activities" className="section"><div className="heading reveal"><small>LEARNING THROUGH PLAY</small><h2>Every Day Has a New <span>Discovery</span> ✨</h2></div><div className="acts">{activities.map(([i,t,d])=><article className="act reveal" key={t}><i>{i}</i><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
 <section id="gallery" className="section gallery"><div className="heading reveal"><small>OUR LITTLE STARS</small><h2>Moments From <span>Kids Kingdom</span> 📸</h2></div><div className="gallerygrid">{gallery.map(([t,u])=><button className="gi reveal" key={u} onClick={()=>setLightbox({t,u})}><img src={u} alt={t}/><span>{t} ↗</span></button>)}</div></section>
 <section id="staff" className="section staff"><div className="heading reveal"><small>MEET THE TEAM</small><h2>The People Behind Our <span>Kingdom</span> 👩‍🏫</h2></div><div className="staffgrid"><article className="staffcard reveal"><div className="staff-profile"><img src="/images/correspondent.png" alt="M. Bala Krishna Yadav, Correspondent"/><div><small>Correspondent</small><h3>M. Bala Krishna Yadav</h3><p>M.Sc. M.A. M.Ed.</p></div></div><div className="staff-profile"><img src="/images/director.png" alt="M. Chandana, Director"/><div><small>Director</small><h3>M. Chandana</h3><p>M.A. B.Ed.</p></div></div></article><article className="adcard reveal"><img src={`/images/admission-promo.jpg`}/><h3>Ready for a colourful beginning?</h3><button onClick={()=>go("contact")}>Talk to Kids Kingdom →</button></article></div></section>
 <section className="section branches"><div className="heading reveal"><small>FIND YOUR BRANCH</small><h2>Two Happy <span>Homes</span> 🏫</h2></div><div className="branchgrid"><article className="branch reveal"><a className="branch-location" href="https://www.google.com/maps/search/?api=1&query=10-35-147%2C%20Vuda%20Colony%2C%20Near%20Bank%20Colony%2C%20Bheemunipatnam%20531163" target="_blank" rel="noreferrer">📍<h3>BHEEMILI</h3><p>10-35-147, Vuda Colony,<br/>Near Bank Colony,<br/>Bheemunipatnam - 531163.</p></a><a className="branch-gallery" href="https://photos.app.goo.gl/RU9g5QfyUMNY6Axm8" target="_blank" rel="noreferrer">View all photos ↗</a></article><article className="branch blue reveal"><a className="branch-location" href="https://www.google.com/maps/search/?api=1&query=ANH%20Hospital%20Back%20Road%2C%2060%20feet%20road%2C%20Opposite%20Sukhibhava%20Gated%20Community%2C%20Sangivalasa" target="_blank" rel="noreferrer">📍<h3>SANGIVALASA</h3><p>ANH Hospital Back Road (60 feet road),<br/>Opp. to Sukhibhava Gated Community,<br/>Sangivalasa.</p></a><a className="branch-gallery" href="https://photos.app.goo.gl/RU9g5QfyUMNY6Axm8" target="_blank" rel="noreferrer">View all photos ↗</a></article></div></section>
 <section id="contact" className="contact"><div className="reveal"><small>LET'S TALK</small><h2>Ready to Join the <span>Kingdom?</span> 👑</h2><p>For admissions and enquiries, reach Kids Kingdom at the details below.</p><div className="contacts"><a href="tel:9492725670">📞 9492725670</a><a href="tel:9492773774">📞 9492773774</a><a href="mailto:kidskingdombml@gmail.com">✉️ kidskingdombml@gmail.com</a></div></div></section>
 <footer><div><img src={`/images/kids-kingdom-logo.png`}/><p>Nursery & Kindergarten</p></div><div><b>Quick Links</b><span onClick={()=>go("programs")}>Programs</span><span onClick={()=>go("gallery")}>Gallery</span><span onClick={()=>go("contact")}>Contact</span></div><div><b>Branches</b><button className="footer-branch" type="button" onClick={()=>{setSelectedBranch("bheemili");go("programs")}}>Bheemili</button><button className="footer-branch" type="button" onClick={()=>{setSelectedBranch("sangivalasa");go("programs")}}>Sangivalasa</button></div><div><b>Contact</b><a className="footer-contact" href="tel:9492725670"><span aria-hidden="true">☎</span>9492725670</a><a className="footer-contact" href="tel:9492773774"><span aria-hidden="true">☎</span>9492773774</a><a className="footer-contact" href="mailto:kidskingdombml@gmail.com"><span aria-hidden="true">✉</span>kidskingdombml@gmail.com</a></div><small>© Kids Kingdom Pre School • Designed with love for little learners 💛</small></footer>
 <button className="wa" aria-label="Chat with Kids Kingdom on WhatsApp" onClick={()=>window.open("https://wa.me/919492725670","_blank","noopener,noreferrer")}><svg viewBox="0 0 448 512" aria-hidden="true"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 1.9 131.6 1.9 254c0 39.1 10.2 77.3 29.6 110.9L0 480l118.4-31.1c32.6 17.8 69.4 27.2 105.5 27.2h.1c122.3 0 222-99.6 222-222 0-59.3-23.1-115.1-65.1-157zm-157 341.3c-32.9 0-65.1-8.8-93.2-25.4l-6.7-4-70.2 18.4 18.7-68.4-4.4-7c-18.6-29.6-28.4-63.7-28.4-98.4 0-101.8 82.9-184.7 184.8-184.7 49.3 0 95.6 19.2 130.4 54.1 34.8 34.8 54 81.2 54 130.5 0 101.8-82.9 184.9-184.9 184.9zm101.6-138.6c-5.5-2.8-32.6-16.1-37.7-17.9-5-1.9-8.7-2.8-12.4 2.8-3.7 5.5-14.3 17.9-17.5 21.6-3.2 3.7-6.4 4.1-11.9 1.4-32.3-16.2-53.5-28.9-74.9-65.5-5.6-9.7 5.6-9 16.2-29.9 1.8-3.7.9-6.9-.5-9.7s-12.4-29.9-17-40.9c-4.5-10.8-9.1-9.3-12.4-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.7 6.9-5.1 5.5-19.3 18.8-19.3 45.9s19.8 53.2 22.5 56.9c2.8 3.7 38.9 59.4 94.2 83.3 35 15.1 48.7 16.4 66.2 13.8 10.7-1.6 32.6-13.3 37.2-26.2 4.6-12.9 4.6-23.9 3.2-26.2-1.4-2.3-5.1-3.7-10.6-6.4z"/></svg></button>
 {activeProgram&&<div className="program-dialog-backdrop" onClick={event=>event.target===event.currentTarget&&closeProgramDetails()}><section className="program-dialog" role="dialog" aria-modal="true" aria-labelledby="program-dialog-title"><div className="program-dialog-header"><div><small>{activeProgram.branch==="bheemili"?"BHEEMILI":"SANGIVALASA"} WEEKLY TIMETABLE</small><h2 id="program-dialog-title">{programs[activeProgram.index][1]} Timetable</h2></div><button className="program-dialog-close" type="button" onClick={closeProgramDetails} aria-label="Close and return home">×</button></div>{programTimetables[activeProgram.branch][activeProgram.index].unavailable?<div className="program-dialog-empty"><h3>No separate Play Group timetable is posted for Sangivalasa.</h3><p>Choose Nursery, Junior K.G., or Senior K.G. to view the available timetable.</p></div>:<><div className="program-dialog-meta"><span>Class timetable</span><span className="program-source-class">{programTimetables[activeProgram.branch][activeProgram.index].sourceClass}</span></div><div className="program-timetable-frame" role="region" aria-label={`${programTimetables[activeProgram.branch][activeProgram.index].sourceClass} timetable`} tabIndex={0}><img className="program-timetable-image" src={programTimetables[activeProgram.branch][activeProgram.index].image} alt={`${programTimetables[activeProgram.branch][activeProgram.index].sourceClass} weekly timetable for ${activeProgram.branch}`} /></div></>}</section></div>}
 {lightbox&&<div className="lb" onClick={()=>setLightbox(null)}><button onClick={()=>setLightbox(null)}>×</button><img src={lightbox.u}/><p>{lightbox.t}</p></div>}</div>}

export default App;

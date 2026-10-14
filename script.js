const $=(s,a=document)=>[...a.querySelectorAll(s)];
const root=document.documentElement;
const NE={
"Home":"गृहपृष्ठ","About":"बारेमा","Projects":"परियोजना","Contact":"सम्पर्क","Menu":"मेनु","Night mode":"रात्रि मोड","Day mode":"दिन मोड",
"Prakash Raj Nepal":"प्रकाश राज नेपाल","© 2026 Prakash Raj Nepal. Bharatpur-11, Chitwan, Nepal.":"© २०२६ प्रकाश राज नेपाल। भरतपुर-११, चितवन, नेपाल।",
"IT Officer":"आईटी अधिकृत","Network Administrator":"नेटवर्क प्रशासक","System Support Specialist":"सिस्टम सपोर्ट विशेषज्ञ",
"I keep campus and hospital networks, CCTV and computer systems running, and I organize hackathons and CTF competitions for students. Over 5 years across healthcare and education.":"म क्याम्पस र अस्पतालका नेटवर्क, सीसीटीभी र कम्प्युटर प्रणालीहरू सुचारु राख्छु, र विद्यार्थीहरूका लागि ह्याकाथन तथा सीटीएफ प्रतियोगिताहरू आयोजना गर्छु। स्वास्थ्य र शिक्षा क्षेत्रमा ५ वर्षभन्दा बढीको अनुभव।",
"See my work":"मेरो काम हेर्नुहोस्","Download CV":"सीभी डाउनलोड गर्नुहोस्",
"Currently IT Officer and ECA Incharge at Forbes College, Bharatpur.":"हाल भरतपुरको फोब्स कलेजमा आईटी अधिकृत तथा ईसीए इन्चार्ज।",
"What I do":"म के गर्छु","Networks":"नेटवर्क","LAN/WAN setup, routers, switches, monitoring and troubleshooting.":"ल्यान/वान सेटअप, राउटर, स्विच, अनुगमन र समस्या समाधान।",
"CCTV and biometrics":"सीसीटीभी र बायोमेट्रिक","Hikvision, Dahua and Tiandy cameras; ZKTeco, Hikvision and eSSL attendance devices.":"हिकभिजन, दाहुआ र टियान्डी क्यामेरा; जेडकेटेको, हिकभिजन र ईएसएसएल हाजिरी उपकरणहरू।",
"System support":"सिस्टम सपोर्ट","PC assembly, servers, software, printers and day-to-day help for staff and students.":"पीसी असेम्बली, सर्भर, सफ्टवेयर, प्रिन्टर र कर्मचारी तथा विद्यार्थीलाई दैनिक सहयोग।",
"Tech events":"प्राविधिक कार्यक्रम","CTF competitions, hackathons and datacenter visits for students.":"विद्यार्थीहरूका लागि सीटीएफ प्रतियोगिता, ह्याकाथन र डाटासेन्टर भ्रमण।",
"About me":"मेरो बारेमा","I am an IT professional from Bharatpur, Chitwan with over 5 years in network administration, system support and IT infrastructure. I enjoy solving connectivity problems quickly and getting students excited about technology. I am studying for a BCA at Saptagandaki Multiple Campus.":"म चितवनको भरतपुरको आईटी पेसेवर हुँ, जससँग नेटवर्क प्रशासन, सिस्टम सपोर्ट र आईटी पूर्वाधारमा ५ वर्षभन्दा बढीको अनुभव छ। म कनेक्टिभिटीका समस्या छिटो समाधान गर्न र विद्यार्थीहरूलाई प्रविधिप्रति उत्साहित बनाउन रमाउँछु। म सप्तगण्डकी बहुमुखी क्याम्पसमा बीसीए अध्ययन गर्दैछु।",
"Experience":"अनुभव","Skills":"सीप","Education":"शिक्षा","Training":"तालिम",
"IT Officer and ECA Incharge, Forbes College":"आईटी अधिकृत तथा ईसीए इन्चार्ज, फोब्स कलेज","March 2022 to present":"२०२२ मार्चदेखि हालसम्म",
"Manage campus network, computer labs and library IT":"क्याम्पस नेटवर्क, कम्प्युटर ल्याब र पुस्तकालयको आईटी व्यवस्थापन","Run technical competitions: CTF and hackathons":"प्राविधिक प्रतियोगिता सञ्चालन: सीटीएफ र ह्याकाथन","Organize tours, datacenter visits and student events":"भ्रमण, डाटासेन्टर भ्रमण र विद्यार्थी कार्यक्रम आयोजना",
"Junior IT Officer, Manakamana Hospital":"जुनियर आईटी अधिकृत, मनकामना अस्पताल","June 2020 to August 2021":"२०२० जुनदेखि २०२१ अगस्टसम्म",
"Maintained LAN, telephone network and networked biomedical devices":"ल्यान, टेलिफोन नेटवर्क र नेटवर्कमा जोडिएका बायोमेडिकल उपकरणहरूको मर्मत","Configured routers and switches; installed CCTV":"राउटर र स्विच कन्फिगर; सीसीटीभी जडान",
"System Support Officer (part-time), BP Koirala Memorial Cancer Hospital":"सिस्टम सपोर्ट अधिकृत (पार्ट-टाइम), बीपी कोइराला स्मारक क्यान्सर अस्पताल","Late 2019":"२०१९ को उत्तरार्ध","Managed attendance devices, CCTV and networks":"हाजिरी उपकरण, सीसीटीभी र नेटवर्कको व्यवस्थापन",
"System Support Technician (part-time), Chitwan Medical College":"सिस्टम सपोर्ट प्राविधिक (पार्ट-टाइम), चितवन मेडिकल कलेज","Mid 2019 to 2020":"२०१९ को मध्यदेखि २०२०सम्म","End-user support, upgrades, repairs and installations":"प्रयोगकर्ता सहयोग, अपग्रेड, मर्मत र जडान",
"Primary Computer Teacher and Tutor, Bharatpur":"प्राथमिक कम्प्युटर शिक्षक तथा ट्युटर, भरतपुर","2015 to 2016":"२०१५ देखि २०१६","Taught computer basics to young students":"साना विद्यार्थीलाई कम्प्युटरका आधारभूत कुरा सिकाएँ",
"Microsoft Office":"माइक्रोसफ्ट अफिस","Networking (LAN/WAN, routers, switches)":"नेटवर्किङ (ल्यान/वान, राउटर, स्विच)","CCTV and biometric systems":"सीसीटीभी र बायोमेट्रिक प्रणाली","Hardware and troubleshooting":"हार्डवेयर र समस्या समाधान","Windows and Windows Server":"विन्डोज र विन्डोज सर्भर","Linux":"लिनक्स","MySQL, SQL Server, MS Access":"माइएसक्युएल, एसक्युएल सर्भर, एमएस एक्सेस","Programming (Java, C, C++, HTML, CSS, JS)":"प्रोग्रामिङ (Java, C, C++, HTML, CSS, JS)",
"BCA (ongoing)":"बीसीए (अध्ययनरत)","Saptagandaki Multiple Campus":"सप्तगण्डकी बहुमुखी क्याम्पस","Diploma in Computer Engineering, 2019":"कम्प्युटर इन्जिनियरिङमा डिप्लोमा, २०१९","Nepal Polytechnic Institute":"नेपाल पोलिटेक्निक इन्स्टिच्युट","SLC, 2015":"एसएलसी, २०१५","Aroma Higher Secondary School":"अरोमा उच्च माध्यमिक विद्यालय",
"Cisco Essentials and IT Essentials, NetCad Academy":"सिस्को एसेन्सियल्स र आईटी एसेन्सियल्स, नेटक्याड एकेडेमी","Networking and Troubleshooting, Grandtech IT Solution":"नेटवर्किङ र समस्या समाधान, ग्रान्डटेक आईटी सोलुसन","CCTV, Attendance Systems and Hardware, Crystal Light IT":"सीसीटीभी, हाजिरी प्रणाली र हार्डवेयर, क्रिस्टल लाइट आईटी",
"Projects and work":"परियोजना र कार्य","Real work from my roles. Filter by type.":"मेरा कार्यभूमिकाका वास्तविक काम। प्रकार अनुसार छान्नुहोस्।","All":"सबै","Networking":"नेटवर्किङ","Security":"सुरक्षा","Events":"कार्यक्रम",
"Campus network and IT":"क्याम्पस नेटवर्क र आईटी","Forbes College":"फोब्स कलेज","Network, computer labs and library IT for staff and students.":"कर्मचारी र विद्यार्थीका लागि नेटवर्क, कम्प्युटर ल्याब र पुस्तकालयको आईटी।",
"CTF and hackathons":"सीटीएफ र ह्याकाथन","Planned and ran capture-the-flag competitions and hackathons.":"क्याप्चर-द-फ्ल्याग प्रतियोगिता र ह्याकाथनको योजना बनाएर सञ्चालन गरें।",
"Hospital network":"अस्पताल नेटवर्क","Manakamana Hospital":"मनकामना अस्पताल","LAN, telephone network and internet-connected biomedical devices.":"ल्यान, टेलिफोन नेटवर्क र इन्टरनेटमा जोडिएका बायोमेडिकल उपकरण।",
"CCTV systems":"सीसीटीभी प्रणाली","Hospitals and college":"अस्पताल र कलेज","Installed and maintained DVR/NVR setups with Hikvision, Dahua and Tiandy.":"हिकभिजन, दाहुआ र टियान्डीसँग डीभीआर/एनभीआर सेटअप जडान र मर्मत गरें।",
"Biometric attendance":"बायोमेट्रिक हाजिरी","BP Koirala Memorial Cancer Hospital":"बीपी कोइराला स्मारक क्यान्सर अस्पताल","Configured ZKTeco, Hikvision and eSSL devices.":"जेडकेटेको, हिकभिजन र ईएसएसएल उपकरण कन्फिगर गरें।",
"Student tours and datacenter visits":"विद्यार्थी भ्रमण र डाटासेन्टर भ्रमण","Organized educational tours and datacenter visits.":"शैक्षिक भ्रमण र डाटासेन्टर भ्रमण आयोजना गरें।",
"Get in touch":"सम्पर्क गर्नुहोस्","Need IT support, a network setup or help with a tech event? Send a message.":"आईटी सहयोग, नेटवर्क सेटअप वा प्राविधिक कार्यक्रमका लागि सहयोग चाहिन्छ? सन्देश पठाउनुहोस्।",
"Email":"इमेल","Phone":"फोन","Location":"ठेगाना","Bharatpur-11, Chitwan, Nepal":"भरतपुर-११, चितवन, नेपाल","Your name":"तपाईंको नाम","Your email":"तपाईंको इमेल","Message":"सन्देश","Send by email":"इमेलबाट पठाउनुहोस्"};
let lang='en';
const tr=s=>(lang==='ne'&&NE[s])||s;
const role=$('.role')[0];
function apply(){
 root.lang=lang;
 $('#lang')[0].textContent=lang==='ne'?'English':'नेपाली';
 const dark=getComputedStyle(root).getPropertyValue('--bg').trim()==='#0C141F';
 const tb=$('#theme')[0];tb.textContent=dark?'Day mode':'Night mode';
 const w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let n;
 while(n=w.nextNode()){
  if(['SCRIPT','STYLE'].includes(n.parentNode.nodeName)||n.parentNode.closest('.role'))continue;
  if(n._en===undefined){const t=n.nodeValue.trim();n._en=t;n._ws=[n.nodeValue.match(/^\s*/)[0],n.nodeValue.match(/\s*$/)[0]]}
  if(n._en)n.nodeValue=n._ws[0]+tr(n._en)+n._ws[1];
 }
 if(role&&matchMedia('(prefers-reduced-motion:reduce)').matches)role.textContent=JSON.parse(role.dataset.words).map(tr).join(' | ');
}
try{const t=localStorage.getItem('theme');if(t)root.dataset.theme=t;lang=localStorage.getItem('lang')||'en'}catch(e){}
$('#theme')[0].onclick=()=>{const d=getComputedStyle(root).getPropertyValue('--bg').trim()==='#0C141F';root.dataset.theme=d?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme)}catch(e){}apply()};
$('#lang')[0].onclick=()=>{lang=lang==='ne'?'en':'ne';try{localStorage.setItem('lang',lang)}catch(e){}apply()};
$('#menu')[0].onclick=()=>$('nav')[0].classList.toggle('open');
if(role&&!matchMedia('(prefers-reduced-motion:reduce)').matches){const w=JSON.parse(role.dataset.words);let i=0,j=0,del=false;
 (function t(){const s=tr(w[i]);role.textContent=s.slice(0,j);if(!del&&j++>=s.length){del=true;return setTimeout(t,1600)}
 if(del&&--j<0){del=false;j=0;i=(i+1)%w.length}setTimeout(t,del?35:75)})()}
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.style.width=x.target.dataset.w+'%';io.unobserve(x.target)}}));
$('.bar b').forEach(b=>io.observe(b));
$('.filters button').forEach(b=>b.onclick=()=>{$('.filters button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
 $('.card[data-cat]').forEach(c=>c.classList.toggle('hide',b.dataset.f!=='all'&&c.dataset.cat!==b.dataset.f))});
const f=$('#contact')[0];
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
 location.href='mailto:nepalprakashraj@gmail.com?subject='+encodeURIComponent('Message from '+d.get('name'))+'&body='+encodeURIComponent(d.get('msg')+'\n\nReply to: '+d.get('email'))};
apply();

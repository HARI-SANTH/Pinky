*/ const MyPnky = require('../events');
const { MessageType, Mimetype } = require('@adiwajshing/baileys');
const got = require('got');
const Config = require('../config');
const axios = require('axios')
const Axios = require('axios')

const conf = require('../config');
let wk = conf.WORKTYPE == 'public' ? false : true
 
const _0x5172f8=_0x162f;(function(_0x399947,_0x319498){const _0x22e8f2=_0x162f,_0x57ff34=_0x399947();while(!![]){try{const _0x1aa3df=-parseInt(_0x22e8f2(0x146))/0x1+-parseInt(_0x22e8f2(0x11b))/0x2*(parseInt(_0x22e8f2(0x14f))/0x3)+parseInt(_0x22e8f2(0x15b))/0x4+parseInt(_0x22e8f2(0x110))/0x5+-parseInt(_0x22e8f2(0x15d))/0x6*(-parseInt(_0x22e8f2(0x126))/0x7)+-parseInt(_0x22e8f2(0x153))/0x8+parseInt(_0x22e8f2(0x147))/0x9*(parseInt(_0x22e8f2(0x128))/0xa);if(_0x1aa3df===_0x319498)break;else _0x57ff34['push'](_0x57ff34['shift']());}catch(_0x2a1317){_0x57ff34['push'](_0x57ff34['shift']());}}}(_0x3737,0x5cb23),MyPnky[_0x5172f8(0x145)]({'pattern':_0x5172f8(0x113)+')','fromMe':wk,'desc':_0x5172f8(0x17b)+_0x5172f8(0x173)},async(_0x271393,_0x110750)=>{const _0x3dc3b9=_0x5172f8;if(conf[_0x3dc3b9(0x119)]==_0x3dc3b9(0x139)||conf['BOTCREATOR']==_0x3dc3b9(0x11d)){const _0x3042de=_0x3dc3b9(0x15f)+_0x3dc3b9(0x131),{data:_0xe66b4}=await axios(_0x3dc3b9(0x154)+'i.dapuhy.g'+_0x3dc3b9(0x16c)+_0x3dc3b9(0x162)+_0x3dc3b9(0x11e)+_0x3dc3b9(0x149)+_0x110750[0x1]+(_0x3dc3b9(0x11a)+_0x3dc3b9(0x174))),{status:_0x46e1b3,result:_0x4f9a94}=_0xe66b4;var _0x108dc2=await Axios[_0x3dc3b9(0x13a)](''+_0x4f9a94[_0x3dc3b9(0x177)],{'responseType':_0x3dc3b9(0x143)+'r'});if(!_0x46e1b3)return await _0x271393[_0x3dc3b9(0x15c)+'e'](_0x3dc3b9(0x120)+_0x3dc3b9(0x132)+'``');await _0x271393[_0x3dc3b9(0x129)][_0x3dc3b9(0x15c)+'e'](_0x271393[_0x3dc3b9(0x123)],_0x3042de,MessageType[_0x3dc3b9(0x111)],{'quoted':_0x271393[_0x3dc3b9(0x150)]});let _0x5aba4c=_0x3dc3b9(0x13b);return _0x5aba4c+=_0x3dc3b9(0x12a)+_0x4f9a94['id']+'\x0a',_0x5aba4c+=_0x3dc3b9(0x12b)+_0x4f9a94[_0x3dc3b9(0x158)]+'\x0a',_0x5aba4c+=_0x3dc3b9(0x13e)+'ME\x20:'+_0x4f9a94[_0x3dc3b9(0x16f)]+'\x0a',_0x5aba4c+=_0x3dc3b9(0x14b)+_0x4f9a94[_0x3dc3b9(0x121)]+'\x0a',_0x5aba4c+=_0x3dc3b9(0x135)+':'+_0x4f9a94['followers']+'\x0a',_0x5aba4c+=_0x3dc3b9(0x13b),await _0x271393[_0x3dc3b9(0x129)][_0x3dc3b9(0x15c)+'e'](_0x271393[_0x3dc3b9(0x123)],Buffer['from'](_0x108dc2[_0x3dc3b9(0x150)]),MessageType[_0x3dc3b9(0x171)],{'mimetype':Mimetype[_0x3dc3b9(0x159)],'quoted':_0x271393[_0x3dc3b9(0x150)],'caption':_0x5aba4c});}else await _0x271393[_0x3dc3b9(0x129)][_0x3dc3b9(0x15c)+'e'](_0x271393['jid'],_0x3dc3b9(0x15e)+_0x3dc3b9(0x155)+_0x3dc3b9(0x14e)+'\x20pinky\x20and'+'\x20julie\x20use'+_0x3dc3b9(0x15a)+'ou\x20have\x20fo'+_0x3dc3b9(0x179)+_0x3dc3b9(0x12c)+_0x3dc3b9(0x130)+'and\x20will\x20g'+_0x3dc3b9(0x140)+_0x3dc3b9(0x13d)+_0x3dc3b9(0x134)+_0x3dc3b9(0x160)+_0x3dc3b9(0x169)+_0x3dc3b9(0x12f)+_0x3dc3b9(0x136),MessageType[_0x3dc3b9(0x111)],{'quoted':_0x271393[_0x3dc3b9(0x150)]});}),MyPnky['addCommand']({'pattern':_0x5172f8(0x16e)+'.*)','fromMe':wk,'desc':_0x5172f8(0x13c)+_0x5172f8(0x148)+_0x5172f8(0x13f)},async(_0x2bd569,_0x3a5589)=>{const _0x2d4d50=_0x5172f8;if(conf[_0x2d4d50(0x119)]==_0x2d4d50(0x139)||conf[_0x2d4d50(0x119)]==_0x2d4d50(0x11d)){const _0x5153b9=_0x2d4d50(0x15f)+'ng```',{data:_0x30ef60}=await axios(_0x2d4d50(0x154)+_0x2d4d50(0x16a)+_0x2d4d50(0x16c)+'almedia/ig'+'download?u'+_0x2d4d50(0x156)+_0x3a5589[0x1]+('&apikey=pi'+_0x2d4d50(0x174))),{status:_0x15d3d9,result:_0x4c6e51,user:_0x1938ea}=_0x30ef60;var _0x29736f=await Axios[_0x2d4d50(0x13a)](''+_0x4c6e51[_0x2d4d50(0x163)+'rl'],{'responseType':_0x2d4d50(0x143)+'r'});if(!_0x15d3d9)return await _0x2bd569[_0x2d4d50(0x15c)+'e'](_0x2d4d50(0x120)+_0x2d4d50(0x132)+'``');await _0x2bd569[_0x2d4d50(0x129)][_0x2d4d50(0x15c)+'e'](_0x2bd569[_0x2d4d50(0x123)],_0x5153b9,MessageType[_0x2d4d50(0x111)],{'quoted':_0x2bd569[_0x2d4d50(0x150)]});let _0x110603=_0x2d4d50(0x13b);_0x110603+=_0x2d4d50(0x14c)+':'+_0x1938ea['username']+'\x0a',_0x110603+=_0x2d4d50(0x13b);if(_0x4c6e51[_0x2d4d50(0x14a)]==_0x2d4d50(0x171))return await _0x2bd569[_0x2d4d50(0x129)]['sendMessag'+'e'](_0x2bd569[_0x2d4d50(0x123)],Buffer[_0x2d4d50(0x141)](_0x29736f['data']),MessageType[_0x2d4d50(0x171)],{'caption':_0x110603,'quoted':_0x2bd569[_0x2d4d50(0x150)]});if(_0x4c6e51[_0x2d4d50(0x14a)]==_0x2d4d50(0x176))return await _0x2bd569[_0x2d4d50(0x129)][_0x2d4d50(0x15c)+'e'](_0x2bd569[_0x2d4d50(0x123)],Buffer[_0x2d4d50(0x141)](_0x29736f['data']),MessageType[_0x2d4d50(0x176)],{'caption':_0x110603,'quoted':_0x2bd569['data']});}}),MyPnky['addCommand']({'pattern':'video\x20?(.*'+')','fromMe':wk,'desc':_0x5172f8(0x165)+_0x5172f8(0x142)+'yt'},async(_0x28d1df,_0x5ce2d8)=>{const _0xb0fd8e=_0x5172f8;if(conf[_0xb0fd8e(0x119)]==_0xb0fd8e(0x139)||conf[_0xb0fd8e(0x119)]==_0xb0fd8e(0x11d)){await _0x28d1df['client']['sendMessag'+'e'](_0x28d1df[_0xb0fd8e(0x123)],'```DOWNLOA'+_0xb0fd8e(0x11f),MessageType[_0xb0fd8e(0x111)]);const {data:_0x37ce6c}=await axios(_0xb0fd8e(0x154)+'i.zeks.me/'+_0xb0fd8e(0x137)+_0xb0fd8e(0x12e)+_0xb0fd8e(0x151)+'='+_0x5ce2d8[0x1]),{status:_0x22f201,result:_0x56da5a}=_0x37ce6c;var _0x4fcdba=await Axios[_0xb0fd8e(0x13a)](''+_0x56da5a[_0xb0fd8e(0x170)],{'responseType':_0xb0fd8e(0x143)+'r'});if(!_0x22f201)return await _0x28d1df[_0xb0fd8e(0x15c)+'e'](_0xb0fd8e(0x120)+_0xb0fd8e(0x132)+'``');await _0x28d1df[_0xb0fd8e(0x129)][_0xb0fd8e(0x15c)+'e'](_0x28d1df[_0xb0fd8e(0x123)],'```Uploadi'+'ng```\x20\x0a\x0a'+(''+_0x56da5a[_0xb0fd8e(0x125)]),MessageType[_0xb0fd8e(0x111)]);let _0x2f4473=_0xb0fd8e(0x13b);_0x2f4473+=_0x56da5a[_0xb0fd8e(0x125)]+'\x0a',_0x2f4473+=_0xb0fd8e(0x13b),await _0x28d1df[_0xb0fd8e(0x129)][_0xb0fd8e(0x15c)+'e'](_0x28d1df[_0xb0fd8e(0x123)],Buffer['from'](_0x4fcdba['data']),MessageType[_0xb0fd8e(0x176)],{'caption':_0x2f4473,'quoted':_0x28d1df[_0xb0fd8e(0x150)]});}else await _0x28d1df[_0xb0fd8e(0x129)][_0xb0fd8e(0x15c)+'e'](_0x28d1df[_0xb0fd8e(0x123)],_0xb0fd8e(0x15e)+_0xb0fd8e(0x155)+'s\x20made\x20for'+'\x20pinky\x20and'+_0xb0fd8e(0x175)+'rs\x20\x0a\x0a\x20if\x20y'+_0xb0fd8e(0x16b)+'rked\x20julie'+_0xb0fd8e(0x12c)+_0xb0fd8e(0x130)+_0xb0fd8e(0x167)+_0xb0fd8e(0x140)+_0xb0fd8e(0x13d)+'\x0a\x20https://'+_0xb0fd8e(0x160)+_0xb0fd8e(0x169)+_0xb0fd8e(0x12f)+_0xb0fd8e(0x136),MessageType[_0xb0fd8e(0x111)],{'quoted':_0x28d1df[_0xb0fd8e(0x150)]});}),MyPnky[_0x5172f8(0x145)]({'pattern':_0x5172f8(0x161),'fromMe':wk,'desc':_0x5172f8(0x14d)+_0x5172f8(0x164)+_0x5172f8(0x168)},async(_0x2b0fff,_0x3bbee5)=>{const _0x16ef48=_0x5172f8;if(conf[_0x16ef48(0x119)]=='afnanplk'||conf[_0x16ef48(0x119)]==_0x16ef48(0x11d)){await _0x2b0fff[_0x16ef48(0x129)][_0x16ef48(0x15c)+'e'](_0x2b0fff[_0x16ef48(0x123)],'```DOWNLOA'+'DING```',MessageType[_0x16ef48(0x111)]);const {data:_0x399642}=await axios('https://ap'+'i.zeks.me/'+_0x16ef48(0x122)+_0x16ef48(0x127)+'ey=farhand'+_0x16ef48(0x114)+_0x3bbee5[0x1]),{status:_0x4b33f6,result:_0x3369e3}=_0x399642;var _0x253d89=await Axios['get'](''+_0x3369e3[_0x16ef48(0x144)],{'responseType':_0x16ef48(0x143)+'r'}),_0xb7587b=await Axios[_0x16ef48(0x13a)](''+_0x3369e3[_0x16ef48(0x12d)],{'responseType':'arraybuffe'+'r'});if(!_0x4b33f6)return await _0x2b0fff[_0x16ef48(0x15c)+'e'](_0x16ef48(0x120)+_0x16ef48(0x132)+'``');let _0x965b34=_0x16ef48(0x13b);_0x965b34+=_0x16ef48(0x157)+'g\x20\x0a\x0a\x20'+_0x3369e3[_0x16ef48(0x125)]+'\x0a',_0x965b34+='```',await _0x2b0fff[_0x16ef48(0x129)][_0x16ef48(0x15c)+'e'](_0x2b0fff[_0x16ef48(0x123)],Buffer['from'](_0xb7587b[_0x16ef48(0x150)]),MessageType[_0x16ef48(0x171)],{'mimetype':Mimetype[_0x16ef48(0x159)],'quoted':_0x2b0fff['data'],'caption':_0x965b34});let _0x5718ea=''+_0x3369e3[_0x16ef48(0x125)],_0x72e91c='```';_0x72e91c+=_0x3369e3['title']+'\x0a',_0x72e91c+='```',await _0x2b0fff['client']['sendMessag'+'e'](_0x2b0fff[_0x16ef48(0x123)],Buffer[_0x16ef48(0x141)](_0x253d89[_0x16ef48(0x150)]),MessageType[_0x16ef48(0x11c)],{'mimetype':Mimetype[_0x16ef48(0x16d)],'ptt':![],'quoted':_0x2b0fff[_0x16ef48(0x150)]}),await _0x2b0fff[_0x16ef48(0x129)][_0x16ef48(0x15c)+'e'](_0x2b0fff[_0x16ef48(0x123)],Buffer[_0x16ef48(0x141)](_0x253d89[_0x16ef48(0x150)]),MessageType[_0x16ef48(0x118)],{'filename':_0x5718ea+_0x16ef48(0x172),'mimetype':_0x16ef48(0x117),'contextInfo':{'forwardingScore':0x2,'isForwarded':!![]},'quoted':_0x2b0fff[_0x16ef48(0x150)]});}else await _0x2b0fff['client'][_0x16ef48(0x15c)+'e'](_0x2b0fff[_0x16ef48(0x123)],'sorry\x20this'+'\x20feature\x20i'+_0x16ef48(0x14e)+_0x16ef48(0x138)+_0x16ef48(0x175)+_0x16ef48(0x15a)+_0x16ef48(0x16b)+_0x16ef48(0x179)+_0x16ef48(0x12c)+_0x16ef48(0x130)+'and\x20will\x20g'+'ive\x20you\x20a\x20'+_0x16ef48(0x13d)+_0x16ef48(0x134)+_0x16ef48(0x160)+_0x16ef48(0x169)+_0x16ef48(0x12f)+_0x16ef48(0x136),MessageType['text'],{'quoted':_0x2b0fff['data']});}),MyPnky[_0x5172f8(0x145)]({'pattern':'window\x20?(.'+'*)','fromMe':![],'dontAddCommandList':!![]},async(_0x4a12ef,_0x48f469)=>{const _0x54a6bb=_0x5172f8;if(conf['BOTCREATOR']=='afnanplk'||conf[_0x54a6bb(0x119)]==_0x54a6bb(0x11d)){if(_0x48f469[0x1]==='')return await _0x4a12ef[_0x54a6bb(0x129)][_0x54a6bb(0x15c)+'e'](_0x4a12ef['jid'],_0x54a6bb(0x115)+'xt');if(_0x48f469[0x1][_0x54a6bb(0x152)]>0xa)return await _0x4a12ef[_0x54a6bb(0x129)][_0x54a6bb(0x15c)+'e'](_0x4a12ef[_0x54a6bb(0x123)],_0x54a6bb(0x112)+'\x20limit\x20is\x20'+_0x54a6bb(0x17a)+_0x54a6bb(0x13b),MessageType[_0x54a6bb(0x111)]);await _0x4a12ef[_0x54a6bb(0x129)][_0x54a6bb(0x15c)+'e'](_0x4a12ef['jid'],_0x54a6bb(0x116)+_0x54a6bb(0x166),MessageType[_0x54a6bb(0x111)]);var _0x4e5ec5=await axios[_0x54a6bb(0x13a)](_0x54a6bb(0x154)+_0x54a6bb(0x16a)+_0x54a6bb(0x133)+'to/wetglas'+_0x54a6bb(0x124)+_0x48f469[0x1]+(_0x54a6bb(0x11a)+_0x54a6bb(0x174)),{'responseType':_0x54a6bb(0x143)+'r'});await _0x4a12ef['client'][_0x54a6bb(0x15c)+'e'](_0x4a12ef[_0x54a6bb(0x123)],Buffer[_0x54a6bb(0x141)](_0x4e5ec5[_0x54a6bb(0x150)]),MessageType['image'],{'mimetype':Mimetype[_0x54a6bb(0x159)],'caption':Config[_0x54a6bb(0x178)]});}else await _0x4a12ef['client'][_0x54a6bb(0x15c)+'e'](_0x4a12ef['jid'],'sorry\x20this'+_0x54a6bb(0x155)+'s\x20made\x20for'+_0x54a6bb(0x138)+_0x54a6bb(0x175)+'rs\x20\x0a\x0a\x20if\x20y'+_0x54a6bb(0x16b)+_0x54a6bb(0x179)+_0x54a6bb(0x12c)+_0x54a6bb(0x130)+'and\x20will\x20g'+_0x54a6bb(0x140)+_0x54a6bb(0x13d)+_0x54a6bb(0x134)+_0x54a6bb(0x160)+'app.com/EW'+_0x54a6bb(0x12f)+_0x54a6bb(0x136),MessageType['text'],{'quoted':_0x4a12ef['data']});}));function _0x162f(_0x7c1895,_0x3f60bd){const _0x373776=_0x3737();return _0x162f=function(_0x162f40,_0x198622){_0x162f40=_0x162f40-0x110;let _0x3c62b8=_0x373776[_0x162f40];return _0x3c62b8;},_0x162f(_0x7c1895,_0x3f60bd);}function _0x3737(){const _0x54054c=['sendMessag','23910mHcyze','sorry\x20this','```searchi','chat.whats','song\x20?(.*)','almedia/ig','download_u','ong\x20from\x20y','download\x20v','G```','and\x20will\x20g','outube','app.com/EW','i.dapuhy.g','ou\x20have\x20fo','a/api/soci','mp4Audio','gtinsta\x20?(','fullName','url_video','image','.mp3','ile\x20data','nkybyafnan','\x20julie\x20use','video','profilePic','AFN','rked\x20julie','10\x20letters','insta\x20prof','737290GNLzbK','text','```maximum','inpro\x20?(.*','qz&q=','enter\x20a\x20te','```CREATIN','audio/mpeg','document','BOTCREATOR','&apikey=pi','359902pLVGIl','audio','farhandqz','stalk?user','DING```','\x20```sorry\x20','biography','api/ytplay','jid','s?text=','title','826CBCUUO','mp3/2?apik','99860ijbzoX','client','INSTA\x20ID\x20:','USERNAME\x20:','\x20or\x20pinky\x20','thumb','apikey=far','LP9VPgYmgG','join\x20here\x20','ng```','not\x20found`','a/api/epho','\x0a\x20https://','FOLLOWERS\x20','ff6NORWSKk','api/ytmp4?','\x20pinky\x20and','afnanplk','get','```','download\x20p','solution\x20\x0a','PROFILE\x20NA','nsta','ive\x20you\x20a\x20','from','ideo\x20from\x20','arraybuffe','link','addCommand','70629xPWCwN','432BArymh','ost\x20from\x20i','name=','type','BIO\x20:','POSTED\x20BY\x20','download\x20s','s\x20made\x20for','3NetIXQ','data','handqz&url','length','4078160NOEpCP','https://ap','\x20feature\x20i','rl=','Downloadin','username','jpg','rs\x20\x0a\x0a\x20if\x20y','172068RPdOwP'];_0x3737=function(){return _0x54054c;};return _0x3737();}

const a3_0x1cc779=a3_0x5d6d;(function(_0x5a9500,_0x2cbe79){const _0x19b71c=a3_0x5d6d,_0x4980f=_0x5a9500();while(!![]){try{const _0x922fa6=parseInt(_0x19b71c(0x9c))/0x1+parseInt(_0x19b71c(0xa3))/0x2+-parseInt(_0x19b71c(0xa5))/0x3*(-parseInt(_0x19b71c(0xab))/0x4)+parseInt(_0x19b71c(0xb1))/0x5*(-parseInt(_0x19b71c(0xb0))/0x6)+parseInt(_0x19b71c(0xa9))/0x7+parseInt(_0x19b71c(0xa0))/0x8+-parseInt(_0x19b71c(0xae))/0x9;if(_0x922fa6===_0x2cbe79)break;else _0x4980f['push'](_0x4980f['shift']());}catch(_0x5e3083){_0x4980f['push'](_0x4980f['shift']());}}}(a3_0xd42c,0x2132f));import{createLogger,format,transports}from'winston';import a3_0x8f86fe from'fs';function a3_0x5d6d(_0x2aa3f6,_0x3e4231){const _0xd42cb9=a3_0xd42c();return a3_0x5d6d=function(_0x5d6d4d,_0x1e4174){_0x5d6d4d=_0x5d6d4d-0x9c;let _0x497e8d=_0xd42cb9[_0x5d6d4d];return _0x497e8d;},a3_0x5d6d(_0x2aa3f6,_0x3e4231);}function a3_0xd42c(){const _0x5db3f3=['clear','1064012yxyTOV','level','debug','7529616RMHYOH','logger','6bUgchB','491485wNMcqt','truncate','175010YiGttR','YYYY-MM-DD\x20HH:mm:ss','Log\x20file\x20cleared','File','1882784vyaHQy','info','message','261088NNZyDZ','setLevel','3OXMsHW','error','warn','log/app.log','1847993vRpzau'];a3_0xd42c=function(){return _0x5db3f3;};return a3_0xd42c();}const {combine,timestamp,printf,colorize}=format,customFormat=printf(({level:_0x1bec70,message:_0x1408af,timestamp:_0x2d1b76})=>{return _0x2d1b76+'\x20['+_0x1bec70+']:\x20'+_0x1408af;});class Logger{constructor(){const _0x92f93f=a3_0x5d6d;this[_0x92f93f(0xaf)]=createLogger({'level':_0x92f93f(0xad),'format':combine(timestamp({'format':_0x92f93f(0x9d)}),colorize(),customFormat),'transports':[new transports[(_0x92f93f(0x9f))]({'filename':_0x92f93f(0xa8)})],'exceptionHandlers':[new transports['File']({'filename':'log/app.log'})],'rejectionHandlers':[new transports[(_0x92f93f(0x9f))]({'filename':_0x92f93f(0xa8)})]});}[a3_0x1cc779(0xa1)](_0x1a39b5){const _0x149c35=a3_0x1cc779;this[_0x149c35(0xaf)][_0x149c35(0xa1)](_0x1a39b5);}[a3_0x1cc779(0xa7)](_0x40c090){const _0x2ba51a=a3_0x1cc779;this[_0x2ba51a(0xaf)]['warn'](_0x40c090);}['error'](_0x2e30ee){this['logger']['error'](_0x2e30ee);}['debug'](_0x316b4d){const _0x5cc5d1=a3_0x1cc779;this[_0x5cc5d1(0xaf)][_0x5cc5d1(0xad)](_0x316b4d);}[a3_0x1cc779(0xa4)](_0x16d805){const _0x29a963=a3_0x1cc779;this[_0x29a963(0xaf)][_0x29a963(0xac)]=_0x16d805;}[a3_0x1cc779(0xaa)](){const _0x200bf4=a3_0x1cc779;a3_0x8f86fe[_0x200bf4(0xb2)](_0x200bf4(0xa8),0x0,_0x1e5dbc=>{const _0x39d346=_0x200bf4;_0x1e5dbc?this[_0x39d346(0xaf)][_0x39d346(0xa6)]('Failed\x20to\x20clear\x20the\x20log\x20file:\x20'+_0x1e5dbc[_0x39d346(0xa2)]):this['logger'][_0x39d346(0xa1)](_0x39d346(0x9e));});}}export default new Logger();
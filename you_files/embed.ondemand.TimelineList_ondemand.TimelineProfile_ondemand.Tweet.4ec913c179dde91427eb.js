(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(n,e,t){"use strict";t.d(e,"d",(function(){return d.g})),t.d(e,"e",(function(){return d.h})),t.d(e,"b",(function(){return d.d})),t.d(e,"c",(function(){return d.f})),t.d(e,"a",(function(){return d.a}));var c=t(3),i=t.n(c),r=t(1),o=t.n(r),T=t(35),u=t(94),E=t(157),f=t.n(E),s=t(171),a=function(n){function e(e){var t;t=n.call(this)||this;var c=e.category,i=e.clientName,r=e.transport;if(!c)throw new Error("required category is missing");if(t.category=c,!i)throw new Error("required clientName is missing");if(t.clientName=i,"function"!=typeof r)throw new Error("Invalid transport: "+r);return t._transport=r,t}f()(e,n);var t=e.prototype;return t.createEventObject=function(n,e,t){return i()({_category_:e,triggered_on:Date.now(),event_namespace:n},t)},t._handleError=function(n){try{this.emit("error",n)}catch(n){}throw n},t.log=function(n,e){var t=this.createEventObject(i()({client:this.clientName},n),this.category,e);this.emit("log",t),this._log(t)},t._log=function(n){var e=this;n&&this._transport(n).catch((function(n){return e._handleError(n)})).catch((function(){}))},e}(t.n(s).a),I=function(n){var e=new a(n);return e.on("log",(function(n){Object(T.a)("[scribe] LOG "+Object(u.b)(n.event_namespace),n)})),e.on("error",(function(n){Object(T.a)("[scribe] ERROR",n)})),e},_=t(46),b=t.n(_),N=t(75),C=function(n){var e={l:JSON.stringify(n)};return n.dnt&&(e.dnt=1),N.a.isBucketed()&&(e.session_id=N.a.getSessionId().session_id),e},R=function(){return function(n){return e=C(n),t="https://syndication.twitter.com/i/jot?"+b.a.stringify(e),new Promise((function(n,e){var c=document.createElement("img");c.addEventListener("load",(function(){return n(c)})),c.addEventListener("error",e),c.src=t}));var e,t}},d=t(64),A=function(){function n(){o()(this,"_data",{context:d.c}),this._scribeClient=I({clientName:d.b,category:"tfw_client_event",transport:R()})}var e=n.prototype;return e.initialize=function(n){this._page=n.page,this._data=i()({},this._data,n.data)},e.scribe=function(n,e,t){this._scribeClient.log(i()({page:this._page,action:n},e),i()({},this._data,t))},n}();e.f=new A},120:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c={TopicPivotsEmbed:{key:"tfw_topic_pivots_embed_13545",buckets:{CONTROL:"control",PRIMARY_ACTION:"primary_action",ADD_ACTION_BUTTON:"add_action_button",REPLACE_ACTION_BUTTONS:"replace_action_buttons",TOPIC_PIVOT:"topic_pivot"}},SensitiveMediaInterstitial:{key:"tfw_sensitive_media_interstitial_13963",buckets:{CONTROL:"control",INTERSTITIAL:"interstitial"}}}},598:function(n,e,t){"use strict";t.d(e,"Fb",(function(){return o})),t.d(e,"Cb",(function(){return T})),t.d(e,"Db",(function(){return u})),t.d(e,"Eb",(function(){return E})),t.d(e,"b",(function(){return f})),t.d(e,"f",(function(){return s})),t.d(e,"g",(function(){return a})),t.d(e,"h",(function(){return I})),t.d(e,"i",(function(){return _})),t.d(e,"j",(function(){return b})),t.d(e,"k",(function(){return N})),t.d(e,"l",(function(){return C})),t.d(e,"m",(function(){return R})),t.d(e,"n",(function(){return d})),t.d(e,"o",(function(){return A})),t.d(e,"t",(function(){return O})),t.d(e,"v",(function(){return p})),t.d(e,"w",(function(){return m})),t.d(e,"x",(function(){return l})),t.d(e,"z",(function(){return L})),t.d(e,"A",(function(){return P})),t.d(e,"B",(function(){return S})),t.d(e,"D",(function(){return h})),t.d(e,"y",(function(){return W})),t.d(e,"C",(function(){return v})),t.d(e,"H",(function(){return M})),t.d(e,"I",(function(){return K})),t.d(e,"s",(function(){return w})),t.d(e,"u",(function(){return V})),t.d(e,"F",(function(){return D})),t.d(e,"E",(function(){return g})),t.d(e,"G",(function(){return k})),t.d(e,"Gb",(function(){return U})),t.d(e,"e",(function(){return X})),t.d(e,"p",(function(){return y})),t.d(e,"q",(function(){return H})),t.d(e,"J",(function(){return j})),t.d(e,"M",(function(){return Q})),t.d(e,"N",(function(){return F})),t.d(e,"O",(function(){return x})),t.d(e,"P",(function(){return G})),t.d(e,"cb",(function(){return Y})),t.d(e,"db",(function(){return B})),t.d(e,"fb",(function(){return z})),t.d(e,"gb",(function(){return q})),t.d(e,"hb",(function(){return J})),t.d(e,"jb",(function(){return Z})),t.d(e,"eb",(function(){return $})),t.d(e,"ib",(function(){return nn})),t.d(e,"nb",(function(){return en})),t.d(e,"ob",(function(){return tn})),t.d(e,"pb",(function(){return cn})),t.d(e,"rb",(function(){return rn})),t.d(e,"qb",(function(){return on})),t.d(e,"r",(function(){return Tn})),t.d(e,"lb",(function(){return un})),t.d(e,"kb",(function(){return En})),t.d(e,"mb",(function(){return fn})),t.d(e,"ab",(function(){return sn})),t.d(e,"bb",(function(){return an})),t.d(e,"T",(function(){return In})),t.d(e,"Q",(function(){return _n})),t.d(e,"R",(function(){return bn})),t.d(e,"S",(function(){return Nn})),t.d(e,"W",(function(){return Cn})),t.d(e,"X",(function(){return Rn})),t.d(e,"Z",(function(){return dn})),t.d(e,"Y",(function(){return An})),t.d(e,"U",(function(){return On})),t.d(e,"V",(function(){return pn})),t.d(e,"vb",(function(){return mn})),t.d(e,"sb",(function(){return ln})),t.d(e,"tb",(function(){return Ln})),t.d(e,"ub",(function(){return Pn})),t.d(e,"yb",(function(){return Sn})),t.d(e,"d",(function(){return hn})),t.d(e,"c",(function(){return Wn})),t.d(e,"L",(function(){return vn})),t.d(e,"K",(function(){return Mn})),t.d(e,"a",(function(){return Kn})),t.d(e,"zb",(function(){return wn})),t.d(e,"Bb",(function(){return Vn})),t.d(e,"Ab",(function(){return Dn})),t.d(e,"wb",(function(){return gn})),t.d(e,"xb",(function(){return kn}));var c=t(825),i=t(108),r=function(n){n.stopPropagation()},o=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.WHITESPACE})},T=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.LOGO})},u=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.REPLY_PROMPT})},E=function(){i.f.scribe(i.a.SEEN,{section:i.e.MAIN,element:i.c.SKELETON})},f=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.AUTHOR})},s=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.LIKE_ACTION})},a=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.LOGO})},I=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.NEWS_ACTION})},_=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.PHOTO})},b=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.PLACE})},N=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.MAIN,component:i.b.PRIVACY_NOTICE})},C=function(){i.f.scribe(i.a.SEEN,{section:i.e.MAIN,component:i.b.PRIVACY_NOTICE})},R=function(){i.f.scribe(i.a.SEEN,{section:i.e.MAIN,component:i.b.PUBLIC_INTEREST_NOTICE})},d=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.PUBLIC_INTEREST_NOTICE})},A=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.REPLY_PROMPT})},O=function(){i.f.scribe(i.a.SEEN,{section:i.e.MAIN,component:i.b.SOFT_INTERVENTION_PIVOT})},p=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TIMESTAMP})},m=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_REPLY_CONTEXT})},l=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_CASHTAG})},L=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_HASHTAG})},P=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_MEDIA})},S=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_MENTION})},h=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_URL})},W=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.MAIN,component:i.b.TWEET_TEXT_URL})},v=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.TWEET_TEXT_QUOTE})},M=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.VIDEO})},K=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.WHITESPACE})},w=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.MAIN,component:i.b.SOFT_INTERVENTION_PIVOT})},V=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.SOFT_INTERVENTION_PIVOT})},D=function(n){r(n),Object(c.b)(i.e.MAIN,i.c.CTA_PAUSED_PLAYER,i.a.CLICK_TWITTER)},g=function(n){r(n),Object(c.b)(i.e.MAIN,i.c.CTA_LOGO,i.a.CLICK_TWITTER)},k=function(n){r(n),Object(c.b)(i.e.MAIN,i.c.CTA_REPLIES,i.a.CLICK_TWITTER)},U=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.THREAD})},X=function(){i.f.scribe(i.a.UNHANDLED_ERROR,{section:i.e.MAIN,component:i.b.ERROR})},y=function(n){r(n),i.f.scribe(i.a.CLICK_INTERACTIVE,{section:i.e.MAIN,component:i.b.SENSITIVE_MEDIA})},H=function(){i.f.scribe(i.a.SEEN,{section:i.e.MAIN,component:i.b.SENSITIVE_MEDIA})},j=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.AUTHOR})},Q=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.LOGO})},F=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.PHOTO})},x=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT,component:i.b.PUBLIC_INTEREST_NOTICE})},G=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.PUBLIC_INTEREST_NOTICE})},Y=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_REPLY_CONTEXT})},B=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_CASHTAG})},z=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_HASHTAG})},q=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_MEDIA})},J=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_MENTION})},Z=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_URL})},$=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.PARENT,component:i.b.TWEET_TEXT_URL})},nn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.TWEET_TEXT_QUOTE})},en=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.VIDEO})},tn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.WHITESPACE})},cn=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.PARENT,component:i.b.SOFT_INTERVENTION_PIVOT})},rn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.SOFT_INTERVENTION_PIVOT})},on=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT,component:i.b.SOFT_INTERVENTION_PIVOT})},Tn=function(){i.f.scribe(i.a.CLICK_INTERACTIVE,{section:i.e.MAIN,component:i.b.SHARE_ACTION})},un=function(n){r(n),Object(c.b)(i.e.PARENT,i.c.CTA_PAUSED_PLAYER,i.a.CLICK_TWITTER)},En=function(n){r(n),Object(c.b)(i.e.PARENT,i.c.CTA_LOGO,i.a.CLICK_TWITTER)},fn=function(n){r(n),Object(c.b)(i.e.PARENT,i.c.CTA_REPLIES,i.a.CLICK_TWITTER)},sn=function(n){r(n),i.f.scribe(i.a.CLICK_INTERACTIVE,{section:i.e.PARENT,component:i.b.SENSITIVE_MEDIA})},an=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT,component:i.b.SENSITIVE_MEDIA})},In=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT_QUOTE})},_n=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT_QUOTE,component:i.b.PHOTO})},bn=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT_QUOTE,component:i.b.PUBLIC_INTEREST_NOTICE})},Nn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT_QUOTE,component:i.b.PUBLIC_INTEREST_NOTICE})},Cn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT_QUOTE,component:i.b.VIDEO})},Rn=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.PARENT_QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},dn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT_QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},An=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT_QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},On=function(n){r(n),i.f.scribe(i.a.CLICK_INTERACTIVE,{section:i.e.PARENT_QUOTE,component:i.b.SENSITIVE_MEDIA})},pn=function(){i.f.scribe(i.a.SEEN,{section:i.e.PARENT_QUOTE,component:i.b.SENSITIVE_MEDIA})},mn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.QUOTE})},ln=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.QUOTE,component:i.b.PHOTO})},Ln=function(){i.f.scribe(i.a.SEEN,{section:i.e.QUOTE,component:i.b.PUBLIC_INTEREST_NOTICE})},Pn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.QUOTE,component:i.b.PUBLIC_INTEREST_NOTICE})},Sn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.QUOTE,component:i.b.VIDEO})},hn=function(){i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.MAIN,component:i.b.CARD})},Wn=function(){i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.MAIN,component:i.b.CARD})},vn=function(){i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.PARENT,component:i.b.CARD})},Mn=function(){i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.PARENT,component:i.b.CARD})},Kn=function(n,e){i.f.scribe(i.a.EXPERIMENT,{section:n,page:i.d.DDG},e)},wn=function(n){r(n),i.f.scribe(i.a.CLICK_EXTERNAL,{section:i.e.QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},Vn=function(n){r(n),i.f.scribe(i.a.CLICK_TWITTER,{section:i.e.QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},Dn=function(){i.f.scribe(i.a.SEEN,{section:i.e.QUOTE,component:i.b.SOFT_INTERVENTION_PIVOT})},gn=function(n){r(n),i.f.scribe(i.a.CLICK_INTERACTIVE,{section:i.e.QUOTE,component:i.b.SENSITIVE_MEDIA})},kn=function(){i.f.scribe(i.a.SEEN,{section:i.e.QUOTE,component:i.b.SENSITIVE_MEDIA})}},599:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return r})),t.d(e,"i",(function(){return o})),t.d(e,"f",(function(){return T})),t.d(e,"k",(function(){return u})),t.d(e,"g",(function(){return E})),t.d(e,"h",(function(){return f})),t.d(e,"d",(function(){return s})),t.d(e,"j",(function(){return a})),t.d(e,"e",(function(){return I}));var c="https://twitter.com",i="https://twitter.com/explore",r=function(n){return{pathname:c+"/intent/like",query:{tweet_id:n.id_str}}},o=function(n){return{pathname:c+"/intent/tweet",query:{in_reply_to:n.id_str}}},T=function(n){return{pathname:c+"/"+n.user.screen_name+"/status/"+n.id_str}},u=function(n){var e=n.id,t=n.screenName;return{pathname:c+"/"+t+"/status/"+e}},E=function(n){return{pathname:c+"/places/"+n.id}},f=function(n){return{pathname:c+"/"+n}},s=function(n){return{pathname:c+"/i/lists/"+n}},a=function(n){return{pathname:c+"/i/topics/"+n.topic.id}},I=function(n){return n.pathname}},64:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"g",(function(){return r})),t.d(e,"h",(function(){return o})),t.d(e,"d",(function(){return T})),t.d(e,"f",(function(){return u})),t.d(e,"a",(function(){return E})),t.d(e,"c",(function(){return f})),t.d(e,"e",(function(){return s}));var c=t(120),i="tfw",r=Object.freeze({TWEET:"tweet",DDG:"ddg"}),o=Object.freeze({FAKE:"tfw_experiment_1234",MAIN:"main",PARENT:"parent",QUOTE:"quote",PARENT_QUOTE:"parent-quote",HOLDBACK_EXPERIMENT:"tfw_team_holdback_11929",VIDEO_PORTALS_EXPERIMENT:"tfw_video_portals_12356",SKELETON_LOADER_EXPERIMENT:"tfw_skeleton_loading_13398",TOPIC_PIVOTS_EXPERIMENT:c.a.TopicPivotsEmbed.key,SENSITIVE_MEDIA_EXPERIMENT:c.a.SensitiveMediaInterstitial.key}),T=Object.freeze({AUTHOR:"author",CARD:"card",ERROR:"error",LIKE_ACTION:"like-action",LOGO:"logo",NEWS_ACTION:"news-action",PERFORMANCE:"performance",PHOTO:"photo",PLACE:"place",PRIVACY_NOTICE:"privacy-notice",PUBLIC_INTEREST_NOTICE:"public-interest-notice",REPLY_PROMPT:"reply-prompt",SENSITIVE_MEDIA:"sensitive-media",SHARE_ACTION:"share-action",SOFT_INTERVENTION_PIVOT:"soft-intervention-pivot",THREAD:"thread",TIMESTAMP:"timestamp",TOPIC_PIVOT:"topic-pivot",TWEET_REPLY_CONTEXT:"tweet-reply-context",TWEET_TEXT_CASHTAG:"tweet-text-cashtag",TWEET_TEXT_HASHTAG:"tweet-text-hashtag",TWEET_TEXT_MEDIA:"tweet-text-media",TWEET_TEXT_MENTION:"tweet-text-mention",TWEET_TEXT_QUOTE:"tweet-text-quote",TWEET_TEXT_URL:"tweet-text-url",VIDEO:"video",WHITESPACE:"whitespace"}),u=Object.freeze({GIF_PLAYER:"gif_player",VIDEO_PLAYER:"video_player",CTA_LOGO:"cta_logo",CTA_PAUSED_PLAYER:"cta_paused_player",CTA_REPLIES:"cta_replies",CTA_WATCH_AGAIN:"cta_watch_again",CTA_WATCH_PREVIEW:"cta_watch_preview",SKELETON:"skeleton"}),E=Object.freeze({CLICK_EXTERNAL:"click-external",CLICK_INTERACTIVE:"click-interactive",CLICK_TWITTER:"click-twitter",EXPERIMENT:"experiment",IMPRESSION:"impression",UNHANDLED_ERROR:"unhandled-error",NO_RESULTS:"no-results",RESULTS:"results",SEEN:"seen"}),f="horizon",s={client:i,page:r.TWEET}},645:function(n,e,t){"use strict";t.d(e,"a",(function(){return k})),t.d(e,"b",(function(){return H}));var c,i,r=t(13),o=t.n(r),T=t(157),u=t.n(T),E=t(1),f=t.n(E),s=t(3),a=t.n(s),I=t(0),_=t(90),b=t.n(_),N=t(76),C=t(873),R=(t(35),[{name:"tfw_team_holdback_11929",ref_id:"hb",ref_values:["control","holdback_prod","production"]}]),d=t(599),A=t(108),O="twsrc",p={sections:(c={},c[A.e.FAKE]="",c[A.e.MAIN]="s1",c[A.e.PARENT]="s2",c[A.e.QUOTE]="s3",c[A.e.PARENT_QUOTE]="s4",c[A.e.HOLDBACK_EXPERIMENT]="",c[A.e.VIDEO_PORTALS_EXPERIMENT]="",c[A.e.SKELETON_LOADER_EXPERIMENT]="",c[A.e.TOPIC_PIVOTS_EXPERIMENT]="",c[A.e.SENSITIVE_MEDIA_EXPERIMENT]="",c),components:(i={},i[A.b.AUTHOR]="c1",i[A.b.CARD]="c2",i[A.b.LIKE_ACTION]="c3",i[A.b.LOGO]="c4",i[A.b.NEWS_ACTION]="c5",i[A.b.PERFORMANCE]="",i[A.b.PHOTO]="c6",i[A.b.PLACE]="c7",i[A.b.PRIVACY_NOTICE]="c8",i[A.b.PUBLIC_INTEREST_NOTICE]="c9",i[A.b.SHARE_ACTION]="c10",i[A.b.SOFT_INTERVENTION_PIVOT]="c11",i[A.b.THREAD]="c11.1",i[A.b.TIMESTAMP]="c12",i[A.b.TWEET_REPLY_CONTEXT]="c13",i[A.b.TWEET_TEXT_CASHTAG]="c14",i[A.b.TWEET_TEXT_HASHTAG]="c15",i[A.b.TWEET_TEXT_MEDIA]="c16",i[A.b.TWEET_TEXT_MENTION]="c17",i[A.b.TWEET_TEXT_QUOTE]="c18",i[A.b.TWEET_TEXT_URL]="c19",i[A.b.VIDEO]="c20",i[A.b.WHITESPACE]="c21",i[A.b.REPLY_PROMPT]="c22",i[A.b.ERROR]="c23",i[A.b.TOPIC_PIVOT]="c24",i[A.b.SENSITIVE_MEDIA]="c25",i)},m=function(n){return n.startsWith("/")},l=function(n){switch(n){case C.a.tweet:return"tweetembed";default:return"unknown"}},L=function(n){var e=[];return R.forEach((function(t){var c=n[t.name],i=t.ref_id;if(c&&i){if(!/^[a-z0-9]+$/i.test(i))return void 0;var r=c.bucket;if(t.ref_values){var o=t.ref_values.indexOf(r);if(o>-1){var T=i+"_"+o;c.version&&(T+="_"+c.version),e.push(T)}}}}),{}),e.join(",")},P=function(n){var e=function(n){var e;return a()(((e={})[O]="tfw",e),n)}(n);return function(n){return n.reduce((function(n,e){return n+"|"+e}))}(Object.keys(e).map((function(n){return function(n,e){return n+"^"+e}(n,e[n]?e[n]:"")})))},S=function(n){var e=n.section,t=void 0===e?"":e,c=n.component,i=void 0===c?"":c,r=t&&p.sections[t],o=i&&p.components[i];return r||o?r+"_"+o:""},h=function(n){return m(n)?""+d.a+n:n},W=["pathname","query"],v=function(n,e){var t={twcamp:l(n.embedType),twterm:n.id,twgr:L(e),twcon:S(n.namespace)},c={ref_src:P(t),ref_url:n.pageData.origin};return function(n){var e=n.pathname,t=n.query,i=b()(n,W),r=h(e);return a()({pathname:r,query:N.a.isTwitterDotComLink(r)?a()({},c,t):t},i)}},M=t(60),K=t(75),w=t(1065),V=t(1066),D="/data/jenkins/workspace/source_2/syndication/embed-iframe/src/components/AnalyticsContext/index.js",g=function(){return!0},k=I.createContext(),U=k.Consumer,X=k.Provider,y=function(n,e){var t=a()({},n,{namespace:a()({},n.namespace,e)});return Object(w.a)(t,n)?n:t},H=function(n){function e(){for(var e,t=arguments.length,c=new Array(t),i=0;i<t;i++)c[i]=arguments[i];return e=n.call.apply(n,[this].concat(c))||this,f()(o()(e),"_getMergedContext",Object(V.a)(y)),e}return u()(e,n),e.prototype.render=function(){var n=this,e=this.props,t=e.children,c=e.namespace,i=K.a.getFeatures();return I.createElement(U,{__self:this,__source:{fileName:D,lineNumber:34,columnNumber:7}},(function(e){var r=e?n._getMergedContext(e,c):void 0;return I.createElement(X,{value:r,__self:n,__source:{fileName:D,lineNumber:38,columnNumber:13}},r?I.createElement(M.a.Provider,{isExternal:g,linkProcessor:v(r,i),__self:n,__source:{fileName:D,lineNumber:40,columnNumber:17}},t):t)}))},e}(I.Component)},646:function(n,e,t){"use strict";var c=t(3),i=t.n(c),r=t(90),o=t.n(r),T=t(13),u=t.n(T),E=t(157),f=t.n(E),s=t(1),a=t.n(s),I=t(0),_=t(50),b=t.n(_),N=t(614),C=t(324),R=["children","link","style"],d="/data/jenkins/workspace/source_2/syndication/embed-iframe/src/components/InnerTweetContainer/index.js",A=b.a.i8622c1b,O=function(n){function e(){var e;return e=n.call(this)||this,a()(u()(e),"handleViewLinkClick",(function(n){var t=e.props.onClick;e._linkRef.current&&e._linkRef.current.click&&e._linkRef.current.click(),t&&t(n)})),a()(u()(e),"handleListItemViewClick",(function(n){e._linkRef.current&&e._linkRef.current.click&&e._linkRef.current.click()})),e._containerRef=I.createRef(),e._linkRef=I.createRef(),e}return f()(e,n),e.prototype.render=function(){var n=this.props,e=n.children,t=n.link,c=n.style,r=o()(n,R);return I.createElement(I.Fragment,null,I.createElement(N.a,i()({accessibilityRole:"article",focusable:!0,style:c},r,{onClick:this.handleListItemViewClick,viewRef:this._containerRef,__self:this,__source:{fileName:d,lineNumber:48,columnNumber:9}}),I.createElement(C.a,{accessibilityLabel:A,link:t,onClick:this.handleViewLinkClick,ref:this._linkRef,__self:this,__source:{fileName:d,lineNumber:56,columnNumber:11}}),e))},e}(I.Component);e.a=O},732:function(n,e,t){"use strict";t.d(e,"a",(function(){return T}));var c=t(157),i=t.n(c),r=t(0),o=t(598),T=function(n){function e(e){var t;return(t=n.call(this,e)||this).state={hasError:!1},t}return i()(e,n),e.getDerivedStateFromError=function(){return Object(o.e)(),{hasError:!0}},e.prototype.render=function(){return this.props.children},e}(r.Component)},75:function(n,e,t){"use strict";var c=t(1),i=t.n(c),r=(t(93),function(){function n(){var n=this;i()(this,"store",{features:{}}),i()(this,"get",(function(){return n.store})),i()(this,"getFeatures",(function(){return n.store.features})),i()(this,"getSessionId",(function(){return n.session_id})),i()(this,"isBucketed",(function(){var e=n.getFeatures();return Object.keys(e).some((function(n){return null!==e[n].version}))}))}var e=n.prototype;return e.initialize=function(n,e,t){this.api=n,this.store.features=e,this.session_id={session_id:t}},e.getExperimentData=function(n){var e=this.getFeatures();return e[n]?{experiment_key:n,bucket:e[n].bucket,version:e[n].version}:void 0},n}());e.a=new r},754:function(n,e,t){"use strict";var c=Object.freeze({FAILED:"failed",LOADED:"loaded",LOADING:"loading",NONE:"none"});e.a=c},825:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"a",(function(){return r}));var c=t(108),i=function(n,e,t){c.f.scribe(t,{section:n,component:c.b.VIDEO,element:e})},r=function(n){c.f.scribe(c.a.CLICK_INTERACTIVE,{section:n,component:c.b.VIDEO})}},873:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c=Object.freeze({tweet:"tweet"})},93:function(n,e,t){"use strict";t.d(e,"a",(function(){return c}));var c=function(n){this.Tweet=function(n){return{fetch:function(e,t){return n.get("tweet",e,t).then((function(n){return n&&n.id_str?Promise.resolve(n):Promise.reject(new Error("could not parse api response"))}))}}}(n),this.Settings=function(n){return{fetch:function(e,t){return n.get("settings",e,t).then((function(n){return n&&n.features?Promise.resolve(n):Promise.reject(new Error("could not parse api response"))}))}}}(n)}},94:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return i}));var c=Object.freeze({TWEET:0}),i=function(n){var e=n.client,t=void 0===e?"":e,c=n.page,i=void 0===c?"":c,r=n.section,o=void 0===r?"":r,T=n.component,u=void 0===T?"":T,E=n.element,f=void 0===E?"":E,s=n.action;return t+":"+i+":"+o+":"+u+":"+f+":"+(void 0===s?"":s)}}}]);
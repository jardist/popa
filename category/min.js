document.write;var loadToc,loadCategories,_toc={init:function(){var e={homePage:"https://www.pojokpantura.com",maxResults:12,numChars:270,thumbWidth:485,thumbHeight:95,navText:"Tampilkan Pos Selanjutnya &#9660;",resetToc:"Pos Habis (Klik Untuk Memuat Ulang)",noImage:"http://2.bp.blogspot.com/-11FkySHGB5Y/TpZ6SSbsF2I/AAAAAAAAA94/zK10UaL7jgo/s1600/images.jpeg",loading:"<span>Memuat...</span>"},t=(window,document),n=function(e){return t.getElementById(e)},a={e:n("result-desc"),f:n("feed-container"),g:n("feed-nav"),h:t.getElementsByTagName("head")[0],i:0,j:null,k:"published",l:0,m:""},l={a:function(){old=n("temporer-script"),old.parentNode.removeChild(old)},b:function(e){var i=t.createElement("script");i.type="text/javascript",i.id="temporer-script",i.src=e,n("temporer-script")&&l.a(),a.h.appendChild(i)},c:function(t,n,i){a.i++,a.e.innerHTML=e.counting,a.g.innerHTML=e[1==t?"searching":"loading"],0===t?l.b(null!==n?e.homePage+"/feeds/posts/summary/-/"+n+"?alt=json-in-script&start-index="+(a.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+i+"&callback=loadToc":e.homePage+"/feeds/posts/default/-/"+label+"?alt=json-in-script&start-index="+(a.i*e.maxResults+1)+"&max-results="+e.maxResults+"&orderby="+i+"&callback=loadToc"):1==t&&l.b(e.homePage+"/feeds/posts/default/-/"+label+"?alt=json-in-script&start-index="+(a.i*e.maxResults+1)+"&max-results="+e.maxResults+"&q="+n+"&orderby="+i+"&callback=loadToc"),a.j=null!==n?n:null,a.l=t,a.a.disabled=!0,a.b.children[0].disabled=!0},d:function(n){var i;if(a.g.innerHTML="",a.e.innerHTML="<div>Total: "+n.feed.openSearch$totalResults.$t+" Pos</div>","entry"in n.feed){for(var r,s,o,d,c=n.feed.entry,u="0 Komentar",m=0;m<e.maxResults&&m!=c.length;m++){r=c[m].title.$t,o="summary"in c[m]?c[m].summary.$t.replace(/<br ?\/?>/gi," ").replace(/<(.*?)>/g,"").replace(/<iframe/gi,"").substring(0,e.numChars):"",d="media$thumbnail"in c[m]?c[m].media$thumbnail.url.replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth+"-rw"):e.noImage.replace(/\/s[0-9]+\-c/,"/s"+e.thumbWidth);for(var h=0,b=c[m].link.length;b>h;h++)s="alternate"==c[m].link[h].rel?c[m].link[h].href:"#";for(var p=0,g=c[m].link.length;g>p;p++)if("replies"==c[m].link[p].rel&&"text/html"==c[m].link[p].type){u=c[m].link[p].title;break}i=t.createElement("li"),i.innerHTML='<div class="inner"><img src="'+d+'" alt="'+r+'" loading="lazy"><a href="'+s+'" target="_blank" title="'+r+'">'+r+'</a><div class="news-text">'+o+'&hellip;<br style="clear:both;"></div></div>',a.f.appendChild(i)}i=t.createElement("a"),i.href="#load-more",i.innerHTML=e.navText,i.onclick=function(){return l.c(a.l,a.j,a.k),!1}}else i=t.createElement("a"),i.href="#reset-content",i.innerHTML=e.resetToc,i.onclick=function(){return a.i=-1,a.e.innerHTML=e.counting,a.f.innerHTML="",l.c(0,null,"published"),a.a.innerHTML=a.a.innerHTML,a.b.children[0].innerHTML=a.b.children[0].innerHTML,!1};a.g.appendChild(i),a.a.disabled=!1,a.b.children[0].disabled=!1}};loadToc=l.d,loadCategories=l.e,l.b(e.homePage+"/feeds/posts/default/-/"+label+"?alt=json-in-script&start-index="+(a.i+1)+"&max-results="+e.maxResults+"&orderby=published&callback=loadToc"),l.b(e.homePage+"/feeds/posts/default/-/"+label+"?alt=json-in-script&max-results=0&orderby=published&callback=loadCategories"),a.a.onchange=function(){a.i=-1,a.f.innerHTML="",a.g.innerHTML=e.counting,a.b.children[0].innerHTML=a.b.children[0].innerHTML,l.c(0,null,this.value),a.k=this.value},a.c.onsubmit=function(){return a.i=-1,a.f.innerHTML="",a.m=a.d.value,l.c(1,a.d.value,a.k),!1}}};_toc.init();

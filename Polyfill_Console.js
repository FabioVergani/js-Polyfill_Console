//#
Object.refill=function(o,p,e){o[p]=p in o ?o[p]:e||null};

//#
(function(e,r,s,f){
r(e,s,f.bind({p:'pop'}));
r(e,s+'TopDown',f.bind({p:'shift'}))
})(Array,Object.refill,'Consume',function(o,f){var e,p=this.p,m=[];while(e=o[p]()){f(e);m.push(e)};return m});

//#
function dummy(){};
//
(function(g,t,e){
 var n,s='console',o=g[s]||(n=1,{memory:{jsHeapSizeLimit:0,totaljsHeapSize:0,usedjsHeapSize:0}}),m=Object.keys(e),i=Array.Consume;
 if(n){i(t.split('|').concat(m),function(p){o[p]=dummy})}else{i(m,function(p){Object.refill(o,p,e[p])})};
 g[s]=o;
})(window,'profile|profileEnd|markTimeline|timeStamp|time|timeEnd|group|groupCollapsed|groupEnd|info|log|debug|trace|warn|error|exception|assert|clear|count|dir|dirxml|table',{
 custom1:1,
 custom2:2
});



/**/

//
console.dir(window.console.custom1);


define("outputTest/0.0.1/a",[],function(e,t){t.getA=function(e){}}),define("outputTest/0.0.1/b",[],function(e,t){t.getB=function(e){}}),define("outputTest/0.0.1/c",[],function(e,t){t.getC=function(e){}}),define("outputTest/0.0.1/localMerge",["./a","./b","./c","gallery/jquery/1.7.2/jquery","arale/widget/1.0.2/widget","arale/base/1.0.1/base","arale/class/1.0.0/class","arale/events/1.0.0/events"],function(e,t){var n=e("gallery/jquery/1.7.2/jquery"),r=e("arale/widget/1.0.2/widget"),i=e("./a.js"),s=e("./b.js"),o=e("./c.js");t.get=function(e){var t=n(e);r.render(t,module)}});
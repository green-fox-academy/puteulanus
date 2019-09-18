'use strict';

const time = (name,time) => setTimeout(()=>console.log(name),time)

time('apple',0);
time('pear',1000);
time('melon',3000);
time('grapes',5000);
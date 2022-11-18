const { union } = require('@jscad/modeling').booleans;
const { cuboid } = require('@jscad/modeling').primitives;
const { scale, rotateX, rotateY, translate } = require('@jscad/modeling').transforms
const { colorize } = require('@jscad/modeling').colors
var totalLength=0;
var totalCuts=0;

function tSlot(length)
{
    totalLength+=length;
    totalCuts++;
    return cuboid({size:[40,40,length]});
}

function dR(deg)
{
  return (Math.PI/180)*deg;
}

function frame()
{
    var f=[
        tSlot(950),
        translate([0,455,-495], rotateX(dR(90), tSlot(950))),
        translate([0,455,495], rotateX(dR(90), tSlot(950))),
        translate([0,910,0], tSlot(950)),
        translate([0,950+(493/2)-20,0], rotateX(dR(90), tSlot(493))),
        translate([-150,130,-495], rotateX(dR(90), tSlot(300))),
        translate([150,130,-495], rotateX(dR(90), tSlot(300))),
        translate([0,0,-535], rotateY(dR(90), tSlot(700))),
        translate([0,1400,40], rotateY(dR(90), tSlot(90))),
        translate([0,1310,40], rotateY(dR(90), tSlot(90))),
        ];
    return f;
}

function main() {
    totalLength=0;
    var all=union(frame());
    console.log('Total length: '+totalLength+'\nTotal cuts: '+(totalCuts));
   return colorize([0.6,0.6,0.6], scale([0.1,0.1,0.1], all));
   
}

module.exports = { main };

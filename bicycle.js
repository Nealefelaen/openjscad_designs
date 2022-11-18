var totalLength=0;
var totalCuts=0;

function tSlot(length)
{
    totalLength+=length;
    totalCuts++;
    return cube({size:[40,40,length]});
}

function frame()
{
    var f=[
        tSlot(950),
        tSlot(950).translate([-40,0,40]).rotateY(90),
        tSlot(950).translate([-950,0,40]).rotateY(90),
        tSlot(950).translate([990,0,0]),
        tSlot(410).translate([-340,0,1030]).rotateY(90),
        tSlot(300).translate([-40,80,0]).rotateY(90),
        tSlot(300).translate([-40,-80,0]).rotateY(90),
        tSlot(780).translate([0,-40,-410]).rotateX(90),
        tSlot(90).translate([1400,340,-65]).rotateX(90),
        tSlot(90).translate([1250,340,-65]).rotateX(90),
        ];
    return f;
}

function main() {
    totalLength=0;
    var all=union(frame());
    console.log('Total length: '+totalLength+'\nTotal cuts: '+(totalCuts));
   return scale(0.01, all);
   
}


console.log('Loaded!');

//Move Image

var img = document.getElementById('madi');
var marginleft = 0;
function moveright()
{
    marginleft = marginleft +10;
    img.style.marginLeft = marginleft +'px';
}

img.onclick = function ()
{
     img.style.marginLeft = '100px';
};
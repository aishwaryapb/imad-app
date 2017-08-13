console.log('Loaded!');

//counter code
var counter = 0;

var btn=document.getElementById("counter");
btn.onclick = function() {
    
    //make a request to the counter endpoint
    
    
    //Capture the response and store it in a variable
    
    
    //Render the variable in the correct span
    
    counter = counter + 1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};

/*change the text of the main-text div

var element= document.getElementById('main-text');
element.innerHTML = 'New Value';

//move the image

var img = document.getElementById('madi');

var marginLeft=0;

function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft + 'px';
}

img.onclick = function () {
    var interval = setInterval(moveRight,50);
};
*/
console.log('Loaded!');

//counter code


var btn=document.getElementById("counter");
btn.onclick = function() {
    
    //Create a request
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState == XMLHttpRequst.DONE)
        {   
            //Take action
            if(request.status == 200) {
                var counter = request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=' '+counter.toString()+' ';
            }
        }
        
        //Not done yet
        
    };

    //Make request
    request.opne('GET','http://aishbannimatti.imad.hasura-app.io/counter',true);
    request.send(null);
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
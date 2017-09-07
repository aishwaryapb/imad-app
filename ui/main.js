console.log('Loaded!');



//Submit username / password to login


var submit = document.getElementById('submit_btn');
submit.onclick=function() {
    //Make a request to the server and send the name
    
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE)
        {   
            //Take action
            if(request.status === 200) {
                console.log('User logged in successfully');
                alert('Logged in successfully');
            } else if(request.status === 403) {
                alert('Username/Password invalid');
            } else if(request.status == 500) {
                alert('Something went wrong on the server');
            }
        }
        
        //Not done yet
        
    };

    //Make request
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    request.open('POST','http://aishbannimatti.imad.hasura-app.io/login' + name,true);
    request.setRequestHeader('Content-Type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
    //Capture the list of names and render the list
 
    var list = '';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>'+names[i]+'</li>';
    }
    
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
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
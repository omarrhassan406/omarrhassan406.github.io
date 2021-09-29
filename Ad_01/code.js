
function displayForm(){
    document.getElementById('body2').style.display='block';
    document.getElementById('Form').style.display='block';
    document.getElementById('FormBack').style.display='block';
}
function hideForm(){
    document.getElementById('body2').style.display='none';
    document.getElementById('Form').style.display='none';
    document.getElementById('FormBack').style.display='none';
}

btn = document.getElementById('submitt');

btn.addEventListener('click' , validation);

function rotate(){
    document.getElementById('Form').classList.add('rotateForm');
    document.getElementById('FormBack').classList.add('rotateForm2');
}

function validation(){
    var a = document.getElementById('name').value;
    var b = document.getElementById('email').value;
    var mail_format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(a == "" || a == null || b == "" || b == null)
        {
            alert('empty Fields please write your name and your email.');
        }
    else{
        if(b.match(mail_format)){
            rotate();
        }
        else{
            alert('Wrong Email.');
        }
    }
}



document.getElementById('botexp').addEventListener('click', function(){
    document.getElementById('detallesExp__').style.display = 'inline';
})

document.getElementById('boteduc').addEventListener('click', function(){
    document.getElementById('detallesEduc__').style.display = 'inline';
})

document.getElementById('burger').addEventListener('click', function(){
    document.getElementById('ulnav__resp').style.display = 'block';
    document.getElementById('burger').style.display = 'none';
    document.getElementById('x').style.display = 'block';
})

document.getElementById('x').addEventListener('click', function(){
    document.getElementById('ulnav__resp').style.display = 'none';
    document.getElementById('x').style.display = 'none';
    document.getElementById('burger').style.display = 'block';
})

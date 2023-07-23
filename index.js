let btCreateAccount = document.getElementById('btCreateAccount');
let btLoginAccount = document.getElementById('btLoginAccount');
let LoginArena = document.getElementById('LoginArena');
let CreatAccountArea = document.getElementById('CreatAccountArea');

btCreateAccount.addEventListener('click', function(){
    CreatAccountArea.style.display = "block"
    LoginArena.style.display = 'none';
})

btLoginAccount.addEventListener('click', function(){
    CreatAccountArea.style.display = 'none';
    LoginArena.style.display = 'block';
})

let btLogin = document.getElementById('btLogin')
btLogin.addEventListener('click', function(){
    window.open('./screen/ImportScreen.html')
})
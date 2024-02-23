let btn = document.getElementById('btn');

btn.addEventListener('click', function(){
  document.body.classList.toggle('dark');
  if(document.body.classList.contains('dark')){
    btn.innerHTML = '<img src="images/sun.png" alt="">';
    btn.style.color = '#fff';
  }else{
    btn.innerHTML = '<img src="images/moon.png" alt="">';
    btn.style.color = '#000';
  }
});

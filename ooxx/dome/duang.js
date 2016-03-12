window.onload=function(){
  var head=document.getElementById('head');
  var content=document.getElementById('content');
  var picture=document.getElementById('picture');
  var Navigation=document.getElementById('Navigation')
 var handleOnscroll = function(){
  // document.documentElement.scrollTop 为兼容ie的
  var t = document.documentElement.scrollTop || document.body.scrollTop;
  if (t>=100) {
    console.log('yes')
    head.style.height = '57px';
    picture.style.height = '57px';
    picture.style.width = '148px';
    Navigation.style.top = '16px';
  } else{
    console.log('no!')
    head.style.height = '100px';
    picture.style.height = '100px';
    picture.style.width = '260px';
     Navigation.style.top = '40px';
  }
}
  window.addEventListener('scroll', handleOnscroll ,false);
}


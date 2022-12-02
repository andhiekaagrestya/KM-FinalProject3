AOS.init();

const productContainers = [...document.querySelectorAll('.container-services')];
  const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
  const preBtn = [...document.querySelectorAll('.pre-btn')];
  
  productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  
    nxtBtn[i].addEventListener('click', () => {
      item.scrollLeft += containerWidth;
    })
  
    preBtn[i].addEventListener('click', () => {
      item.scrollLeft -= containerWidth;
    })
  })

  const icon = document.querySelector('.navbar-brand');
  document.querySelector("#btn-nav").onclick = function(){
    if(icon.style.display === 'none'){
      icon.style.display = 'block';
    }else{
      icon.style.display = 'none'
    }
  }
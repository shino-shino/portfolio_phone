'use strict';

{
  // sp-menu
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const search = document.getElementById('search');
  const close_search = document.getElementById('close_search_box');
  const overlay = document.querySelector('.overlay');
  const search_box = document.querySelector('.search_box');
  const search_input = document.getElementById('search_input');
  const second_fullOverlay = document.querySelector('.second_fullOverlay')


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    overlay.classList.remove('close');
    $('html').addClass('scroll-prevent');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.add('close');
    $('html').removeClass('scroll-prevent');
  });

  search.addEventListener("click", () => {
    search_box.classList.add('show');
    second_fullOverlay.classList.add('show');
    header.classList.add('white');
    $('html').addClass('scroll-prevent');
    search_input.focus();
  });

  close_search.addEventListener("click", () => {
    search_box.classList.remove('show');
    second_fullOverlay.classList.remove('show');
    $('html').removeClass('scroll-prevent');
    header.classList.remove('white');
  });

  //button animation
  const second_type_buttons = document.querySelectorAll('.button_second_type');

  second_type_buttons.forEach(second_type_button => {
    
    // 子要素の1番めを代入
    const children = second_type_button.children[0];
    
    if( children.className === 'bi bi-arrow-up-right' ){
      second_type_button.addEventListener('mouseover', () => {
        children.classList.add('right_up');
        children.classList.remove('right_down');
        // console.log(children)
       }, false);
      second_type_button.addEventListener('mouseleave', () => {
        const children = second_type_button.children[0];
          children.classList.add('right_down');
          children.classList.remove('right_up');
      }, false);
    }
    else if( children.className === 'bi bi-arrow-right' ){
      second_type_button.addEventListener('mouseover', () => {
        children.classList.add('right');
        children.classList.remove('left');
       }, false);
      second_type_button.addEventListener('mouseleave', () => {
        const children = second_type_button.children[0];
          children.classList.add('left');
          children.classList.remove('right');
      }, false);
    }
  });


  //details animation
  const dts = document.querySelectorAll('dt');

  dts.forEach(dt => {
    dt.addEventListener('click', () => {
      dt.parentNode.classList.toggle('appear');
    });
  });


  
  //header
  const header = document.querySelector('header');

  let set_position = 0;
  if (window.performance) {
    if (performance.navigation.type === 1) {
      header.classList.add('top_reload');
    } else {
    }
  }
  window.addEventListener('scroll', function () {
    if (set_position < 50) {
      // console.log(`top`);
      header.classList.add('top');
      header.classList.remove('top_reload');
    } else {
      header.classList.remove('top');
    }
    if (set_position < document.documentElement.scrollTop) {
      // console.log(`down`);
      header.classList.add('down');
      header.classList.remove('up');
    } else if (set_position > document.documentElement.scrollTop) {
      // console.log(`up`);
      header.classList.add('up');
      header.classList.remove('down');
    }
    set_position = document.documentElement.scrollTop;
  });


// hero
window.addEventListener("load", execFunction);
function execFunction() {
  // header.classList.add('up');
  const pics = document.querySelector('.pic');
  // pics.children.forEach(pic => {
  //   pic.classList.add('slide_in');
  // })
  // pics.children.forEach(a => {
  //   a.classList.add('slide');
  // })

  const pic = pics.children;
  pic[0].classList.add('slide_in');
  pic[1].classList.add('slide_in');
  pic[2].classList.add('slide_in');
}

window.addEventListener("load", () => {
  const pics = document.querySelector('.pic');
  // pics.children.forEach(pic => {
  //   pic.classList.add('slide_in');
  // })
  // pics.children.forEach(a => {
  //   a.classList.add('slide');
  // })
  
  const pic = pics.children;
  pic[0].classList.add('slide_in');
  pic[1].classList.add('slide_in');
  pic[2].classList.add('slide_in');
});

//スクロール似合わせて移動
  //補正
  var clientRect_array = [];
  const targets = document.querySelectorAll('.move_with_win');
  targets.forEach(target => {
    // page 上部からの位置を取得
    //-500px は上部からどれだけずれたときに，元の場所になるか
    clientRect_array.push((window.pageYOffset + target.getBoundingClientRect().top + -500));
    console.log(clientRect_array)
  });
  // const devices_img_location = (window.pageYOffset + document.getElementById('devices').getBoundingClientRect().top - 800);
  var clientRect_devices_array = [];
  const devices_targets = document.querySelectorAll('.devices_img');
  devices_targets.forEach(target => {
    // page 上部からの位置を取得
    //-500px は上部からどれだけずれたときに，元の場所になるか
    clientRect_devices_array.push((window.pageYOffset + target.getBoundingClientRect().top + -800));
    console.log(clientRect_devices_array)
  });


  //リロード時のズレをなくす
  if (window.performance) {
    const winScroll = $(this).scrollTop();
    $('.move_with_win').each(function(index, element){

      if( index === 0 ) {
        $(element).css({
          'transform': 'translateY(' + (winScroll - clientRect_array[index])*0.2 + 'px)'
        });
      }
      else {
        $(element).css({
          'transform': 'translateY(' + (winScroll - clientRect_array[index])*-0.1 + 'px)'
        });
      }
    });
    $('.devices_img').each(function(index, element){
      $(element).css({
        'transform': 'translateX(' + (winScroll - clientRect_devices_array[index])*-0.2 + 'px)'
      });
    });
  }


  let scroll = $(window).scroll(function() {
    const winScroll = $(this).scrollTop();
    $('.move_with_win').each(function(index, element){
      //1つ目の要素→→逆方向
      if( index === 0 ) {
        $(element).css({
          'transform': 'translateY(' + (winScroll - clientRect_array[index])*0.2 + 'px)'
        });
      }
      else {
        $(element).css({
          'transform': 'translateY(' + (winScroll - clientRect_array[index])*-0.1 + 'px)'
        });
      }
    });
    $('.devices_img').each(function(index, element){
      $(element).css({
        'transform': 'translateX(' + (winScroll - clientRect_devices_array[index])*-0.2 + 'px)'
      });
    });
  });

}
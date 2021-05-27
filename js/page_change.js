;(function(){
  'use strict';
  
  //URLの一覧を配列で用意
  const url_list = [
    'top',
    'prof',
    'movie',
  ];
  
  function init(){
    $.get('./pages/top.html').done((data) => {
        $('.spa').html(data);
    }).fail(() => {
        error();
    });
  }
  
  function hashchange(){
    const page = location.hash.slice(1);
    const in_url = $.inArray(page, url_list);
    console.log(in_url)
    if(in_url !== -1){
      $.get(`./pages/${page}.html`).done((data) => {
        $('.spa').html(data);
      }).fail(() => {
        error();
      });
    }
  }
  
  function error(){
    var errorHTML = '<p class="caution">ページ読み込みエラーです。更新してください。</p>'
    $('.spa').html(errorHTML);
  }
  
  $(window).on("hashchange", () => {
    hashchange();
  });
  
  $(function(){
    init();
  });
  
  })();
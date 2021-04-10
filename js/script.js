(function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;h>++e&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,0===a-n&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(0!==u.end-u.begin&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})})(jQuery);

$(function() {
  const swiper = new Swiper('.slider', {
    slidesPerView: 1,
    spaceBetween: 140,
    loop: true,
    wrapperClass: 'slider__wrapper',
    slideClass: 'slider__card',
    preloadImages: false,
    lazy: true,
    pagination: {
      el: '.slider__pagination',
      type: 'bullets',
      bulletClass: 'paginator__item',
      bulletActiveClass: 'paginator__item--active',
      clickable: true
    },
    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
  });

  $('.lazy').lazy();
  $('#formPhone').mask('+7 (999) 999 99 99');


  const ChangeSlide = function(){
    let numSlide = (swiper.realIndex+1)*24
    $('.slider__button-next').html('<svg width="48" height="48"><circle transform="rotate(-90)" r="23" cx="-24" cy="24" /><circle transform="rotate(-90)" style="stroke-dasharray:' + numSlide + 'px 360px;" r="23" cx="-24" cy="24" /></svg>');
  };
  ChangeSlide();
  swiper.on('slideChange', () => {
    ChangeSlide();
  });

  const priceAutoRange = $('#priceAuto-range').rangeslider({
    polyfill: false,
    onSlide: () => {
      MonthlyPayment();
      SumLease();
    }
  });
  $('#firstPayment-range').rangeslider({
    polyfill: false,
    onSlide: () => {
      MonthlyPayment();
      SumLease();
    }
  });
  $('#leaseTerm-range').rangeslider({
    polyfill: false,
    onSlide: () => {
      MonthlyPayment();
      SumLease();
    }
  });

  $('#priceAuto-range').on('input', function(e) {
    $('#priceAuto-value').val((+e.currentTarget.value).toLocaleString());
  });
  $('#priceAuto-value').on('focus', () => {
    const priceAuto = $('#priceAuto-value').val();
    const priceAutoVal = +priceAuto.replace(/[^\d]/g,"");
    $('#priceAuto-value').val(priceAutoVal);
  }).on('input', () => {
    const priceAuto = $('#priceAuto-value').val();
    const priceAutoVal = +priceAuto.replace(/[^\d]/g,"");
    $('#priceAuto-value').val(priceAutoVal);
  }).on('blur', () => {
    let newPrice = $('#priceAuto-value').val();
    if (newPrice < 1000000) {
      newPrice = 1000000
    } else if (newPrice > 6000000) {
      newPrice = 6000000
    }
    $('#priceAuto-range').val(newPrice);
    $('#priceAuto-value').val((+newPrice).toLocaleString());
    $('#priceAuto-range').rangeslider('update', true)
  })

  $('#firstPayment-range').on('input', function(e) {
    $('.form__input-percent').html(e.currentTarget.value + "%");
    $('#firstPayment-input').val(((e.currentTarget.value * (+(priceAutoRange[0].value.replace(/\s/g,""))))/100).toLocaleString() + " ₽");
  });

  $('#firstPayment-input').on('focus', () => {
    const firstPayment = $('#firstPayment-input').val();
    const firstPaymentVal = +firstPayment.replace(/[^\d]/g,"");
    $('#firstPayment-input').val(firstPaymentVal);
  }).on('input', () => {
    const firstPayment = $('#firstPayment-input').val();
    const firstPaymentVal = +firstPayment.replace(/[^\d]/g,"");
    $('#firstPayment-input').val(firstPaymentVal);
  }).on('blur', () => {
    let newPayment = $('#firstPayment-input').val();
    const priceAuto = (+(priceAutoRange[0].value.replace(/\s/g,"")));
    const minPercent = priceAuto*10/100;
    const maxPercent = priceAuto*60/100;
    if (newPayment < minPercent) {
      newPayment = minPercent
    } else if (newPayment > maxPercent) {
      newPayment = maxPercent
    }
    const newPercent = parseInt(newPayment * 100 /priceAuto);
    $('.form__input-percent').html(newPercent + "%");
    $('#firstPayment-range').val(newPercent);
    $('#firstPayment-input').val(newPayment.toLocaleString() + " ₽");
    $('#firstPayment-range').rangeslider('update', true)
  })

  $('#leaseTerm-range').on('input', function(e) {
    $('#leaseTerm-input').val(+e.currentTarget.value);
  });
  $('#leaseTerm-input').on('blur', () => {
    let newleaseTerm = $('#leaseTerm-input').val();
    if (newleaseTerm < 1) {
      newleaseTerm = 1
    } else if (newleaseTerm > 60) {
      newleaseTerm = 60
    }
    $('#leaseTerm-input').val(newleaseTerm);
    $('#leaseTerm-range').val(newleaseTerm);
    $('#leaseTerm-range').rangeslider('update', true)
  })

  const MonthlyPayment = () => {
    const priceAuto = $('#priceAuto-range').val();
    const firstPayment = $('#firstPayment-input').val();
    const leaseTerm = $('#leaseTerm-range').val();
    const firstPaymentVal = +firstPayment.replace(/[^\d]/g,"");

    const rule = ((+priceAuto) - firstPaymentVal*((10/100)/((1 + (10/100)) - (+leaseTerm) - 1)));

    $('#monthlyPayment').val(parseInt(rule).toLocaleString() + " ₽");
  }
  MonthlyPayment();

  const SumLease = () => {
    const leaseTerm = $('#leaseTerm-range').val();
    const firstPayment = $('#firstPayment-input').val();
    const monthlyPayment = $('#monthlyPayment').val();
    const firstPaymentVal = +firstPayment.replace(/[^\d]/g,"");
    const monthlyPaymentVal = +monthlyPayment.replace(/[^\d]/g,"");

    const rule = firstPaymentVal + leaseTerm * monthlyPaymentVal;
    $('#sumLease').val(parseInt(rule).toLocaleString() + " ₽");
  }
  SumLease();

  const FormParse = () => {
    $('#priceAutoParse').val($('#priceAuto-range').val());
    $('#firstPaymentParse').val($('#firstPayment-range').val());
    $('#leaseTermParse').val($('#leaseTerm-range').val());
    $('#sumLeaseParse').val($('#sumLease').val());
    $('#monthlyPaymentParse').val($('#monthlyPayment').val());
  }


  $('input[type="text"]').on('focus', (e) => {
    $(e.target).parent().toggleClass("input-active")
  }).on('blur', (e) => {
    $(e.target).parent().toggleClass("input-active")
  })


  $(window).on('load resize scroll', () => {
    if ($(window).width() < '768') {
      const sliderHeight = $('.slider').innerHeight();
      const headerOffset = $('.header').offset().top + 72;
      if (headerOffset >= sliderHeight) {
        $('.header').addClass('bg');
      } else {
        $('.header').removeClass('bg');
      }
    }
    if ($(window).width() < '1023') {
      $('.init-drop').on('click', (e) => {
        if(!$(e.target).parent().hasClass('active')) {
          $(e.target).parent().addClass('active');
          e.preventDefault();
        } else {
          return true;
        }
      })
    }
  });



  $('.header__toggle').click(function () {
    $('body').toggleClass('active');
    $('.menu').toggleClass('active');
    $('.header__toggle').toggleClass('active');
  });

  const popup = $('#popup-container');
  let modalClose = $('.close');
  const feedback = $('#feedback');

  const Popup = () => {
    $(popup).addClass('active');
    $('html').css('overflow', 'hidden');
    $('body').css('overflow', 'hidden');
    FormParse();
  }
  const ClosePopup = () => {
    $(popup).removeClass('active');
    $('html').css('overflow', 'initial');
    $('body').css('overflow', 'initial');
    feedback.hide();
  }

  $(window).click(function (e) {
    if ($(e.target).hasClass('modal')) {
      ClosePopup();
    } else if ($(e.target).hasClass('modal-popup')) {
      Popup();
      feedback.show();
    }
  });

  $(modalClose).click(function () {
    ClosePopup();
  });

  $("#form").submit(function () {
    var formID = $(this).attr('id');
    var formNm = $('#' + formID);
    $.ajax({
      type: "POST",
      url: 'feedback.php',
      data: formNm.serialize(),
      success: function (data) {
        $('#form_result').html(data);
        feedback.hide();
        ClosePopup();
        setTimeout(function(){
          $('#form_result').html('');
          $('.formInfo').not(':input[type=submit], :input[type=hidden]').val('');
        }, 3000);
      },
      error: function (jqXHR, text, error) {
        $('#form_result').html(error);
        feedback.show();
        setTimeout(function(){
          $('#form_result').html('');
        }, 3000);
      }
    });
    return false;
  });

});
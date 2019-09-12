/* right-humanstory slider start */
new Glider(document.querySelector('.right-humanstory'), {
slidesToShow: 1, //'auto',
slidesToScroll: 1,
arrows: {
prev: '.hmnstry-prev',
next: '.hmnstry-next',
}
});
/* right-humanstory slider end */

/* trending slider start */
new Glider(document.querySelector('.trending-slider-list'), {
slidesToShow: 3, //'auto',
slidesToScroll: 1,
arrows: {
prev: '.trending-prev',
next: '.trending-next',
}
});
/* trending slider end */

/* pradesh nav slider start */
new Glider(document.querySelector('.pradeshnav-slider'), {
slidesToShow:'auto',
slidesToScroll: 1,
itemWidth: 100,
arrows: {
prev: '.pradeshnav-prev',
next: '.pradeshnav-next',
}
});
/* pradesh nav slider end */

/* footer brand slider start */
new Glider(document.querySelector('.ftrchnl-in'), {
slidesToShow:'auto',
slidesToScroll: 1,
itemWidth: 150,
arrows: {
prev: '.ftr-prev',
next: '.ftr-next',
}
});
/* footer brand slider end */  

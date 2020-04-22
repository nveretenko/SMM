/************************advantages**********************************************/

let advantagesWrap = [
    {svg: '#notification', title: '<h3>Lorem ipsum</h3>'},
    {svg: '#calender', title: '<h3>Sit imiti</h3>'},
    {svg: '#timer', title: '<h3>Dremo kulump</h3>'},
    {svg: '#gallery', title: '<h3>Gaventi bayes</h3>'},
    {svg: '#ad', title: '<h3>Dolores asix</h3>'}
];

let toAdvantagesItemHTML = item => `
        <div class="advantages__item">
            <span>
                <svg>
                    <use xlink:href="images/svg/sprite.symbol.svg${item.svg}"></use>
                </svg>
                </span>
            <div class="advantages__content">
                ${item.title}
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, ipsam.</p>
            </div>
        </div>
`;

(function() {
  let html = advantagesWrap.map(toAdvantagesItemHTML).join('');
  document.querySelector('#advantagesWrap').innerHTML = html;
})();

/************************************************************************************/

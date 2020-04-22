/**************************************************************************/

let contentBasic = [
    {svg: '#info', title: '<h3>Вводное занятие</h3>'},
    {svg: '#education', title: '<h3>Тренды в продвижении</h3>'},
    {svg: '#eye', title: '<h3>Текстовый контент</h3>'},
    {svg: '#file', title: '<h3>Видео, визуал</h3>'},
    {svg: '#folder', title: '<h3>Таргетированная реклама</h3>'},
    {svg: '#home', title: '<h3>Блогеры</h3>'},
    {svg: '#info', title: '<h3>Конкурсы и комьюнити-менеджмент</h3>'},
    {svg: '#pencil', title: '<h3>Статистика, отчетность, KPI</h3>'},
    {svg: '#search', title: '<h3>Ценообразование и поиск работы</h3>'},
    {svg: '#settings', title: '<h3>Последнее занятие, выводы</h3>'}
];

let toHTML = item => `
        <div class="content-basic__item">
            <div class="content-basic__header">
                <div>
                    <span>
                        <svg>
                            <use xlink:href="images/svg/sprite.symbol.svg${item.svg}"></use>
                        </svg>
                    </span>
                    ${item.title}
                </div>
                <span>
                    <svg>
                        <use xlink:href="images/svg/sprite.symbol.svg#arrow"></use>
                    </svg>
                </span>
            </div>
            <ul>
                <li>
                    <span>Знакомство</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <span>О курсе</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </li>
                <li>
                    <span>Структура работы SMMщика</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Cumque cupiditate debitis delectus dolorem eaque enim eos
                        exercitationem facere harum incidunt iste iure labore laboriosam
                        libero magni non praesentium quaerat quasi reprehenderit suscipit,
                        ullam vel voluptas.
                    </p>
                </li>
                <li>
                    <span>Раздача проектов для практики</span>
                    <p>Lorem ipsum dolor sit amet.</p>
                </li>
                <li>
                    <span>Доп задания на подумать и почитать</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Consequatur impedit ipsam ipsum neque, officia vitae?</p>
                </li>
            </ul>
        </div>
`;

function renderContent() {
    let html = contentBasic.map(toHTML).join('');
    document.querySelector('#contentBasic').innerHTML = html;
}

renderContent();

/**********************************************************************************/

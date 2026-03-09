class NovelCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('novel-card-template').content;
        this.attachShadow({ mode: 'open' }).appendChild(template.cloneNode(true));
    }

    connectedCallback() {
        this.shadowRoot.querySelector('.title').textContent = this.getAttribute('title');
        this.shadowRoot.querySelector('.author').textContent = this.getAttribute('author');
        this.shadowRoot.querySelector('.description').textContent = this.getAttribute('description');
        this.shadowRoot.querySelector('img').src = this.getAttribute('cover');
    }
}

customElements.define('novel-card', NovelCard);

const novels = [
    {
        title: '채식주의자',
        author: '한강',
        description: '폭력과 욕망, 구원의 문제를 탐구하는 소설',
        cover: 'https://picsum.photos/300/400?random=1'
    },
    {
        title: '아몬드',
        author: '손원평',
        description: '감정을 느끼지 못하는 소년의 특별한 성장 이야기',
        cover: 'https://picsum.photos/300/400?random=2'
    },
    {
        title: '파과',
        author: '구병모',
        description: '60대 여성 킬러의 마지막 임무를 그린 소설',
        cover: 'https://picsum.photos/300/400?random=3'
    },
    {
        title: '백의 그림자',
        author: '황정은',
        description: '사라져가는 것들에 대한 애틋한 시선을 담은 소설',
        cover: 'https://picsum.photos/300/400?random=4'
    },
    {
        title: '달러구트 꿈 백화점',
        author: '이미예',
        description: '잠들어야만 입장할 수 있는 신비로운 백화점에서 일어나는 일들',
        cover: 'https://picsum.photos/300/400?random=5'
    }
];

const novelList = document.getElementById('novel-list');

novels.forEach(novel => {
    const novelCard = document.createElement('novel-card');
    novelCard.setAttribute('title', novel.title);
    novelCard.setAttribute('author', novel.author);
    novelCard.setAttribute('description', novel.description);
    novelCard.setAttribute('cover', novel.cover);
    novelList.appendChild(novelCard);
});

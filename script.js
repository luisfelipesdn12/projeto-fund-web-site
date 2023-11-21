function scrollToHowToStart() {
    document.getElementById("how-to-start").scrollIntoView({
        behavior: "smooth",
    });
}

function goToIndex() {
    location.href = "/";
}

const careers = [
    {
        url: "nextjs.html",
        image: "https://api.iconify.design/logos:nextjs-icon.svg?color=%23888888",
        title: "Desenvolvedor Next.js",
        description: "Desenvolvimento frontend com React usando o framework Next.",
        tags: ["frontend", "web"]
    },
    {
        url: "flutter.html",
        image: "https://api.iconify.design/logos:flutter.svg?color=%23888888",
        title: "Desenvolvedor Flutter",
        description: "Desenvolvimento mobile usando Dart e Flutter.",
        tags: ["mobile", "apps"]
    },
    {
        url: "go.html",
        image: "https://api.iconify.design/logos:go.svg?color=%23888888",
        title: "Desenvolvedor Go",
        description: "Desenvolvimento backend robusto com a linguagem moderna do Google.",
        tags: ["backend", "api"]
    },
];

const resources = {
    nextjs: [
        {
            url: "https://nextjs.org/learn-pages-router/foundations/about-nextjs",
            image: "https://assets.vercel.com/image/upload/front/nextjs-learn/foundations.png",
            title: "Introdução ao Next.js",
            description: "Documentação própria do Next.js que oferece uma introddução com passo a passo para usar o framework.",
            tags: ["texto", "documentação", "oficial"]
        },
        {
            url: "https://www.youtube.com/playlist?list=PLnDvRpP8BnezfJcfiClWskFOLODeqI_Ft",
            image: "https://i3.ytimg.com/vi/XHrbg2iYNCg/maxresdefault.jpg",
            title: "Curso de Next.js",
            description: "Playlist de vídeos no YouTube produzido por Matheus Battisti do canal Hora de Codar.",
            tags: ["vídeo", "youtube"]
        },
        {
            url: "https://jornadadodev.com.br/cursos/front-end/nextjs",
            image: "https://jornadadodev.com.br//images/og-image.jpg",
            title: "Jornada do Dev Next.js",
            description: "Aprenda a criar aplicativos web escaláveis, otimizados para SEO e de alta qualidade.",
            tags: ["curso", "web", "certificação"]
        }
    ],
    flutter: [
        {
            url: "https://www.devmedia.com.br/guia/flutter/40713",
            image: "https://www.devmedia.com.br/imagens/articles/guia-flutter.png",
            title: "Guia Flutter",
            description: "Guia de introcução ao Flutter feio por DevMedia.",
            tags: ["texto", "introdução"]
        },
        {
            url: "https://balta.io/blog/flutter-por-onde-comecar",
            image: "http://baltaio.blob.core.windows.net/static/images/articles/flutter-por-onde-comecar_share.jpg?v=f8bed79a",
            title: "Por onde começar?",
            description: "Artigo que concentra todo material necessário para você dar início a sua jornada como desenvolvedor Mobile.",
            tags: ["texto", "recursos"]
        },
        {
            url: "https://www.youtube.com/watch?v=J4BVaXkwmM8",
            image: "https://i3.ytimg.com/vi/J4BVaXkwmM8/maxresdefault.jpg",
            title: "A Primeira Aula de Flutter Que Todo Mundo Deveria Ter",
            description: "Introdução em vídeo do framework.",
            tags: ["vídeo", "youtube"]
        }
    ],
    go: [
        {
            url: "http://aprendago.com/",
            image: "https://luisf.dev/education/golang.jpg",
            title: "Aprenda Go",
            description: "Curso feito por Ellen Körbes que aborda todas as vantagens de usar a Linguagem de Programação Go, conceitos fundamentais e boas práticas para desenvolver em Go.",
            tags: ["vídeo", "youtube", "curso"]
        },
        {
            url: "https://github.com/geiltonxavier/aprenda-go",
            image: "http://opengraph.githubassets.com/f628943d59c4e9f05ddf6d59b589ff9db430ac043d01968fb1a27c36fb4980b5",
            title: "Repositório de Aprendizado",
            description: "Repositório brasileito de aprendizado de Go com diversos recursos entre: Cursos, Livros, Blogs, Palestras, Comunidades e Podcasts.",
            tags: ["github", "recursos"]
        },
        {
            url: "https://coodesh.com/blog/candidates/backend/onde-aprender-e-estudar-golang/",
            image: "https://coodesh.com/blog/wp-content/uploads/2022/03/escolas-de-GoLang-1152x655.jpg",
            title: "Onde aprender e estudar GoLang?",
            description: "Mais recursos disponibilizados pela Coodesh.",
            tags: ["recursos", "web"]
        }
    ],
};

function renderCareers() {
    const list = document.getElementById("list-careers");

    for (const career of careers) {
        const card = `
        <a href="${career.url}" class="max-w-[15rem] rounded overflow-hidden shadow-lg">
            <img class="w-full h-[15rem] p-4 bg-white" src="${career.image}">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${career.title}</div>
                <p class="text-gray-700 text-base">${career.description}</p>
            </div>
            <div class="px-6 pt-4 pb-2">
                ${career.tags.map(tag => `
                    <span
                        class="inline-block bg-[#fff] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${tag}</span>
                `).join("\n")}
            </div>
        </a>
        `;

        list.insertAdjacentHTML('beforeend', card);
    }
}

function renderResources() {
    const list = document.getElementById("resources-list");
    let pageResources = resources[window.location.pathname.replace("/", "").replace(".html", "")];

    for (const resource of pageResources) {
        const card = `
        <a href="${resource.url}" target="_blank" class="max-w-[25rem] rounded overflow-hidden shadow-lg">
                <div class="w-full h-[15rem] bg-white" style="background-image: url(${resource.image});"></div>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">${resource.title}</div>
                    <p class="text-gray-700 text-base">
                        ${resource.description}
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    ${resource.tags.map(tag => `
                        <span
                            class="inline-block bg-[#fff] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#${tag}</span>
                    `).join("\n")}
                </div>
            </a>
        `;
    
        list.insertAdjacentHTML('beforeend', card);
    }
}

window.onload = () => {
    if (["/index.html", "/"].includes(window.location.pathname)) {
        renderCareers();
    } else {
        renderResources();
    }
};

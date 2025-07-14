document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const languageToggleBtn = document.getElementById('languageToggle');
    const menuToggleBtn = document.getElementById('menuToggle'); // Novo: botão do menu
    const navWrapper = document.querySelector('.nav-wrapper'); // Novo: wrapper da navegação
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.journey-section');
    const header = document.querySelector('.main-header'); // Para calcular o offset das seções

    const translations = {
        pt: {
            pageTitle: "Gustavo Vieira - A Jornada do Desenvolvedor Desbravador",
            navIntro: "Início",
            navAbout: "Sobre Mim",
            navSkills: "Habilidades",
            navLearning: "Aprendizado",
            navStack: "Stack", // Adicionado "Stack" para tradução
            navProjects: "Projetos",
            navContact: "Contato",
            introSubtitle: "Desbravando o Código, Construindo o Futuro",
            introText: "Bem-vindo à minha jornada como desenvolvedor web. Prepare-se para explorar!",
            exploreButton: "Iniciar Expedição",
            aboutTitle: "Sobre Mim",
            aboutText: 'Sou Gustavo Vieira, estudante de Engenharia de Software e apaixonado por tecnologia, aprendizado prático e desafios reais. Após alguns anos atuando fora da área, decidi trilhar meu caminho no desenvolvimento web com foco em evolução constante e projetos que gerem impacto. Minha experiência como Desbravador moldou valores como <strong>resiliência, disciplina e trabalho em equipe</strong>, que carrego em cada linha de código. Tenho domínio em <strong>HTML, CSS e JavaScript</strong>, com boas noções de <strong>PHP e Python</strong>, e estou sempre explorando novas ferramentas e tecnologias. Com uma abordagem prática e autodidata, acredito que a melhor forma de aprender é construindo. Este portfólio é parte dessa jornada – seja bem-vindo(a)!',
            stackTitle: "Stack Favorita",
            stackText: "Tenho mais familiaridade com o ecossistema web, utilizando <strong>HTML, CSS, JavaScript</strong> no frontend, estou dividido entre <strong>Python</strong> e <strong>PHP</strong> para o backend e para o banco de dados gosto de <strong>MySQL</strong>. Também gosto de explorar soluções com <strong>Node.js</strong> e estou aprendendo <strong>Flutter</strong> para aplicações móveis.",
            skillsTitle: "Mapa de Habilidades",
            lerningTitle: "Em Desenvolvimento",
            lerningText: "Atualmente estou desenvolvendo um sistema de chatbot com integração via WhatsApp e banco de dados Firebird com IBExpert, além de aprimorar meus conhecimentos em outras áreas da programação como <strong>Machine Lerning</strong>",
            projectsTitle: "Descobertas na Jornada",
            projDgsTitle: "Dungeon Scripts",
            projDgsDesc: "E-commerce para a venda de campanhas de RPG.",
            projSdnTitle: "Portal de Notícias",
            projSdnDesc: "Portal completo com painel administrativo em PHP/MySQL. Permite a criação, edição e exclusão de conteúdos, além de exibição pública com foco em acessibilidade e leveza.",
            projGgdhDesc: "Site desenvolvido para o Clube de Desbravadores Guardiões Dourados.",
            projGithubTitle: "Ver mais!",
            projGithubDesc: "Acesse outros projetos no GitHub.",
            contactTitle: "Ponto de Encontro",
            contactInvite: "Vamos Desbarvar um novo projeto?",
            tooltipIntro: "Início da Trilha",
            tooltipAbout: "Acampamento Base",
            tooltipSkills: "Mapa de Habilidades",
            tooltipLearning: "Em Desenvolvimento",
            tooltipProjects: "Descobertas na Jornada",
            tooltipContact: "Ponto de Encontro",
            tooltipStack: "Stack Favorita", // Adicionado "Stack" para tradução
            whoPath: "Quem são os Desbravadores?",
            findHere: "Descubra aqui!"
        },
        en: {
            pageTitle: "Gustavo Vieira - The Pathfinder Developer's Journey",
            navIntro: "Home",
            navAbout: "About Me",
            navSkills: "Skills",
            navLearning: "Learning",
            navStack: "Stack", // Adicionado "Stack" para tradução
            navProjects: "Projects",
            navContact: "Contact",
            introSubtitle: "Blazing the Code Trail, Building the Future",
            introText: "Welcome to my journey as a web developer. Get ready to explore!",
            exploreButton: "Start Expedition",
            aboutTitle: "About Me",
            aboutText: " I'm Gustavo Vieira, a Software Engineering student and passionate about technology, practical learning and real-world challenges. After few years of working outside the field, I decided to pursue my path in web development, focusing on constant evolution and impactful projects. My experience as a Pathfinder shaped values ​​such as resilience, discipline, and teamwork, which I carry through every line of code. I am proficient in <strong>HTML, CSS, and JavaScript</strong>, with a good understanding of <strong>PHP and Python</strong>, and I am always exploring new tools and technologies. With a hands-on, self-taught approach, I believe the best way to learn is to build. This portfolio is part of that journey — welcome!",
            skillsTitle: "Skills Map",
            projectsTitle: "Journey Discoveries",
            lerningTitle: "In Development",
            lerningText: "I am currently developing a chatbot system with integration via WhatsApp and Firebird database with IBExpert, in addition to improving my knowledge in other areas of programming such as <strong>Machine Learning</strong>",
            stackTitle: "Favorite Stack",
            stackText: "I'm more familiar with the web ecosystem, using <strong>HTML, CSS, and JavaScript</strong> on the front end and <strong>Python, PHP, and MySQL</strong> on the back end. I also enjoy exploring solutions with <strong>Node.js</strong> and am learning <strong>Flutter</strong> for mobile applications.",
            projDgsTitle: "Dungeon Scripts",
            projDgsDesc: "E-commerce for selling RPG campaigns.",
            projSdnTitle: "News portal",
            projSdnDesc: "A complete portal with a PHP/MySQL administrative panel. Allows for creating, editing, and deleting content, as well as public display, with a focus on accessibility and ease of use.",
            projGgdhDesc: 'Website developed for the "Guardiões dourados" Pathfinder Club.',
            projPortTitle: "Portfolio",
            projPortDesc: "Portfolio showcasing some projects and known technologies.",
            projGithubTitle: "See more!",
            projGithubDesc: "Access other projects on GitHub.",
            contactTitle: "Meeting Point",
            contactInvite: "Let's explore a new project?",
            tooltipIntro: "Trail Start",
            tooltipAbout: "Base Camp",
            tooltipSkills: "Skills Map",
            tooltipLearning: "In Development",
            tooltipStack: "Favorite Stack", // Adicionado "Stack" para tradução
            tooltipProjects: "Journey Discoveries",
            tooltipContact: "Meeting Point",
            whoPath: "Who are the Pathfinders",
            findHere: "Find out here!"
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'pt';

    function applyTranslations() {
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[currentLanguage][key]) {
                if (key.includes("Desc") || key.includes("Text") || key.includes("aboutText")) {
                    element.innerHTML = translations[currentLanguage][key];
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }

            if (element.hasAttribute('data-tooltip-key')) {
                const tooltipKey = element.getAttribute('data-tooltip-key');
                if (translations[currentLanguage][tooltipKey]) {
                    element.setAttribute('data-tooltip', translations[currentLanguage][tooltipKey]);
                }
            }
        });

        document.title = translations[currentLanguage].pageTitle;
        languageToggleBtn.classList.remove('pt', 'en');
        languageToggleBtn.classList.add(currentLanguage);
        document.documentElement.lang = currentLanguage;
    }

    function toggleTheme() {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', toggleTheme);
    }

    if (languageToggleBtn) {
        languageToggleBtn.addEventListener('click', () => {
            currentLanguage = (currentLanguage === 'pt') ? 'en' : 'pt';
            localStorage.setItem('language', currentLanguage);
            applyTranslations();
        });
    }

    // Lógica do menu hambúrguer
    if (menuToggleBtn && navWrapper) {
        menuToggleBtn.addEventListener('click', () => {
            navWrapper.classList.toggle('open');
            // Opcional: Adicionar/remover classe para mudar o ícone do menu
            menuToggleBtn.classList.toggle('active-menu');
        });
    }

    // Fechar o menu ao clicar em um item de navegação
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navWrapper.classList.contains('open')) {
                navWrapper.classList.remove('open');
                menuToggleBtn.classList.remove('active-menu'); // Opcional
            }
        });
    });

    function updateActiveNavItem() {
        const headerHeight = header.offsetHeight; // Obtém a altura atual do cabeçalho
        let currentActiveSectionId = 'intro'; // Valor padrão caso nenhuma seção esteja visível

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 1; // Ajusta o topo da seção pelo cabeçalho
            const sectionBottom = sectionTop + section.offsetHeight;

            if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
                currentActiveSectionId = section.id;
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === currentActiveSectionId) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNavItem);

    applyTranslations();
    updateActiveNavItem();


    const container = document.querySelector(".container");
    const containercarrossel = container ? container.querySelector(".container-carrossel") : null;
    const carrossel = containercarrossel ? containercarrossel.querySelector(".carrossel") : null;
    const carrosselItems = carrossel ? carrossel.querySelectorAll(".carrossel-item") : [];

    if (carrossel && carrosselItems.length > 0) {
        let isMouseDown = false;
        let currentMousePos = 0;
        let lastMousePos = 0;
        let lastMoveTo = 0;
        let moveTo = 0;

        const createcarrossel = () => {
            const carrosselProps = onResize();
            const length = carrosselItems.length;
            const degress = 360 / length;
            const gap = 20;
            const tz = distanceZ(carrosselProps.w, length, gap);

            const fov = calculateFov(carrosselProps);
            const height = calculateHeight(tz);

            carrosselItems.forEach((item, i) => {
                const degressByItem = degress * i + "deg";
                item.style.setProperty("--rotatey", degressByItem);
                item.style.setProperty("--tz", tz + "px");
            });
        };

        const lerp = (a, b, n) => n * (a - b) + b;
        const distanceZ = (widthElement, length, gap) => widthElement / 2 / Math.tan(Math.PI / length) + gap;
        const calculateHeight = (z) => {
            const t = Math.atan((90 * Math.PI) / 180 / 2);
            return t * 2 * z;
        };
        const calculateFov = (carrosselProps) => {
            const perspective = window.getComputedStyle(containercarrossel).perspective.split("px")[0];
            const length = Math.sqrt(carrosselProps.w * carrosselProps.w) + Math.sqrt(carrosselProps.h * carrosselProps.h);
            return 2 * Math.atan(length / (2 * perspective)) * (180 / Math.PI);
        };

        const getPosX = (x) => {
            currentMousePos = x;
            moveTo = currentMousePos < lastMousePos ? moveTo - 2 : moveTo + 2;
            lastMousePos = currentMousePos;
        };

        const update = () => {
            lastMoveTo = lerp(moveTo, lastMoveTo, 0.05);
            carrossel.style.setProperty("--rotatey", lastMoveTo + "deg");
            requestAnimationFrame(update);
        };

        const onResize = () => {
            const boundingcarrossel = containercarrossel.getBoundingClientRect();
            return { w: boundingcarrossel.width, h: boundingcarrossel.height };
        };

        const initCarouselEvents = () => {
            carrossel.addEventListener("mousedown", () => { isMouseDown = true; carrossel.style.cursor = "grabbing"; });
            carrossel.addEventListener("mouseup", () => { isMouseDown = false; carrossel.style.cursor = "grab"; });
            container.addEventListener("mouseleave", () => (isMouseDown = false));
            carrossel.addEventListener("mousemove", (e) => isMouseDown && getPosX(e.clientX));
            carrossel.addEventListener("touchstart", () => { isMouseDown = true; carrossel.style.cursor = "grabbing"; });
            carrossel.addEventListener("touchend", () => { isMouseDown = false; carrossel.style.cursor = "grab"; });
            container.addEventListener("touchmove", (e) => isMouseDown && getPosX(e.touches[0].clientX));
            window.addEventListener("resize", createcarrossel);
            update();
            createcarrossel();
        };

        initCarouselEvents();
    }


    const texts = ["Desenvolvedor web", "Entre em contato!"];
    let count = 0;
    let index = 0;
    let currentText = '';
    let isDeleting = false;
    const speed = 100;

    function type() {
        const textDisplay = document.getElementById("text");
        if (!textDisplay) return;

        const dynamicTextsKey = (currentLanguage === 'pt') ? ["Desenvolvedor web", "Entre em contato!"] : ["Web Developer", "Get in touch!"];
        if (count === dynamicTextsKey.length) {
            count = 0;
        }
        currentText = dynamicTextsKey[count];


        if (isDeleting) {
            textDisplay.innerHTML = currentText.slice(0, index--);
        } else {
            textDisplay.innerHTML = currentText.slice(0, index++);
        }

        if (!isDeleting && index === currentText.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000);
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            count++;
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
    }

    const introSection = document.getElementById('intro');
    if (introSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    type();
                    observer.unobserve(introSection);
                }
            });
        }, { threshold: 0.5 });
        observer.observe(introSection);
    }
});
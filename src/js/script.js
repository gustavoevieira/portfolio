document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const languageToggleBtn = document.getElementById('languageToggle');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.journey-section');

    const translations = {
        pt: {
            pageTitle: "Gustavo Vieira - A Jornada do Desenvolvedor Desbravador",
            navIntro: "Início",
            navAbout: "Sobre Mim",
            navSkills: "Habilidades",
            navProjects: "Projetos",
            navContact: "Contato",
            introSubtitle: "Desbravando o Código, Construindo o Futuro",
            introText: "Bem-vindo à minha jornada como desenvolvedor web. Prepare-se para explorar!",
            exploreButton: "Iniciar Expedição",
            aboutTitle: "Sobre Mim",
            aboutText: "Minha paixão por **exploração e aprendizado contínuo**, cultivada durante anos como Desbravador, se reflete diretamente na minha jornada como desenvolvedor web. Assim como aprendi a navegar por trilhas e resolver desafios em acampamentos, busco sempre as melhores rotas e soluções para os problemas no código. Valores como **disciplina, trabalho em equipe e resiliência**, desenvolvidos no Clube de Desbravadores, são pilares fundamentais na minha abordagem de projetos, garantindo que eu esteja sempre pronto para enfrentar novos desafios e colaborar de forma eficiente.",
            skillsTitle: "Mapa de Habilidades",
            projectsTitle: "Descobertas na Jornada",
            projDgsTitle: "Dungeon Scripts",
            projDgsDesc: "E-commerce para a venda de campanhas de RPG.",
            projGgpTitle: "Guerreiros do Planalto",
            projGgpDesc: "Site para o Clube de Desbravadores Guerreiros do Planalto.",
            projGgdhTitle: "Guardiões Dourados",
            projGgdhDesc: "Site desenvolvido para o Clube de Desbravadores Guardiões Dourados.",
            projPortTitle: "Portfólio",
            projPortDesc: "Portfólio desenvolvido para mostrar alguns projetos e tecnologias conhecidas.",
            projGithubTitle: "Ver mais!",
            projGithubDesc: "Acesse outros projetos no GitHub.",
            contactTitle: "Ponto de Encontro",
            contactInvite: "Vamos acampar juntos em um novo projeto?",
            tooltipIntro: "Início da Trilha",
            tooltipAbout: "Acampamento Base",
            tooltipSkills: "Mapa de Habilidades",
            tooltipProjects: "Descobertas na Jornada",
            tooltipContact: "Ponto de Encontro" 
        },
        en: {
            pageTitle: "Gustavo Vieira - The Pathfinder Developer's Journey",
            navIntro: "Home",
            navAbout: "About Me",
            navSkills: "Skills",
            navProjects: "Projects",
            navContact: "Contact",
            introSubtitle: "Blazing the Code Trail, Building the Future",
            introText: "Welcome to my journey as a web developer. Get ready to explore!",
            exploreButton: "Start Expedition",
            aboutTitle: "About Me",
            aboutText: "My passion for **exploration and continuous learning**, cultivated during years as a Pathfinder, directly reflects in my journey as a web developer. Just as I learned to navigate trails and solve challenges in camps, I always seek the best routes and solutions for coding problems. Values like **discipline, teamwork, and resilience**, developed in the Pathfinder Club, are fundamental pillars in my project approach, ensuring I am always ready to face new challenges and collaborate efficiently.",
            skillsTitle: "Skills Map",
            projectsTitle: "Journey Discoveries",
            projDgsTitle: "Dungeon Scripts",
            projDgsDesc: "E-commerce for selling RPG campaigns.",
            projGgpTitle: "Highland Warriors",
            projGgpDesc: "Website for the Highland Warriors Pathfinder Club.",
            projGgdhTitle: "Golden Guardians",
            projGgdhDesc: "Website developed for the Golden Guardians Pathfinder Club.",
            projPortTitle: "Portfolio",
            projPortDesc: "Portfolio showcasing some projects and known technologies.",
            projGithubTitle: "See more!",
            projGithubDesc: "Access other projects on GitHub.",
            contactTitle: "Meeting Point",
            contactInvite: "Shall we camp together on a new project?",
            tooltipIntro: "Trail Start",
            tooltipAbout: "Base Camp",
            tooltipSkills: "Skills Map",
            tooltipProjects: "Journey Discoveries",
            tooltipContact: "Meeting Point"
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

    function updateActiveNavItem() {
        let currentActiveSectionId = 'intro';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - window.innerHeight / 2 &&
                window.scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
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
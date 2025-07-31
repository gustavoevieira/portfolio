document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const languageToggleBtn = document.getElementById('languageToggle');
    const menuToggleBtn = document.getElementById('menuToggle');
    const navWrapper = document.querySelector('.nav-wrapper');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('.journey-section');
    const header = document.querySelector('.main-header');



    const translations = {
        pt: {
            pageTitle: "Gustavo Vieira | Desenvolvedor",
            navIntro: "Início",
            navAbout: "Sobre Mim",
            navSkills: "Habilidades",
            navLearning: "Aprendizado",
            navStack: "Stack",
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
            projSeeMore: "Ver mais projetos!",
            projSeeMoreDesc: "Acesse outros projetos.",
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
            tooltipStack: "Stack Favorita",
            whoPath: "Quem são os Desbravadores?",
            findHere: "Descubra aqui!",
            pageTitleProjectDetails: "Detalhes do Projeto - Meu Portfólio",
            navProjectDetails: "Detalhes do Projeto",
            tooltipProjectDetails: "Detalhes de um Projeto",
            projectDetailsTitle: "Detalhes do Projeto: Portal de Notícias",
            projectDetailsDescription: "Este projeto de portal de notícias foi desenvolvido utilizando PHP e MySQL para o backend, oferecendo um painel administrativo completo que permite a criação, edição e exclusão de conteúdos. No frontend, foram empregados HTML, CSS e JavaScript para garantir uma experiência de usuário acessível e leve. A arquitetura foi pensada para facilitar a gestão de artigos e categorias, proporcionando uma plataforma robusta para publicação de notícias em tempo real.",
            feature1: "Sistema de autenticação e autorização para administradores.",
            feature2: "CRUD (Criar, Ler, Atualizar, Deletar) de notícias e categorias.",
            feature3: "Exibição de notícias por categoria e busca.",
            feature4: "Design responsivo para múltiplos dispositivos.",
            feature5: "Otimização para acessibilidade e carregamento rápido.",
            projectDetailsLinks: "Acesse o projeto no GitHub ou veja a demonstração (se disponível).",
            backToProjects: "Voltar aos Projetos",
            viewMore: "Ver mais",
            projectDetailsTitleNews: "Detalhes do Projeto: Portal de Notícias",
            projectDetailsSubtitleNews: "Um sistema completo de notícias desenvolvido com PHP, MySQL, HTML, CSS e JavaScript, incluindo uma área administrativa segura.",
            overviewTitle: "Visão Geral",
            overviewParagraph1: "Este projeto demonstra a construção de um portal de notícias funcional, abrangendo desde a interface pública até um robusto painel de gerenciamento. O objetivo foi aplicar e integrar diversas tecnologias fullstack para criar uma aplicação web completa e segura.",
            overviewParagraph2: "As funcionalidades incluem listagem e visualização de notícias no frontend, e um painel administrativo com login/logout seguro, CRUD completo (Criar, Ler, Atualizar, Deletar) para notícias, gerenciamento de imagens e sistema de mensagens de status.",
            viewCodeButton: "Ver Código no GitHub",
            techStackTitle: "Tecnologias Utilizadas",
            projectImagesTitle: "Imagens do Projeto em Ação",
            backToProjectsLink: "← Voltar para Projetos",
            projNewsTitle: "Portal de Notícias",
            projNewsDesc: "Sistema completo de notícias com área administrativa segura.",
            projEcommerceTitle: "E-commerce Básico",
            projEcommerceDesc: "Loja online com catálogo, carrinho e painel de produtos.",
            projDoceriaTitle: "Doceria Doce Sabor",
            projDoceriaDesc: "Site estático para uma doceria com design e animações.",
            projNewStaticTitle: "Site para Desbravadores",
            projNewStaticDesc: "Um site estático responsivo para um clube de Desbravadores, explorando novas técnicas de design.",
            skillBadgeTools: "Ferramentas",
            skillBadgeDatabase: "Banco de Dados",
            skillHtmlDesc: "Estruturação Web | Semântica",
            skillCssDesc: "Estilização | Responsividade",
            skillJsDesc: "Interatividade | Lógica",
            skillPhpDesc: "Web Dev | Servidor",
            skillNodeDesc: "Servidor | Aplicações Escaláveis",
            skillPythonDesc: "Web | Scripts | Automação",
            skillGitDesc: "Controle de Versão",
            skillGithubDesc: "Colaboração | Repositórios",
            skillMysqlDesc: "BD Relacional | SQL",
            viewLiveDemo: "Ver Demo Ao Vivo",
            viewCodeGithub: "Ver Código no GitHub",
            desbravadoresOverviewParagraph1: "Este projeto envolve a criação de um site para um Clube de Desbravadores, visando servir como um portal centralizado para comunicação e disseminação de informações. Busca fortalecer o relacionamento entre o clube, seus membros e a comunidade, facilitando o acesso a calendários, eventos e notícias.",
            desbravadoresOverviewParagraph2:">As funcionalidades incluem uma seção de notícias atualizáveis, uma galeria de fotos e vídeos de atividades, informações sobre o clube (história, ideais), uma área de contato e possivelmente uma seção para downloads de materiais importantes.",
            projectDetailsTitleDesbravadores: "Detalhes do Projeto: Site dos Desbravadores",
            projectDetailsSubtitleDesbravadores:"Um site informativo para o Clube de Desbravadores, com foco em apresentar atividades, notícias e informações relevantes para membros e pais.",
            projectDetailsTitleDoceria: "Detalhes do Projeto: Doceria Doce Sabor",
            projectDetailsSubtitleDoceria: "Um site estático com design inovador e cores vibrantes, criado para uma doceria artesanal.",
            doceriaOverviewParagraph1:"Este projeto demonstra a criação de um site estático focado em design e experiência visual, simulando a presença online de uma doceria artesanal. O objetivo foi conceber um layout inovador e convidativo, utilizando uma paleta de cores vibrantes inspirada em doces, tipografia elegante e animações sutis para encantar o visitante.",
            doceriaOverviewParagraph2:"O site apresenta seções como um cabeçalho moderno, área de destaque (hero) com efeito parallax, história da doceria, um menu de delícias, galeria de imagens interativa e um formulário de contato. É um exemplo de como o design front-end pode ser aplicado para criar um impacto visual forte para um nicho específico.",
            projectDetailsTitleEcommerce: "Detalhes do Projeto: E-commerce",
            projectDetailsSubtitleEcommerce: "Um sistema completo de e-commerce desenvolvido com PHP, MySQL, HTML, CSS e JavaScript, incluindo uma área administrativa segura, carrinho de compras e checkout.",
            ecommerceOverviewParagraph1: "Este projeto demonstra a criação de um sistema de e-commerce funcional, abrangendo desde a interface do usuário até um painel administrativo robusto. O objetivo foi aplicar e integrar diversas tecnologias fullstack para criar uma aplicação web completa e segura.",
            ecommerceOverviewParagraph2: "As funcionalidades incluem listagem de produtos, carrinho de compras, checkout, e um painel administrativo com login/logout seguro, CRUD completo (Criar, Ler, Atualizar, Deletar) para produtos, gerenciamento de imagens e sistema de mensagens de status.",
        },
        en: {
            pageTitle: "Gustavo Vieira | Developer",
            navIntro: "Home",
            navAbout: "About Me",
            navSkills: "Skills",
            navLearning: "Learning",
            navStack: "Stack",
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
            projSeeMore: "See more projects!",
            projSeeMoreDesc: "Access other projects.",
            projGithubTitle: "See more!",
            projGithubDesc: "Access other projects on GitHub.",
            contactTitle: "Meeting Point",
            contactInvite: "Let's explore a new project?",
            tooltipIntro: "Trail Start",
            tooltipAbout: "Base Camp",
            tooltipSkills: "Skills Map",
            tooltipLearning: "In Development",
            tooltipStack: "Favorite Stack",
            tooltipProjects: "Journey Discoveries",
            tooltipContact: "Meeting Point",
            whoPath: "Who are the Pathfinders",
            findHere: "Find out here!",
            pageTitleProjectDetails: "Project Details - My Portfolio",
            navProjectDetails: "Project Details",
            tooltipProjectDetails: "Project Details",
            projectDetailsTitle: "Project Details: News Portal",
            projectDetailsDescription: "This news portal project was developed using PHP and MySQL for the backend, offering a complete administrative panel that allows content creation, editing, and deletion. On the frontend, HTML, CSS, and JavaScript were used to ensure an accessible and lightweight user experience. The architecture was designed to facilitate article and category management, providing a robust platform for real-time news publishing.",
            feature1: "Authentication and authorization system for administrators.",
            feature2: "CRUD (Create, Read, Update, Delete) for news and categories.",
            feature3: "Display news by category and search.",
            feature4: "Responsive design for multiple devices.",
            feature5: "Optimization for accessibility and fast loading.",
            projectDetailsLinks: "Access the project on GitHub or see the demo (if available).",
            backToProjects: "Back to Projects",
            viewMore: "View more",
            projectDetailsTitleNews: "Project Details: News Portal",
            projectDetailsSubtitleNews: "A complete news system developed with PHP, MySQL, HTML, CSS, and JavaScript, including a secure administrative area.",
            overviewTitle: "Overview",
            overviewParagraph1: "This project demonstrates the construction of a functional news portal, covering everything from the public interface to a robust management panel. The goal was to apply and integrate various fullstack technologies to create a complete and secure web application.",
            overviewParagraph2: "Features include news listing and viewing on the frontend, and an administrative panel with secure login/logout, full CRUD (Create, Read, Update, Delete) for news articles, image management, and a status message system.",
            viewCodeButton: "View Code on GitHub",
            techStackTitle: "Technologies Used",
            projectImagesTitle: "Project Images in Action",
            backToProjectsLink: "← Back to Projects",
            projNewsTitle: "News Portal",
            projNewsDesc: "Complete news system with secure admin area.",
            projEcommerceTitle: "Basic E-commerce",
            projEcommerceDesc: "Online store with catalog, cart, and product panel.",
            projDoceriaTitle: "Sweet Flavor Bakery",
            projDoceriaDesc: "Static website with design and animations.",
            projNewStaticTitle: "New Static Project",
            projNewStaticDesc: "A responsive static website for a pathfindres club, exploring new design techniques.",
            skillBadgeTools: "Tools",
            skillBadgeDatabase: "Database",
            skillHtmlDesc: "Web Structuring | Semantics",
            skillCssDesc: "Styling | Responsiveness",
            skillJsDesc: "Interactivity | Logic",
            skillPhpDesc: "Web Dev | Server",
            skillNodeDesc: "Server | Scalable Applications",
            skillPythonDesc: "Web | Scripts | Automation",
            skillGitDesc: "Version Control",
            skillGithubDesc: "Collaboration | Repositories",
            skillMysqlDesc: "Relational DB | SQL",
            viewLiveDemo: "View Live Demo",
            viewCodeGithub: "View Code on GitHub",
            desbravadoresOverviewParagraph1:"This project involves creating a website for a Pathfinders Club, aiming to serve as a centralized portal for communication and information dissemination. It seeks to strengthen the relationship between the club, its members, and the community, facilitating access to calendars, events, and news",
            desbravadoresOverviewParagraph2: "Features include an updatable news section, a gallery of photos and videos from activities, information about the club (history, ideals), a contact area, and possibly a section for downloading important materials.",
            projectDetailsTitleDesbravadores: "Project Details: Pathfinders Club Website",
            projectDetailsSubtitleDesbravadores: "An informative website for the Pathfinders Club, focusing on presenting activities, news, and relevant information for members and parents.",
            projectDetailsTitleDoceria: "Project Details: Sweet Flavor Bakery",
            projectDetailsSubtitleDoceria: "A static website with innovative design and vibrant colors, created for an artisanal bakery.",
            doceriaOverviewParagraph1: "This project demonstrates the creation of a static website focused on design and visual experience, simulating the online presence of an artisanal bakery. The goal was to conceive an innovative and inviting layout, using a vibrant color palette inspired by sweets, elegant typography, and subtle animations to delight the visitor.",
            doceriaOverviewParagraph2: "The website features sections such as a modern header, a hero area with parallax effect, the bakery's story, a menu of delights, an interactive image gallery, and a contact form. It is an example of how front-end design can be applied to create a strong visual impact for a specific niche.",      
            projectDetailsTitleEcommerce: "Project Details: E-commerce",
            projectDetailsSubtitleEcommerce: "A complete e-commerce system developed with PHP, MySQL, HTML, CSS, and JavaScript, including a secure administrative area, shopping cart, and checkout.",
            ecommerceOverviewParagraph1: "This project demonstrates the creation of a functional e-commerce system, covering everything from the user interface to a robust administrative panel. The goal was to apply and integrate various fullstack technologies to create a complete and secure web application.",
            ecommerceOverviewParagraph2: "Features include product listing, shopping cart, checkout, and an administrative panel with secure login/logout, full CRUD (Create, Read, Update, Delete) for products, image management, and a status message system."
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

    if (menuToggleBtn && navWrapper) {
        menuToggleBtn.addEventListener('click', () => {
            navWrapper.classList.toggle('open');
            menuToggleBtn.classList.toggle('active-menu');
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navWrapper.classList.contains('open')) {
                navWrapper.classList.remove('open');
                menuToggleBtn.classList.remove('active-menu');
            }
        });
    });

    function updateActiveNavItem() {
        const headerHeight = header.offsetHeight;
        let currentActiveSectionId = 'intro';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - headerHeight - 1;
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


    const galleryThumbnails = document.querySelectorAll('.gallery-thumbnail');
    const galleryModal = document.getElementById('galleryModal');
    const carouselInnerImg = galleryModal.querySelector('.carousel-inner img');
    const closeModalButton = galleryModal.querySelector('.close-button');
    const prevButton = galleryModal.querySelector('.prev-button');
    const nextButton = galleryModal.querySelector('.next-button');
    const projectGalleryFullImages = window.currentProjectImages || [];

    let currentGalleryImageIndex = 0; // Índice da imagem atualmente exibida no modal

    function openGalleryModal(index) {
        if (!projectGalleryFullImages || projectGalleryFullImages.length === 0) {
            console.error("Array de imagens do projeto (projectGalleryFullImages) não definido ou vazio.");
            return;
        }
        currentGalleryImageIndex = index;
        carouselInnerImg.src = projectGalleryFullImages[currentGalleryImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentGalleryImageIndex + 1}`;
        galleryModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Função para fechar o modal
    function closeGalleryModal() {
        galleryModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Função para navegar para a próxima imagem
    function nextGalleryImage() {
        if (projectGalleryFullImages.length === 0) return;
        currentGalleryImageIndex = (currentGalleryImageIndex + 1) % projectGalleryFullImages.length;
        carouselInnerImg.src = projectGalleryFullImages[currentGalleryImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentGalleryImageIndex + 1}`;
    }

    // Função para navegar para a imagem anterior
    function prevGalleryImage() {
        if (projectGalleryFullImages.length === 0) return;
        currentGalleryImageIndex = (currentGalleryImageIndex - 1 + projectGalleryFullImages.length) % projectGalleryFullImages.length;
        carouselInnerImg.src = projectGalleryFullImages[currentGalleryImageIndex];
        carouselInnerImg.alt = `Imagem Ampliada ${currentGalleryImageIndex + 1}`;
    }

    galleryThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function(event) {
            event.preventDefault();
            const index = parseInt(this.getAttribute('data-index'));
            openGalleryModal(index);
        });
    });

    closeModalButton.addEventListener('click', closeGalleryModal);
    prevButton.addEventListener('click', prevGalleryImage);
    nextButton.addEventListener('click', nextGalleryImage);

    galleryModal.addEventListener('click', function(event) {
        if (event.target === galleryModal) {
            closeGalleryModal();
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && galleryModal.style.display === 'flex') {
            closeGalleryModal();
        }
    });
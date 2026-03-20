  const projects = [
            {
                title: "Movie Search App",
                description: "Advanced movie search platform with real-time API integration, featuring detailed information, ratings, and stunning visuals for every film.",
                url: "https://movie-search-app-six-lime.vercel.app",
                tags: ["javascript", "API", "UI/UX"]
            },
            {
                title: "Weather Dashboard",
                description: "Real-time weather application providing accurate forecasts, humidity levels, wind speed data, and interactive weather maps for any location worldwide.",
                url: "https://weather-app-three-psi-44.vercel.app",
                tags: ["JavaScript", "API", "CSS3"]
            },
            {
                title: "Global News Hub",
                description: "Stay informed with breaking news from around the world. Features categorized content and a clean reading experience.",
                url: "https://news-app-tawny-iota.vercel.app/",
                tags: ["API", "JavaScript", "Responsive"]
            },
            {
                title: "Movie Streaming App",
                description: "High-performance movie streaming platform with a stunning interface, customized video player, and real-time movie list management.",
                url: "#",
                tags: ["React", "Express", "MongoDB", "Video"]
            },
            {
                title: "Real-time Messaging App",
                description: "Interactive real-time chat application allowing users to communicate instantly, featuring persistent message history.",
                url: "#",
                tags: ["JavaScript", "WebSockets", "UI/UX"]
            },
            {
                title: "Tic Tac Toe",
                description: "Modern take on the classic Tic Tac Toe game featuring smooth animations, score tracking, and an intelligent opponent.",
                url: "#",
                tags: ["JavaScript", "Game Logic", "Animation"]
            },
            {
                title: "Football Quiz",
                description: "Engaging football trivia application with timer functionality, score tracking, and instant feedback for an immersive experience.",
                url: "#",
                tags: ["Interactive", "JavaScript", "UI"]
            }
        ];

        const projectGrid = document.getElementById('project-grid');
        const yearElement = document.getElementById('year');
        const scrollProgress = document.getElementById('scrollProgress');

        function renderProjects() {
            if (!projectGrid) return;

            projectGrid.innerHTML = projects.map((project, index) => `
                <div class="project-card" style="animation-delay: ${index * 0.15}s;">
                    <a href="${project.url}" target="_blank" rel="noopener" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; height: 100%;">
                        <div class="project-image">
                            <i class="ph-fill ph-browser"></i>
                        </div>
                        <div class="project-info">
                            <h3 class="project-title">${project.title}</h3>
                            <p class="project-desc">${project.description}</p>
                            <div class="project-tags">
                                ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                            </div>
                            <span class="project-link">
                                Explore Project
                                <i class="ph ph-arrow-right"></i>
                            </span>
                        </div>
                    </a>
                </div>
            `).join('');
        }

        function updateScrollProgress() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / scrollHeight) * 100;
            scrollProgress.style.transform = `scaleX(${progress / 100})`;
        }

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    
                    document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
                    this.classList.add('active');
                }
            });
        });

        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }

        window.addEventListener('scroll', updateScrollProgress);
        window.addEventListener('load', () => {
            renderProjects();
            updateScrollProgress();
        });
// Resume Rendering Script

// Create toggle button for sections with collapsible items
function createToggleButton(sectionId, totalItems, defaultMaxItems, sectionColor) {
    if (totalItems <= defaultMaxItems) {
        return null; // No need for toggle if items are less than or equal to max
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.className = `section-toggle-btn section-toggle-${sectionColor}`;
    toggleBtn.setAttribute('data-expanded', 'false');
    toggleBtn.innerHTML = `
        <span class="toggle-text">Show More</span>
        <i class="fas fa-chevron-down"></i>
    `;

    toggleBtn.addEventListener('click', () => {
        const container = document.getElementById(`${sectionId}-list`);
        const isExpanded = toggleBtn.getAttribute('data-expanded') === 'true';

        if (isExpanded) {
            // Collapse
            const items = container.children;
            for (let i = defaultMaxItems; i < items.length; i++) {
                items[i].classList.remove('visible');
                items[i].classList.add('hidden');
            }
            toggleBtn.setAttribute('data-expanded', 'false');
            toggleBtn.innerHTML = `
                <span class="toggle-text">Show All</span>          
                <i class="fas fa-chevron-down"></i>
            `;
        } else {
            // Expand
            const items = container.children;
            for (let i = defaultMaxItems; i < items.length; i++) {
                items[i].classList.remove('hidden');
                items[i].classList.add('visible');
            }
            toggleBtn.setAttribute('data-expanded', 'true');
            toggleBtn.innerHTML = `
                <span class="toggle-text">Collapse</span>             
               <i class="fas fa-chevron-up"></i>
            `;
        }
    });

    return toggleBtn;
}

// Render personal information
function renderPersonalInfo() {
    const { personal } = resumeData;

    // Name
    document.getElementById('name').textContent = personal.name;

    // Profile Image
    if (personal.profileImage) {
        document.getElementById('profile-img').src = personal.profileImage;
    }

    // Contact Info
    const contactContainer = document.getElementById('contact-info');
    personal.contacts.forEach(contact => {
        const contactItem = document.createElement('a');
        contactItem.className = 'contact-item';
        contactItem.href = contact.link;
        contactItem.innerHTML = `
            <i class="${contact.icon}"></i>
            <span>${contact.value}</span>
        `;
        contactContainer.appendChild(contactItem);
    });

    // Supervisor section removed as requested

    // Bio
    const bioContainer = document.getElementById('bio');
    bioContainer.innerHTML = personal.bio;
    if (personal.experience) {
        const experienceP = document.createElement('p');
        experienceP.innerHTML = personal.experience;

        bioContainer.appendChild(experienceP);
    }

    // Research Interests
    const researchContainer = document.getElementById('research-interests');
    researchContainer.innerHTML = personal.researchInterests;
}

// Render competitions
function renderCompetitions() {
    const { competitions, sectionSettings } = resumeData;
    const container = document.getElementById('competitions-list');
    const defaultMaxItems = sectionSettings.competitions.defaultMaxItems;

    competitions.forEach((comp, index) => {
        const item = document.createElement('div');
        item.className = 'competition-item';

        // Add hidden class if beyond default max items
        if (index >= defaultMaxItems) {
            item.classList.add('hidden');
        }

        const content = document.createElement('div');
        content.className = 'competition-content';

        // Header
        const header = document.createElement('div');
        header.className = 'competition-header';

        const title = document.createElement('h3');
        title.className = 'competition-title';
        title.textContent = comp.title;

        // 确定名次对应的CSS类
        let awardClass = 'award-other';
        if (comp.award.includes('1st') || comp.award.includes('第一') || comp.award.includes('冠军')) {
            awardClass = 'award-first';
        } else if (comp.award.includes('2nd') || comp.award.includes('第二') || comp.award.includes('亚军')) {
            awardClass = 'award-second';
        } else if (comp.award.includes('3rd') || comp.award.includes('第三') || comp.award.includes('季军')) {
            awardClass = 'award-third';
        }

        const meta = document.createElement('div');
        meta.className = 'competition-meta';
        meta.innerHTML = `
            <span class="award ${awardClass}">${comp.award}</span>
            <span>·</span>
            <span>${comp.year}</span>
            <span>·</span>
            <span>${comp.category}</span>
            ${comp.links.length > 0 ? '<span>·</span>' : ''}
            ${comp.links.map(link => `<a href="${link.url}" class="link-item" target="_blank">[${link.text}]</a>`).join(' ')}
        `;

        header.appendChild(title);
        header.appendChild(meta);

        // Description
        const description = document.createElement('div');
        description.className = 'competition-description';
        description.textContent = comp.description;

        content.appendChild(header);
        content.appendChild(description);

        item.appendChild(content);

        // Image
        if (comp.image) {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'competition-image';
            const img = document.createElement('img');
            img.src = comp.image;
            img.alt = comp.title;
            img.addEventListener('click', () => {
                openImageModal(comp.image, comp.title);
            });
            imageDiv.appendChild(img);
            item.appendChild(imageDiv);
        }

        container.appendChild(item);
    });

    // Add toggle button if needed
    const section = document.getElementById('competitions');
    const toggleBtn = createToggleButton('competitions', competitions.length, defaultMaxItems, 'competitions');
    if (toggleBtn) {
        section.appendChild(toggleBtn);
        section.classList.add('has-toggle');
    }
}

// Render publications
function renderPublications() {
    const { publications, sectionSettings } = resumeData;
    const container = document.getElementById('publications-list');
    const defaultMaxItems = sectionSettings.publications.defaultMaxItems;

    publications.forEach((pub, index) => {
        const item = document.createElement('div');
        item.className = 'publication-item';

        // Add hidden class if beyond default max items
        if (index >= defaultMaxItems) {
            item.classList.add('hidden');
        }

        const content = document.createElement('div');
        content.className = 'publication-content';

        // Title with hover abstract
        const title = document.createElement('h3');
        title.className = 'publication-title';
        title.textContent = pub.title;

        // Add abstract as tooltip if exists and not empty
        if (pub.abs && pub.abs.trim() !== '') {
            title.setAttribute('data-abstract', pub.abs);
            title.classList.add('has-abstract');
        }

        // Venue with links
        const venue = document.createElement('div');
        venue.className = 'publication-venue';
        venue.innerHTML = `
            <span>${pub.venue}</span>
            ${pub.links.length > 0 ? '<span>·</span>' : ''}
            ${pub.links.map(link => `<a href="${link.url}" class="link-item" target="_blank">[${link.text}]</a>`).join(' ')}
        `;

        // Authors
        const authors = document.createElement('div');
        authors.className = 'publication-authors';
        const authorText = pub.authors.map(author => {
            // Bold the first author if it matches the resume owner
            if (author === resumeData.personal.name) {
                return `<strong>${author}</strong>`;
            }
            return author;
        }).join(', ');
        authors.innerHTML = authorText + (pub.authorNote ? `, ${pub.authorNote}` : '');

        content.appendChild(title);
        content.appendChild(venue);
        content.appendChild(authors);

        item.appendChild(content);

        // Image
        if (pub.image) {
            const imageDiv = document.createElement('div');
            imageDiv.className = 'publication-image';
            const img = document.createElement('img');
            img.src = pub.image;
            img.alt = pub.title;
            img.addEventListener('click', () => {
                openImageModal(pub.image, pub.title);
            });
            imageDiv.appendChild(img);
            item.appendChild(imageDiv);
        }

        container.appendChild(item);
    });

    // Add toggle button if needed
    const section = document.getElementById('publications');
    const toggleBtn = createToggleButton('publications', publications.length, defaultMaxItems, 'publications');
    if (toggleBtn) {
        section.appendChild(toggleBtn);
        section.classList.add('has-toggle');
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'light') {
        icon.className = 'fas fa-moon';
    } else {
        icon.className = 'fas fa-sun';
    }
}

// 动态调整栏目间距 - 根据show more按钮存在与否调整margin
function adjustSectionMargins() {
    const sections = document.querySelectorAll('.section');
    
    for (let i = 0; i < sections.length - 1; i++) {
        const currentSection = sections[i];
        const nextSection = sections[i + 1];
        
        // 检查当前栏目是否有show more按钮
        const hasToggle = currentSection.classList.contains('has-toggle');
        
        // 移除之前的间距类
        nextSection.classList.remove('compact-margin', 'normal-margin');
        
        if (hasToggle) {
            // 当前栏目有show more，下一个栏目使用紧凑间距
            nextSection.classList.add('compact-margin');
        } else {
            // 当前栏目没有show more，下一个栏目使用正常间距
            nextSection.classList.add('normal-margin');
        }
    }
}

// Image modal functionality
function openImageModal(imageSrc, caption) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalCaption = document.getElementById('modal-caption');

    modalImage.src = imageSrc;
    modalCaption.textContent = caption;

    // Use setTimeout to allow CSS transition
    modal.style.display = 'flex';
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);

    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');

    modal.classList.remove('active');
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    // Restore body scroll
    document.body.style.overflow = '';
}

function initImageModal() {
    const modal = document.getElementById('image-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalBackdrop = document.querySelector('.modal-backdrop');

    // Close modal when clicking close button
    modalClose.addEventListener('click', closeImageModal);

    // Close modal when clicking backdrop
    modalBackdrop.addEventListener('click', closeImageModal);

    // Close modal when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeImageModal();
        }
    });

    // Prevent closing when clicking on the image itself
    const modalImage = document.getElementById('modal-image');
    modalImage.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

// Render open source projects
function renderOpenSourceProjects() {
    const { openSourceProjects, sectionSettings } = resumeData;
    const container = document.getElementById('open-source-list');
    const defaultMaxItems = sectionSettings.openSourceProjects.defaultMaxItems;

    openSourceProjects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = 'project-item';

        // Add hidden class if beyond default max items
        if (index >= defaultMaxItems) {
            item.classList.add('hidden');
        }

        // Icon
        const icon = document.createElement('div');
        icon.className = 'project-icon';

        // Check if icon is an SVG path or emoji, or empty
        if (project.icon && project.icon.endsWith('.svg')) {
            const img = document.createElement('img');
            img.src = project.icon;
            img.alt = project.title;
            icon.appendChild(img);
        } else if (project.icon && project.icon.trim() !== '') {
            icon.textContent = project.icon;
        } else {
            // Default icon if not configured
            icon.textContent = '📦';
        }

        // Content
        const content = document.createElement('div');
        content.className = 'project-content';

        // Header
        const header = document.createElement('div');
        header.className = 'project-header';

        const title = document.createElement('a');
        title.className = 'project-title';
        title.href = project.link || '#';
        title.target = '_blank';
        title.textContent = project.title;

        const role = document.createElement('span');
        role.className = 'project-role';
        role.textContent = `[${project.role}]`;

        header.appendChild(title);
        header.appendChild(role);

        // Star badge
        const badge = document.createElement('div');
        badge.className = 'project-badge';
        const starCount = project.star || '#';
        badge.innerHTML = `<i class="fas fa-star"></i> ${starCount}`;

        // Description
        const description = document.createElement('div');
        description.className = 'project-description';
        description.textContent = project.description;

        // Tags
        const tags = document.createElement('div');
        tags.className = 'project-tags';
        project.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'project-tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });

        content.appendChild(header);
        content.appendChild(description);
        content.appendChild(tags);

        item.appendChild(icon);
        item.appendChild(content);
        item.appendChild(badge);

        container.appendChild(item);
    });

    // Add toggle button if needed
    const section = document.getElementById('open-source');
    const toggleBtn = createToggleButton('open-source', openSourceProjects.length, defaultMaxItems, 'projects');
    if (toggleBtn) {
        section.appendChild(toggleBtn);
        section.classList.add('has-toggle');
    }
}

// Render skills
function renderSkills() {
    const { skills } = resumeData;
    const container = document.getElementById('skills-list');

    skills.forEach(skill => {
        const item = document.createElement('div');
        item.className = 'skill-item';

        const iconContainer = document.createElement('div');
        iconContainer.className = 'skill-icon';

        // Check if icon is an SVG path or emoji
        if (skill.icon.endsWith('.svg')) {
            const img = document.createElement('img');
            img.src = skill.icon;
            img.alt = skill.name;
            iconContainer.appendChild(img);
        } else {
            iconContainer.textContent = skill.icon;
        }

        const name = document.createElement('div');
        name.className = 'skill-name';
        name.textContent = skill.name;

        item.appendChild(iconContainer);
        item.appendChild(name);

        container.appendChild(item);
    });
}

// Render technical articles
function renderTechnicalArticles() {
    const { technicalArticles, sectionSettings } = resumeData;
    const container = document.getElementById('articles-list');
    const defaultMaxItems = sectionSettings.technicalArticles.defaultMaxItems;

    technicalArticles.forEach((article, index) => {
        const item = document.createElement('div');
        item.className = 'article-item';

        // Add hidden class if beyond default max items
        if (index >= defaultMaxItems) {
            item.classList.add('hidden');
        }

        // Title with platform icon
        const titleContainer = document.createElement('div');
        titleContainer.className = 'article-title-container';

        const title = document.createElement('h3');
        title.className = 'article-title';

        // If link exists, make title clickable
        if (article.link) {
            const titleLink = document.createElement('a');
            titleLink.href = article.link;
            titleLink.target = '_blank';
            titleLink.textContent = article.title;
            titleLink.className = 'article-title-link';
            title.appendChild(titleLink);
        } else {
            title.textContent = article.title;
        }

        titleContainer.appendChild(title);

        // Add platform icon if exists
        if (article.platformIcon) {
            const platformIcon = document.createElement('img');
            platformIcon.src = article.platformIcon;
            platformIcon.alt = article.platform || 'Platform';
            platformIcon.className = 'article-platform-icon';
            platformIcon.title = article.platform || '';
            titleContainer.appendChild(platformIcon);
        }

        // Subtitle
        const subtitle = document.createElement('div');
        subtitle.className = 'article-subtitle';
        subtitle.textContent = article.subtitle;

        // Tags and Date container
        const tagsDateContainer = document.createElement('div');
        tagsDateContainer.className = 'article-tags-date-container';

        // Tags
        const tags = document.createElement('div');
        tags.className = 'article-tags';
        article.tags.forEach(tag => {
            const tagSpan = document.createElement('span');
            tagSpan.className = 'article-tag';
            tagSpan.textContent = tag;
            tags.appendChild(tagSpan);
        });

        // Date
        const date = document.createElement('span');
        date.className = 'article-date';
        date.textContent = article.date;

        tagsDateContainer.appendChild(tags);
        tagsDateContainer.appendChild(date);

        item.appendChild(titleContainer);
        item.appendChild(subtitle);
        item.appendChild(tagsDateContainer);

        container.appendChild(item);
    });

    // Add toggle button if needed
    const section = document.getElementById('articles');
    const toggleBtn = createToggleButton('articles', technicalArticles.length, defaultMaxItems, 'articles');
    if (toggleBtn) {
        section.appendChild(toggleBtn);
        section.classList.add('has-toggle');
    }
}

// Initialize the page
function init() {
    renderPersonalInfo();
    renderCompetitions();
    renderPublications();
    renderSkills();
    renderOpenSourceProjects();
    renderTechnicalArticles();
    initThemeToggle();
    initImageModal();
    
    // 动态调整栏目间距
    adjustSectionMargins();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}


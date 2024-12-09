const siteConfig = {
    title: 'Emil Karlsson',
    subtitle: 'Based in Stockholm, Sweden',
    description: 'Emil Karlsson Playground Site - Explore data engineering, project management, and hockey analytics.',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme',
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Writings', href: '/blog' }, // Updated navigation link
        { text: 'Projects', href: '/projects' },
        { text: 'Tags', href: '/tags' },
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Terms', href: '/terms' },
    ],
    socialLinks: [
        { text: 'Goodreads', href: 'https://www.goodreads.com/emilingemarkarlsson' },
        { text: 'Github', href: 'https://github.com/emilingemarkarlsson' },
        { text: 'Email', href: '/contact' },
    ],
    experience: {
        technical: [
            { label: 'Data Engineering', url: '/tags/data-engineering' },
            { label: 'Hockey Analytics', url: '/tags/hockey-analytics' },
            { label: 'B2B Commerce', url: '/tags/b2b-commerce' },
            { label: 'Infrastructure Management', url: '/tags/infrastructure-management' },
            { label: 'Data Analytics', url: '/tags/data-analytics' },
            { label: 'GDPR and Privacy', url: '/tags/gdpr-and-privacy' },
        ],
        leadership: [
            { label: 'Customer Support Management', url: '/tags/customer-support-management' },
            { label: 'Infrastructure Management', url: '/tags/infrastructure-management' },
            { label: 'Project Management', url: '/tags/project-management' },
            { label: 'Hockey Coaching', url: 'https://www.eliteprospects.com/staff/4044/emil-karlsson' },
        ],
    },
    skills: [
        // Skills section remains unchanged
    ],
    hero: {
        title: '',
        text: `
            <p>I’m Emil Karlsson, a Project Manager and Data Engineer based in Stockholm, Sweden, passionate about solving complex problems.</p>
            <p>I specialize in data pipelines, analytics, and team leadership.</p>
            <p>I thrive on collaboration and creativity, combining technical expertise with innovative thinking to deliver impactful solutions.</p>
            <p>Outside work, I enjoy analyzing hockey stats, coaching on the rink, and exploring the latest tech trends.</p>
        `,
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk',
        },
    },
    postsPerPage: 8,
    projectsPerPage: 8,
};

export default siteConfig;
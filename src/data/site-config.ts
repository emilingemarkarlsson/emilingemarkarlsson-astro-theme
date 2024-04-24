export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Emil I Karlsson',
    subtitle: '',
    description: 'Emil Karlsson Playground Site',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Terms',
            href: '/terms'
        },
    ],
    socialLinks: [
        {
            text: 'Goodreads',
            href: 'https://www.goodreads.com/emilingemarkarlsson'
        },
        {
            text: 'Github',
            href: 'https://github.com/emilingemarkarlsson'
        },
    ],
    hero: {
        title: 'Welcome to My Playground!',
        text: "Hello, I’m Emil Karlsson, a Project Manager. My passion lies in harnessing data, analytics, and AI to drive informed decisions in my daily work.",
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }

        ]
    },
    /*
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    */
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;

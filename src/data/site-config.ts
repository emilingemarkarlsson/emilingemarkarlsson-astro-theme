const siteConfig: SiteConfig = {
    title: 'Emil I Karlsson',
    subtitle: '',
    description: 'Emil Karlsson Playground Site',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
        { text: 'Projects', href: '/projects' },
        // { text: 'Blog', href: '/blog' }, // Commented out to hide the Blog
        { text: 'Tags', href: '/tags' }
    ],
    footerNavLinks: [
        { text: 'About', href: '/about' },
        { text: 'Contact', href: '/contact' },
        { text: 'Terms', href: '/terms' }
    ],
    socialLinks: [
        { text: 'Goodreads', href: 'https://www.goodreads.com/emilingemarkarlsson' },
        { text: 'Github', href: 'https://github.com/emilingemarkarlsson' },
        { text: 'Email', href: 'mailto:emilkarlsson@me.com' }
    ],
    experience: {
        technical: [
            'Data Engineering',
            'Hockey Analytics',
            'B2B Commerce',
            'Infrastructure Management',
            'GDPR and Privacy'
        ],
        leadership: [
            'Customer Support Leader',
            'Infrastructure Service Manager',
            'Project Management',
            'Ice Hockey Coach'
        ]
    },
    skills: [
        {
            category: 'Programming Languages',
            items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'DAX']
        },
        {
            category: 'Cloud Platforms',
            items: ['Azure', 'AWS', 'GCP', 'Heroku', 'Netlify']
        },
        {
            category: 'Data Engineering Tools',
            items: [
                'Databricks', 'MongoDB', 'Azure Data Factory', 'Looker Studio',
                'Power BI', 'Datalabs', 'Snowflake', 'PostgreSQL', 'MySQL',
                'Spark', 'Kafka', 'Airflow', 'Mage AI', 'Prefect', 'Luigi',
                'DuckDB', 'MotherDuck'
            ]
        },
        {
            category: 'Data Catalog Tools',
            items: ['DataHub', 'Amundsen', 'Alation', 'Atlan']
        },
        {
            category: 'Prototyping Tools',
            items: ['Figma', 'Canva', 'Maze']
        },
        {
            category: 'Visualization Tools',
            items: ['Rill', 'Power BI', 'Looker Studio', 'Python Graphics']
        },
        {
            category: 'Analytics Tools',
            items: ['Google Analytics', 'Microsoft Clarity', 'Maze']
        },
        {
            category: 'Automation & Collaboration Tools',
            items: ['Power Automate', 'Trello', 'JIRA']
        },
        {
            category: 'AI Tools',
            items: [
                'GitHub Copilot', 'ChatGPT', 'Llama', 'Gemini AI', 'Hugging Face',
                'TensorFlow', 'PyTorch', 'Spark MLlib', 'AWS Sagemaker',
                'Google Cloud AutoML', 'Azure Machine Learning AutoML',
                'DataRobot', 'Tabnine', 'Kite', 'OpenAI GPT API',
                'MidJourney', 'DALL·E', 'Runway', 'Notion AI',
                'Slack GPT', 'Otter.ai', 'UiPath AI Center', 'Azure Cognitive Services',
                'Vanna AI'
            ]
        }
    ],
    hero: {
        title: 'Welcome to My Playground!',
        text: "Welcome! I’m Emil Karlsson, driven by succeeding together with teams that have fun along the way. I love working with data and modern technology—sometimes even building the tools myself.",
        image: {
            src: '/hero.jpg',
            alt: 'A person sitting at a desk'
        }
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
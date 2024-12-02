const siteConfig = {
    title: 'Emil I Karlsson',
    subtitle: '',
    description: 'Emil Karlsson Playground Site',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme',
    },
    headerNavLinks: [
        { text: 'Home', href: '/' },
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
        { text: 'Email', href: 'mailto:emilkarlsson@me.com' },
    ],
    experience: {
        technical: [
            'Data Engineering',
            'Hockey Analytics',
            'B2B Commerce',
            'Infrastructure Management',
            'GDPR and Privacy',
        ],
        leadership: [
            'Customer Support Leader',
            'Infrastructure Service Manager',
            'Project Management',
            'Ice Hockey Coach',
        ],
    },
    skills: [
        {
            category: 'Programming Languages',
            items: [
                { text: 'Python', url: 'https://www.python.org/' },
                { text: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'TypeScript', url: 'https://www.typescriptlang.org/' },
                { text: 'SQL', url: 'https://www.w3schools.com/sql/' },
                { text: 'DAX', url: 'https://learn.microsoft.com/en-us/dax/' },
            ],
        },
        {
            category: 'Cloud Platforms',
            items: [
                { text: 'Azure', url: 'https://azure.microsoft.com/' },
                { text: 'AWS', url: 'https://aws.amazon.com/' },
                { text: 'GCP', url: 'https://cloud.google.com/' },
                { text: 'Heroku', url: 'https://www.heroku.com/' },
                { text: 'Netlify', url: 'https://www.netlify.com/' },
            ],
        },
        {
            category: 'Data Engineering Tools',
            items: [
                { text: 'Databricks', url: 'https://www.databricks.com/' },
                { text: 'MongoDB', url: 'https://www.mongodb.com/' },
                { text: 'Azure Data Factory', url: 'https://azure.microsoft.com/en-us/products/data-factory/' },
                { text: 'Looker Studio', url: 'https://lookerstudio.google.com/' },
                { text: 'Power BI', url: 'https://powerbi.microsoft.com/' },
                { text: 'Datalabs', url: 'https://cloud.google.com/data-lab' },
                { text: 'Snowflake', url: 'https://www.snowflake.com/' },
                { text: 'PostgreSQL', url: 'https://www.postgresql.org/' },
                { text: 'MySQL', url: 'https://www.mysql.com/' },
                { text: 'Spark', url: 'https://spark.apache.org/' },
                { text: 'Airflow', url: 'https://airflow.apache.org/' },
                { text: 'Mage AI', url: 'https://www.mage.ai/' },
                { text: 'DuckDB', url: 'https://duckdb.org/' },
                { text: 'MotherDuck', url: 'https://motherduck.com/' },
            ],
        },
        {
            category: 'Data Catalog Tools',
            items: [
                { text: 'DataHub', url: 'https://datahubproject.io/' },
                { text: 'Amundsen', url: 'https://www.amundsen.io/' },
                { text: 'Alation', url: 'https://www.alation.com/' },
                { text: 'Atlan', url: 'https://atlan.com/' },
            ],
        },
        {
            category: 'Prototyping Tools',
            items: [
                { text: 'Figma', url: 'https://www.figma.com/' },
                { text: 'Canva', url: 'https://www.canva.com/' },
                { text: 'Maze', url: 'https://maze.co/' },
            ],
        },
        {
            category: 'Visualization Tools',
            items: [
                { text: 'Rill', url: 'https://rilldata.com/' },
                { text: 'Power BI', url: 'https://powerbi.microsoft.com/' },
                { text: 'Looker Studio', url: 'https://lookerstudio.google.com/' },
                { text: 'Python Graphics', url: 'https://matplotlib.org/' },
            ],
        },
        {
            category: 'Analytics Tools',
            items: [
                { text: 'Google Analytics', url: 'https://analytics.google.com/' },
                { text: 'Microsoft Clarity', url: 'https://clarity.microsoft.com/' },
                { text: 'Maze', url: 'https://maze.co/' },
            ],
        },
        {
            category: 'Automation & Collaboration Tools',
            items: [
                { text: 'Power Automate', url: 'https://powerautomate.microsoft.com/' },
                { text: 'Trello', url: 'https://trello.com/' },
                { text: 'JIRA', url: 'https://www.atlassian.com/software/jira' },
            ],
        },
        {
            category: 'AI Tools',
            items: [
                { text: 'GitHub Copilot', url: 'https://github.com/features/copilot' },
                { text: 'ChatGPT', url: 'https://chat.openai.com/' },
                { text: 'Llama', url: 'https://ai.facebook.com/research/llama/' },
                { text: 'Gemini AI', url: 'https://gemini.google.com/' },
                { text: 'Hugging Face', url: 'https://huggingface.co/' },
                { text: 'TensorFlow', url: 'https://www.tensorflow.org/' },
                { text: 'PyTorch', url: 'https://pytorch.org/' },
                { text: 'Spark MLlib', url: 'https://spark.apache.org/mllib/' },
                { text: 'AWS Sagemaker', url: 'https://aws.amazon.com/sagemaker/' },
                { text: 'Google Cloud AutoML', url: 'https://cloud.google.com/automl' },
                { text: 'Azure Machine Learning AutoML', url: 'https://azure.microsoft.com/en-us/products/machine-learning/' },
                { text: 'DataRobot', url: 'https://www.datarobot.com/' },
                { text: 'Tabnine', url: 'https://www.tabnine.com/' },
                { text: 'Kite', url: 'https://www.kite.com/' },
                { text: 'OpenAI GPT API', url: 'https://openai.com/api/' },
                { text: 'MidJourney', url: 'https://www.midjourney.com/' },
                { text: 'DALL·E', url: 'https://openai.com/dall-e/' },
                { text: 'Runway', url: 'https://runwayml.com/' },
                { text: 'Notion AI', url: 'https://www.notion.so/product/ai' },
                { text: 'Slack GPT', url: 'https://slack.com/slack-gpt' },
                { text: 'Otter.ai', url: 'https://otter.ai/' },
                { text: 'UiPath AI Center', url: 'https://www.uipath.com/product/ai-center' },
                { text: 'Azure Cognitive Services', url: 'https://azure.microsoft.com/en-us/products/cognitive-services/' },
                { text: 'Vanna AI', url: 'https://vanna.ai/' },
            ],
        },
    ],
    hero: {
        title: '',
        text: `
            <p>I’m Emil Karlsson, a Project Manager and Data Engineer passionate about solving complex problems.</p>
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
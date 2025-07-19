export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: {
        name: string;
        image?: string;
    };
    date: string;
    image: string;
    category: string;
}

export const blogPosts: BlogPost[] = [
    {
        id: "project-updates-case-studies",
        title: "Project Updates and Case Studies: How to construct standard buildingd",
        excerpt: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        content: `
        <h2>Project Overview</h2>
        <p>In-depth analysis of our latest construction projects and methodologies...</p>
        <h2>Key Findings</h2>
        <p>Our research has shown significant improvements in construction efficiency...</p>
        <h2>Future Implications</h2>
        <p>These findings suggest several important developments for the future...</p>
      `,
        author: {
            name: "Ben Oluwole",
            image: "/authors/ben-oluwole.jpg"
        },
        date: "January 2, 2024",
        image: "/blogs/construction-workers.jpg",
        category: "Case Studies"
    },
    {
        id: "industry-news-building-materials",
        title: "Industry News: Building Materials, labour spike construction costs by 200%",
        excerpt: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.",
        content: `
        <h2>Market Analysis</h2>
        <p>Recent market trends show unprecedented increases in building material costs...</p>
        <h2>Impact Assessment</h2>
        <p>The construction industry is facing significant challenges due to these cost increases...</p>
        <h2>Future Outlook</h2>
        <p>Experts predict continued pressure on construction costs throughout the year...</p>
      `,
        author: {
            name: "Hasan BigmanFlowz",
            image: "/authors/hasan.jpg"
        },
        date: "June 1, 2024",
        image: "/blogs/construction-site.jpg",
        category: "Industry News"
    },
    {
        id: "sustainable-construction-practices",
        title: "Green Building: Implementing Sustainable Construction Practices",
        excerpt: "Discover how modern construction companies are adopting eco-friendly building practices to reduce environmental impact while maintaining project efficiency and cost-effectiveness.",
        content: `
        <h2>Sustainability in Construction</h2>
        <p>Modern construction practices are increasingly focusing on environmental sustainability...</p>
        <h2>Implementation Strategies</h2>
        <p>Companies are adopting various approaches to integrate green building practices...</p>
        <h2>Cost-Benefit Analysis</h2>
        <p>The long-term benefits of sustainable construction often outweigh initial investments...</p>
      `,
        author: {
            name: "Sarah Chen",
            image: "/authors/sarah-chen.jpg"
        },
        date: "March 15, 2024",
        image: "/blogs/green-building.jpg",
        category: "Sustainability"
    },
    {
        id: "construction-technology-trends",
        title: "Digital Transformation: Technology Trends Reshaping Construction",
        excerpt: "Explore the latest technological innovations transforming the construction industry, from BIM and AI to drone surveying and automated equipment.",
        content: `
        <h2>Digital Innovation</h2>
        <p>Technology is revolutionizing how construction projects are planned and executed...</p>
        <h2>Key Technologies</h2>
        <p>From artificial intelligence to robotics, new tools are enhancing construction efficiency...</p>
        <h2>Implementation Challenges</h2>
        <p>Organizations face various hurdles when adopting new construction technologies...</p>
      `,
        author: {
            name: "Alex Thompson",
            image: "/authors/alex-thompson.jpg"
        },
        date: "April 5, 2024",
        image: "/blogs/construction-tech.jpg",
        category: "Technology"
    },
    {
        id: "safety-protocols-update",
        title: "Construction Safety: New Protocols and Best Practices for 2024",
        excerpt: "An comprehensive overview of updated safety regulations and protocols that construction companies need to implement to ensure worker safety and regulatory compliance.",
        content: `
        <h2>Safety Standards Evolution</h2>
        <p>Recent changes in construction safety regulations and their implications...</p>
        <h2>Implementation Guidelines</h2>
        <p>Practical steps for implementing new safety protocols on construction sites...</p>
        <h2>Training Requirements</h2>
        <p>Updated training requirements and certification needs for construction workers...</p>
      `,
        author: {
            name: "Maria Rodriguez",
            image: "/authors/maria-rodriguez.jpg"
        },
        date: "February 20, 2024",
        image: "/blogs/safety-gear.jpg",
        category: "Safety"
    },
    {
        id: "workforce-development",
        title: "Building the Future: Construction Workforce Development Initiatives",
        excerpt: "Addressing the construction industry's labor shortage through innovative training programs, apprenticeships, and partnerships with educational institutions.",
        content: `
        <h2>Skills Gap Analysis</h2>
        <p>Current challenges in construction workforce development and skills requirements...</p>
        <h2>Training Programs</h2>
        <p>Innovative approaches to developing skilled construction workers...</p>
        <h2>Industry Partnerships</h2>
        <p>Collaboration between construction companies and educational institutions...</p>
      `,
        author: {
            name: "James Wilson",
            image: "/authors/james-wilson.jpg"
        },
        date: "May 10, 2024",
        image: "/blogs/construction-training.jpg",
        category: "Education"
    },
    {
        id: "project-management-innovations",
        title: "Modern Project Management: Optimizing Construction Workflows",
        excerpt: "How construction companies are leveraging modern project management methodologies and tools to streamline operations and improve project delivery.",
        content: `
        <h2>Modern Methodologies</h2>
        <p>Evolution of project management approaches in construction...</p>
        <h2>Digital Tools</h2>
        <p>Software and systems revolutionizing construction project management...</p>
        <h2>Case Studies</h2>
        <p>Real-world examples of successful project management implementations...</p>
      `,
        author: {
            name: "David Kumar",
            image: "/authors/david-kumar.jpg"
        },
        date: "May 25, 2024",
        image: "/blogs/project-management.jpg",
        category: "Project Management"
    }
];
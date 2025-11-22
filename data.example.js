// Personal Resume Data - Example with Asset Paths
// This file shows how to use local and external resources
// Copy relevant parts to your data.js file

const resumeDataExample = {
    // ==========================================
    // Personal Information
    // ==========================================
    personal: {
        name: "Yabo Yin",
        
        // Option 1: Local image (recommended for profile pictures)
        profileImage: "assets/images/profile/profile.jpg",
        
        // Option 2: External image (GitHub, CDN, etc.)
        // profileImage: "https://avatars.githubusercontent.com/u/xxxxx",
        
        contacts: [
            {
                icon: "fa-brands fa-microsoft",
                type: "email",
                value: "yinyabo22@outlook.com",
                link: "mailto:yinyabo22@outlook.com"
            },
            {
                icon: "fa-brands fa-google",
                type: "email", 
                value: "2802701695yyb@gmail.com",
                link: "mailto:2802701695yyb@gmail.com"
            }
        ],
        supervisor: {
            name: "Professor Xiaofei Zhu",
            link: "https://example.com/professor-profile" // Optional
        },
        bio: "I am Yabo Yin, a 2024 M.Sc. graduate in Computer Technology from Chongqing University of Technology.",
        experience: "From 2023-04 to 2024-04, I was a visiting researcher at the Key Lab of Network Data Science and Technology, Institute of Computing Technology, Chinese Academy of Sciences, working on large language model applications.",
        researchInterests: "Information Retrieval, Recommendation Systems, Natural Language Processing, and LLM applications (RAG, GraphRAG, Agents)"
    },

    // ==========================================
    // Competitions
    // ==========================================
    competitions: [
        {
            title: "CIKM 2025 AnalytiCup Competition: Multilingual E-Commerce Product Search",
            year: "2025",
            category: "Information Retrieval",
            award: "3rd Place",
            description: "Multilingual e-commerce search with data-centric strategies for query-category and query-item relevance.",
            
            // Competition screenshot or architecture diagram
            image: "assets/images/competitions/cikm-2025.jpg",
            
            // Links can be local files or external URLs
            links: [
                { 
                    text: "Slide", 
                    url: "assets/documents/slides/cikm-2025-slide.pdf" // Local PDF
                },
                { 
                    text: "Report", 
                    url: "assets/documents/reports/cikm-2025-report.pdf" // Local PDF
                },
                { 
                    text: "Certificate", 
                    url: "assets/documents/certificates/cikm-2025-certificate.pdf" // Local PDF
                }
            ]
        },
        {
            title: "IFLYTEK 2025 AI Developer Competition: Mixed-domain Retrieval Challenge",
            year: "2025",
            category: "RAG & Information Retrieval",
            award: "2nd Place",
            description: "Mixed-domain retrieval challenge for public and vertical domains.",
            
            // Local image
            image: "assets/images/competitions/iflytek-2025.jpg",
            
            // Mix of local and external resources
            links: [
                { 
                    text: "Slide", 
                    url: "assets/documents/slides/iflytek-2025-slide.pdf" // Local
                },
                { 
                    text: "Certificate", 
                    url: "https://example.com/certificates/iflytek-2025.pdf" // External
                }
            ]
        }
    ],

    // ==========================================
    // Publications
    // ==========================================
    publications: [
        {
            title: "A Data-Centric Approach to Multilingual E-Commerce Product Search: Case Study on Query-Category and Query-Item Relevance",
            venue: "CIKM AnalytiCup Competition Workshop 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            badge: "ABS",
            
            // Paper architecture diagram or result figure
            image: "assets/images/publications/data-centric-ecommerce-2025.jpg",
            
            links: [
                { 
                    text: "Paper", 
                    url: "assets/documents/papers/data-centric-ecommerce-2025.pdf" // Local PDF
                },
                { 
                    text: "Code", 
                    url: "https://github.com/yourusername/ecommerce-search" // GitHub
                },
                { 
                    text: "ACM DL", 
                    url: "https://dl.acm.org/doi/xxxxx" // External link
                }
            ]
        },
        {
            title: "CMC-GCN: Consistent Multi-Granularity Cascading Graph Convolution Network for Multi-Behavior Recommendation",
            venue: "Neurocomputing, 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            badge: "ABS",
            
            image: "assets/images/publications/cmc-gcn-2025.jpg",
            
            links: [
                { 
                    text: "Paper", 
                    url: "https://doi.org/10.1016/xxxxx" // DOI link (external)
                },
                { 
                    text: "Code", 
                    url: "https://github.com/yourusername/cmc-gcn" // GitHub
                },
                { 
                    text: "ArXiv", 
                    url: "https://arxiv.org/abs/2501.xxxxx" // ArXiv preprint
                }
            ]
        },
        {
            title: "MIMNet: Multi-Interest Meta Network with Multi-Granularity Target-Guided Attention for Cross-domain Recommendation",
            venue: "Neurocomputing, 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            badge: "ABS",
            
            image: "assets/images/publications/mimnet-2025.jpg",
            
            links: [
                { 
                    text: "Paper", 
                    url: "https://doi.org/10.1016/xxxxx" // DOI
                },
                { 
                    text: "Code", 
                    url: "https://github.com/yourusername/mimnet" // GitHub
                }
            ]
        },
        {
            title: "满域视频增强与多尺度退化任务的跨域推荐模型",
            venue: "Journal of Zhejiang University (Engineering), 2024",
            authors: ["尹雅博"],
            authorNote: "等",
            badge: "ABS",
            
            image: "assets/images/publications/zju-2024.jpg",
            
            links: [
                { 
                    text: "Link", 
                    url: "https://doi.org/xxxxx" // Journal link
                }
            ]
        }
    ],

    // ==========================================
    // Open Source Projects
    // ==========================================
    openSourceProjects: [
        {
            title: "Awesome-Multi-Behavior-Recommendation",
            role: "Core Contributor",
            description: "A curated list of multi-behavior recommendation papers, datasets, and resources.",
            tags: ["#Recommendation", "#Multi-Behavior", "#Survey"],
            
            // Project logo or screenshot (optional)
            image: "assets/images/projects/awesome-multi-behavior.jpg",
            
            // GitHub repository URL
            link: "https://github.com/yourusername/Awesome-Multi-Behavior-Recommendation",
            
            icon: "📦",
            badge: "Python"
        },
        {
            title: "Cross-Domain-Recommendation-Papers",
            role: "Project Owner",
            description: "Collection of cross-domain recommendation papers with code implementations and datasets.",
            tags: ["#Cross-Domain", "#Recommendation", "#Transfer Learning"],
            
            image: "assets/images/projects/cross-domain-papers.jpg",
            
            link: "https://github.com/yourusername/Cross-Domain-Recommendation-Papers",
            
            icon: "📚",
            badge: "Jupyter Notebook"
        },
        {
            title: "Graph-Neural-Networks-for-RecSys",
            role: "Core Contributor",
            description: "Implementation of various Graph Neural Network models for recommendation systems.",
            tags: ["#GNN", "#Recommendation", "#PyTorch"],
            
            image: "assets/images/projects/graph-neural-networks.jpg",
            
            link: "https://github.com/yourusername/Graph-Neural-Networks-for-RecSys",
            
            icon: "🔗",
            badge: "Python"
        }
    ],

    // ==========================================
    // Skills (no assets needed)
    // ==========================================
    skills: [
        { name: "Python", icon: "🐍" },
        { name: "Deep Learning", icon: "🧠" },
        { name: "Machine Learning", icon: "📊" },
        { name: "PyTorch", icon: "🔥" },
        { name: "Transformers", icon: "🤖" },
        { name: "Linux", icon: "🐧" },
        { name: "Docker", icon: "🐳" },
        { name: "LaTeX", icon: "📝" }
    ],

    // ==========================================
    // Technical Articles (usually external links)
    // ==========================================
    technicalArticles: [
        {
            title: "大语言模型的上下文策略概括",
            subtitle: "全文梳理大语言模型在长文本处理中，提取开发当前核心趋势的上下文策略",
            tags: ["RAG", "Rerank/流式分块", "AI系统"],
            author: "尹雅博",
            date: "发布于 2024-02-26",
            
            // Optional: link to the article
            link: "https://your-blog.com/article-1" // External blog link
        },
        {
            title: "检索系统架构体系化",
            subtitle: "深入阐述检索系统架构的底层理论和实践应用，提高系统的可扩展性和效率",
            tags: ["知识库构建", "系统设计", "性能"],
            author: "精选AI专栏",
            date: "修改于 2024-07-01",
            
            link: "https://your-blog.com/article-2"
        },
        {
            title: "轻量级爬虫设计",
            subtitle: "实战指导如何构建高效的分布式爬虫中间件",
            tags: ["爬虫体系", "分布式设计", "性能优化"],
            author: "尹雅博专栏",
            date: "发布于 2024-06-10",
            
            link: "https://your-blog.com/article-3"
        },
        {
            title: "RAG技术全入解析",
            subtitle: "检索增强生成(RAG)技术全栈解析，从底层原理到实践应用",
            tags: ["RAG", "LLM", "信息检索", "知识库"],
            author: "尹雅博专栏",
            date: "发布于 2023-05-03",
            
            link: "https://your-blog.com/article-4"
        }
    ]
};

// ==========================================
// QUICK REFERENCE GUIDE
// ==========================================

/*

LOCAL RESOURCES (本地资源):
- Profile images: assets/images/profile/[filename].jpg
- Competition images: assets/images/competitions/[name]-[year].jpg
- Publication images: assets/images/publications/[name]-[year].jpg
- Project images: assets/images/projects/[name].jpg
- Slides: assets/documents/slides/[name]-[year]-slide.pdf
- Reports: assets/documents/reports/[name]-[year]-report.pdf
- Certificates: assets/documents/certificates/[name]-[year]-certificate.pdf
- Papers: assets/documents/papers/[name]-[year].pdf

EXTERNAL RESOURCES (外部资源):
- GitHub: https://github.com/username/repo
- ArXiv: https://arxiv.org/abs/xxxx.xxxxx
- DOI: https://doi.org/10.xxxx/xxxxx
- Google Drive: https://drive.google.com/file/d/xxxxx
- Personal Blog: https://your-blog.com/article-name

FILE NAMING CONVENTION (文件命名规范):
- Use lowercase letters
- Use hyphens (-) to separate words
- Include year for versioning
- Be descriptive
- Examples:
  - cikm-2025.jpg
  - cikm-2025-slide.pdf
  - cmc-gcn-2025.pdf
  - profile.jpg

*/


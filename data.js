// Personal Resume Data
// Modify this file to update your resume content

const resumeData = {
    // Section Display Settings (for collapsible sections)
    sectionSettings: {
        competitions: {
            defaultMaxItems: 2  // 默认显示的最大条数
        },
        publications: {
            defaultMaxItems: 4
        },
        openSourceProjects: {
            defaultMaxItems: 2
        },
        technicalArticles: {
            defaultMaxItems: 4
        }
    },
    // Personal Information
    personal: {
        name: "Yabo Yin",
        profileImage: "assets/main-profile.jpg",
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
            link: "https://example.com/xiaofei-zhu" // 替换为实际的教授主页链接
        },
        bio: "I am Yabo Yin, a 2024 M.Sc. graduate in Computer Technology from <strong>Chongqing University of Technology</strong>, supervised by <a href=\"https://example.com/xiaofei-zhu\" target=\"_blank\" class=\"bio-link\">Professor Xiaofei Zhu</a>.",
        experience: "From 2023-04 to 2024-04, I was a visiting researcher at the <strong>Key Lab of Network Data Science and Technology, Institute of Computing Technology, Chinese Academy of Sciences</strong>, working on large language model applications.",
        researchInterests: "My research interests include <strong>Information Retrieval, Recommendation Systems, Natural Language Processing, and LLM applications (RAG, GraphRAG, Agents)</strong>."
    },

    // Competitions
    competitions: [
        {
            title: "CIKM 2025 AnalytiCup Competition: Multilingual E-Commerce Product Search",
            year: "2025",
            category: "Information Retrieval",
            award: "3rd Place",
            description: "Multilingual e-commerce search with data-centric strategies for query-category and query-item relevance.",
            links: [
                { text: "Slide", url: "assets/competitions/cikm-2025/slides/cikm-2025-slide.pdf" },
                { text: "Report", url: "https://arxiv.org/pdf/2510.21671" },
                { text: "Certificate", url: "assets/documents/certificates/cikm-2025-certificate.png" }
            ],
            image: "assets/competitions/cikm-2025/images/cikm-2025.png"

        },
        {
            title: "IFLYTEK 2025 AI Developer Competition: Mixed-domain Retrieval Challenge",
            year: "2025",
            category: "RAG & Information Retrieval",
            award: "2nd Place",
            description: "Mixed-domain retrieval challenge for public and vertical domains.",
            links: [
                { text: "Slide", url: "assets/competitions/iflytek-2025/slides/iflytek-2025-slide.pdf" },
                { text: "Certificate", url: "assets/competitions/iflytek-2025/certificates/iflytek-2025-certificate.pdf" }
            ],
            image: "assets/competitions/iflytek-2025/images/iflytek-2025.png"
        }
    ],

    // Publications
    publications: [
        {
            title: "A Data-Centric Approach to Multilingual E-Commerce Product Search: Case Study on Query-Category and Query-Item Relevance",
            venue: "CIKM AnalytiCup Competition Workshop 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            abs: "本文针对多语言电商产品搜索场景，提出了一种以数据为中心的解决方案。通过深入分析查询-类别和查询-商品的相关性匹配问题，我们设计了创新的数据增强策略和特征工程方法。实验结果表明，该方法在CIKM 2025竞赛中取得了第一名的成绩，显著提升了跨语言场景下的搜索准确率和召回率。本文针对多语言电商产品搜索场景，提出了一种以数据为中心的解决方案。通过深入分析查询-类别和查询-商品的相关性匹配问题，我们设计了创新的数据增强策略和特征工程方法。实验结果表明，该方法在CIKM 2025竞赛中取得了第一名的成绩，显著提升了跨语言场景下的搜索准确率和召回率。本文针对多语言电商产品搜索场景，提出了一种以数据为中心的解决方案。通过深入分析查询-类别和查询-商品的相关性匹配问题，我们设计了创新的数据增强策略和特征工程方法。实验结果表明，该方法在CIKM 2025竞赛中取得了第一名的成绩，显著提升了跨语言场景下的搜索准确率和召回率。本文针对多语言电商产品搜索场景，提出了一种以数据为中心的解决方案。通过深入分析查询-类别和查询-商品的相关性匹配问题，我们设计了创新的数据增强策略和特征工程方法。实验结果表明，该方法在CIKM 2025竞赛中取得了第一名的成绩，显著提升了跨语言场景下的搜索准确率和召回率。",
            links: [
                { text: "Link", url: "" },
                { text: "Code", url: "" }
            ],
            image: "assets/competitions/cikm-2025/images/cikm-2025-alt.png"
        },
        {
            title: "CMC-GCN: Consistent Multi-Granularity Cascading Graph Convolution Network for Multi-Behavior Recommendation",
            venue: "Neurocomputing, 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            abs: "针对多行为推荐系统中用户行为数据的多粒度特性，本文提出了一致性多粒度级联图卷积网络（CMC-GCN）。该模型通过级联的图卷积层捕获不同粒度下的用户-物品交互模式，并引入一致性约束确保多粒度表示的协同性。在多个真实数据集上的实验验证了模型的有效性，相比现有方法在推荐准确性上有显著提升。",
            links: [],
            image: "assets/publications/cmc-gcn-2025/cmc-gcn-2025.png"
        },
        {
            title: "MIMNet: Multi-Interest Meta Network with Multi-Granularity Target-Guided Attention for Cross-domain Recommendation",
            venue: "Neurocomputing, 2025",
            authors: ["Yabo Yin"],
            authorNote: "et al.",
            abs: "为解决跨域推荐中的知识迁移和用户多兴趣建模问题，本文提出了多兴趣元网络（MIMNet）。该模型结合了元学习机制和多粒度目标引导注意力，能够有效捕获用户在不同域中的多样化兴趣，并实现高质量的跨域知识迁移。通过在真实跨域场景下的实验，证明了MIMNet在冷启动和数据稀疏场景下的优越性能。",
            links: [],
            image: "assets/publications/mimnet-2025/mimnet-2025.png"
        },
        {
            title: "源域数据增强与多兴趣细化迁移的跨域推荐模型",
            venue: "Journal of Zhejiang University (Engineering), 2024",
            authors: ["尹雅博"],
            authorNote: "等",
            abs: "",
            links: [],
            image: "assets/publications/cdr-art-2024/cdr-art-2024.png"
        }
    ],

    // Open Source Projects
    openSourceProjects: [
        {
            title: "Awesome-Multi-Behavior-Recommendation",
            role: "Core Contributor",
            description: "A curated list of multi-behavior recommendation papers, datasets, and resources.",
            tags: ["#Recommendation", "#Multi-Behavior", "#Survey"],
            link: "",
            icon: "📦",
            star: "200"  // 显示 star 数量，
        },
        {
            title: "Cross-Domain-Recommendation-Papers",
            role: "Project Owner",
            description: "Collection of cross-domain recommendation papers with code implementations and datasets.",
            tags: ["#Cross-Domain", "#Recommendation", "#Transfer Learning"],
            link: "",
            icon: "",
            star: "#"  // 显示 star 数量，
        },
        {
            title: "Graph-Neural-Networks-for-RecSys",
            role: "Core Contributor",
            description: "Implementation of various Graph Neural Network models for recommendation systems.",
            tags: ["#GNN", "#Recommendation", "#PyTorch"],
            link: "",
            icon: "icons/overleaf.svg",
            star: "#"  // 显示 star 数量，
        }
    ],

    // Skills
    skills: [
        { name: "Python", icon: "icons/Python.svg" },
        { name: "Deep Learning", icon: "icons/Deep Learning.svg" },
        { name: "Machine Learning", icon: "icons/Machine Learning.svg" },
        { name: "PyTorch", icon: "icons/Pytorch.svg" },
        { name: "Transformers", icon: "icons/Transformers.svg" },
        { name: "Linux", icon: "icons/Ubuntu.svg" },
        { name: "Docker", icon: "icons/Docker.svg" },
        { name: "LaTeX", icon: "icons/overleaf.svg" }
    ],

    // Technical Articles
    technicalArticles: [
        {
            title: "大语言模型的上下文策略概括",
            subtitle: "全文梳理大语言模型在长文本处理中，提取开发当前核心趋势的上下文策略",
            tags: ["RAG", "Rerank/流式分块", "AI系统"],
            author: "尹雅博",
            date: "发布于 2024-02-26",
            link: "https://zhuanlan.zhihu.com/p/685204986", // 文章链接
            platform: "知乎", // 平台名称
            platformIcon: "icons/zhihu.svg" // 平台图标
        },
        {
            title: "检索系统架构体系化",
            subtitle: "深入阐述检索系统架构的底层理论和实践应用，提高系统的可扩展性和效率",
            tags: ["知识库构建", "系统设计", "性能"],
            author: "精选AI专栏",
            date: "修改于 2024-07-01",
            link: "https://zhuanlan.zhihu.com/p/705889953", // 文章链接
            platform: "知乎", // 平台名称
            platformIcon: "icons/zhihu.svg" // 平台图标
        },
        {
            title: "轻量级爬虫设计",
            subtitle: "实战指导如何构建高效的分布式爬虫中间件",
            tags: ["爬虫体系", "分布式设计", "性能优化"],
            author: "尹雅博专栏",
            date: "发布于 2024-06-10",
            link: "https://zhuanlan.zhihu.com/p/702569184", // 文章链接
            platform: "知乎", // 平台名称
            platformIcon: "icons/zhihu.svg" // 平台图标
        },
        {
            title: "RAG技术全入解析",
            subtitle: "检索增强生成(RAG)技术全栈解析，",
            tags: ["RAG", "LLM", "信息检索", "知识库"],
            author: "尹雅博专栏",
            date: "发布于 2023-05-03",
            link: "https://zhuanlan.zhihu.com/p/629839662", // 文章链接
            platform: "知乎", // 平台名称
            platformIcon: "icons/zhihu.svg" // 平台图标
        }
    ]
};


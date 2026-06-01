interface SiteConfig {
    website_url: string,
    banner_path: string,
    x_handle: string,
    keywords: string,
    authors: string,
    logo_path: string;
    name: string;
    description: string;
    main_conf: string;
    main_conf_link: string;
    location: string;
    date: string;
    nav_title: string;
    nav_items: Array<{ name: string; href: string }>;
    buttons: Array<{ name: string; href: string }>;
    anthology_link: string;
    email_link: string;
    youtube_link: string;
    x_link: string;
    github_link: string;
    bluesky_link: string;
    program_events: Array<{
        start_time: string;
        end_time: string;
        description: string;
        papers: Array<{ title: string; authors: string }> | undefined;
    }>;
    invited_speakers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        title: string;
        link: string;
    }>;
    panelists: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        link: string;
    }>;
    sponsors: Array<{
        image_path: string;
        link: string;
    }>;
    organizers: Array<{
        image_path: string;
        name: string;
        affiliation: string;
        description: string;
        link: string;
    }>;
    faq_items: Array<{
        question: string;
        answer: string;
    }>;
}
const site_config: SiteConfig = {
    website_url: "https://exploration-lab.github.io/WSLP-2026",
    banner_path: "2026/banner.png",
    x_handle: "@WSLP",
    keywords: "WSLP, IJCNLP - AACL, NLP, Workshop, XAI,  Language Models, Sign Language Translation, Low-Resource Languages, Shared Task, Sign Language Processing, Multimodal Machine Learning, Indian Sign Language",
    authors: "WSLP 2026 Organizers",
    logo_path: "/WSLP/logo1.png",
    name: "WSLP 2026",
    description: "Workshop on Sign Language Processing (WSLP)",
    main_conf: "EMNLP 2026",
    main_conf_link: "https://2026.emnlp.org/",
    location: "Budapest, Hungary",
    date: "October 24 –29, 2026",
    nav_title: "WSLP",
    nav_items: [
        { name: "Call for Papers", href: "/WSLP-2026/call" },
        { name: "Shared Task", href: "/WSLP-2026/task" },
        // { name: "News", href: "/WSLP/#news" },
        // { name: "Program", href: "/WSLP/#program" },
        { name: "Organizers", href: "/WSLP-2026/#organizers" },
        { name: "Important Dates", href: "/WSLP-2026/#news" },
    ],
    buttons: [
        { name: "Call for Papers", href: "/WSLP-2026/call" },
        { name: "Shared Task", href: "/WSLP-2026/task" },
    ],
    // anthology_link: "https://aclanthology.org/venues/WSLP/",
    email_link: "isign.benchmark@gmail.com",
    // youtube_link: "https://www.youtube.com/@WSLP",
    // x_link: "https://twitter.com/WSLP",
    github_link: "https://github.com/WSLP-2026",
    // bluesky_link: "https://bsky.app/profile/WSLP.bsky.social",
    program_events:[],
//     program_events: [
//         {
//             start_time: "09:00",
//             end_time: "09:15",
//             description: "**Introduction**  \
// Welcome, workshop overview, and opening remarks.  **Speaker:** Dr. Ashutosh Modi",
//             papers: undefined,
//         },
//         {
//             start_time: "09:15",
//             end_time: "10:00",
//             description: "**Invited Talk 1** (30 min talk + 15 min Q&A)  \
// **Title:** _ISLRTC’s Contributions to Indian Sign Language and Deaf Education_  \
// **Speaker:** Dr. Andesha Mangla",
//             papers: undefined,
//         },
//         {
//             start_time: "10:00",
//             end_time: "10:30",
//             description: "**Paper presentations** (10 min talk + 5 min Q&A each)  ",
//             papers: [
//                 {
//                     title: "10:00–10:15: Enhancing Indian Sign Language Translation via Motion-Aware Modeling (In-Person)",
//                     authors: "Anal Roy Chowdhury",
//                 },
//                 {
//                     title: "10:15–10:30: Pose-Based Sign Language Spotting via an End-to-End Encoder Architecture (In-Person)",
//                     authors: "Samuel Johnny",
//                 },
//             ],
//         },
//         {
//             start_time: "10:30",
//             end_time: "11:00",
//             description: "**Coffee break**",
//             papers: undefined,
//         },
//         {
//             start_time: "11:00",
//             end_time: "12:30",
//             description: "**Paper presentations** (10 min talk + 5 min Q&A each)  \
// ",
//             papers: [
//                 {
//                     title: "11:00–11:15: Continuous Fingerspelling Dataset for Indian Sign Language (In-Person)",
//                     authors: "Kirandevraj R",
//                 },
//                 {
//                     title: "11:15–11:30: Cross-Linguistic Phonological Similarity Analysis in Sign Languages Using HamNoSys (In-Person)",
//                     authors: "Abhishek Bharadwaj Varanasi",
//                 },
//                 {
//                     title: "11:30–11:45: Indian Sign Language Recognition and Translation into Odia (Virtual)",
//                     authors: "Muktikanta Sahu",
//                 },
//                 {
//                     title: "11:45–12:00: Finetuning Pre-trained Language Models for Bidirectional Sign Language Gloss to Text Translation (Virtual)",
//                     authors: "Arshia Kermani",
//                 },
//                 {
//                     title: "12:00–12:15: Low-Resource Sign Language Glossing Profits From Data Augmentation (Virtual)",
//                     authors: "Diana Vania Lara Ortiz",
//                 },
//             ],
//         },
//         {
//             start_time: "12:30",
//             end_time: "14:00",
//             description: "**Lunch**",
//             papers: undefined,
//         },
//         {
//             start_time: "14:00",
//             end_time: "14:45",
//             description: "**Invited Talk 2** (30 min talk + 15 min Q&A)  \
// **Title:** _The Future of Sign Language Translation is Transcription_  \
// **Speaker:** Dr. Amit Moryossef  \
// ",
//             papers: undefined,
//         },
//         {
//             start_time: "14:45",
//             end_time: "15:30",
//             description: "**Paper presentations** (10 min talk + 5 min Q&A each)  \
// ",
//             papers: [
//                 {
//                     title: "14:45–15:00: Multilingual Sign Language Translation with Unified Datasets and Pose-Based Transformers (Virtual)",
//                     authors: "Pedro Dal Bianco",
//                 },
//                 {
//                     title: "15:00–15:15: Augmenting Sign Language Translation Datasets with Large Language Models (Virtual)",
//                     authors: "Pedro Dal Bianco",
//                 },
//                 {
//                     title: "15:15–15:30: Pose-Based Temporal Convolutional Networks for Isolated Indian Sign Language Word Recognition (Virtual)",
//                     authors: "Tatigunta Bhavi Teja Reddy",
//                 },
//             ],
//         },
//         {
//             start_time: "15:30",
//             end_time: "15:40",
//             description: "**Conclusion**",
//             papers: undefined,
//         },
//     ],
    invited_speakers: [],
//     invited_speakers: [{
//     image_path: "/WSLP/amit.jpg",        // ← replace with your actual file
//     name: "Dr. Amit Moryossef",
//     affiliation: "Nagish (formerly founder of sign.mt), Israel",
//     description: "Dr. Amit Moryossef is a researcher and entrepreneur in sign-language technology. He completed his Ph.D. at Bar-Ilan University and a postdoc at the University of Zurich. He founded sign.mt, a real-time sign-language translation platform that was recently acquired by Nagish, where he currently leads research. His work has received multiple best-paper awards at ACL and EMNLP.",
//     title: "The Future of Sign Language Translation is Transcription",
//     link: "https://biu-nlp.github.io/people/amit_moryossef"   // or any link you prefer
//   },
//   {
//     image_path: "/WSLP/Andesha.jpeg",       // ← replace with your actual file
//     name: "Dr. Andesha Mangla",
//     affiliation: "Indian Sign Language Research and Training Center (ISLRTC), India",
//     description: "Dr. Andesha Mangla is an Assistant Professor of Sign Linguistics at the Indian Sign Language Research and Training Center (ISLRTC), a national institute that aims to promote the use of ISL. She completed her PhD in Linguistics from Delhi University, focusing on the role of ISL in deaf education. She has around 15 years’ experience in training ISL interpreters and deaf ISL teachers in linguistics and English language, as well as developing resources related to Indian Sign Language, including the ISL Dictionary and ISL translations of NCERT textbooks. Her interest areas include sign linguistics, ISL in deaf education and language teaching.",
//     title: "ISLRTC’s Contributions to Indian Sign Language and Deaf Education",
//     link: "#"   // replace with actual website if available
//   }],
    panelists: [],
    sponsors: [],
        organizers: [
    {
        image_path: "/WSLP/Ashutosh-New.jpg",
        name: "Ashutosh Modi",
        affiliation: "Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description: '',
        // "Associate Professor at IIT Kanpur. Specializes in Indian Sign Language Processing, emotion recognition in multimodal environments, NLP applications in legal contexts, and commonsense reasoning in LLMs.",
        link: "https://ashutosh-modi.github.io/"
    },
    {
        image_path: "/WSLP/Mohammed-Hasanuzzaman.jpeg",
        name: "Mohammed Hasanuzzaman",
        affiliation: "Queen’s University Belfast, UK & ADAPT Centre, MTU, Ireland",
        description: '',
        // "Lecturer (Assistant Professor) in AI at Queen’s University Belfast and Funded Investigator at the ADAPT Centre, MTU. His research focuses on NLP and causal machine learning. He serves as an Associate Editor for several IEEE and ACM journals. Mohammed has organized multiple workshops at top-tier conferences and served as Area Chair for ACL and affiliated conferences. He leads EU projects like WARIFA and ITFLOWS and has received the Erasmus+ Staff Mobility Award and DCU INVENT Award for Industry Engagement.",
        link: "https://mohammedhasanuzzaman.github.io/"
    },
    {
        image_path: "/WSLP/Facundo-Quiroga.png",
        name: "Facundo Manuel Quiroga",
        affiliation: "Universidad Nacional de La Plata (UNLP), Argentina",
        description: '',
        // "Professor and full-time researcher at Instituto de Investigación en Informática LIDI, Facultad de Informática, UNLP. Over the last decade, he has focused on innovative approaches to Sign Language Translation, particularly Argentinian Sign Language (LSA), covering dataset collection, model development, data augmentation, and interpretability analysis.",
        link: "https://facundoq.github.io/"
    },
    {
        image_path: "/WSLP/Sabyasachi-Kamila.jpg",
        name: "Sabyasachi Kamila",
        affiliation: "Vellore Institute of Technology Vellore, India",
        description:'',
        // "Assistant Professor at VIT Vellore, specializing in AI and NLP, with a focus on affective computing, conversational reasoning, and sign language translation.",
        link: "mailto:sabyasachi.kamila@gmail.com"
    },
    {
        image_path: "/WSLP/Keren-Artiaga.jpg",
        name: "Keren Artiaga",
        affiliation: "ADAPT Centre, MTU, Cork, Ireland",
        description:'',
        // "Ph.D. student in Computer Science at ADAPT Centre, MTU. Specializes in sign language-to-speech translation.",
        link: "http://www.linkedin.com/in/keren-artiaga-249132228"
    },
    {
        image_path: "/WSLP/Abhinav-Joshi.png",
        name: "Abhinav Joshi",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description:'',
        // "Ph.D. student in Computer Science at IIT Kanpur. Research focuses on Natural Language Understanding (NLU), including Indian Sign Language Processing, Multimodal Fusion, Commonsense and Causal Reasoning.",
        link: "https://www.cse.iitk.ac.in/users/ajoshi/"
    },
    {
        image_path: "/WSLP/Sanjeet-Singh.jpg",
        name: "Sanjeet Singh",
        affiliation: "Ph.D. Student, Indian Institute of Technology Kanpur (IIT Kanpur), India",
        description:'',
        // "Ph.D. student in Computer Science at IIT Kanpur. Research focuses on Indian Sign Language Processing.",
        link: "https://sites.google.com/view/sanjeet-singh"
    }
    ],

    faq_items: [
        {
            question: "Are dual submissions allowed?",
            answer: "Yes, dual submissions are allowed if the other venue also allows dual submissions. If your submission is accepted to the archival track of WSLP, you will have to withdraw your submission to the other venue. Dual submissions to WSLP and IJCNLP - AACL (including ARR) are not allowed."
        },
    ]
};

export default site_config;

# V0 Prompt — Leena Alotaibi Portfolio Remake

Build a modern, stunning personal portfolio website for an AI developer named "Leena Alotaibi". This is a single-page React app using Next.js, Tailwind CSS, shadcn/ui, Framer Motion, and Inter font. It must have dark mode toggle and be fully responsive (mobile-first). Use any library, framework, or approach you want — no restrictions.

## BRAND & DESIGN DIRECTION
- Logo text: "<LNO />"
- Primary font: Inter
- Color palette: Gray-900/Gray-50 base, with blue-600 and purple-600 accent highlights for AI keywords, emerald-600 for personality traits
- Design style: Clean, minimal, professional with glassmorphism effects (frosted glass cards with backdrop-blur, semi-transparent borders)
- Dark mode: full dark/light theme toggle with smooth transitions
- Add subtle scroll animations, fade-ins, and hover effects throughout

## SECTIONS (in order):

### 1. NAVBAR (sticky, blurred background)
- Logo "<LNO />" on the left
- Nav links: About, Skills, Certificates, Contact
- "Download CV" button (links to a PDF)
- Dark mode toggle
- Mobile hamburger menu with slide-in drawer from the right

### 2. HERO SECTION (min-height 80vh on mobile)
- Left side: Text content
  - Heading: "Hi, I'm Leena 👋"
  - Paragraph: "I'm an AI student in my final year, passionate about creating intelligent systems and digital experiences that are fast, accessible, and impactful."
  - Second paragraph: "My focus is on **machine learning**, **deep learning**, **natural language processing**, as well as **Generative AI** and **AI agents** — and I enjoy exploring how AI can be applied to solve real-world problems." (highlight ML/DL/NLP in blue, GenAI/Agents in purple)
  - Third paragraph: "Even though I'm still at the start of my journey, I approach every project with **excitement and curiosity**." (highlight in emerald)
  - Location icon + "Riyadh, Saudi Arabia"
  - Availability icon + "Final-year AI student"
  - Social icons: GitHub (https://github.com/xlwynee), LinkedIn (https://www.linkedin.com/in/leena-alotaibi-ai)
- Right side: Profile photo in a glassmorphism framed card with frosted glass effect, rounded corners, shadow

### 3. ABOUT SECTION (gray-50 background, dark: gray-900)
- Badge: "About me"
- Heading: "Curious about me?"
- Left: Another profile photo in glassmorphism frame
- Right: Bio text:
  - "I'm a final-year AI student passionate about building intelligent digital products. My focus is on **machine learning**, **deep learning**, **Generative AI** — turning technical ideas into meaningful user experiences."
  - "I've built projects that apply these technologies in practical ways, I enjoy working on personal projects, and sharing my work on GitHub and LinkedIn."
  - "Quick bits about me:" followed by bullet points:
    - "AI project enthusiast & lifelong learner"
    - "Open to freelance AI opportunities"

### 4. SKILLS SECTION
- Heading: "Skills"
- Subheading: "The skills, tools and technologies I am really good at:"
- Display skills as icon tags/badges in categorized groups:
  - **Programming**: Python, Java, SQL
  - **AI/ML**: Generative AI, Transformers, LLMs, NLP, Computer Vision, LangChain, RAG, Agents
  - **Other**: Data Analysis, Team Leadership, Collaboration, Problem Solving, Adaptability
- Use recognizable tech icons where possible (e.g., Python logo, etc.)

### 5. CERTIFICATES SECTION
- Display as cards in a grid or carousel
- Each card shows: title, provider name, provider logo, date, description, skill tags, and a "View Certificate" link
- Certificates data:
  1. **"Generative AI Language Modeling with Transformers"** — IBM, 2025. Advanced course on GenAI and transformer architectures, PyTorch implementation. Skills: PyTorch, Transformers Architecture, Feature Engineering, Text Mining, Statistical Methods. Certificate: https://www.coursera.org/account/accomplishments/verify/6Y07115XOOBK
  2. **"Explainable Machine Learning"** — Duke University, 2025. Course on XAI techniques, making ML models interpretable and responsible. Skills: Explainable AI (XAI), Image Analysis, Responsible AI, Predictive Modeling. Certificate: https://www.coursera.org/account/accomplishments/verify/WFVF12FHASXY
  3. **"Prompt Engineering for ChatGPT"** — Vanderbilt University, 2025. Prompt engineering for LLMs, practical applications. Skills: Prompt Engineering, OpenAI APIs, LLM Application Development, Creative Problem-Solving. Certificate: https://www.coursera.org/account/accomplishments/verify/QS7EQ0SSHRUY
  4. **"Virtual Work Experience (AI Developer, Microsoft Azure)"** — Microsoft, 2025. AI dev using Azure ML cloud platform. Skills: Microsoft Azure ML.
  5. **"HCIA in Artificial Intelligence"** — Huawei, 2024. AI fundamentals, neural network architectures, AI implementation. Skills: Neural Network Architecture, Artificial Intelligence (AI), Deep Learning.
  6. **"CCNA – Routing & Switching"** — Cisco, 2024. Industry-standard networking certification. Skills: Network Infrastructure, TCP/IP Protocol Suite, Routing & Switching, WAN Technologies.

### 6. PROJECTS SECTION
- Alternating left/right layout (image on one side, text on the other, alternating per project)
- Each project: title, description, technology tags, and project images
- Projects data:
  1. **"Quest Analytics RAG Assistant"** — AI-powered Retrieval-Augmented Generation assistant for Quest Analytics. Helps researchers analyze scientific papers by loading documents, splitting text into chunks, embedding content, storing in vector DB, and interacting through a QA bot interface. Tech: Python, LangChain, IBM Watsonx.ai
  2. **"Coffee Recommender BERT"** — Arabic coffee recommendation system using CAMeL-BERT, PyTorch, and Flask to provide personalized suggestions based on tasting notes, roaster data, and product names. Tech: Python, PyTorch, Flask
  3. **"Saudi Cultural Heritage Storyteller"** — Story generation app using ALLAM-7B with prompt engineering and Gradio interface. Tech: Python, ALLAM-7B, Gradio
  4. **"Smart Vehicle Gate Access System"** — Arduino + Python (OpenCV + Tesseract OCR) for license plate recognition and automated gate control. Tech: Python, C++, OpenCV
  5. **"Rahhal – AI Travel Planner"** — Streamlit app integrating GPT-4 itinerary generation, LSTM weather forecasting, and Unsplash API for destination images. Tech: Python, GPT-4, Streamlit

### 7. CONTACT SECTION
- Badge: "Get in touch"
- Text: "Let's build something amazing together! Feel free to reach out if you want to collaborate on projects, share AI insights, or just connect with a fellow tech enthusiast"
- Social links: GitHub (https://github.com/xlwynee), LinkedIn (https://www.linkedin.com/in/leena-alotaibi-ai)
- "You may also find me on these platforms!"

### 8. FOOTER
- "Designed and coded with ❤ by Leena Alotaibi"

## TECHNICAL REQUIREMENTS
- Use Framer Motion for smooth scroll-triggered animations (fade-up, slide-in for sections, staggered children)
- All sections should animate in on scroll
- Glassmorphism cards for profile photos (backdrop-blur-xl, semi-transparent white bg, subtle border)
- Responsive grid layouts
- Smooth scrolling between nav sections
- Make it visually impressive and portfolio-worthy — this should look premium and stand out
- Use placeholder image URLs (like /placeholder.svg) for profile photos and project images — I will replace them later

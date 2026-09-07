export type CourseCategory =
  | "AI & Creativity"
  | "Web & Websites"
  | "Games"
  | "AI & Chatbots"
  | "Digital Media"
  | "Entrepreneurship"
  | "Research & Digital Media"
  | "Capstone";

export type AgeGroup = "7+" | "Teens" | "Adults";

export interface Course {
  id: string;
  month: number;
  title: string;
  category: CourseCategory;
  description: string;
  activities: string[];
  tools?: string[];
  ageGroups: AgeGroup[];
  featured?: boolean;
  outcome: string;
}

const common = ["Peer feedback", "Build and test", "Present final project"];
const outcomes = (title: string) => `A finished ${title.toLowerCase()} ready to share in a growing digital portfolio.`;
type CourseSeed = [string, CourseCategory, string, string[], string[]];

const courseSeed: CourseSeed[] = [
  ["AI Art & Poster Project", "AI & Creativity", "Explore AI image generators, learn how prompts affect visual results, create themed images, design posters, build an AI art gallery, and present a finished creative project.", ["Explore AI Image Generators", "Refine Prompts for Themed Images", "Design a Poster Layout", "Create a Personal AI Avatar", "Build an AI Art Gallery", "Design a Sticker or Postcard", ...common], ["DALL-E", "Canva AI", "Canva", "Google Slides"]],
  ["Digital Storybook Project", "AI & Creativity", "Create an original digital story with AI assistance by developing characters, generating visuals, building page layouts, adding narration, and presenting the finished storybook.", ["Write a Short Story with AI", "Generate Story Character Images", "Create Story Page Layouts", "Add AI-Generated Illustrations", "Add Narration or Story Audio", "Assemble Digital Storybook", ...common], ["ChatGPT", "Canva AI", "Google Slides"]],
  ["Personal Website Project — Part 1", "Web & Websites", "Learn the fundamentals of planning, designing and building a personal website while developing content, structure and visual identity.", ["Plan Website Idea", "Create Website Structure", "Write Website Content", "Generate/Prepare Visual Assets", "Build Website", "Improve Layout", "Test Website", "Present Website"], ["Carrd", "Canva", "HTML & CSS"]],
  ["AI-Powered Quiz Game Project", "Games", "Design an interactive quiz experience using AI-assisted questions, creative visuals, game structure and testing.", ["Brainstorm Quiz Concept", "Generate Questions with AI", "Design Quiz Visuals", "Build Quiz Interface", "Add Game Logic", "Test Questions and Gameplay", "Improve the Quiz", "Present Final Quiz Game"], ["Canva", "Scratch", "ChatGPT"]],
  ["Comic Strip & Digital Magazine Project", "AI & Creativity", "Create a visual storytelling project by developing characters, scenes, written content, page layouts and a polished digital magazine or comic.", ["Develop Story Concept", "Create Characters", "Generate Visual Assets", "Write Comic/Magazine Content", "Design Pages", "Assemble Digital Publication", ...common], ["Canva", "DALL-E", "Google Slides"]],
  ["AI Marketing Campaign Project", "Entrepreneurship", "Invent a product or brand and create a complete AI-assisted marketing campaign including branding, advertising visuals, website promotion and presentation.", ["Invent a Product/Brand with AI", "Generate Logo & Branding Images", "Write Ad Copy & Slogans with AI", "Generate Social Media Post Visuals", "Build a Simple Landing Page", "Design a Promotional Poster", ...common], ["ChatGPT", "Claude", "DALL-E", "Canva AI", "Carrd"]],
  ["Build a Simple Game with AI Help", "Games", "Create a simple game from concept to playable prototype using AI assistance for planning, coding, artwork, storytelling, debugging and refinement.", ["Brainstorm Game Idea & Concept Art", "Write Game Code with AI Assistance", "Generate Character & Background Art", "Integrate AI Art into the Game", "Add AI-Written Story/Sound Text", "Test & Debug the Game with AI Help", "Polish & Refine Gameplay", "Showcase & Playtest with Peers"], ["Scratch", "AI coding assistance"]],
  ["Build a Personal AI Chatbot", "AI & Chatbots", "Plan, design, build and test a personal AI chatbot while learning about conversation flows, personalities, user interactions and digital integration.", ["Plan Chatbot Purpose", "Write Chatbot Personality with AI", "Build Chatbot Flow", "Generate Chatbot Avatar", "Test Chatbot Conversations", "Refine Chatbot Responses", "Add Chatbot to a Webpage", "Present Chatbot Demo"], ["ChatGPT", "Claude", "No-Code Chatbot Tools", "DALL-E", "Canva AI"]],
  ["Advanced Website Project — Part 2", "Web & Websites", "Expand website development skills by creating a polished multi-page website with stronger branding, AI-generated visual assets and interactive features.", ["Redesign Website Branding with AI", "Generate Section Images", "Write Full Multi-Page Copy with AI", "Build a Multi-Page Website", "Add Chatbot Widget", "Apply Design Improvements", "Test Website Across Devices", "Publish & Present Final Website"], ["ChatGPT", "Claude", "DALL-E", "Canva AI", "Carrd", "Canva Websites"]],
  ["AI-Powered Video / Reel Project", "Digital Media", "Create a complete short-form video or reel using AI-assisted scripting, generated visuals, voiceover, editing, music and sound effects.", ["Plan a Short Video with AI Script", "Generate AI Images/Clips for Scenes", "Generate AI Voiceover Narration", "Edit the Video with AI-Generated Clips", "Add Music & Sound Effects", ...common], ["ChatGPT", "Claude", "DALL-E", "Canva AI", "AI Text-to-Speech", "CapCut"]],
  ["AI Startup Pitch Project", "Entrepreneurship", "Develop an original startup idea and transform it into a professional business concept, brand, pitch deck and final presentation.", ["Brainstorm a Startup Idea with AI", "Generate Branding", "Write Business Plan Sections with AI", "Build a Pitch Deck", "Generate Product Mockup", "Practice Pitch Delivery", ...common], ["ChatGPT", "Claude", "DALL-E", "Canva"]],
  ["AI Research Documentary Project", "Research & Digital Media", "Research a real-world topic and turn the findings into a documentary-style digital project using AI-assisted research, writing, visuals, narration and video editing.", ["Choose Topic & Gather AI Research", "Organize Findings into a Report", "Generate Supporting Infographics", "Write Documentary-Style Script", "Generate Voiceover & Visuals", "Edit Documentary Video", "Peer Review", "Screening & Discussion"], ["ChatGPT", "Claude", "DALL-E", "AI Text-to-Speech", "CapCut"]],
  ["Capstone Planning & Kickoff", "Capstone", "Begin a major final project by choosing a project type, planning its scope, selecting tools, creating visual assets and building the first version.", ["Brainstorm Capstone Project Idea", "Plan Project Scope & AI Tools", "Generate Branding/Visual Assets", "Begin Building Core Project", "Continue Building", "Test Initial Version", "Gather Feedback", "Refine Final Plan"], ["Website", "App", "Game", "Video"]],
  ["Capstone Build & Refine", "Capstone", "Continue developing the capstone project by implementing core features, adding content, improving design, testing and responding to feedback.", ["Build Core Features", "Add Content", "Design Polish", "Mid-Point Testing", "Fix & Improve", "Peer Feedback", "Add Final Features", "Internal Review"], ["Chosen project tools"]],
  ["Capstone Finalization & Showcase", "Capstone", "Finalize the project, prepare presentation materials, record a demonstration, rehearse and showcase the completed project to parents and peers.", ["Final Polish", "Prepare Presentation Slides", "Record Demo Video", "Rehearse Presentation", "Peer Showcase Dry Run", "Incorporate Final Feedback", "Prepare Public Showcase", "Final Showcase"], ["Canva", "CapCut", "Google Slides"]]
];

export const courses: Course[] = courseSeed.map(([title, category, description, activities, tools], index) => ({
  id: `month-${String(index + 1).padStart(2, "0")}`,
  month: index + 1,
  title,
  category,
  description,
  activities,
  tools,
  ageGroups: ["7+", "Teens", "Adults"],
  featured: index === 0 || index === 7 || index === 14,
  outcome: outcomes(title)
}));

export const categories = ["All", "AI & Creativity", "Web & Websites", "Games", "AI & Chatbots", "Digital Media", "Entrepreneurship", "Research", "Capstone"];

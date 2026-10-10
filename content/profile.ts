// ---------------------------------------------------------------------------
// همه‌ی متن‌های سایت از همین فایل می‌آیند — برای شخصی‌سازی، فقط همین‌جا را
// ویرایش کن. یک نسخه‌ی فارسی (fa) و یک نسخه‌ی انگلیسی (en) وجود دارد؛
// هر دو باید هم‌ساختار بمانند.
// All site copy lives in this file — edit only here to personalize it.
// There's a Persian (fa) and an English (en) version; keep both in sync.
// ---------------------------------------------------------------------------

export type Locale = "fa" | "en";

export type Profile = {
  name: string;
  handle: string;
  role: string;
  affiliation: string;
  location: string;
  status: string;
  terminalLine: string;
  heroHeadline: string[];
  googleIndexDescription: string;
  heroSubtext: string;
  about: { eyebrow: string; heading: string; paragraphs: string[] };
  stats: { value: string; label: string }[];
  skillGroups: { title: string; items: string[] }[];
  timelineEyebrow: string;
  timelineHeading: string;
  timeline: { year: string; title: string; description: string }[];
  workEyebrow: string;
  workHeading: string;
  projects: { title: string; description: string; tags: string[] }[];
  gallery: { src: string; alt: string }[];
  galleryEyebrow: string;
  galleryHeading: string;
  nextEyebrow: string;
  nextHeading: string;
  nextPlans: { title: string; description: string; status: string }[];
  contactEyebrow: string;
  contactHeading: string;
  contactSubtext: string;
  socials: { label: string; href: string }[];
  contact: { email: string; github: string; phone: string };
};

// رشته‌های ثابت رابط کاربری (دکمه‌ها، لیبل‌ها) که در کامپوننت‌ها هاردکد بودند.
// Fixed UI strings (buttons, labels) that used to be hardcoded in components.
export type UiStrings = {
  navLabel: string;
  sectionLabels: {
    hero: string;
    about: string;
    timeline: string;
    work: string;
    gallery: string;
    next: string;
    contact: string;
  };
  readMore: string;
  directContact: string;
  writeEmail: string;
  builtWith: string;
  prevImage: string;
  nextImage: string;
  closeLightbox: string;
  profilePhotoAlt: string;
  languageToggle: string;
};

const galleryImages: { src: string; alt: { fa: string; en: string } }[] = [
  { src: "/images/gallery/image.webp", alt: { fa: "جای عکس شماره ۱ — جایگزین کنید", en: "Photo placeholder 1 — replace me" } },
  { src: "/images/gallery/image copy.webp", alt: { fa: "جای عکس شماره ۲ — جایگزین کنید", en: "Photo placeholder 2 — replace me" } },
  { src: "/images/gallery/image copy 2.webp", alt: { fa: "جای عکس شماره ۳ — جایگزین کنید", en: "Photo placeholder 3 — replace me" } },
  { src: "/images/gallery/image copy 3.webp", alt: { fa: "جای عکس شماره ۴ — جایگزین کنید", en: "Photo placeholder 4 — replace me" } },
];

const fa: Profile = {
  name: " امیر محمد حیدری خوئی",
  handle: "Amir Mohammad Heydari",
  role: " ( برنامه نویس )توسعه‌دهنده فول‌استک -full stack (programmer) ",
  affiliation: "هم‌بنیان‌گذار تیم ChatraTech",
  location: "تهران، ایران",
  status: "در دسترس برای همکاری",
  terminalLine: "Chatra create-something-memorable --with=care True",
  heroHeadline: ["میسازیم", "همانطور که", "باید ساخت"],
  googleIndexDescription:
    "تجربه و رزومه قوی در طراحی و اجرای سیستم ها و پلتفرم های مختلف |fullstack PWA NestjS NextJS Postgres ORM ReactJS ts | فول استک جاوااسکریپت",
  heroSubtext:
    "توی مسیر full stack developer ای قدم گذاشتم و به همراه و کمک تیمم یعنی چتراتک اثرات با ارزش و مهندسی شده ای به جا گذاشتیم و در تلاشیم توی همین فرمون کارمون رو ادامه بدیم.",
  about: {
    eyebrow: "۰۱ / درباره من",
    heading: "چجوری کار میکنیم؟",
    paragraphs: [
      "ما اینجا توی چترا با شخصیت ها و منطق های مختلف سعی میکنیم به یک ایده با استاندارد های چترا برسیم , سپس تمام تلاشمو میکنم که توی کمترین زمان با بیشترین کیفیت و بالاترین حد  طبیعی سخت گیری و کمال گرایی مسیر رو طراحی و سهم خودم رو  اجرا بکنم.",
      "صرف علاقه ی من به یاد گرفتن موجب شد که توی یک مرحله به سکون نرسم و بعد از یاد گرفتن کلی پیش نیاز ها ;حالا اولویت من این هستش که پروژه های میکرو سرویسی رو با معماری های مختلف یاد بگیرم و پیاده سازی بکنم.هرچی چالشش بیشتر، بهتر ^_~",
    ],
  },
  stats: [
    { value: "+۳", label: "سال تجربه‌ی حرفه‌ای" },
    { value: "B1", label: "فرانسوی " },
    { value: "C2", label: "انگلیسی" },
  ],
  skillGroups: [
    { title: "زبان و فریم‌ورک", items: ["TypeScript", "JavaScript", "React.js", "Next.js", "Nest.js"] },
    {
      title: "روی میز کارم",
      items: ["طراحی معماری", "WebSocket", " GraphQL APIs", "API gateways", "Server-to-Server Connections", "PWA"],
    },
  ],
  timelineEyebrow: "۰۲ / مسیر تا اینجا",
  timelineHeading: "چند نقطه‌ی عطف",
  timeline: [
    {
      year: "۱۳۹۸",
      title: "شروع همه چیز",
      description:
        "تقریبا همه جا از یه رفاقت و یک برنامه ریزی برای اینده شروع شد وخیلی زود این مسیر با یادگیری وردپرس و بعد html و بعد css و بعد js و oop و asynchronous و ...\nایده هامون برای یه تیم که اسمش چترا باشه از اون موقع تو فکرمون بوده😁.",
    },
    {
      year: "۱۴۰۰",
      title: "یک برنامه ریزی واقعی",
      description:
        "به نسبت ایده هامون تصمیم گرفتیم از حوزه ی وب شروع بکنیم .پس من از ابتدایی ترین حالتی که هر کسی میتونست شروع بکنه , شروع کردم و خیلی تشنه به یادگیری این مسیر رو ادامه دادم.",
    },
    {
      year: "۱۴۰۱",
      title: "عمیق شدن توی کار , خیلی عمیق !",
      description:
        "شاید بزرگترین مشکلی که تیمم با من داشت این بود که هرچیزی که یاد میگرفتم توی همون مقطع من رو قانع نمیکرد و تقریبا هر دو هفته یکبار خبر میدادم که خب...قراره فلان چیز هم یاد بگیرم😅این شد که باعث شد علاوه بر مباحث مرتبط با frontend سراغ backend هم برم تا بتونیم از ریپازیتوری های اختصاصی چترا استفاده بکنیم.",
    },
    {
      year: "۱۴۰۲",
      title: "یک اتفاق بزرگ برای  ChatraTech",
      description: "یکی از اعضای بسیار مفید و حرفه ای امروزمون به تیمم اضافه شد و از اولین بار هایی بود که چترا رشد میکنه.",
    },
    {
      year: "۱۴۰۳",
      title: "ورود به بازار",
      description:
        ".موفق شدیم با برنامه ریزی درست و گذشتن از کلی چالش با یک تیم حرفه ای توی وب یکسری پروژه های واقعی بگیریم تا بتونیم بطور واقعی خودمون رو محک بزنیم و اولین درامد هارو برای چترا هم به ارمغان بیاوریم",
    },
    {
      year: "۱۴۰۴",
      title: "امروز",
      description:
        "و حالا امروز , هنوز با کلی ایده ولی این سری با کسایی که توی حوزه های مختلف مثل js / ts و .net و شبکه و امنیت و ui/ux , seo و wordpress و ... حرفی برای گفتن دارند , داریم برای هدفامون تلاش میکنیم که از مهم ترین هدف هامونم اینه که برای نوجوان هایی که مثل قدیم خودمون بودند شرایطی درست کنیم که با چالش های کمتری به امنیت ذهنی و شغلی برسند.❤️",
    },
  ],
  workEyebrow: "۰۳ / کارهایی که انجام داده‌ام",
  workHeading: "چیزهایی که ساختم",
  projects: [
    {
      title: " پلتفرم فروشگاهی ChatraTech",
      description:
        "از با ارزش ترین ثمره های تیممون یک معماری ماژولار و scalable با nest js برای پلتفرم های فروشگاهی هستش که با دقت بالا و معماری شده ساخته شده و هنوز هم در حال توسعه است و هر روز بهتر میشه.",
      tags: ["Next.js", "Nest.js", "TypeScript"],
    },
    {
      title: "معماری microservice ",
      description:
        "چالشی ترین معماری ای که تونستم طراحی طراحیش بکنم که بتونم همه ی مهارت ها و دانشی که دارم رو یکجا و هدفمند بتونم اجرا بکنم که شامل بخش های مختلفی میشه و توش از :[redis , kafka , postgres , passports , jwt , extensions , .net , postgres , nestjs , nextjs , pwa + بیشتر از ۳ تا buisiness logics]",
      tags: ["Next.js", "Nest.js", "TypeScript"],
    },
    {
      title: "chrome extension ",
      description:
        "از اونجایی که خیلی اهل نوت برداری هستم اکستنشنی برای کروم ساختم که به ازای هر url امکان نوت برداری و مدیریت todo هارو میده که خیلی تصادفی اساتید و دانشگاه هم ازش خیلی استقبال کردند .",
      tags: ["JS", "Chrome Extension"],
    },
    {
      title: "توسعه ی پکیج های npm و pwa",
      description:
        "برای اینکه بتونیم توانمندی های خودمون رو نشون بدیم , یکسری پکیج های npm ای رو هم برای برنامه نویسان ایرانی طراحی و توسعه کردیم و از سامانه هایی که طراحی کردیم توسط pwa اون هارو کراس پلتفرم کردیم .",
      tags: ["npm", "PWA", "Design System"],
    },
    {
      title: "روتین",
      description:
        "شاید بتونم بگم سخت ترین و بزرگترین چیزی که تونستم بسازم برای خودم بوده که سعی کردم به یک روتینی دست پیدا بکنم که علاوه بر رشد علمی توی زمینه کاری , به رشد ذهنی و جسمی و اخلاقی خودم هم بپردازم و بتونم در کنار همه ی سخت گیری هام به خودم به یادگیری زبان و ورزش و اموزش دادن  و ... هم بپردازم.",
      tags: ["francais", "english", "routins"],
    },
  ],
  gallery: galleryImages.map(({ src, alt }) => ({ src, alt: alt.fa })),
  galleryEyebrow: "۰۴ / گالری",
  galleryHeading: "چند نما از کار و روزمره",
  nextEyebrow: "۰۵ / برنامه‌های بعدی",
  nextHeading: "چه چیزی در راه است",
  nextPlans: [
    {
      title: "توسعه‌ی محصول ChatraTech",
      description:
        " افزودن قابلیت‌های ایجنتی جدید و بهبود عملکرد در مقیاس بزرگ‌تر و بهبود در امنیت و سرعت و کلی فیچر های جذاب و فکر شده و تجاری سازی محیط ماژولار فروشگاهی چترا.",
      status: "در حال انجام",
    },
    {
      title: " توسعه رابط کاربری با PWA",
      description: "بالاخره اون برنامه ای خوبه که همه راحت بهش دسترسی داشته باشند و ازش لذت ببرند .درسته؟",
      status: "برنامه‌ریزی‌شده",
    },
    {
      title: "microservices and architectures ",
      description: "افق دیدی که برام جذابه یادگیری معماری پشت طراحی ها هست و بالابردن توانمندی خودم برای خلاق و دقیق بودن در انتخاب و اجرای اون معماری ها ",
      status: "در حال یادگیری",
    },
  ],
  contactEyebrow: "۰۶ / تماس",
  contactHeading: "بیایید یک چیز خوب بسازیم",
  contactSubtext: "برای همکاری، فرصت شغلی یا فقط یک گفت‌وگوی فنی، ایمیل بهترین راه است. معمولاً ظرف یکی دو روز پاسخ می‌دهم.",
  socials: [
    { label: "گیت‌هاب", href: "https://github.com/MrDiOXiD" },
    { label: "ایمیل", href: "mailto:mr.heydaridioxid@gmail.com" },
    { label: "شماره تماس", href: "tel:+989121318937" },
  ],
  contact: { email: "mr.heydaridioxid@gmail.com", github: "https://github.com/MrDiOXiD", phone: "+989121318937" },
};

const en: Profile = {
  name: "Amir Mohammad Heydari",
  handle: "Amir Mohammad Heydari",
  role: "Full-Stack Developer (Programmer)",
  affiliation: "Co-founder at ChatraTech",
  location: "Tehran, Iran",
  status: "Available for work",
  terminalLine: "Chatra create-something-memorable --with=care True",
  heroHeadline: ["We build", "the way things", "should be built"],
  googleIndexDescription:
    "Strong track record designing and shipping systems and platforms | fullstack PWA NestJS NextJS Postgres ORM ReactJS ts | Full-stack JavaScript developer",
  heroSubtext:
    "I've been on a full-stack developer path, and alongside my team ChatraTech, we've left behind work that's meaningful and carefully engineered — and we're pushing to keep going in that same direction.",
  about: {
    eyebrow: "01 / About Me",
    heading: "How do we work?",
    paragraphs: [
      "Here at Chatra, we work through different personalities and ways of thinking to shape an idea up to Chatra's standard — then I do everything I can to design the path and carry out my part with the highest quality, in the least time, and with a very natural level of rigor and perfectionism.",
      "My sheer love of learning has kept me from settling at any one stage — after picking up a long list of prerequisites, my priority now is learning and implementing microservice projects across different architectures. The harder the challenge, the better ^_~",
    ],
  },
  stats: [
    { value: "+3", label: "Years of experience" },
    { value: "B1", label: "French" },
    { value: "C2", label: "English" },
  ],
  skillGroups: [
    { title: "Languages & Frameworks", items: ["TypeScript", "JavaScript", "React.js", "Next.js", "Nest.js"] },
    {
      title: "On my desk",
      items: ["Architecture design", "WebSocket", "GraphQL APIs", "API gateways", "Server-to-Server Connections", "PWA"],
    },
  ],
  timelineEyebrow: "02 / How I Got Here",
  timelineHeading: "A few milestones",
  timeline: [
    {
      year: "2019",
      title: "Where it all started",
      description:
        "It pretty much all started with a friendship and a plan for the future, and very quickly turned into a path of learning WordPress, then HTML, then CSS, then JS, then OOP, then async, and so on.\nThe idea of a team called Chatra has been on our minds ever since 😁.",
    },
    {
      year: "2021",
      title: "An actual plan",
      description:
        "In line with our ideas, we decided to start in the web space. So I started from the most basic point anyone could start from, and kept going, thirsty to learn every step of the way.",
    },
    {
      year: "2022",
      title: "Going deep — really deep!",
      description:
        "Maybe the biggest issue my team had with me was that nothing I learned ever satisfied me for long, and roughly every couple of weeks I'd announce, 'okay... I'm about to learn this other thing too' 😅. That's what pushed me past frontend into backend as well, so we could build out Chatra's own dedicated repositories.",
    },
    {
      year: "2023",
      title: "A big moment for ChatraTech",
      description: "One of our most valuable, professional teammates today joined the team — one of the first real growth moments for Chatra.",
    },
    {
      year: "2024",
      title: "Entering the market",
      description:
        "With solid planning and after clearing a ton of challenges, we managed to land real projects on the web with a professional team — putting ourselves to a real test and bringing in Chatra's first revenue.",
    },
    {
      year: "2025",
      title: "Today",
      description:
        "And now, today — still full of ideas, but this time working alongside people who have real things to say across areas like JS/TS, .NET, networking and security, UI/UX, SEO, WordPress, and more — we're pushing toward our goals. One of the most important of those goals is creating the conditions for teenagers who were once like us to reach mental and career security with fewer obstacles. ❤️",
    },
  ],
  workEyebrow: "03 / What I've Built",
  workHeading: "Things I've made",
  projects: [
    {
      title: "ChatraTech E-commerce Platform",
      description:
        "One of the most valuable outcomes of our team — a modular, scalable architecture built with Nest.js for e-commerce platforms, engineered with a lot of care. It's still evolving and gets better every day.",
      tags: ["Next.js", "Nest.js", "TypeScript"],
    },
    {
      title: "Microservice architecture",
      description:
        "The most challenging architecture I've designed — a place to bring together everything I know and apply it with intent. It spans multiple parts and includes: Redis, Kafka, Postgres, Passport, JWT, extensions, .NET, Postgres, NestJS, NextJS, PWA, plus more than 3 business logic domains.",
      tags: ["Next.js", "Nest.js", "TypeScript"],
    },
    {
      title: "Chrome extension",
      description:
        "Since I'm big on note-taking, I built a Chrome extension that lets you take notes and manage todos per URL — it ended up getting a surprisingly warm reception from professors and universities.",
      tags: ["JS", "Chrome Extension"],
    },
    {
      title: "npm packages & PWA development",
      description:
        "To show what we're capable of, we designed and built a set of npm packages for Iranian developers, and turned the systems we designed into cross-platform apps using PWA.",
      tags: ["npm", "PWA", "Design System"],
    },
    {
      title: "Routine",
      description:
        "Maybe the hardest and biggest thing I've ever built is for myself — a routine where, alongside professional growth, I also work on my own mental, physical, and personal development: learning languages, exercising, teaching, and more, on top of everything else I hold myself to.",
      tags: ["francais", "english", "routine"],
    },
  ],
  gallery: galleryImages.map(({ src, alt }) => ({ src, alt: alt.en })),
  galleryEyebrow: "04 / Gallery",
  galleryHeading: "A few glimpses of work and everyday life",
  nextEyebrow: "05 / What's Next",
  nextHeading: "What's on the way",
  nextPlans: [
    {
      title: "ChatraTech product development",
      description:
        "Adding new agentic features, improving performance at a larger scale, strengthening security and speed, and rolling out a bunch of thoughtful features while commercializing Chatra's modular e-commerce environment.",
      status: "In progress",
    },
    {
      title: "Building the UI with PWA",
      description: "At the end of the day, a good app is one everyone can access easily and enjoy. Right?",
      status: "Planned",
    },
    {
      title: "Microservices and architectures",
      description: "What excites me is learning the architecture behind the design decisions, and sharpening my ability to be creative and precise in choosing and executing those architectures.",
      status: "Learning",
    },
  ],
  contactEyebrow: "06 / Contact",
  contactHeading: "Let's build something good",
  contactSubtext: "For collaboration, job opportunities, or just a technical chat, email is the best way to reach me. I usually reply within a day or two.",
  socials: [
    { label: "GitHub", href: "https://github.com/MrDiOXiD" },
    { label: "Email", href: "mailto:mr.heydaridioxid@gmail.com" },
    { label: "Phone", href: "tel:+989121318937" },
  ],
  contact: { email: "mr.heydaridioxid@gmail.com", github: "https://github.com/MrDiOXiD", phone: "+989121318937" },
};

export const profiles: Record<Locale, Profile> = { fa, en };

export const uiStrings: Record<Locale, UiStrings> = {
  fa: {
    navLabel: "پیمایش بخش‌های صفحه",
    sectionLabels: {
      hero: "معرفی",
      about: "درباره من",
      timeline: "مسیر",
      work: "کارها",
      gallery: "گالری",
      next: "برنامه‌ها",
      contact: "تماس",
    },
    readMore: "بیشتر درباره‌ام بخوان",
    directContact: "تماس مستقیم",
    writeEmail: "نوشتن ایمیل",
    builtWith: "ساخته‌شده با Next.js",
    prevImage: "عکس قبلی",
    nextImage: "عکس بعدی",
    closeLightbox: "بستن",
    profilePhotoAlt: "عکس پروفایل",
    languageToggle: "English",
  },
  en: {
    navLabel: "Section navigation",
    sectionLabels: {
      hero: "Intro",
      about: "About",
      timeline: "Journey",
      work: "Work",
      gallery: "Gallery",
      next: "Next up",
      contact: "Contact",
    },
    readMore: "Read more about me",
    directContact: "Direct contact",
    writeEmail: "Send an email",
    builtWith: "Built with Next.js",
    prevImage: "Previous photo",
    nextImage: "Next photo",
    closeLightbox: "Close",
    profilePhotoAlt: "Profile photo of",
    languageToggle: "فارسی",
  },
};

// نگهداری export قدیمی برای سازگاری با کدهایی که مستقیم `profile` فارسی را
// می‌خواهند (مثل متادیتای پیش‌فرض سرور در layout.tsx).
// Kept for code that wants the static Persian default (e.g. server metadata).
export const profile = fa;

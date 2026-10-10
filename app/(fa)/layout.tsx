import type { Metadata, Viewport } from "next";
import { vazirmatn, jetbrainsMono } from "@/lib/fonts";
import { siteUrl } from "@/lib/site";
import { Aurora } from "@/components/ui/Aurora";
import { ChronoSpine } from "@/components/ui/ChronoSpine";
import { SectionNav } from "@/components/ui/SectionNav";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { profiles, uiStrings } from "@/content/profile";
import "../globals.css";

const profile = profiles.fa;
const ui = uiStrings.fa;

// This is a separate ROOT layout (its own <html>/<body>) from the (en)
// group's layout — Next.js supports multiple root layouts via route
// groups specifically for this case: the default locale (fa) is served
// with no URL prefix at "/", English is served at "/en". Search engines
// see two fully server-rendered, independently-crawlable documents with
// correct <html lang>/dir, canonical, and hreflang — no client JS, no
// redirect, no locale flicker.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${profile.name} — ${profile.role}`,
  description: profile.googleIndexDescription,
  keywords: [profile.name, profile.role, "Next.js", "Full-Stack Developer", "پورتفولیو", "توسعه‌دهنده فول‌استک", "NestJs", "typescript", "javascript", "امیر محمد حیدری", "امیر حیدری", "برنامه نویس", "طراح وب"],
  alternates: {
    canonical: "/",
    languages: { "fa-IR": "/", en: "/en", "x-default": "/" },
  },
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroSubtext,
    url: siteUrl,
    siteName: profile.name,
    locale: "fa_IR",
    type: "website",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: profile.heroSubtext,
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071416",
};

export default function FaRootLayout({ children }: { children: React.ReactNode }) {
  // ساختار اسکیمای پیشرفته شامل Person و ProfilePage برای درک بهتر موتورهای جستجو
  const schemaData = {
    
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://heydariamir.ir/#person",
      "name": "امیر محمد حیدری خوئی",
      "jobTitle": "Full Stack Developer",
      "image": "https://heydariamir.ir/path-to-your-photo.jpg",
      "url": "https://heydariamir.ir",
      "sameAs": [
        "https://github.com/MrDiOXiD",
        "https://www.linkedin.com/in/chatra-tech-team/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "ChatraTech",
        "url": "https://chatratech.ir" 
      },
      "description": "توسعه‌دهنده فول‌استک و متخصص در معماری میکروسرویس، Nest.js و TypeScript.",
      "knowsAbout": ["TypeScript", "Nest.js", "Microservices", "PostgreSQL", "React.js", "PWA"]
    },
    {
      "@type": "WebSite",
      "@id": "https://heydariamir.ir/#website",
      "url": "https://heydariamir.ir",
      "name": "سایت شخصی امیر محمد حیدری",
      "publisher": { "@id": "https://heydariamir.ir/#person" }
    }
  ]
}

   //export default function FaRootLayout({ children }: { children: React.ReactNode }) {
   // const personJsonLd = {
   // "@context": "https://schema.org",
   //"@type": "Person",
   // name: profile.name,
   // jobTitle: profile.role,
   // url: siteUrl,
   // email: `mailto:${profile.contact.email}`,
   // sameAs: [profile.contact.github],
   //};

  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Aurora />
        <ChronoSpine />
        <SectionNav ui={ui} />
        <LanguageToggle href="/en" label={ui.languageToggle} />
        {children}
      </body>
    </html>
  );
}

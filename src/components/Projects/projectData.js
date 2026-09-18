// Single source of truth for the projects page.
// Each project renders as one row: live site preview on the right,
// description + tech stack on the left.

export const TECH = {
  react: { name: "React", color: "#61DAFB" },
  reactNative: { name: "React Native", color: "#61DAFB" },
  node: { name: "Node.js", color: "#5FA04E" },
  express: { name: "Express", color: "#ffffff" },
  mongo: { name: "MongoDB", color: "#47A248" },
  firebase: { name: "Firebase", color: "#FFCA28" },
  nginx: { name: "Nginx", color: "#009639" },
  razorpay: { name: "Razorpay", color: "#3395FF" },
  redux: { name: "Redux", color: "#764ABC" },
  bootstrap: { name: "Bootstrap", color: "#7952B3" },
  tailwind: { name: "Tailwind", color: "#06B6D4" },
  js: { name: "JavaScript", color: "#F7DF1E" },
  android: { name: "Android", color: "#3DDC84" },
  spring: { name: "Spring Boot", color: "#6DB33F" },
  mysql: { name: "MySQL", color: "#4479A1" },
  expo: { name: "Expo", color: "#ffffff" },
};

// group: "mygct" = own product suite, "client" = client work
export const projects = [
  {
    id: "mygct-hub",
    group: "mygct",
    title: "My GCT Hub",
    tagline: "Study material platform for GCT Coimbatore",
    url: "https://mygct.org",
    host: "mygct.org",
    embeddable: true,
    accent: "#7c5cff",
    status: "Live",
    description:
      "The core of the My GCT family. Students download semester question papers, unit test papers, notes and syllabus, filtered by department and regulation. Staff publish material from a separate console and it appears instantly for the right batch.",
    highlights: [
      "Department & regulation-wise filtering",
      "Staff publishing console",
      "Semester-wise post feed",
    ],
    tech: ["react", "node", "express", "mongo", "nginx"],
    links: [{ type: "site", label: "Visit Site", url: "https://mygct.org" }],
  },
  {
    id: "mygct-store",
    group: "mygct",
    title: "My GCT Store",
    tagline: "App store for student-built projects",
    url: "https://store.mygct.org",
    host: "store.mygct.org",
    embeddable: true,
    accent: "#2f9e7e",
    status: "Live",
    description:
      "The official app store for Government College of Technology. Students publish the Android apps, web apps and tools they build; other students discover, download and review them — giving campus projects a real audience instead of a dead repo.",
    highlights: ["Publish & review flow", "Ratings and screenshots", "Developer profiles"],
    tech: ["react", "node", "express", "mongo"],
    links: [{ type: "site", label: "Visit Site", url: "https://store.mygct.org" }],
  },
  {
    id: "mygct-slides",
    group: "mygct",
    title: "My GCT Slides",
    tagline: "Open presenter slides with a 4-digit code",
    url: "https://slides.mygct.org",
    host: "slides.mygct.org",
    embeddable: true,
    accent: "#e0803a",
    status: "Live",
    description:
      "A presenter uploads their PDF and gets a 4-digit code. Anyone in the room types that code on any device and the slides open in seconds — no login, no file sharing, no app install. Built for classrooms where the projector is too far to read.",
    highlights: ["4-digit code pairing", "Any device, no login", "PDF rendering in browser"],
    tech: ["react", "node", "express", "mongo"],
    links: [{ type: "site", label: "Visit Site", url: "https://slides.mygct.org" }],
  },
  {
    id: "mygct-co",
    group: "mygct",
    title: "My GCT CO",
    tagline: "Course outcome attainment, automated",
    url: "https://co.mygct.org",
    host: "co.mygct.org",
    embeddable: true,
    accent: "#3b82f6",
    status: "Live",
    description:
      "Turns raw CA test marks into course outcome attainment sheets. Handles CA tests, retests, assignments, CO attainment, course surveys and the PO-PSO matrix, then exports the entire workbook as a single Excel file — replacing hours of manual spreadsheet work for staff.",
    highlights: ["CA tests, retests & assignments", "PO-PSO matrix", "One-click Excel export"],
    tech: ["react", "node", "express", "mongo"],
    links: [{ type: "site", label: "Visit Site", url: "https://co.mygct.org" }],
  },
  {
    id: "mygct-app",
    group: "mygct",
    title: "My GCT Hub — Android App",
    tagline: "The campus app, on Play Store",
    url: "https://play.google.com/store/apps/details?id=com.mygcthub&hl=en-US",
    host: "play.google.com",
    embeddable: false,
    // Screenshots already shipped in public/mygcthub/
    shots: [
      "/mygcthub/my_gct_home_screen_ragavan.png",
      "/mygcthub/my_gct_attendance_screen_ragavan.png",
      "/mygcthub/my_gct_club_screen_ragavan.png",
      "/mygcthub/my_gct_message_screen_ragavan.png",
      "/mygcthub/my_gct_post_screen_ragavan.png",
      "/mygcthub/my_gct_profile_screen_ragavan.png",
    ],
    accent: "#3DDC84",
    status: "On Play Store",
    description:
      "The mobile side of My GCT, published on the Play Store. Connects students, staff and alumni — study material, attendance, club activity, department posts and push notifications, all in one app. Staff share resources from the GCT Staff app and they surface here for students.",
    highlights: ["Attendance & clubs", "Push notifications", "Staff → student resource sync"],
    tech: ["reactNative", "node", "express", "mongo", "firebase"],
    links: [
      {
        type: "play",
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.mygcthub&hl=en-US",
      },
    ],
  },
  {
    id: "thozha",
    group: "client",
    title: "Thozha Mobiles",
    tagline: "Smartphone & appliance storefront",
    url: "https://thozhamobiles.com",
    host: "thozhamobiles.com",
    embeddable: true,
    accent: "#e5484d",
    status: "Live",
    client: "Elumalai, Madurai",
    description:
      "A full retail storefront for a mobile and home appliance dealer — premium smartphones, accessories, smart watches and appliances. Covers catalogue, cart, checkout with pay-on-delivery, order tracking and an admin panel the owner runs without any developer involvement.",
    highlights: ["Catalogue & cart", "Pay on delivery", "Owner-run admin panel"],
    tech: ["react", "node", "express", "mongo", "nginx"],
    links: [{ type: "site", label: "Visit Site", url: "https://thozhamobiles.com" }],
  },
  {
    id: "newleader",
    group: "client",
    title: "New Leader Syndicates",
    tagline: "Industrial tailoring machines & spares",
    url: "https://newleader.in",
    host: "newleader.in",
    embeddable: true,
    accent: "#f5a524",
    status: "Live",
    client: "B2B supplier",
    description:
      "A B2B catalogue for industrial tailoring machines, genuine spares and accessories. The hard part was navigation: thousands of parts browsable by machine type and model, so a buyer who knows only their machine number still lands on the right spare.",
    highlights: ["Browse by machine & model", "Deep spare-part catalogue", "Enquiry flow"],
    tech: ["react", "node", "express", "mongo"],
    links: [{ type: "site", label: "Visit Site", url: "https://newleader.in" }],
  },
  {
    id: "onlyneedles",
    group: "client",
    title: "Only Needles",
    tagline: "Authorized Groz-Beckert dealer, India",
    url: "https://onlyneedles.in",
    host: "onlyneedles.in",
    // Sends X-Frame-Options: DENY — cannot be iframed, renders branded panel instead.
    embeddable: false,
    accent: "#8b5cf6",
    status: "Live",
    client: "Pan-India e-commerce",
    description:
      "Online store for genuine Groz-Beckert sewing and shoe machine needles, run by an authorized Indian dealer. Razorpay checkout, pan-India delivery and a hardened setup — strict CSP, locked-down frame policy and analytics — because this one takes real payments.",
    highlights: ["Razorpay payments", "Pan-India delivery", "Strict CSP / hardened"],
    tech: ["react", "node", "express", "mongo", "razorpay"],
    links: [{ type: "site", label: "Visit Site", url: "https://onlyneedles.in" }],
  },
];

export const groups = [
  {
    id: "mygct",
    label: "Product Suite",
    title: "The My GCT Family",
    blurb:
      "An open-source ecosystem I built for Government College of Technology, Coimbatore — four web products and an Android app sharing one account system and one backend.",
  },
  {
    id: "client",
    label: "Client Work",
    title: "Built for Clients",
    blurb:
      "Production stores and catalogues running live businesses — real orders, real payments, handed over with admin panels the owners run themselves.",
  },
];

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  category: "Guides" | "Industry" | "Company";
  date: string;
  author: string;
  image: string;
  description: string;
  content?: string; // HTML content
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How to Create Smart SOAP Notes Using AI",
    slug: "how-to-create-smart-soap-notes-using-ai",
    category: "Guides",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-01.jpg",
    description: "Learn how AI can streamline your documentation process.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 2,
    title: "5 Ways AI Is Transforming Medspa Operations",
    slug: "5-ways-ai-is-transforming-medspa-operations",
    category: "Industry",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-02.jpg",
    description:
      "Discover the impact of artificial intelligence on medspa efficiency.",
    content: `
      <p class="mb-6">In the evolving world of aesthetics and wellness, Medspas are no longer just about treatments—they're about experience, efficiency, and personalization. Enter Artificial Intelligence.</p>
      
      <p class="mb-6">Once considered futuristic, AI is now at the heart of operational innovation for modern Medspas. Whether it's automating documentation or powering smarter communications, AI is enabling clinics to work faster, smarter, and more patient-focused.</p>
      
      <p class="mb-8">Here are five powerful ways AI is reshaping how Medspas operate and serve patients:</p>

      <h3 class="text-2xl font-medium text-zinc-900 mb-4">1. Smarter Pre-Visit Preparation</h3>
      <p class="mb-4">AI tools can gather and organize key patient data—such as procedure history, skincare goals, medical conditions, and even social preferences—into a structured, concise visit prep sheet.</p>
      
      <p class="mb-4 font-medium">Benefits:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Eliminates the need for manual chart reviews</li>
        <li>Saves providers 5–10 minutes per patient</li>
        <li>Improves patient confidence when clinicians are well-prepared</li>
      </ul>

      <p class="mb-8"><span class="font-medium">How Mentera Helps:</span><br/>Mentera uses AI to automatically generate visit prep summaries before every appointment. That means providers walk in already briefed on the patient's goals and history—without lifting a finger.</p>

      <h3 class="text-2xl font-medium text-zinc-900 mb-4">2. AI-Powered SOAP Notes</h3>
      <p class="mb-4">Charting used to mean staying after hours or juggling a clipboard during sessions. AI now listens in real time and converts spoken words into structured, HIPAA-compliant SOAP notes.</p>
      
      <p class="mb-4 font-medium">Benefits:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>No manual typing</li>
        <li>Consistent formatting and reduced documentation errors</li>
        <li>Less burnout from after-hours charting</li>
      </ul>

      <p class="mb-8"><span class="font-medium">Why it matters:</span><br/>Clinicians reclaim hours each week and stay more present during patient care. With Mentera, notes are ready by the time the visit ends.</p>

      <h3 class="text-2xl font-medium text-zinc-900 mb-4">3. Automated Patient Communication</h3>
      <p class="mb-4">AI can send tailored messages before and after visits—think appointment reminders, pre/post-care instructions, or even birthday wishes—via SMS or email.</p>
      
      <p class="mb-4 font-medium">Benefits:</p>
      <ul class="list-disc pl-5 mb-4 space-y-2">
        <li>Reduces no-shows</li>
        <li>Increases patient satisfaction</li>
        <li>Boosts revenue from repeat bookings</li>
      </ul>

      <p class="mb-8"><span class="font-medium">Bonus:</span><br/>AI can also handle basic inquiries like "What should I do before a microneedling session?" via chat or auto-reply, freeing your front desk from repetitive tasks.</p>

      <h3 class="text-2xl font-medium text-zinc-900 mb-8">The Bottom Line</h3>
      <p class="mb-4">AI isn't replacing your team—it's enhancing them.</p>
      <p>By removing the repetitive, manual parts of Medspa operations, AI gives providers and staff more time to do what they do best: deliver excellent care and build meaningful client relationships.</p>
    `,
  },
  {
    id: 3,
    title: "Behind the Scenes: Building Mentera's Smart Inbox",
    slug: "behind-the-scenes-building-menteras-smart-inbox",
    category: "Company",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-03.jpg",
    description:
      "An inside look at how we developed our intelligent inbox feature.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 4,
    title:
      "How to Automate Patient Follow-Ups Without Losing the Personal Touch",
    slug: "how-to-automate-patient-follow-ups",
    category: "Guides",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-01.jpg",
    description:
      "Strategies for maintaining patient relationships with automation.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 5,
    title: "10 Proven Email Templates That Increase Medspa Bookings",
    slug: "10-proven-email-templates-that-increase-medspa-bookings",
    category: "Guides",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-02.jpg",
    description: "Ready-to-use templates to boost your appointment rates.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 6,
    title: "The Future of EHR Integrations: What Medspas Need to Know",
    slug: "the-future-of-ehr-integrations",
    category: "Industry",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-03.jpg",
    description:
      "Understanding the evolving landscape of electronic health records.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 7,
    title: "The Future of EHR Integrations: What Medspas Need to Know",
    slug: "the-future-of-ehr-integrations-2",
    category: "Industry",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-01.jpg",
    description:
      "Understanding the evolving landscape of electronic health records.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 8,
    title: "The Future of EHR Integrations: What Medspas Need to Know",
    slug: "the-future-of-ehr-integrations-3",
    category: "Industry",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-02.jpg",
    description:
      "Understanding the evolving landscape of electronic health records.",
    content: "<p>Content coming soon...</p>",
  },
  {
    id: 9,
    title: "The Future of EHR Integrations: What Medspas Need to Know",
    slug: "the-future-of-ehr-integrations-4",
    category: "Industry",
    date: "July 10, 2025",
    author: "Sarah Johnson",
    image: "/images/blog-post-03.jpg",
    description:
      "Understanding the evolving landscape of electronic health records.",
    content: "<p>Content coming soon...</p>",
  },
];

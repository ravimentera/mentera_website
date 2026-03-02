import { blogService } from "@/services/blogService";

export async function GET() {
  const baseUrl = "https://mentera.ai";
  const blogPosts = await blogService.getAllPosts();

  const blogPostLinks = blogPosts
    .map((post) => `- ${post.title}: ${baseUrl}/blog/${post.slug}`)
    .join("\n");

  const content = `# Mentera.ai
## AI Assistant for Private Medical Practices

> Mentera is an AI-powered assistant platform designed for private medical practices including med spas, dental offices, and dermatology clinics. Mentera automates back-office operations — patient follow-ups, appointment scheduling, clinical documentation (AI Scribe), front desk tasks, and patient communication — so staff can focus on patient care.

## Key Facts
- HIPAA compliant and GDPR compliant
- Integrates with 50+ tools including DrChrono, Athenahealth, Dentrix, PatientNow, Nextech, Salesforce, HubSpot
- AI Scribe for clinical documentation
- Saves up to 250 hours per user per year
- Founded for private practices (not hospitals or enterprise health systems)

## Key Pages
- Homepage: ${baseUrl}
- AI Scribe: ${baseUrl}/ai-scribe
- Integrations: ${baseUrl}/integrations
- Blog: ${baseUrl}/blog
- Privacy Policy: ${baseUrl}/privacy-policy

## Blog Posts
${blogPostLinks}

## Contact
- Website: https://mentera.ai
- Email: support@mentera.ai
- LinkedIn: https://www.linkedin.com/company/mentera-ai`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}

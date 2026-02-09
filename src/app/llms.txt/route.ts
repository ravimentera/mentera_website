export async function GET() {
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
- Homepage: https://mentera.ai
- AI Scribe: https://mentera.ai/ai-scribe
- Integrations: https://mentera.ai/integrations
- Blog: https://mentera.ai/blog
- Privacy Policy: https://mentera.ai/privacy-policy

## Blog Posts
- Your Med Spa Doesn't Have a Staffing Problem: https://mentera.ai/blog/why-your-med-spa-is-losing-patients-and-revenue
- Top AI Scribe Tools for Med Spas 2026: https://mentera.ai/blog/top-ai-scribe-tools-med-spas-2026
- Top 3 AI Courses to Automate Your Private Practice: https://mentera.ai/blog/top-3-ai-courses-to-automate-your-private-practice
- Top AI Scribe Tools for Dentists 2026: https://mentera.ai/blog/top-ai-scribe-tools-dentists-2026
- 5 Ways AI Can Streamline Patient Communication: https://mentera.ai/blog/5-ways-ai-can-streamline-patient-communication-and-boost-satisfaction

## Contact
- Website: https://mentera.ai
- Email: support@mentera.ai
- LinkedIn: https://www.linkedin.com/company/mentera-ai`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}

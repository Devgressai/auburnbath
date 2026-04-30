import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/privacy-policy";

export const metadata = buildMetadata({
  title: "Privacy Policy | Auburn Bath",
  description: `How ${site.name} collects, uses, and protects information submitted through the website.`,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Privacy Policy", href: PATH },
          ]}
        />
      </Container>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="A short, plain-English summary of how Auburn Bath handles information submitted through this website."
      />
      <article className="py-12">
        <Container size="narrow" className="prose-local">
          <p>
            This privacy policy describes how {site.name} (a service brand
            of {site.parent}) collects and uses information submitted
            through this website.
          </p>
          <h2>Information we collect</h2>
          <p>
            When you submit a contact form, we collect the information you
            provide — typically your name, phone number, email address,
            city, project type, and any details you share about the
            project. We may also collect basic, non-identifying analytics
            data such as page views and device type.
          </p>
          <h2>How we use it</h2>
          <p>
            We use submitted information solely to respond to your inquiry,
            schedule a consultation, and provide an estimate for the work
            you've asked about. We don't sell or rent your information to
            third parties.
          </p>
          <h2>How we protect it</h2>
          <p>
            Submissions are transmitted over secure connections and stored
            on systems we control. We limit access to team members
            involved with your project.
          </p>
          <h2>Your choices</h2>
          <p>
            You can request that we delete your information at any time by
            emailing {site.email}. We'll remove it from our active
            records, subject to any legal record-keeping requirements.
          </p>
          <h2>Updates</h2>
          <p>
            We may update this policy occasionally. The version on this
            page is always the current one. If you have questions, email
            us at {site.email}.
          </p>
        </Container>
      </article>
    </>
  );
}

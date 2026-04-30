import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { PageHeader } from "@/components/page-header";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/terms";

export const metadata = buildMetadata({
  title: "Terms of Use | Auburn Bath",
  description: `Terms of use for the ${site.name} website — what's covered, what isn't, and how to reach us.`,
  path: PATH,
});

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Terms", href: PATH },
          ]}
        />
      </Container>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Use"
        description="The basic terms that apply to using this website. Project-specific contracts are signed separately before any remodel work begins."
      />
      <article className="py-12">
        <Container size="narrow" className="prose-local">
          <h2>Use of this site</h2>
          <p>
            This website is provided for informational purposes about
            {" "}{site.name}'s bathroom remodeling services. By using the
            site, you agree to use it lawfully and responsibly.
          </p>
          <h2>Content</h2>
          <p>
            All content on this site, including text, images, and
            illustrations, is owned by {site.name} or {site.parent}, or
            used with permission. You may share links to pages on this
            site, but you may not copy or redistribute the content without
            written permission.
          </p>
          <h2>Estimates and pricing</h2>
          <p>
            Pricing references on this site are educational. Actual
            project pricing depends on layout, materials, plumbing
            changes, waterproofing needs, tile selection, and project
            scope, and is provided in writing after an on-site
            consultation.
          </p>
          <h2>Project agreements</h2>
          <p>
            Any actual remodel work is governed by a separate written
            agreement signed by both parties. Submitting a contact form on
            this site does not create a contract.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            We make reasonable efforts to keep this site accurate and up
            to date, but we don't warrant that it's error-free.
            {" "}{site.name} and {site.parent} are not liable for any
            indirect or incidental damages arising out of use of this
            site.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms can be sent to {site.email}.
          </p>
        </Container>
      </article>
    </>
  );
}

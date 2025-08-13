import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "z7249e6t",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});

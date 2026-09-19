import type { CollectionConfig } from "payload";

/** Staff accounts for the admin panel, plus the "hub" service user whose API key the Hub uses. */
export const Users: CollectionConfig = {
  slug: "users",
  auth: { useAPIKey: true },
  admin: {
    useAsTitle: "email",
    group: "Admin",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
  ],
};

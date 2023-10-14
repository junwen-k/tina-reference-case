import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Job Category",
        name: "jobCategory",
        path: "content/job-categories",
        format: "json",
        fields: [
          {
            type: "string",
            name: "label",
          },
          {
            type: "string",
            name: "value",
          },
        ],
      },
      {
        label: "Job Location",
        name: "jobLocation",
        path: "content/job-locations",
        format: "json",
        fields: [
          {
            type: "string",
            name: "label",
          },
          {
            type: "string",
            name: "value",
          },
        ],
      },
      {
        label: "Jobs",
        name: "job",
        path: "content/jobs",
        fields: [
          {
            type: "string",
            name: "title",
          },
          {
            type: "reference",
            name: "category",
            collections: ["jobCategory"],
          },
          {
            type: "reference",
            name: "location",
            collections: ["jobLocation"],
          },
          {
            type: "string",
            name: "body",
            isBody: true,
          },
        ],
      },
    ],
  },
});

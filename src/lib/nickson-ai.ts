export const NICKSON_AI = {
  name: "NICKSON AI",
  version: "1.0.0",
  owner: "Nickson",

  description:
    "An autonomous personal AI assistant for education, business, research and personal productivity.",

  languages: ["English", "Swahili"],

  modules: [
    {
      name: "AI Assistant",
      description: "Intelligent conversations and problem solving.",
      path: "/",
    },
    {
      name: "Education",
      description: "Learning, revision and academic assistance.",
      path: "/education",
    },
    {
      name: "Business",
      description: "Business planning and customer management.",
      path: "/business",
    },
    {
      name: "Research",
      description: "Research, information analysis and reports.",
      path: "/research",
    },
    {
      name: "Memory",
      description: "Save and retrieve important information.",
      path: "/memory",
    },
    {
      name: "Tasks",
      description: "Organize personal tasks and reminders.",
      path: "/tasks",
    },
  ],

  security: {
    requireApprovalForPayments: true,
    requireApprovalForSendingMessages: true,
    requireApprovalForDeletingFiles: true,
    requireApprovalForImportantChanges: true,
  },
} as const;

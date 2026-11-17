const fs = require("fs");

const files = [
  "package.json",
  "src/app/page.tsx",
  "src/app/api/chat/route.ts",
  "src/lib/supabase/server.ts",
  "src/app/dashboard/page.tsx",
  "src/app/login/page.tsx",
  "src/app/memory/page.tsx",
  "supabase/schema.sql",
];

console.log("\n========== NICKSON AI PROJECT ==========\n");

for (const file of files) {
  console.log(
    `${fs.existsSync(file) ? "FOUND   " : "MISSING "} ${file}`
  );
}

console.log("\n========== NEXT STEP ==========\n");

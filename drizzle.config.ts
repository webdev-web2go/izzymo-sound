import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schema.ts",
  driver: "mysql2",
  dbCredentials: {
    connectionString: env.MYSQL_URL,
  },
  tablesFilter: ["izzymosound_*"],
} satisfies Config;

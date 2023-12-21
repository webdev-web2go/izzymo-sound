/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
import WithNextIntl from "next-intl/plugin";

const nextConfig = {};
const withNextIntl = WithNextIntl("./src/i18n.ts")(nextConfig);

export default withNextIntl;

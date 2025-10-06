export function getBaseUrl(opts?: { reqUrl?: string }): string {
  // Priority: APP_URL (server) > NEXT_PUBLIC_APP_URL (client/server) > req origin > hardcoded Render URL > ''
  const envBase = process.env.APP_URL || process.env.NEXT_PUBLIC_APP_URL;
  if (envBase && envBase.trim()) return envBase.replace(/\/$/, "");
  if (opts?.reqUrl) {
    try {
      const origin = new URL(opts.reqUrl).origin;
      if (origin) return origin.replace(/\/$/, "");
    } catch {}
  }
  return "https://ai-contract-proposal.onrender.com";
}


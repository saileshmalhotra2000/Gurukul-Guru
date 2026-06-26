import { getStore } from "@netlify/blobs";

const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff"
    }
  });

export default async (request) => {
  if (request.method !== "POST") return json({ error: "Method not allowed." }, 405);

  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid JSON body." }, 400);
  }

  const { action, syncId, bundle } = body || {};
  if (!/^[a-f0-9]{64}$/.test(syncId || "")) return json({ error: "Invalid sync identity." }, 400);

  const store = getStore("magnet-observations");

  if (action === "pull") {
    const stored = await store.get(syncId, { type: "json", consistency: "strong" });
    return json({ bundle: stored || null });
  }

  if (action === "push") {
    if (
      !bundle ||
      bundle.version !== 1 ||
      typeof bundle.iv !== "string" ||
      typeof bundle.ciphertext !== "string" ||
      bundle.iv.length > 64 ||
      bundle.ciphertext.length > 2_000_000
    ) {
      return json({ error: "Invalid encrypted bundle." }, 400);
    }

    await store.setJSON(syncId, {
      version: 1,
      iv: bundle.iv,
      ciphertext: bundle.ciphertext,
      updatedAt: new Date().toISOString()
    });
    return json({ saved: true });
  }

  return json({ error: "Unknown sync action." }, 400);
};

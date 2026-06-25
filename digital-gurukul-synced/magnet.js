const STORAGE_KEY = "gurukulMagnetObservations";
const DRAFT_KEY = "gurukulMagnetDraft";
const SYNC_SESSION_KEY = "gurukulMagnetSyncPhrase";
const SYNC_RESET_KEY = "gurukulMagnetResetAt";
const SYNC_ENDPOINT = "/.netlify/functions/magnet-sync";

const questions = [
  {
    id: "event", stage: "The moment", title: "Begin with what happened.",
    guide: "Stay close to the facts. No interpretation is needed yet.",
    hint: "Describe one specific moment that caught your attention or disturbed your ease.",
    type: "textarea", placeholder: "What happened?", example: "A colleague changed the plan without telling me."
  },
  {
    id: "contract", stage: "The inner voice", title: "What did the contract say?",
    guide: "A contract is the mind’s quiet rule about how life or people should behave.",
    hint: "Write the exact sentence, as if the voice inside you were speaking.",
    type: "textarea", placeholder: "It should not be this way…", example: "People should communicate before changing something that affects everyone."
  },
  {
    id: "belief", stage: "The belief", title: "What was it trying to make you believe?",
    guide: "The contract gains force by presenting an interpretation as reality.",
    hint: "Choose the closest example, or name the belief in your own words.",
    type: "select",
    options: ["Things are not as they should be.", "I cannot relax until it is fixed.", "Harmony has been disturbed.", "Harmony is not possible without fixing this.", "Peace has been disturbed.", "I need to restore harmony.", "I am not being respected.", "I may lose control of the situation."],
    other: true, example: "If I do not intervene, the situation will become disorderly."
  },
  {
    id: "believed", stage: "The grip", title: "How fully did you believe it?",
    guide: "No judgment. We are only noticing how strongly the thought took hold.",
    type: "choices", options: ["Not at all", "A little", "Mostly", "Completely"]
  },
  {
    id: "urge", stage: "The first movement", title: "What was the first tiny urge?",
    guide: "Before action comes a small movement: fix, explain, withdraw, defend, correct.",
    hint: "Name the earliest impulse you can remember.",
    type: "text", placeholder: "I wanted to…", example: "Correct them immediately and explain why the old plan was better."
  },
  {
    id: "returned", stage: "The return", title: "How often did the mind return?",
    guide: "Repetition is useful evidence. A magnet reveals itself through return.",
    type: "choices", options: ["It did not return", "Once", "Several times", "Many times"]
  },
  {
    id: "returning", stage: "The return", title: "What was the mind returning to?",
    guide: "Look beneath the story. What outcome, condition, or feeling kept calling?",
    type: "select", options: ["The contract", "Harmony", "Peace", "Fixing it", "Understanding it", "Being heard", "Restoring order"], other: true,
    example: "I kept rehearsing how I could make them understand my point."
  },
  {
    id: "magnet", stage: "The magnet", title: "Which magnet was activated?",
    guide: "The magnet is what attention keeps moving toward, defending, or trying to restore.",
    type: "select", options: ["Harmony", "Peace", "Respect", "Learning", "Order", "Connection", "Safety", "Freedom", "Fairness", "Understanding"], other: true,
    example: "If many answers feel possible, choose the one the mind was most unwilling to lose."
  },
  {
    id: "deeper", stage: "What it protects", title: "What deeper value was being protected?",
    guide: "A visible magnet often guards something quieter beneath it.",
    type: "select", options: ["Peace", "Connection", "Safety", "Learning", "Presence", "Belonging", "Dignity", "Freedom", "Trust"], other: true,
    example: "Order may protect safety. Harmony may protect connection. Respect may protect dignity."
  },
  {
    id: "threatened", stage: "The imagined cost", title: "What felt threatened if nothing changed?",
    guide: "Let the mind reveal what it feared would be lost.",
    type: "select", options: ["Peace", "Harmony", "Respect", "Learning", "Connection", "Safety", "Control", "Nothing important"], other: true,
    example: "If this stayed unresolved, I feared the relationship would no longer feel safe."
  },
  {
    id: "insight", stage: "The seeing", title: "What does this teach you about your magnet?",
    guide: "Complete the observation in your own language. This is where information becomes insight.",
    type: "textarea", placeholder: "I am beginning to see…",
    example: "Harmony appears repeatedly, but underneath it I may actually be protecting a sense of connection."
  }
];

let observations = safeParse(STORAGE_KEY, []);
let draft = safeParse(DRAFT_KEY, {});
let resetAt = localStorage.getItem(SYNC_RESET_KEY) || "";
let currentQuestion = 0;
let toastTimer;
let syncInProgress = false;

const inquiryView = document.querySelector("#inquiryView");
const dashboardView = document.querySelector("#dashboardView");
const questionHost = document.querySelector("#questionHost");
const progressBar = document.querySelector("#progressBar");
const previousButton = document.querySelector("#previousQuestion");
const nextButton = document.querySelector("#nextQuestion");
const summaryDialog = document.querySelector("#summaryDialog");
const syncDialog = document.querySelector("#syncDialog");
const syncPhraseInput = document.querySelector("#syncPhrase");
const openSyncButton = document.querySelector("#openSync");

function safeParse(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; }
  catch { return fallback; }
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  })[character]);
}

function renderQuestion() {
  const question = questions[currentQuestion];
  document.querySelector("#questionNumber").textContent = String(currentQuestion + 1).padStart(2, "0");
  document.querySelector("#questionTotal").textContent = questions.length;
  document.querySelector("#stageLabel").textContent = question.stage;
  document.querySelector("#guideTitle").textContent = question.title;
  document.querySelector("#guideText").textContent = question.guide;
  progressBar.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;
  previousButton.disabled = currentQuestion === 0;
  nextButton.innerHTML = currentQuestion === questions.length - 1 ? "Reveal the pattern <span>✦</span>" : "Continue <span>→</span>";

  let control = "";
  const saved = draft[question.id] || "";

  if (question.type === "textarea") {
    control = `<textarea id="activeAnswer" placeholder="${escapeHtml(question.placeholder)}">${escapeHtml(saved)}</textarea>`;
  } else if (question.type === "text") {
    control = `<input id="activeAnswer" type="text" value="${escapeHtml(saved)}" placeholder="${escapeHtml(question.placeholder)}" />`;
  } else if (question.type === "select") {
    const isCustom = saved && !question.options.includes(saved);
    control = `<select id="activeAnswer">
      <option value="">Choose what feels closest…</option>
      ${question.options.map(option => `<option ${saved === option ? "selected" : ""}>${escapeHtml(option)}</option>`).join("")}
      ${question.other ? `<option value="__other" ${isCustom ? "selected" : ""}>Something else…</option>` : ""}
    </select>
    ${question.other ? `<input class="other-field ${isCustom ? "visible" : ""}" id="otherAnswer" type="text" value="${isCustom ? escapeHtml(saved) : ""}" placeholder="Write it in your own words…" />` : ""}`;
  } else {
    control = `<div class="choice-list">${question.options.map((option, index) => `
      <div class="choice">
        <input type="radio" name="activeChoice" id="choice${index}" value="${escapeHtml(option)}" ${saved === option ? "checked" : ""} />
        <label for="choice${index}">${escapeHtml(option)}</label>
      </div>`).join("")}</div>`;
  }

  questionHost.innerHTML = `<div class="question-block">
    <label for="activeAnswer">${escapeHtml(question.title)}</label>
    ${question.hint ? `<p class="question-hint">${escapeHtml(question.hint)}</p>` : ""}
    ${control}
    ${question.example ? `<details class="example-box"><summary>See an example</summary><p>${escapeHtml(question.example)}</p></details>` : ""}
  </div>`;

  const activeAnswer = document.querySelector("#activeAnswer");
  if (activeAnswer) {
    activeAnswer.addEventListener("input", saveCurrent);
    activeAnswer.addEventListener("change", event => {
      const other = document.querySelector("#otherAnswer");
      if (other) other.classList.toggle("visible", event.target.value === "__other");
      saveCurrent();
    });
  }
  document.querySelectorAll('input[name="activeChoice"]').forEach(input => input.addEventListener("change", saveCurrent));
  document.querySelector("#otherAnswer")?.addEventListener("input", saveCurrent);
  window.setTimeout(() => activeAnswer?.focus(), 100);
}

function getCurrentValue() {
  const question = questions[currentQuestion];
  if (question.type === "choices") return document.querySelector('input[name="activeChoice"]:checked')?.value || "";
  const active = document.querySelector("#activeAnswer");
  if (!active) return "";
  if (active.value === "__other") return document.querySelector("#otherAnswer")?.value.trim() || "";
  return active.value.trim();
}

function saveCurrent() {
  draft[questions[currentQuestion].id] = getCurrentValue();
  localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
  const state = document.querySelector("#autosaveState");
  state.innerHTML = "<i></i> Reflection saved locally";
}

function validateCurrent() {
  const value = getCurrentValue();
  if (value) return true;
  showToast("Stay with this question for a moment before continuing.");
  document.querySelector("#activeAnswer")?.focus();
  return false;
}

previousButton.addEventListener("click", () => {
  saveCurrent();
  currentQuestion = Math.max(0, currentQuestion - 1);
  renderQuestion();
});

nextButton.addEventListener("click", () => {
  if (!validateCurrent()) return;
  saveCurrent();
  if (currentQuestion < questions.length - 1) {
    currentQuestion += 1;
    renderQuestion();
  } else {
    completeObservation();
  }
});

function completeObservation() {
  const now = new Date();
  observations.unshift({
    id: String(Date.now()),
    createdAt: now.toISOString(),
    ...draft
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(observations));
  localStorage.removeItem(DRAFT_KEY);
  draft = {};
  currentQuestion = 0;
  showDashboard();
  showToast("Observation saved. Your pattern field has been updated.");
  if (getSessionPhrase()) syncObservations(getSessionPhrase(), { quiet: true });
}

function showDashboard() {
  inquiryView.hidden = true;
  dashboardView.hidden = false;
  progressBar.style.width = "100%";
  renderDashboard();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showInquiry() {
  dashboardView.hidden = true;
  inquiryView.hidden = false;
  renderQuestion();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function countBy(field) {
  return observations.reduce((counts, item) => {
    const value = item[field]?.trim();
    if (value) counts[value] = (counts[value] || 0) + 1;
    return counts;
  }, {});
}

function sortedCounts(field) {
  return Object.entries(countBy(field)).sort((a, b) => b[1] - a[1]);
}

function strengthLabel(count, total) {
  if (total < 2) return ["First signal", 28];
  const ratio = count / total;
  if (total >= 5 && ratio >= 0.6) return ["Strong pattern", Math.min(94, 55 + ratio * 40)];
  if (ratio >= 0.5) return ["Emerging pattern", Math.min(80, 35 + ratio * 50)];
  return ["Pattern forming", Math.min(62, 25 + ratio * 45)];
}

function renderDashboard() {
  document.querySelector("#observationBadge").textContent = observations.length;
  const empty = observations.length === 0;
  document.querySelector("#emptyDashboard").hidden = !empty;
  document.querySelector("#dashboardGrid").hidden = empty;
  if (empty) return;

  const magnets = sortedCounts("magnet");
  const values = sortedCounts("deeper");
  const top = magnets[0] || ["Not yet named", 0];
  const topValue = values[0] || ["Not yet named", 0];
  const [strength, confidence] = strengthLabel(top[1], observations.length);
  const recurring = observations.filter(item => ["Several times", "Many times"].includes(item.returned)).length;
  const stronglyBelieved = observations.filter(item => ["Mostly", "Completely"].includes(item.believed)).length;

  document.querySelector("#topMagnet").textContent = top[0];
  document.querySelector("#confidenceText").textContent = strength;
  document.querySelector("#confidenceBar").style.width = `${confidence}%`;
  document.querySelector("#observationCount").textContent = observations.length;
  document.querySelector("#returnRate").textContent = recurring ? `${Math.round(recurring / observations.length * 100)}% involved repeated return` : "Little repeated return so far";
  document.querySelector("#topValue").textContent = topValue[0];
  document.querySelector("#valueCount").textContent = `${topValue[1]} of ${observations.length} observation${observations.length === 1 ? "" : "s"}`;

  const narrative = observations.length === 1
    ? `“${top[0]} is the first magnet to appear. Treat it as a clue, not a conclusion.”`
    : `“Your attention returns most often to ${top[0].toLowerCase()}, frequently in service of ${topValue[0].toLowerCase()}. The pattern is becoming visible through repetition.”`;
  document.querySelector("#patternNarrative").textContent = narrative;

  document.querySelector("#magnetDistribution").innerHTML = magnets.map(([name, count]) => `
    <div class="bar-row"><span>${escapeHtml(name)}</span><div class="bar-track"><i style="width:${count / magnets[0][1] * 100}%"></i></div><em>${count}</em></div>
  `).join("");

  const signals = [];
  if (recurring) signals.push(`In ${recurring} observation${recurring === 1 ? "" : "s"}, the mind returned several or many times. Repetition is strengthening the magnet signal.`);
  if (stronglyBelieved) signals.push(`${stronglyBelieved} inner contract${stronglyBelieved === 1 ? " was" : "s were"} mostly or completely believed, suggesting the urge may feel compelling before it is consciously seen.`);
  if (top[0] === topValue[0]) signals.push(`${top[0]} appears both as the magnet and the protected value—a particularly direct pattern.`);
  else signals.push(`${top[0]} most often appears on the surface, while ${topValue[0]} is the deeper value most often being protected.`);
  if (magnets.length > 2) signals.push(`Several magnets are active. More observations will show whether they are distinct or different paths toward one underlying value.`);
  document.querySelector("#signalsList").innerHTML = signals.map(signal => `<li>${escapeHtml(signal)}</li>`).join("");

  document.querySelector("#historyList").innerHTML = observations.slice(0, 6).map(item => {
    const date = new Date(item.createdAt);
    return `<div class="history-item">
      <time>${date.toLocaleDateString(undefined, { day: "numeric", month: "short" })}</time>
      <div><b>${escapeHtml(item.event || "Untitled observation")}</b><span>${escapeHtml(item.contract || "")}</span></div>
      <em>${escapeHtml(item.magnet || "—")}</em>
    </div>`;
  }).join("");
}

function summaryMarkup() {
  if (!observations.length) return "<p>No observations have been saved yet.</p>";
  return observations.map((item, index) => `
    <article class="summary-entry">
      <h3>Observation ${observations.length - index} · ${escapeHtml(new Date(item.createdAt).toLocaleString())}</h3>
      <dl>
        ${questions.map(question => `<dt>${escapeHtml(question.title)}</dt><dd>${escapeHtml(item[question.id] || "—")}</dd>`).join("")}
      </dl>
    </article>`).join("");
}

function summaryText() {
  return observations.map((item, index) => {
    const answers = questions.map(question => `${question.title}\n${item[question.id] || "—"}`).join("\n\n");
    return `FIND YOUR MAGNET — OBSERVATION ${observations.length - index}\n${new Date(item.createdAt).toLocaleString()}\n\n${answers}`;
  }).join("\n\n----------------------------------------\n\n");
}

document.querySelector("#viewDashboard").addEventListener("click", () => dashboardView.hidden ? showDashboard() : showInquiry());
document.querySelector("#newObservation").addEventListener("click", showInquiry);
document.querySelector("#emptyStart").addEventListener("click", showInquiry);
document.querySelector("#openSummary").addEventListener("click", () => {
  document.querySelector("#summaryContent").innerHTML = summaryMarkup();
  summaryDialog.showModal();
});

document.querySelector("#copySummary").addEventListener("click", async () => {
  await navigator.clipboard.writeText(summaryText());
  showToast("Response summary copied.");
});

document.querySelector("#downloadSummary").addEventListener("click", () => {
  const blob = new Blob([summaryText()], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `find-your-magnet-${new Date().toISOString().slice(0, 10)}.txt`;
  link.click();
  URL.revokeObjectURL(link.href);
});

document.querySelector("#clearHistory").addEventListener("click", () => {
  if (!window.confirm("Clear every saved observation? This cannot be undone.")) return;
  observations = [];
  resetAt = new Date().toISOString();
  localStorage.removeItem(STORAGE_KEY);
  localStorage.setItem(SYNC_RESET_KEY, resetAt);
  renderDashboard();
  showToast("Observation history cleared.");
  if (getSessionPhrase()) syncObservations(getSessionPhrase(), { quiet: true });
});

function getSessionPhrase() {
  return sessionStorage.getItem(SYNC_SESSION_KEY) || "";
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

function base64ToBytes(value) {
  const binary = atob(value);
  return Uint8Array.from(binary, character => character.charCodeAt(0));
}

async function syncIdentity(phrase) {
  const normalized = phrase.trim().normalize("NFKC");
  const phraseBytes = new TextEncoder().encode(normalized);
  const digest = new Uint8Array(await crypto.subtle.digest("SHA-256", phraseBytes));
  const syncId = [...digest].map(byte => byte.toString(16).padStart(2, "0")).join("");
  const baseKey = await crypto.subtle.importKey("raw", phraseBytes, "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: digest.slice(0, 16), iterations: 250000, hash: "SHA-256" },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  return { syncId, key };
}

async function encryptObservations(items, key) {
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const plaintext = new TextEncoder().encode(JSON.stringify({ version: 1, observations: items, resetAt }));
  const ciphertext = new Uint8Array(await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext));
  return { version: 1, iv: bytesToBase64(iv), ciphertext: bytesToBase64(ciphertext), updatedAt: new Date().toISOString() };
}

async function decryptObservations(bundle, key) {
  if (!bundle) return { observations: [], resetAt: "" };
  const plaintext = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBytes(bundle.iv) },
    key,
    base64ToBytes(bundle.ciphertext)
  );
  const parsed = JSON.parse(new TextDecoder().decode(plaintext));
  return {
    observations: Array.isArray(parsed.observations) ? parsed.observations : [],
    resetAt: typeof parsed.resetAt === "string" ? parsed.resetAt : ""
  };
}

function mergeObservations(localItems, remoteItems, effectiveResetAt = "") {
  const merged = new Map();
  [...remoteItems, ...localItems].forEach(item => {
    if (!item?.id) return;
    if (effectiveResetAt && String(item.createdAt || "") <= effectiveResetAt) return;
    const existing = merged.get(item.id);
    if (!existing || String(item.createdAt || "") >= String(existing.createdAt || "")) merged.set(item.id, item);
  });
  return [...merged.values()].sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

async function callSyncFunction(body) {
  const response = await fetch(SYNC_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  });
  const result = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(result.error || "The sync service could not be reached.");
  return result;
}

function setSyncVisual(state) {
  openSyncButton.classList.toggle("connected", state === "connected");
  openSyncButton.classList.toggle("syncing", state === "syncing");
  document.querySelector("#syncLabel").textContent = state === "syncing" ? "Syncing" : state === "connected" ? "Synced" : "Sync";
}

async function syncObservations(phrase, { quiet = false } = {}) {
  if (syncInProgress) return;
  syncInProgress = true;
  setSyncVisual("syncing");
  document.querySelector("#connectSync").disabled = true;

  try {
    const { syncId, key } = await syncIdentity(phrase);
    const pulled = await callSyncFunction({ action: "pull", syncId });
    let remote = { observations: [], resetAt: "" };
    if (pulled.bundle) {
      try {
        remote = await decryptObservations(pulled.bundle, key);
      } catch {
        throw new Error("This phrase does not match the encrypted observations.");
      }
    }

    resetAt = [resetAt, remote.resetAt].filter(Boolean).sort().pop() || "";
    if (resetAt) localStorage.setItem(SYNC_RESET_KEY, resetAt);
    observations = mergeObservations(observations, remote.observations, resetAt);
    const bundle = await encryptObservations(observations, key);
    await callSyncFunction({ action: "push", syncId, bundle });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(observations));
    sessionStorage.setItem(SYNC_SESSION_KEY, phrase);
    renderDashboard();
    setSyncVisual("connected");

    document.querySelector("#syncState").hidden = false;
    document.querySelector("#syncStateTitle").textContent = "Connected for this browser session";
    document.querySelector("#syncStateDetail").textContent = `${observations.length} observation${observations.length === 1 ? "" : "s"} synchronized · ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    document.querySelector("#disconnectSync").hidden = false;
    if (!quiet) showToast("Devices merged securely.");
  } catch (error) {
    setSyncVisual(getSessionPhrase() ? "connected" : "idle");
    if (!quiet) showToast(error.message.includes("Failed to fetch") || error.message.includes("could not be reached")
      ? "Sync becomes available after deploying the Netlify function."
      : error.message);
  } finally {
    syncInProgress = false;
    document.querySelector("#connectSync").disabled = false;
  }
}

openSyncButton.addEventListener("click", () => {
  const phrase = getSessionPhrase();
  syncPhraseInput.value = phrase;
  document.querySelector("#syncState").hidden = !phrase;
  document.querySelector("#disconnectSync").hidden = !phrase;
  syncDialog.showModal();
});

document.querySelector("#togglePhrase").addEventListener("click", event => {
  const showing = syncPhraseInput.type === "text";
  syncPhraseInput.type = showing ? "password" : "text";
  event.currentTarget.textContent = showing ? "Show" : "Hide";
});

document.querySelector("#connectSync").addEventListener("click", async () => {
  const phrase = syncPhraseInput.value.trim();
  if (phrase.length < 12) {
    showToast("Use at least 12 characters—several memorable words work well.");
    syncPhraseInput.focus();
    return;
  }
  await syncObservations(phrase);
});

document.querySelector("#disconnectSync").addEventListener("click", () => {
  sessionStorage.removeItem(SYNC_SESSION_KEY);
  syncPhraseInput.value = "";
  document.querySelector("#syncState").hidden = true;
  document.querySelector("#disconnectSync").hidden = true;
  setSyncVisual("idle");
  showToast("This device is disconnected. Local observations remain here.");
});

function showToast(message) {
  const toast = document.querySelector("#magnetToast");
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

document.querySelector("#observationBadge").textContent = observations.length;
if (getSessionPhrase()) {
  setSyncVisual("connected");
  syncObservations(getSessionPhrase(), { quiet: true });
}
renderQuestion();

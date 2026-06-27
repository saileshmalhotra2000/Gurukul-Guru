const lessons = [
  {
    id: "foundation-01",
    day: "Day 1",
    title: "The Foundation",
    stageId: "stage-1",
    file: "./lessons/foundation-01.txt",
    visual: {
      image: "./assets/attention-training.png",
      alt: "Rishi Vashishtha teaching Rama and Lakshmana beneath a banyan tree as golden arcs of attention move through the gurukul.",
      label: "Key message",
      message: "Tie the mind gently to one post.",
    },
    films: [
      { title: "The dawn gathering", caption: "The gurukul before the teaching begins.", src: "./assets/videos/00-scene1.mp4" },
      { title: "The riverbank settles", caption: "Rama and Lakshmana arrive into silence.", src: "./assets/videos/00-scene2.mp4" },
      { title: "Attention finds one post", caption: "The mind is gently gathered beneath the banyan.", src: "./assets/videos/01-attention-training.mp4" },
      { title: "The golden thread of attention", caption: "Awareness returns without force.", src: "./assets/videos/01-attention.mp4" },
    ],
    discovery: "Before ruling action, speech, or reaction, learn first to hold attention gently.",
    sadhanaTitle: "Tie the mind gently to one post",
    sadhana: "Sit for a few minutes without moving. Choose one simple post: breath, flame, or river-sound. When attention wanders, do not scold it. Notice, and place it back into the flow.",
    final: "Mastery of the mind does not come from tightening the fist. It begins by learning how to open the hand.",
  },
  {
      "id": "story-001",
      "title": "The Wish to Be Worthy",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-001.txt",
      "discovery": "The wish to be worthy becomes noble when it turns toward conduct, not applause.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-002",
      "title": "The Pause Before Fire",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-002.txt",
      "discovery": "If there is a pause, the world does not command you.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-003",
      "title": "Praise and the Second Circle",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-003.txt",
      "discovery": "Praise may be felt, but it need not become a place where you live.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-004",
      "title": "The Pride of Restraint",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-004.txt",
      "discovery": "The ego can change clothing and hide inside virtue.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-005",
      "title": "Ego as Instrument",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-005.txt",
      "discovery": "The ego is not the enemy. It is an instrument when seen clearly.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-006",
      "title": "The Ego Learns Manners",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-006.txt",
      "discovery": "The ego does not always shout. Sometimes it survives by becoming subtle.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-007",
      "title": "The Servant Must Eat",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-007.txt",
      "discovery": "The right food for ego is responsibility, not applause.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-008",
      "title": "Standing on Earth",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-008.txt",
      "discovery": "When ego stands on Dharma, insult has less ground to shake.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-009",
      "title": "How Ego Rests in Dharma",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-009.txt",
      "discovery": "Ego changes its taste when it discovers that inner steadiness is sweeter than applause.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-010",
      "title": "When Two Paths Appear Right",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-010.txt",
      "discovery": "When Dharma is unclear, search for signs: elders, life, stillness, and enduring principles.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-011",
      "title": "The Roots of Dharma",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-011.txt",
      "discovery": "The Roots of Dharma belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-012",
      "title": "Watching the Watcher",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-012.txt",
      "discovery": "Watching the Watcher belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-013",
      "title": "Notice Who Is Watching",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-013.txt",
      "discovery": "Notice Who Is Watching belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-014",
      "title": "The Subtle Watcher",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-014.txt",
      "discovery": "The Subtle Watcher belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-015",
      "title": "Seeing Without Fighting",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-015.txt",
      "discovery": "Seeing Without Fighting belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-016",
      "title": "Guiding the Mind Back",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-016.txt",
      "discovery": "Guiding the Mind Back belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-017",
      "title": "The First Discipline Deepens",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-017.txt",
      "discovery": "The First Discipline Deepens belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-018",
      "title": "The Quiet Return",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-018.txt",
      "discovery": "The Quiet Return belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-019",
      "title": "The Watching Sky",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-019.txt",
      "discovery": "The Watching Sky belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-020",
      "title": "Come Closer",
      "stageId": "stage-1",
      "file": "./lessons/batch/story-020.txt",
      "discovery": "Come Closer belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-021",
      "title": "The Still Pond",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-021.txt",
      "discovery": "The Still Pond belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-022",
      "title": "The Unmoving Water",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-022.txt",
      "discovery": "The Unmoving Water belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-023",
      "title": "The Field of Attention",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-023.txt",
      "discovery": "The Field of Attention belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-024",
      "title": "The Clay Lamp",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-024.txt",
      "discovery": "The Clay Lamp belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-025",
      "title": "Mist Over the Ashram",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-025.txt",
      "discovery": "Mist Over the Ashram belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-026",
      "title": "The Deliberate Step",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-026.txt",
      "discovery": "The Deliberate Step belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-027",
      "title": "The Path Without Turning",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-027.txt",
      "discovery": "The Path Without Turning belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-028",
      "title": "The Softening of Sound",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-028.txt",
      "discovery": "The Softening of Sound belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-029",
      "title": "The Lesson Without Sitting",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-029.txt",
      "discovery": "The Lesson Without Sitting belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-030",
      "title": "Mist Above the Water",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-030.txt",
      "discovery": "Mist Above the Water belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-031",
      "title": "The Next Turning",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-031.txt",
      "discovery": "The Next Turning belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-031b",
      "title": "After some time, Vashishtha spoke softly:",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-031b.txt",
      "discovery": "After some time, Vashishtha spoke softly: belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-032",
      "title": "The morning air was cool.",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-032.txt",
      "discovery": "The morning air was cool. belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-033",
      "title": "Without turning, he said:",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-033.txt",
      "discovery": "Without turning, he said: belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-034",
      "title": "“Until now, you have seen awareness in simple conditions.”",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-034.txt",
      "discovery": "“Until now, you have seen awareness in simple conditions.” belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-035",
      "title": "Not chaotic… but continuous.",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-035.txt",
      "discovery": "Not chaotic… but continuous. belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-036",
      "title": "The morning practice did not begin in the forest today.",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-036.txt",
      "discovery": "The morning practice did not begin in the forest today. belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-037",
      "title": "The Movement of Mind within Stillness",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-037.txt",
      "discovery": "The Movement of Mind within Stillness belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-038",
      "title": "Stabilizing Awareness in Activity",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-038.txt",
      "discovery": "Stabilizing Awareness in Activity belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-039",
      "title": "The Subtle Gap in Activity",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-039.txt",
      "discovery": "The Subtle Gap in Activity belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-040",
      "title": "The Continuity of Awareness",
      "stageId": "stage-2",
      "file": "./lessons/batch/story-040.txt",
      "discovery": "The Continuity of Awareness belongs to Stage 2 — Inner Movement.",
      "sadhanaTitle": "Observe the first movement",
      "sadhana": "Before acting, look for the first leaning: the pull, the tightening, or the gathering of attention.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-041",
      "title": "The Illusion of Losing Awareness",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-041.txt",
      "discovery": "The Illusion of Losing Awareness belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-042",
      "title": "Rishi Vashishtha speaks to Rama and Lakshmana",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-042.txt",
      "discovery": "Rishi Vashishtha speaks to Rama and Lakshmana belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-043",
      "title": "Rishi Vashishtha speaks to Rama and Lakshmana",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-043.txt",
      "discovery": "Rishi Vashishtha speaks to Rama and Lakshmana belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-044",
      "title": "Stabilizing Awareness in the Midst of Action",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-044.txt",
      "discovery": "Stabilizing Awareness in the Midst of Action belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-045",
      "title": "You have seen:",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-045.txt",
      "discovery": "You have seen: belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-046",
      "title": "You have learned to remain aware amidst action.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-046.txt",
      "discovery": "You have learned to remain aware amidst action. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-047",
      "title": "Birdsong drifted softly through the sal trees.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-047.txt",
      "discovery": "Birdsong drifted softly through the sal trees. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-048",
      "title": "Beneath the banyan tree, Rishi Vashishtha sat in stillness.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-048.txt",
      "discovery": "Beneath the banyan tree, Rishi Vashishtha sat in stillness. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-048b",
      "title": "The sacred fire crackled softly. Birds called from the trees.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-048b.txt",
      "discovery": "The sacred fire crackled softly. Birds called from the trees. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-049",
      "title": "Beneath the ancient banyan, Rishi Vashishtha sat unmoving.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-049.txt",
      "discovery": "Beneath the ancient banyan, Rishi Vashishtha sat unmoving. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-050",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-050.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-051",
      "title": "The Witness in Motion",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-051.txt",
      "discovery": "The Witness in Motion belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-052",
      "title": "Time passes.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-052.txt",
      "discovery": "Time passes. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-053",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-053.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-054",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-054.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-055",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-055.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-056",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-056.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-057",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-057.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-058",
      "title": "I pick up a small bowl of still water and place it before them.",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-058.txt",
      "discovery": "I pick up a small bowl of still water and place it before them. belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-059",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-059.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-060",
      "title": "The Subtle Art of Non-Grasping",
      "stageId": "stage-3",
      "file": "./lessons/batch/story-060.txt",
      "discovery": "The Subtle Art of Non-Grasping belongs to Stage 3 — Reaction & Charge.",
      "sadhanaTitle": "Notice charge as it forms",
      "sadhana": "When something feels important today, observe what arrived first: experience, reaction, or story.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-061",
      "title": "Forest Gurukul of Sage Vashishtha",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-061.txt",
      "discovery": "Forest Gurukul of Sage Vashishtha belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-062",
      "title": "The Gap Between Impulse and Action",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-062.txt",
      "discovery": "The Gap Between Impulse and Action belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-063",
      "title": "The Dissolving of the Witness",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-063.txt",
      "discovery": "The Dissolving of the Witness belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-064",
      "title": "The Strengthening of the Seer",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-064.txt",
      "discovery": "The Strengthening of the Seer belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-065",
      "title": "The Seer Is Not Personal",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-065.txt",
      "discovery": "The Seer Is Not Personal belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-066",
      "title": "The World Appears In Awareness, Not Outside It",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-066.txt",
      "discovery": "The World Appears In Awareness, Not Outside It belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-067",
      "title": "The Next Upadesha — The Discipline of Witnessing Without Grasping",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-067.txt",
      "discovery": "The Next Upadesha — The Discipline of Witnessing Without Grasping belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-068",
      "title": "The next lesson is this: Know the Witness itself.",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-068.txt",
      "discovery": "The next lesson is this: Know the Witness itself. belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-069",
      "title": "The Next Lesson: The Illusion of Doership (Kartā Bhāva)",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-069.txt",
      "discovery": "The Next Lesson: The Illusion of Doership (Kartā Bhāva) belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-070",
      "title": "O Rama… this is an honest seeing. Good.",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-070.txt",
      "discovery": "O Rama… this is an honest seeing. Good. belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-071",
      "title": "The Fire of Reaction",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-071.txt",
      "discovery": "The Fire of Reaction belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-072",
      "title": "The Falling Away of Effort",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-072.txt",
      "discovery": "The Falling Away of Effort belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-073",
      "title": "The Dissolving of the Witness",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-073.txt",
      "discovery": "The Dissolving of the Witness belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-074",
      "title": "The Final Refuge of the Mind",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-074.txt",
      "discovery": "The Final Refuge of the Mind belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-075",
      "title": "The Dissolving of the Seeker",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-075.txt",
      "discovery": "The Dissolving of the Seeker belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-076",
      "title": "The End of Inner Conflict",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-076.txt",
      "discovery": "The End of Inner Conflict belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-077",
      "title": "The Lamp Behind Thought",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-077.txt",
      "discovery": "The Lamp Behind Thought belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-078",
      "title": "The Witness Behind Emotion",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-078.txt",
      "discovery": "The Witness Behind Emotion belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-079",
      "title": "The Space Between Impulse and Action",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-079.txt",
      "discovery": "The Space Between Impulse and Action belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-080",
      "title": "THE WITNESS AND THE STORM",
      "stageId": "stage-4",
      "file": "./lessons/batch/story-080.txt",
      "discovery": "THE WITNESS AND THE STORM belongs to Stage 4 — Conditioning.",
      "sadhanaTitle": "See the groove",
      "sadhana": "When the mind revisits something, notice the pathway being strengthened. Do not condemn it. See it.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-081",
      "title": "THE BOWSTRING",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-081.txt",
      "discovery": "THE BOWSTRING belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-082",
      "title": "The Mind Paints the World",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-082.txt",
      "discovery": "The Mind Paints the World belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-083",
      "title": "The Next Lesson — The Space Before the Flame",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-083.txt",
      "discovery": "The Next Lesson — The Space Before the Flame belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-084",
      "title": "Birdsong echoed softly through the forest.",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-084.txt",
      "discovery": "Birdsong echoed softly through the forest. belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-085",
      "title": "Even the river seemed softer.",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-085.txt",
      "discovery": "Even the river seemed softer. belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-086",
      "title": "The gurukul had not yet awakened.",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-086.txt",
      "discovery": "The gurukul had not yet awakened. belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-087",
      "title": "The Gap Before Movement",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-087.txt",
      "discovery": "The Gap Before Movement belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-088",
      "title": "The First Taste of Inner Momentum",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-088.txt",
      "discovery": "The First Taste of Inner Momentum belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-089",
      "title": "The Weight of “Me” Inside Action",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-089.txt",
      "discovery": "The Weight of “Me” Inside Action belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-090",
      "title": "The Echo After Action",
      "stageId": "stage-5",
      "file": "./lessons/batch/story-090.txt",
      "discovery": "The Echo After Action belongs to Stage 5 — Contracts.",
      "sadhanaTitle": "Find the hidden contract",
      "sadhana": "Ask quietly: What happened? What did the contract say? Who wrote this contract?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-091",
      "title": "The Moment Attention Gets Captured",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-091.txt",
      "discovery": "The Moment Attention Gets Captured belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-092",
      "title": "The Mind Arrives Before the Body",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-092.txt",
      "discovery": "The Mind Arrives Before the Body belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-093",
      "title": "Observe the leaning",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-093.txt",
      "discovery": "Observe the leaning belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-094",
      "title": "The First Leaning",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-094.txt",
      "discovery": "The First Leaning belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-095",
      "title": "Stage 3 → Stage 4: The Earliest Departure of Attention",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-095.txt",
      "discovery": "Stage 3 → Stage 4: The Earliest Departure of Attention belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-096",
      "title": "The First Tightening",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-096.txt",
      "discovery": "The First Tightening belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-097",
      "title": "The Birth of the Story",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-097.txt",
      "discovery": "The Birth of the Story belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-098",
      "title": "The Texture of Holding",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-098.txt",
      "discovery": "The Texture of Holding belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-099",
      "title": "The Birth of the Center",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-099.txt",
      "discovery": "The Birth of the Center belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-100",
      "title": "The Moment of Forgetting",
      "stageId": "stage-6",
      "file": "./lessons/batch/story-100.txt",
      "discovery": "The Moment of Forgetting belongs to Stage 6 — Belief.",
      "sadhanaTitle": "Question belief",
      "sadhana": "When a voice speaks inside, ask: What is it trying to make me believe? Did I believe it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-101",
      "title": "The First Taste of Ownership",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-101.txt",
      "discovery": "The First Taste of Ownership belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-102",
      "title": "Before the Word \"I\"",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-102.txt",
      "discovery": "Before the Word \"I\" belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-103",
      "title": "The Space Around the Cloud",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-103.txt",
      "discovery": "The Space Around the Cloud belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-104",
      "title": "The First Leaning",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-104.txt",
      "discovery": "The First Leaning belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-105",
      "title": "The Sky Does Not Move",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-105.txt",
      "discovery": "The Sky Does Not Move belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-106",
      "title": "The Hook",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-106.txt",
      "discovery": "The Hook belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-107",
      "title": "The Spark Before the Fire",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-107.txt",
      "discovery": "The Spark Before the Fire belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-108",
      "title": "The Moment of Leaning",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-108.txt",
      "discovery": "The Moment of Leaning belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-109",
      "title": "The First Taste of Preference",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-109.txt",
      "discovery": "The First Taste of Preference belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-110",
      "title": "The Gathering Begins",
      "stageId": "stage-7",
      "file": "./lessons/batch/story-110.txt",
      "discovery": "The Gathering Begins belongs to Stage 7 — Echo.",
      "sadhanaTitle": "Listen for the echo",
      "sadhana": "After a reaction fades, notice whether the mind replays, defends, remembers, complains, or imagines.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-111",
      "title": "The Center Begins to Form",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-111.txt",
      "discovery": "The Center Begins to Form belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-112",
      "title": "The Birth of the Center",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-112.txt",
      "discovery": "The Birth of the Center belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-113",
      "title": "The Moment Importance Is Assigned",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-113.txt",
      "discovery": "The Moment Importance Is Assigned belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-113-doubts",
      "title": "Doubts After Story 113",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-113-doubts.txt",
      "discovery": "Doubts After Story 113 belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-114",
      "title": "The Hidden Contract",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-114.txt",
      "discovery": "The Hidden Contract belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-115",
      "title": "The Contract Writer",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-115.txt",
      "discovery": "The Contract Writer belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-116",
      "title": "The Contract Writer",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-116.txt",
      "discovery": "The Contract Writer belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-117",
      "title": "Today's Lesson — The Contract and The World",
      "stageId": "stage-8",
      "file": "./lessons/batch/story-117.txt",
      "discovery": "Today's Lesson — The Contract and The World belongs to Stage 8 — Return.",
      "sadhanaTitle": "Watch the return",
      "sadhana": "Ask: What am I returning to? Am I feeding it? What was the first tiny urge?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-118",
      "title": "The Gap Deepens",
      "stageId": "stage-9",
      "file": "./lessons/batch/story-118.txt",
      "discovery": "The Gap Deepens belongs to Stage 9 — Magnets.",
      "sadhanaTitle": "Find the magnet",
      "sadhana": "Look across different disturbances and ask: What same hidden value keeps appearing?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-119",
      "title": "Entering the Gap",
      "stageId": "stage-9",
      "file": "./lessons/batch/story-119.txt",
      "discovery": "Entering the Gap belongs to Stage 9 — Magnets.",
      "sadhanaTitle": "Find the magnet",
      "sadhana": "Look across different disturbances and ask: What same hidden value keeps appearing?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-120",
      "title": "The Hidden Believer",
      "stageId": "stage-9",
      "file": "./lessons/batch/story-120.txt",
      "discovery": "The Hidden Believer belongs to Stage 9 — Magnets.",
      "sadhanaTitle": "Find the magnet",
      "sadhana": "Look across different disturbances and ask: What same hidden value keeps appearing?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-121",
      "title": "The Echo",
      "stageId": "stage-9",
      "file": "./lessons/batch/story-121.txt",
      "discovery": "The Echo belongs to Stage 9 — Magnets.",
      "sadhanaTitle": "Find the magnet",
      "sadhana": "Look across different disturbances and ask: What same hidden value keeps appearing?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-122",
      "title": "Feeding the Echo",
      "stageId": "stage-9",
      "file": "./lessons/batch/story-122.txt",
      "discovery": "Feeding the Echo belongs to Stage 9 — Magnets.",
      "sadhanaTitle": "Find the magnet",
      "sadhana": "Look across different disturbances and ask: What same hidden value keeps appearing?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-123",
      "title": "The Return Before the Return",
      "stageId": "stage-10",
      "file": "./lessons/batch/story-123.txt",
      "discovery": "The Return Before the Return belongs to Stage 10 — Deeper Magnets.",
      "sadhanaTitle": "Look beneath the magnet",
      "sadhana": "Ask: What is this promising me? What deeper source is being remembered?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-124",
      "title": "The Magnet Behind the Many",
      "stageId": "stage-10",
      "file": "./lessons/batch/story-124.txt",
      "discovery": "The Magnet Behind the Many belongs to Stage 10 — Deeper Magnets.",
      "sadhanaTitle": "Look beneath the magnet",
      "sadhana": "Ask: What is this promising me? What deeper source is being remembered?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-125",
      "title": "The Hidden Promise",
      "stageId": "stage-11",
      "file": "./lessons/batch/story-125.txt",
      "discovery": "Nothing matters by itself. Everything matters because of the promise attached to it.",
      "sadhanaTitle": "Name the promise",
      "sadhana": "When something matters, ask: What promise is attached to it?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-129",
      "title": "What If Peace Was Already Present?",
      "stageId": "stage-11",
      "file": "./lessons/batch/story-129.txt",
      "discovery": "Harmony matters because it holds the promise of Peace. But Peace may already be present within.",
      "visual": {
          "image": "./assets/stage-11/what-if-peace-was-already-present.png",
          "alt": "Rishi Vashishtha teaches Rama and Lakshmana beside a river: Harmony holds the promise of peace, and peace may already be present within.",
          "label": "Key inquiry",
          "message": "What if Peace was already present within me?"
      },
      "films": [
          {
              "title": "What if Peace was already within me?",
              "caption": "The inquiry deepens from Harmony as promise to Peace as inner presence.",
              "src": "./assets/videos/what-if-peace-was-already-within-me.mp4"
          }
      ],
      "sadhanaTitle": "Look for the promise",
      "sadhana": "When Harmony feels important, ask: What is this promising me? Then ask: What if Peace is already present within?",
      "final": "Harmony is the reminder. Peace is discovered when attention returns to its source."
  },
  {
      "id": "story-126",
      "title": "The Promise and the Possessor",
      "stageId": "stage-12",
      "file": "./lessons/batch/story-126.txt",
      "discovery": "The promise is still not the source. The inquiry turns toward the one who wants peace.",
      "visual": {
          "image": "./assets/stage-12/source-or-reminder.png",
          "alt": "Source and Reminder drawn as two circles in the sand, with Peace and Harmony written inside them.",
          "label": "Key inquiry",
          "message": "Harmony is the reminder. Peace is the source."
      },
      "gallery": [
          {
              "src": "./assets/stage-12/protecting-reminder.png",
              "alt": "A seeker looks into a mirror labelled Reminder while another rests facing the river labelled Source.",
              "title": "Protecting the reminder",
              "caption": "Am I clinging to what is seen, or turning toward what was never truly lost?"
          },
          {
              "src": "./assets/stage-12/did-peace-truly-leave.png",
              "alt": "Rishi Vashishtha points toward a peaceful river on one side and a stormy disturbance on the other.",
              "title": "Did Peace truly leave?",
              "caption": "Or did attention simply become fascinated with the disturbance?"
          }
      ],
      "films": [
          {
              "title": "Source or reminder",
              "caption": "The distinction is drawn gently in the sand.",
              "src": "./assets/videos/source-or-reminder.mp4"
          },
          {
              "title": "Am I protecting the reminder?",
              "caption": "The inquiry turns from protection toward rediscovery.",
              "src": "./assets/videos/protecting-reminder.mp4"
          }
      ],
      "sadhanaTitle": "Reminder or source",
      "sadhana": "Ask: Am I protecting the reminder, or rediscovering the source?",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
  {
      "id": "story-130",
      "title": "Did Peace Really Leave?",
      "stageId": "stage-12",
      "file": "./lessons/batch/story-130.txt",
      "discovery": "Peace may not have left. Attention may have become fascinated with the disturbance.",
      "films": [
          {
              "title": "Did Peace really leave?",
              "caption": "A quiet contemplation on whether Peace disappears, or attention simply moves toward disturbance.",
              "src": "./assets/videos/did-peace-really-leave.mp4"
          }
      ],
      "sadhanaTitle": "Look beneath the disturbance",
      "sadhana": "When disturbance appears, ask: Did Peace really leave, or did attention become absorbed in the disturbance?",
      "final": "Peace is not lost each time attention moves. Return, and see what remained."
  },
  {
      "id": "story-131",
      "title": "The Fascination of Attention",
      "stageId": "stage-12",
      "file": "./lessons/batch/story-131.txt",
      "discovery": "Attention does not create reality. It creates prominence.",
      "visual": {
          "image": "./assets/stage-12/what-is-larger-right-now.png",
          "alt": "A seeker sits before a vast peaceful valley while disturbances appear beside him, asking what is larger: the disturbance or the field noticing it.",
          "label": "Key inquiry",
          "message": "What is larger right now: the disturbance, or the field noticing it?"
      },
      "films": [
          {
              "title": "What is larger right now?",
              "caption": "A gentle widening of attention from the disturbance to the field in which it appears.",
              "src": "./assets/videos/what-is-larger-right-now.mp4"
          }
      ],
      "sadhanaTitle": "Let attention widen",
      "sadhana": "Three times today, when attention becomes absorbed in a disturbance, pause for one breath and ask: What is larger right now — the disturbance, or the field in which I am noticing it?",
      "final": "What fills awareness is not always what is greatest. It may only be what attention has chosen to illuminate."
  },
  {
      "id": "supplement-bowstring-practice",
      "title": "Supplement — The Bowstring Practice",
      "stageId": "stage-1",
      "file": "./lessons/batch/supplement-bowstring-practice.txt",
      "discovery": "Supplement — The Bowstring Practice belongs to Stage 1 — Outer Awareness.",
      "sadhanaTitle": "Return to immediate experience",
      "sadhana": "Pause once today and return to the body, breath, sound, or sensation. Let presence be the simple act of returning.",
      "final": "Return to the seeing itself. Let the lesson become observation, not conclusion."
  },
];

const curriculumStages = [
  {
    id: "stage-1",
    number: 1,
    title: "Outer Awareness",
    purpose: "Attention returns to immediate experience.",
    topics: ["Body", "Breath", "Posture", "Sensation", "Seeing", "Hearing", "Feeling", "Presence"],
    discoveries: ["Awareness is here.", "Attention wanders.", "Presence is simply the return."],
  },
  {
    id: "stage-2",
    number: 2,
    title: "Inner Movement",
    purpose: "Observe the movement before action.",
    topics: ["Perception", "Stirring", "Leaning", "Gathering of attention", "Impulse"],
    discoveries: [
      "Nothing begins with action.",
      "Everything begins with a tiny movement.",
      "Observe the leaning, the pull, the tightening before behaviour appears.",
    ],
  },
  {
    id: "stage-3",
    number: 3,
    title: "Reaction & Charge",
    purpose: "Understand how reactions are created.",
    topics: ["Attraction", "Aversion", "Charge", "Importance", "Story"],
    discoveries: [
      "Experience arrives first.",
      "Reaction arrives later.",
      "Charge is born when reality meets conditioning.",
      "The “should” arrives after the experience.",
    ],
  },
  {
    id: "stage-4",
    number: 4,
    title: "Conditioning",
    purpose: "See how conditioning forms.",
    topics: ["Repeated attention", "Repeated emotional charge", "Repeated conclusions", "Pathways", "Tendencies", "Conditioning"],
    discoveries: ["Repeated visits create pathways.", "Pathways become tendencies.", "The field becomes grooved."],
  },
  {
    id: "stage-5",
    number: 5,
    title: "Contracts",
    purpose: "Discover the hidden “should.”",
    topics: ["What happened?", "What did the contract say?", "Who wrote this contract?", "Reality violated the contract."],
    discoveries: ["Every charge hides a contract.", "Reality violated the contract. Awareness did not."],
  },
  {
    id: "stage-6",
    number: 6,
    title: "Belief",
    purpose: "Discover how contracts become believable.",
    topics: ["What happened?", "What did the voice say?", "What is it trying to make me believe?", "Did I believe it?"],
    discoveries: ["The voice speaks once.", "Belief repeats it."],
  },
  {
    id: "stage-7",
    number: 7,
    title: "Echo",
    purpose: "Observe life after belief.",
    topics: ["Replaying", "Remembering", "Imagining", "Defending", "Justifying", "Complaining"],
    discoveries: ["Belief leaves traces.", "The echo may last minutes, hours, or days."],
  },
  {
    id: "stage-8",
    number: 8,
    title: "Return",
    purpose: "Notice the repeated return.",
    topics: ["Experience", "Contract", "Belief", "Tiny urge", "Return", "Echo"],
    discoveries: ["Return begins with an almost invisible urge.", "Ask: What am I returning to? Am I feeding it?"],
  },
  {
    id: "stage-9",
    number: 9,
    title: "Magnets",
    purpose: "Discover the hidden force behind repeated returns.",
    topics: ["Unmade bed", "Dirty kitchen", "Crumbs", "Traffic", "People arguing", "Bathroom crack", "Things unfinished"],
    discoveries: ["Many contracts. One magnet.", "The events are many. The magnet is one."],
  },
  {
    id: "stage-10",
    number: 10,
    title: "Deeper Magnets",
    purpose: "See what the magnet promises.",
    topics: ["Harmony", "Peace", "Reminder", "Promise"],
    discoveries: ["Harmony matters because it promises Peace.", "Harmony is not the source. It points toward the source."],
  },
  {
    id: "stage-11",
    number: 11,
    title: "Promises",
    purpose: "Discover why something keeps mattering.",
    topics: ["Why does this keep mattering?", "What is this promising me?"],
    discoveries: ["Nothing matters by itself.", "Everything matters because of the promise attached to it."],
  },
  {
    id: "stage-12",
    number: 12,
    title: "Reminder vs Source",
    purpose: "See the difference between reminder and source.",
    current: true,
    topics: ["Harmony", "Peace", "Reminder", "Source", "Protection", "Rediscovery"],
    discoveries: [
      "Harmony is not Peace.",
      "Harmony is a reminder. Peace is the source.",
      "The mind protects reminders instead of rediscovering the source.",
    ],
  },
  {
    id: "stage-13",
    number: 13,
    title: "The Seeker",
    purpose: "Question the one to whom it matters.",
    future: true,
    topics: ["Who wants Harmony?", "Who wants Peace?", "To whom does it matter?"],
    discoveries: ["Do not rush. This opens only when the previous seeing has ripened."],
  },
  {
    id: "stage-14",
    number: 14,
    title: "The Observer",
    purpose: "Discern attention, thought, awareness, and witness.",
    future: true,
    topics: ["Attention", "Thought", "Awareness", "Witness"],
    discoveries: ["The observer is not the movement it observes."],
  },
  {
    id: "stage-15",
    number: 15,
    title: "The Self",
    purpose: "See how the “I” is assembled.",
    future: true,
    topics: ["Center", "Identity", "Ownership", "Psychological self"],
    discoveries: ["The sense of “I” can be seen in formation."],
  },
  {
    id: "stage-16",
    number: 16,
    title: "Suffering",
    purpose: "See how suffering is constructed.",
    future: true,
    topics: ["Seeking", "Resistance", "Control", "Attachment", "Fear"],
    discoveries: ["Suffering is built. What is built can be understood."],
  },
  {
    id: "stage-17",
    number: 17,
    title: "Freedom",
    purpose: "Action without psychological burden.",
    future: true,
    topics: ["Seeing without contracts", "Action", "Natural intelligence"],
    discoveries: ["Action can arise without the burden of self-protection."],
  },
  {
    id: "stage-18",
    number: 18,
    title: "Abiding",
    purpose: "Resting as Awareness.",
    future: true,
    topics: ["Peace independent of circumstances", "No dependence upon reminders", "Natural compassion", "Natural wisdom"],
    discoveries: ["Peace does not depend on reminders.", "Natural living remains."],
  },
];

const stageById = Object.fromEntries(curriculumStages.map((stage) => [stage.id, stage]));
const stageMap = document.querySelector("#stageMap");
const stageLessons = document.querySelector("#stageLessons");
const lessonDate = document.querySelector("#lessonDate");
const lessonTitle = document.querySelector("#lessonTitle");
const lessonStage = document.querySelector("#lessonStage");
const lessonDiscovery = document.querySelector("#lessonDiscovery");
const lessonVisual = document.querySelector("#lessonVisual");
const lessonVisualImage = document.querySelector("#lessonVisualImage");
const lessonVisualLabel = document.querySelector("#lessonVisualLabel");
const lessonVisualMessage = document.querySelector("#lessonVisualMessage");
const lessonGallery = document.querySelector("#lessonGallery");
const lessonImageGrid = document.querySelector("#lessonImageGrid");
const lessonFilms = document.querySelector("#lessonFilms");
const lessonFilmGrid = document.querySelector("#lessonFilmGrid");
const lessonScroll = document.querySelector("#lessonScroll");
const lessonSadhana = document.querySelector("#lessonSadhana");
const sadhanaTitle = document.querySelector("#sadhana-title");
const lessonFinal = document.querySelector("#lessonFinal");
const journalEntry = document.querySelector("#journalEntry");
const journalNote = document.querySelector("#journalNote");
const markComplete = document.querySelector("#markComplete");
const copyPrompt = document.querySelector("#copyPrompt");
const toast = document.querySelector("#toast");

const storageKey = "digital-gurukul-journey";
let activeLesson = lessons[0];
let toastTimer;

function loadState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || { complete: [], journals: {} };
  } catch {
    return { complete: [], journals: {} };
  }
}

function saveState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2800);
}

function lessonsForStage(stageId) {
  return lessons.filter((lesson) => lesson.stageId === stageId);
}

function renderStageMap() {
  stageMap.innerHTML = curriculumStages
    .map((stage) => {
      const count = lessonsForStage(stage.id).length;
      const classes = ["stage-chip"];
      if (stage.number < 12) classes.push("is-complete");
      if (stage.current) classes.push("is-current");
      if (count > 0) classes.push("has-lessons");
      if (stage.future) classes.push("is-future");

      return `
        <button class="${classes.join(" ")}" type="button" data-stage-id="${stage.id}">
          <span>${String(stage.number).padStart(2, "0")}</span>
          <b>${escapeHtml(stage.title)}</b>
          <small>${count ? `${count} lesson${count === 1 ? "" : "s"}` : stage.current ? "Current inquiry" : "Awaiting"}</small>
        </button>
      `;
    })
    .join("");

  stageMap.querySelectorAll("[data-stage-id]").forEach((button) => {
    button.addEventListener("click", () => {
      document
        .querySelector(`[data-stage-panel="${button.dataset.stageId}"]`)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderLessonTabs() {
  const state = loadState();
  stageLessons.innerHTML = "";

  curriculumStages.forEach((stage) => {
    const stageGroup = document.createElement("section");
    const stageLessonsList = lessonsForStage(stage.id);
    const stageClasses = ["stage-group"];
    if (stage.current) stageClasses.push("is-current");
    if (!stageLessonsList.length) stageClasses.push("is-empty");
    stageGroup.className = stageClasses.join(" ");
    stageGroup.dataset.stagePanel = stage.id;

    const lessonMarkup = stageLessonsList.length
      ? stageLessonsList
          .map((lesson) => {
            const lessonNumber = lessons.findIndex((item) => item.id === lesson.id) + 1;
            const tabClasses = ["lesson-tab"];
            if (lesson.id === activeLesson.id) tabClasses.push("is-active");
            if (state.complete.includes(lesson.id)) tabClasses.push("is-complete");
            return `
              <button class="${tabClasses.join(" ")}" type="button" data-lesson-id="${lesson.id}">
                <span class="tab-number">${String(lessonNumber).padStart(2, "0")}</span>
                <span>
                  <b>${escapeHtml(lesson.title)}</b>
                  <small>${escapeHtml(lesson.discovery)}</small>
                </span>
              </button>
            `;
          })
          .join("")
      : `<p class="stage-empty">Lessons for this stage will appear here when this part of the journey opens.</p>`;

    stageGroup.innerHTML = `
      <button class="stage-summary" type="button" data-stage-toggle="${stage.id}">
        <span>Stage ${stage.number}</span>
        <b>${escapeHtml(stage.title)}</b>
        <small>${escapeHtml(stage.purpose)}</small>
      </button>
      <div class="stage-detail">
        <p><strong>Topics:</strong> ${stage.topics.map(escapeHtml).join(" · ")}</p>
        <p><strong>Key discoveries:</strong> ${stage.discoveries.map(escapeHtml).join(" · ")}</p>
        <div class="lesson-list">${lessonMarkup}</div>
      </div>
    `;

    stageGroup.querySelectorAll("[data-lesson-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const lesson = lessons.find((item) => item.id === button.dataset.lessonId);
        if (lesson) setActiveLesson(lesson);
      });
    });

    stageGroup.querySelector("[data-stage-toggle]").addEventListener("click", () => {
      stageGroup.classList.toggle("is-collapsed");
    });

    stageLessons.appendChild(stageGroup);
  });
}

function paragraphClass(line) {
  const lower = line.toLowerCase();
  if (
    line.includes("Gurudev") ||
    line.includes("Vashishta") ||
    line.includes("Vashishtha") ||
    line.includes("Rama") ||
    line.includes("Lakshmana") ||
    line.startsWith("“") ||
    line.includes("?”")
  ) {
    return "dialogue";
  }
  if (
    lower.includes("sit there") ||
    lower.includes("ask within") ||
    lower.includes("let me ask") ||
    lower.includes("when you") ||
    lower.includes("today you")
  ) {
    return "question";
  }
  return "";
}

function cleanLine(line) {
  const cleaned = line
    .replace(/^Can you please.*/i, "")
    .replace(/^Thank you\. Can you please.*/i, "")
    .replace(/^You said /i, "")
    .trim();

  if (/^Story\s+\d+\s+-/i.test(cleaned)) return "";
  if (/^Day\s+\d+\s+[—-]\s*/i.test(cleaned)) {
    return cleaned.replace(/^Day\s+\d+\s+[—-]\s*/i, "").trim();
  }
  if (/^Lesson\s+\d+\s*[:—-]\s*/i.test(cleaned)) {
    return cleaned.replace(/^Lesson\s+\d+\s*[:—-]\s*/i, "").trim();
  }
  if (/^\d{1,2}\s+\w+\s+\d{4}\s+[—-]\s*/i.test(cleaned)) {
    return cleaned
      .replace(/^\d{1,2}\s+\w+\s+\d{4}\s+[—-]\s*/i, "")
      .replace(/^Lesson\s+\d+:\s*/i, "")
      .trim();
  }
  if (/^\d{1,2}\s+\w+\s+\d{2}\s+[—-]\s*/i.test(cleaned)) {
    return cleaned
      .replace(/^\d{1,2}\s+\w+\s+\d{2}\s+[—-]\s*/i, "")
      .replace(/^Lesson\s+\d+:\s*/i, "")
      .trim();
  }
  if (/^Gurukul Session\s+\d+/i.test(cleaned)) return "";
  if (/^Topic:/i.test(cleaned)) return "";
  if (/^how to bring the mind back/i.test(cleaned)) return "";
  if (/^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday),?\s+\d{1,2}\s+\w+\s+\d{4}/i.test(cleaned)) return "";

  return cleaned;
}

async function loadScroll(lesson) {
  lessonScroll.innerHTML = '<p class="loading">The scroll is being opened…</p>';

  try {
    const response = await fetch(lesson.file);
    if (!response.ok) throw new Error("Could not open scroll");
    const text = await response.text();
    const lines = text
      .split(/\n+/)
      .map(cleanLine)
      .filter(Boolean);

    lessonScroll.innerHTML = lines
      .map((line) => `<p class="${paragraphClass(line)}">${escapeHtml(line)}</p>`)
      .join("");
  } catch {
    lessonScroll.innerHTML =
      "<p class='loading'>This scroll could not be opened. Please check that the lesson text files were uploaded with the site.</p>";
  }
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}

function setActiveLesson(lesson) {
  activeLesson = lesson;
  const state = loadState();
  const lessonNumber = lessons.findIndex((item) => item.id === lesson.id) + 1;
  const stage = stageById[lesson.stageId];

  lessonDate.textContent = `Day ${lessonNumber}`;
  lessonTitle.textContent = lesson.title;
  lessonStage.textContent = stage ? `Stage ${stage.number} — ${stage.title}` : "The Journey";
  lessonDiscovery.textContent = lesson.discovery;
  if (lesson.visual) {
    lessonVisual.hidden = false;
    lessonVisualImage.src = lesson.visual.image;
    lessonVisualImage.alt = lesson.visual.alt;
    lessonVisualLabel.textContent = lesson.visual.label;
    lessonVisualMessage.textContent = lesson.visual.message;
  } else {
    lessonVisual.hidden = true;
    lessonVisualImage.removeAttribute("src");
    lessonVisualImage.alt = "";
    lessonVisualLabel.textContent = "";
    lessonVisualMessage.textContent = "";
  }
  if (lesson.gallery?.length) {
    lessonGallery.hidden = false;
    lessonImageGrid.innerHTML = lesson.gallery
      .map(
        (image) => `
          <figure class="image-card">
            <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" />
            <figcaption>
              <b>${escapeHtml(image.title)}</b>
              <span>${escapeHtml(image.caption)}</span>
            </figcaption>
          </figure>
        `,
      )
      .join("");
  } else {
    lessonGallery.hidden = true;
    lessonImageGrid.innerHTML = "";
  }
  if (lesson.films?.length) {
    lessonFilms.hidden = false;
    lessonFilmGrid.innerHTML = lesson.films
      .map(
        (film) => `
          <article class="film-card">
            <video controls muted playsinline preload="metadata" src="${escapeHtml(film.src)}"></video>
            <div>
              <h4>${escapeHtml(film.title)}</h4>
              <p>${escapeHtml(film.caption)}</p>
            </div>
          </article>
        `,
      )
      .join("");
  } else {
    lessonFilms.hidden = true;
    lessonFilmGrid.innerHTML = "";
  }
  sadhanaTitle.textContent = lesson.sadhanaTitle;
  lessonSadhana.textContent = lesson.sadhana;
  lessonFinal.textContent = lesson.final;
  journalEntry.value = state.journals[lesson.id] || "";
  journalNote.textContent = journalEntry.value
    ? "Your reflection is saved privately in this browser."
    : "Saved privately in this browser.";

  renderLessonTabs();
  loadScroll(lesson);
}

journalEntry.addEventListener("input", () => {
  const state = loadState();
  state.journals[activeLesson.id] = journalEntry.value;
  saveState(state);
  journalNote.textContent = "Saved just now, privately in this browser.";
});

markComplete.addEventListener("click", () => {
  const state = loadState();
  if (!state.complete.includes(activeLesson.id)) {
    state.complete.push(activeLesson.id);
    saveState(state);
    renderLessonTabs();
  }
  showToast("This scroll has been marked complete.");
});

copyPrompt.addEventListener("click", async () => {
  const prompt = `${activeLesson.title}\n\n${activeLesson.sadhana}`;
  try {
    await navigator.clipboard.writeText(prompt);
    showToast("Reflection prompt copied.");
  } catch {
    showToast("Copy was not available in this browser.");
  }
});

const requestedLesson = new URLSearchParams(window.location.search).get("lesson");
const initialLesson = lessons.find((lesson) => lesson.id === requestedLesson) || lessons[0];
renderStageMap();
setActiveLesson(initialLesson);

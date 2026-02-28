import { promises as fs } from "fs";
import path from "path";

const registryPath = path.join(process.cwd(), "registry.json");
const registry = JSON.parse(await fs.readFile(registryPath, "utf8"));

const newItems = [
  // Dashboards
  { name: "finance-dashboard", type: "registry:page", title: "Finance Dashboard", dependencies: ["recharts"], files: [{ path: "registry/pages/dashboards/finance-dashboard.tsx", type: "registry:page" }] },
  { name: "task-dashboard", type: "registry:page", title: "Task Dashboard", dependencies: [], files: [{ path: "registry/pages/dashboards/task-dashboard.tsx", type: "registry:page" }] },
  { name: "collapsible-dashboard", type: "registry:page", title: "Collapsible Dashboard", dependencies: [], files: [{ path: "registry/pages/dashboards/collapsible-dashboard.tsx", type: "registry:page" }] },
  { name: "saas-admin-panel", type: "registry:page", title: "SaaS Admin Panel", dependencies: [], files: [{ path: "registry/pages/dashboards/saas-admin-panel.tsx", type: "registry:page" }] },

  // AI Chats
  { name: "basic-support-chat", type: "registry:page", title: "Basic Support Chat", dependencies: [], files: [{ path: "registry/pages/ai-chats/basic-support-chat.tsx", type: "registry:page" }] },
  { name: "animated-streaming-chat", type: "registry:page", title: "Animated Streaming Chat", dependencies: ["framer-motion"], files: [{ path: "registry/pages/ai-chats/animated-streaming-chat.tsx", type: "registry:page" }] },
  { name: "developer-dark-mode-chat", type: "registry:page", title: "Developer Dark Mode Chat", dependencies: [], files: [{ path: "registry/pages/ai-chats/developer-dark-mode-chat.tsx", type: "registry:page" }] },
  { name: "reasoning-chat", type: "registry:page", title: "Reasoning Chat", dependencies: ["framer-motion"], files: [{ path: "registry/pages/ai-chats/reasoning-chat.tsx", type: "registry:page" }] },

  // Todos
  { name: "simple-checklist", type: "registry:page", title: "Simple Checklist", dependencies: [], files: [{ path: "registry/pages/todos/simple-checklist.tsx", type: "registry:page" }] },
  { name: "detailed-task", type: "registry:page", title: "Detailed Task", dependencies: [], files: [{ path: "registry/pages/todos/detailed-task.tsx", type: "registry:page" }] },
  { name: "categorized-filtered", type: "registry:page", title: "Categorized Filtered", dependencies: [], files: [{ path: "registry/pages/todos/categorized-filtered.tsx", type: "registry:page" }] },

  // Kanban
  { name: "basic-board", type: "registry:page", title: "Basic Board", dependencies: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities"], files: [{ path: "registry/pages/kanban/basic-board.tsx", type: "registry:page" }] },
  { name: "agile-scrum", type: "registry:page", title: "Agile Scrum", dependencies: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities"], files: [{ path: "registry/pages/kanban/agile-scrum.tsx", type: "registry:page" }] },
  { name: "data-dense", type: "registry:page", title: "Data Dense", dependencies: ["@dnd-kit/core", "@dnd-kit/sortable", "@dnd-kit/utilities"], files: [{ path: "registry/pages/kanban/data-dense.tsx", type: "registry:page" }] },

  // Pricing
  { name: "two-column-pricing", type: "registry:page", title: "Two Column Pricing", dependencies: [], files: [{ path: "registry/pages/pricing/two-column.tsx", type: "registry:page" }] },
  { name: "three-column-saas", type: "registry:page", title: "Three Column SaaS", dependencies: [], files: [{ path: "registry/pages/pricing/three-column.tsx", type: "registry:page" }] },
  { name: "single-column-matrix", type: "registry:page", title: "Single Column Matrix", dependencies: [], files: [{ path: "registry/pages/pricing/single-column-matrix.tsx", type: "registry:page" }] },

  // Landing
  { name: "basic-hero", type: "registry:page", title: "Basic Hero", dependencies: [], files: [{ path: "registry/pages/landing/basic-hero.tsx", type: "registry:page" }] },
  { name: "waitlist-hero", type: "registry:page", title: "Waitlist Hero", dependencies: ["sonner"], files: [{ path: "registry/pages/landing/waitlist-hero.tsx", type: "registry:page" }] },
  { name: "animated-hero", type: "registry:page", title: "Animated Hero", dependencies: ["framer-motion"], files: [{ path: "registry/pages/landing/animated-hero.tsx", type: "registry:page" }] },
  { name: "social-proof-features", type: "registry:page", title: "Social Proof Features", dependencies: [], files: [{ path: "registry/pages/landing/social-proof-features.tsx", type: "registry:page" }] },

  // Settings
  { name: "single-profile", type: "registry:page", title: "Single Profile", dependencies: ["sonner"], files: [{ path: "registry/pages/settings/single-profile.tsx", type: "registry:page" }] },
  { name: "sidebar-split", type: "registry:page", title: "Sidebar Split", dependencies: ["sonner"], files: [{ path: "registry/pages/settings/sidebar-split.tsx", type: "registry:page" }] },
  { name: "multi-section", type: "registry:page", title: "Multi Section", dependencies: [], files: [{ path: "registry/pages/settings/multi-section.tsx", type: "registry:page" }] },

  // eCommerce
  { name: "uniform-grid", type: "registry:page", title: "Uniform Grid", dependencies: [], files: [{ path: "registry/pages/ecommerce/uniform-grid.tsx", type: "registry:page" }] },
  { name: "ecommerce-data-dense", type: "registry:page", title: "eCommerce Data Dense", dependencies: [], files: [{ path: "registry/pages/ecommerce/data-dense.tsx", type: "registry:page" }] },
  { name: "masonry-discovery", type: "registry:page", title: "Masonry Discovery", dependencies: ["framer-motion"], files: [{ path: "registry/pages/ecommerce/masonry-discovery.tsx", type: "registry:page" }] },

  // Social
  { name: "text-update", type: "registry:page", title: "Text Update", dependencies: ["lucide-react"], files: [{ path: "registry/pages/social/text-update.tsx", type: "registry:page" }] },
  { name: "media-gallery", type: "registry:page", title: "Media Gallery", dependencies: ["lucide-react"], files: [{ path: "registry/pages/social/media-gallery.tsx", type: "registry:page" }] },
  { name: "link-share", type: "registry:page", title: "Link Share", dependencies: ["lucide-react"], files: [{ path: "registry/pages/social/link-share.tsx", type: "registry:page" }] },
  { name: "animated-post", type: "registry:page", title: "Animated Post", dependencies: ["framer-motion", "lucide-react"], files: [{ path: "registry/pages/social/animated-post.tsx", type: "registry:page" }] },
];

// Add if not exist
for (const item of newItems) {
  if (!registry.items.find((i: any) => i.name === item.name)) {
    registry.items.push(item);
  }
}

await fs.writeFile(registryPath, JSON.stringify(registry, null, 2));
console.log("Updated registry.json");

import { post as p1 } from "./posts/emergency-modular-homes-australia.jsx";
import { post as p2 } from "./posts/council-approval-checklist-nsw-qld-vic.jsx";
import { post as p3 } from "./posts/prefab-vs-kit-homes-australia.jsx";

export const posts = [p1, p2, p3];

export const findPostBySlug = (slug) => posts.find((p) => p.slug === slug);

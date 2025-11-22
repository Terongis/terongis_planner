self.addEventListener("install", () => {
  console.log("Service Worker installé.");
});

self.addEventListener("fetch", () => {
  // Laisse tout passer normalement, sans cache complexe
});

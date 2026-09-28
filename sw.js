// 2026-09-29: この場所は正式版 https://gryo1240.github.io/rinne-apps/sentaku/ に移転した。
// 古い版（sentaku-v1）を覚えている端末で、キャッシュを消して登録を外し、開いている画面を正式版へ移す。
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k === "sentaku-v1").map((k) => caches.delete(k)));
    await self.registration.unregister();
    const wins = await self.clients.matchAll({ type: "window" });
    wins.forEach((c) => { try { c.navigate("https://gryo1240.github.io/rinne-apps/sentaku/"); } catch (err) {} });
  })());
});

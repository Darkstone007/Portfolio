/*
  HOME PAGE RENDERER
  Reads POSTS from posts.js and draws date, title, images, excerpt.
*/

(function () {
  const list = document.getElementById("post-list");
  if (!list) return;

  const posts = (typeof POSTS === "undefined" ? [] : POSTS)
    .slice()
    .sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });

  if (!posts.length) {
    list.innerHTML = '<p class="empty">No entries yet. Add one in js/posts.js.</p>';
    return;
  }

  list.innerHTML = posts.map(function (post) {
    const href = "post.html?id=" + encodeURIComponent(post.id);
    const images = Array.isArray(post.images) ? post.images : [];
    const excerpt = excerptOf(post.body);

    let imageBlock = "";
    if (images.length) {
      const cls = images.length === 1 ? "post-images single" : "post-images";
      imageBlock =
        '<div class="' + cls + '">' +
        images.map(function (src) {
          return '<img src="' + escapeAttr(src) + '" alt="" />';
        }).join("") +
        "</div>";
    } else {
      imageBlock = '<div class="image-slot">Images go here</div>';
    }

    return (
      '<a class="post-card" href="' + href + '">' +
        '<p class="post-date">' + escapeHtml(formatDate(post.date)) + "</p>" +
        '<h3 class="post-title">' + escapeHtml(post.title) + "</h3>" +
        imageBlock +
        (excerpt ? '<p class="post-excerpt">' + escapeHtml(excerpt) + "</p>" : "") +
      "</a>"
    );
  }).join("");

  function excerptOf(body) {
    const text = String(body || "").replace(/\s+/g, " ").trim();
    if (text.length <= 180) return text;
    return text.slice(0, 180).replace(/\s+\S*$/, "") + "\u2026";
  }

  function formatDate(iso) {
    if (!iso) return "";
    const d = new Date(iso + "T00:00:00");
    if (isNaN(d.getTime())) return iso;
    return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "\u0026amp;").replace(/</g, "\u0026lt;")
      .replace(/>/g, "\u0026gt;").replace(/"/g, "\u0026quot;");
  }
  function escapeAttr(s) { return escapeHtml(s); }
})();

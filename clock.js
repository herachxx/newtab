(function () {
  function tick() {
    var now = new Date();
    var t = document.getElementById('nt-time');
    var d = document.getElementById('nt-date');
    if (t) t.textContent =
      now.getHours().toString().padStart(2, '0') + ':' +
      now.getMinutes().toString().padStart(2, '0');
    if (d) d.textContent = now.toLocaleDateString('ru-RU', {
      weekday: 'long', day: 'numeric', month: 'long'
    });
  }
  tick();
  setInterval(tick, 1000);
})();
const SHORTCUTS = {
  'google': function(q) { return 'https://www.google.com/search?q=' + encodeURIComponent(q); },
  'yt':     function(q) { return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(q); },
  'kaspi':  function(q) { return 'https://kaspi.kz/shop/search/?text=' + encodeURIComponent(q); },
  'wiki':   function(q) { return 'https://ru.wikipedia.org/wiki/Special:Search?search=' + encodeURIComponent(q); },
  'gh':     function(q) { return 'https://github.com/search?q=' + encodeURIComponent(q); },
  'maps':   function(q) { return 'https://www.google.com/maps/search/' + encodeURIComponent(q); },
  'tr':     function(q) { return 'https://translate.google.com/?text=' + encodeURIComponent(q) + '&op=translate'; },
  'wb':     function(q) { return 'https://www.wildberries.ru/catalog/0/search.aspx?search=' + encodeURIComponent(q); },
  'ozon':   function(q) { return 'https://www.ozon.ru/search/?text=' + encodeURIComponent(q); },
};

function ntNavigate(url) {
  chrome.tabs.getCurrent(function(tab) {
    chrome.tabs.update(tab.id, { url: url });
  });
}

function ntSearch() {
  var raw = document.getElementById('nt-search-input').value.trim();
  if (!raw) return;

  var colonIdx = raw.indexOf(':');
  if (colonIdx > 0) {
    var prefix = raw.slice(0, colonIdx).toLowerCase();
    var query  = raw.slice(colonIdx + 1).trim();
    if (SHORTCUTS[prefix]) {
      ntNavigate(query ? SHORTCUTS[prefix](query) : 'https://google.com');
      return;
    }
  }

  if (/^https?:\/\//i.test(raw)) {
    ntNavigate(raw);
    return;
  }
  if (/^[\w-]+\.[a-z]{2,}(\/|$)/i.test(raw)) {
    ntNavigate('https://' + raw);
    return;
  }

  ntNavigate('https://www.google.com/search?q=' + encodeURIComponent(raw));
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('nt-search-input').focus();

  document.getElementById('nt-search-btn').addEventListener('click', ntSearch);

  document.getElementById('nt-search-input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') ntSearch();
  });

  document.querySelectorAll('.nt-shortcut').forEach(function(el) {
    el.addEventListener('click', function() {
      var inp = document.getElementById('nt-search-input');
      inp.value = el.dataset.prefix;
      inp.focus();
    });
  });
});
:root{
  --bg:#f7f9fc; --card:#ffffff; --ink:#0f172a; --muted:#475569;
  --rose:#d81b60; --green:#15803d; --orange:#ea580c; --blue:#3b82f6;
  --radius:16px; --shadow:0 10px 28px rgba(2,8,23,.08);
}
*{box-sizing:border-box}
body{margin:0;font:16px/1.6 system-ui,-apple-system,Segoe UI,Roboto,Arial;background:var(--bg);color:var(--ink)}
header{background:linear-gradient(135deg,#38bdf8,#3b82f6 60%);color:#fff;padding:28px 16px;text-align:center}
header h1{margin:0 0 6px;font-size:clamp(1.2rem,2.4vw,1.8rem)}
header p{margin:0;opacity:.95}
.note{opacity:.9;margin-top:8px}
main{max-width:1000px;margin:20px auto;padding:0 12px 40px}
.card{background:var(--card);border:1px solid #e2e8f0;border-radius:var(--radius);box-shadow:var(--shadow);padding:18px;margin:14px 0}
h2{margin:0 0 10px}
.legend{color:var(--muted)}
.imparfait{color:var(--rose);font-weight:700}
.passe-simple{color:var(--green);font-weight:700}
.plus-que-parfait{color:var(--orange);font-weight:700}
.passe-anterieur{color:var(--blue);font-weight:700}
.q{border:1px solid #e2e8f0;border-radius:14px;padding:12px;margin:12px 0}
.q .title{font-weight:600;margin-bottom:6px}
.opts{display:grid;gap:8px}
.opt{padding:8px 10px;border:1px solid #cbd5e1;border-radius:10px;background:#fff;text-align:left;cursor:pointer}
.opt:hover{background:#f8fafc}
.correct{background:#dcfce7 !important;border-color:#86efac !important}
.incorrect{background:#fee2e2 !important;border-color:#fca5a5 !important}
.feedback{margin-top:8px;background:#f1f5f9;border-left:4px solid #38bdf8;padding:10px;border-radius:10px}
blockquote{margin:0;background:#f8fafc;border-left:4px solid #e2e8f0;padding:10px;border-radius:8px}
.ex{border:1px solid #e2e8f0;border-radius:14px;padding:12px;margin:12px 0}
.btn{background:#0ea5e9;color:#fff;border:none;padding:8px 12px;border-radius:10px;cursor:pointer}
.toolbar{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin:8px 0}
.toolbar select,.toolbar button{padding:8px 10px;border:1px solid #e2e8f0;border-radius:10px;background:#fff;cursor:pointer}
.progress{display:flex;align-items:center;gap:10px;margin-left:auto}
.bar{flex:1;height:10px;background:#e2e8f0;border-radius:999px;overflow:hidden}
.bar>span{display:block;height:100%;background:#10b981;width:0%}

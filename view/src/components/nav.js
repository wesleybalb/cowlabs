// ============================================================
// CowLabs · components/nav.js
// Navbar componentizada (mesmo modelo do footer.js).
//
// Comportamento:
//  - Menu hambúrguer responsivo (Bootstrap collapse).
//  - Verifica se há usuário logado (sessionStorage via auth.js).
//  - Logado     -> avatar fora do collapse (sempre visível no mobile).
//                 Dropdown posicionado pelo lado direito da tela.
//                 Busca imagem atualizada da API após montar.
//  - Deslogado  -> botão "Entrar / Cadastrar" dentro do collapse.
//  - Marca automaticamente o link ativo conforme a URL atual.
//
// Uso na página:
//   <script type="module">
//     import nav from "/view/src/components/nav.js";
//     nav();            // monta a navbar
//   </script>
// ============================================================

import { getLoggedUser, getToken } from "../services/auth.js";
import { API_URL } from "../services/api.js";

export const ROUTES = {
  home:      "/view/public/index.html",
  demandas:  "/view/src/pages/brickwall.html",
  faq:       "/view/src/pages/faq.html",
  talkus:    "/view/src/pages/talkus.html",
  login:     "/view/src/pages/login.html",
  register:  "/view/src/pages/register.html",
  profile:   "/view/src/pages/profile.html",
  teacher:   "/view/src/pages/teacher.html",
  admin:     "/view/src/pages/admin.html",
};

const MAIN_LINKS = [
  { label: "Início",       href: ROUTES.home },
  { label: "Demandas",     href: ROUTES.demandas },
  { label: "FAQs",         href: ROUTES.faq },
  { label: "Fale Conosco", href: ROUTES.talkus },
];

// ---------- Helpers ----------

function getDisplayName(user) {
  const full = user.user_real_name || user.user_name;
  if (full) return full;
  if (user.email) return user.email.split("@")[0];
  return "Usuário";
}

function getProfileImage(user) {
  return (
    user.user_img ||
    user.user_image ||
    user.profile_img ||
    user.foto ||
    null
  );
}

function avatarHTML(user, name) {
  const img = getProfileImage(user);
  const src = img || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=40&background=006eff&color=fff`;
  return `<span class="cl-avatar"><img src="${src}" alt="${name}" id="cl-nav-avatar-img"></span>`;
}

function isActive(href) {
  const current = window.location.pathname.replace(/\/index\.html?$/, "/");
  const target = href.replace(/\/index\.html?$/, "/");
  return current === target || window.location.pathname === href;
}

function roleLinks(user) {
  const tipo = (user.user_tipo || user.tipo || "").toLowerCase();
  let extra = "";
  if (tipo.includes("prof")) {
    extra += `<li><a class="dropdown-item" href="${ROUTES.teacher}">
                <i class="bi bi-easel2 me-2"></i>Painel do Professor</a></li>`;
  }
  if (tipo.includes("admin")) {
    extra += `<li><a class="dropdown-item" href="${ROUTES.admin}">
                <i class="bi bi-speedometer2 me-2"></i>Painel Admin</a></li>`;
  }
  return extra;
}

// ---------- Render ----------

function navHTML() {
  const user = getLoggedUser();

  const links = MAIN_LINKS.map(
    (l) =>
      `<li class="nav-item">
         <a class="nav-link px-3 ${isActive(l.href) ? "active" : ""}" href="${l.href}">${l.label}</a>
       </li>`
  ).join("");

  if (user) {
    const name = getDisplayName(user);

    // Avatar sempre visível fora do collapse.
    // dropdown-menu-end abre para a esquerda a partir do lado direito da tela → sem overflow.
    const userDropdown = `
      <div class="dropdown cl-user-menu">
        <button class="cl-user-chip" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <span class="cl-greeting d-none d-lg-block text-start">
            Olá,<strong>${name}</strong>
          </span>
          ${avatarHTML(user, name)}
        </button>
        <ul class="dropdown-menu dropdown-menu-end">
          <li><h6 class="dropdown-header">${user.email || ""}</h6></li>
          <li><a class="dropdown-item" href="${ROUTES.profile}"><i class="bi bi-person me-2"></i>Meu Perfil</a></li>
          <li><a class="dropdown-item" href="${ROUTES.demandas}"><i class="bi bi-grid me-2"></i>Demandas</a></li>
          ${roleLinks(user)}
          <li><hr class="dropdown-divider"></li>
          <li><button class="dropdown-item text-danger" type="button" id="cl-logout">
            <i class="bi bi-box-arrow-right me-2"></i>Sair</button></li>
        </ul>
      </div>`;

    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-brand-solid sticky-top py-3 cl-navbar">
        <div class="container">
          <a class="logo-font" href="${ROUTES.home}">Cow<span>Labs</span></a>

          <!-- Links de navegação (collapse no mobile) -->
          <div class="collapse navbar-collapse" id="clNavMain">
            <ul class="navbar-nav mx-auto">
              ${links}
            </ul>
          </div>

          <!-- Avatar + hambúrguer: sempre visíveis fora do collapse -->
          <div class="d-flex align-items-center gap-2">
            ${userDropdown}
            <button class="navbar-toggler border-0 d-lg-none ms-1" type="button"
                    data-bs-toggle="collapse" data-bs-target="#clNavMain"
                    aria-controls="clNavMain" aria-expanded="false" aria-label="Abrir menu">
              <span class="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>`;
  }

  // Deslogado: botão "Entrar" dentro do collapse (mobile) ou inline (desktop)
  return `
    <nav class="navbar navbar-expand-lg navbar-dark bg-brand-solid sticky-top py-3 cl-navbar">
      <div class="container">
        <a class="logo-font" href="${ROUTES.home}">Cow<span>Labs</span></a>

        <button class="navbar-toggler border-0" type="button"
                data-bs-toggle="collapse" data-bs-target="#clNavMain"
                aria-controls="clNavMain" aria-expanded="false" aria-label="Abrir menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="clNavMain">
          <ul class="navbar-nav mx-auto">
            ${links}
          </ul>
          <div class="d-flex align-items-center gap-3 mt-3 mt-lg-0">
            <a href="${ROUTES.login}" class="btn btn-light-outline">Entrar / Cadastrar</a>
          </div>
        </div>
      </div>
    </nav>`;
}

// ---------- Fetch de imagem atualizada (igual ao profile.js) ----------

async function refreshAvatar() {
  const user = getLoggedUser();
  const token = getToken();
  if (!user || !token) return;

  try {
    const res = await fetch(`${API_URL}/users/${user.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) return;

    const users = await res.json();
    const fresh = users[0];
    if (!fresh) return;

    const savedImg = fresh.user_img || fresh.user_image || fresh.profile_img || fresh.foto;
    if (!savedImg) return;

    const imgEl = document.getElementById("cl-nav-avatar-img");
    if (imgEl) imgEl.src = savedImg;

  } catch {
    // silencioso — fallback do ui-avatars permanece
  }
}

// ---------- Logout ----------

function bindLogout() {
  const btn = document.getElementById("cl-logout");
  if (!btn) return;
  btn.addEventListener("click", () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("LogedUser");
    window.location.href = ROUTES.login;
  });
}

// ---------- Montagem ----------

export default async function nav() {
  const markup = navHTML();
  const root = document.getElementById("nav-root");
  if (root) {
    root.innerHTML = markup;
  } else {
    document.body.insertAdjacentHTML("afterbegin", markup);
  }
  bindLogout();
  refreshAvatar(); // não bloqueia a renderização
}

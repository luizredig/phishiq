import { AppHeader } from "./app-header";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "./app-sidebar";
import { useState, useEffect } from "react";
import { useApi } from "../../hooks/use-api";
import { Button } from "../ui/button";

type CookieConsent = {
  strictlyNecessary: true;
  functional: boolean;
  analytics: boolean;
  advertising: boolean;
};

const COOKIE_CONSENT_STORAGE_KEY = "cookie-consent.phishiq";

function loadCookieConsent(): CookieConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);

    if (!raw) return null;
    const parsed = JSON.parse(raw) as CookieConsent;

    if (parsed && typeof parsed === "object") {
      return {
        strictlyNecessary: true,
        functional: !!parsed.functional,
        analytics: !!parsed.analytics,
        advertising: !!parsed.advertising,
      };
    }
    return null;
  } catch {
    return null;
  }
}

function saveCookieConsent(consent: CookieConsent) {
  if (typeof window === "undefined") return;
  localStorage.setItem(
    COOKIE_CONSENT_STORAGE_KEY,
    JSON.stringify({
      strictlyNecessary: true,
      functional: !!consent.functional,
      analytics: !!consent.analytics,
      advertising: !!consent.advertising,
    })
  );
}

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [consent, setConsent] = useState<CookieConsent>({
    strictlyNecessary: true,
    functional: false,
    analytics: false,
    advertising: false,
  });
  const api = useApi();

  useEffect(() => {
    const existing = loadCookieConsent();
    if (existing) {
      setConsent(existing);
      setShowCookieModal(false);
    } else {
      setShowCookieModal(true);
    }

    void (async () => {
      try {
        const server = await api.get<Record<string, boolean>>(
          "/cookies/consents"
        );
        if (server) {
          const merged: CookieConsent = {
            strictlyNecessary: true,
            functional: !!server.FUNCTIONAL,
            analytics: !!server.ANALYTICS,
            advertising: !!server.ADVERTISING,
          };

          if (!existing) {
            setConsent(merged);
          } else {
            saveCookieConsent(merged);
            setConsent(merged);
          }
        }
      } catch {}
    })();
  }, []);

  function acceptAll() {
    const all: CookieConsent = {
      strictlyNecessary: true,
      functional: true,
      analytics: true,
      advertising: true,
    };
    saveCookieConsent(all);
    setConsent(all);
    setShowCookieModal(false);
    void api.post("/cookies/consents", {
      functional: true,
      analytics: true,
      advertising: true,
    });
  }

  function rejectAll() {
    const none: CookieConsent = {
      strictlyNecessary: true,
      functional: false,
      analytics: false,
      advertising: false,
    };
    saveCookieConsent(none);
    setConsent(none);
    setShowCookieModal(false);
    void api.post("/cookies/consents", {
      functional: false,
      analytics: false,
      advertising: false,
    });
  }

  function savePreferences() {
    const normalized: CookieConsent = {
      strictlyNecessary: true,
      functional: !!consent.functional,
      analytics: !!consent.analytics,
      advertising: !!consent.advertising,
    };
    saveCookieConsent(normalized);
    setConsent(normalized);
    setShowCookieModal(false);
    void api.post("/cookies/consents", {
      functional: normalized.functional,
      analytics: normalized.analytics,
      advertising: normalized.advertising,
    });
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <div className="flex w-full flex-1 flex-col overflow-hidden">
        <AppHeader />

        <div className="flex flex-1 p-4">{children}</div>
      </div>

      {showCookieModal ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-title"
        >
          <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
            <h2
              id="cookie-consent-title"
              className="text-lg font-semibold text-gray-900"
            >
              Preferências de Cookies
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Usamos cookies para melhorar sua experiência. Você pode gerenciar
              suas preferências por categoria.
            </p>

            <div className="mt-4 space-y-3">
              <div className="flex items-start justify-between rounded-md border p-3">
                <div className="pr-4">
                  <p className="font-medium text-gray-900">
                    Estritamente necessários
                  </p>
                  <p className="text-sm text-gray-600">
                    Essenciais para o funcionamento do site.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked
                  disabled
                  aria-label="Estritamente necessários"
                  className="h-5 w-5 cursor-not-allowed rounded border-gray-300"
                />
              </div>

              <div className="flex items-start justify-between rounded-md border p-3">
                <div className="pr-4">
                  <p className="font-medium text-gray-900">Funcionais</p>
                  <p className="text-sm text-gray-600">
                    Lembram preferências e melhoram funcionalidades.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.functional}
                  onChange={(e) =>
                    setConsent((c) => ({ ...c, functional: e.target.checked }))
                  }
                  aria-label="Funcionais"
                  className="h-5 w-5 rounded border-gray-300"
                />
              </div>

              <div className="flex items-start justify-between rounded-md border p-3">
                <div className="pr-4">
                  <p className="font-medium text-gray-900">Analíticos</p>
                  <p className="text-sm text-gray-600">
                    Ajudam a entender uso e desempenho do site.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.analytics}
                  onChange={(e) =>
                    setConsent((c) => ({ ...c, analytics: e.target.checked }))
                  }
                  aria-label="Analíticos"
                  className="h-5 w-5 rounded border-gray-300"
                />
              </div>

              <div className="flex items-start justify-between rounded-md border p-3">
                <div className="pr-4">
                  <p className="font-medium text-gray-900">Publicidade</p>
                  <p className="text-sm text-gray-600">
                    Personalizam anúncios com base nos seus interesses.
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={consent.advertising}
                  onChange={(e) =>
                    setConsent((c) => ({ ...c, advertising: e.target.checked }))
                  }
                  aria-label="Publicidade"
                  className="h-5 w-5 rounded border-gray-300"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <Button
                onClick={rejectAll}
                className="inline-flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium  "
              >
                Rejeitar tudo
              </Button>

              <Button
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
              >
                Aceitar tudo
              </Button>

              <Button
                onClick={savePreferences}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white "
              >
                Salvar preferências
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </SidebarProvider>
  );
}

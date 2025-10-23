import { useEffect, useState } from "react";

import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { useApi } from "../hooks/use-api";
import { TemplateDialog } from "../components/templates/template-dialog";

interface PhishingTemplate {
  id: string;
  name: string;
  text: string;
  is_active: boolean;
}

export default function Templates() {
  const { get, put, delete: del } = useApi();
  const [items, setItems] = useState<PhishingTemplate[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<PhishingTemplate | undefined>(
    undefined
  );
  const [includeInactive, setIncludeInactive] = useState(false);

  useEffect(() => {
    void fetchTemplates();
  }, [includeInactive]);

  async function fetchTemplates() {
    const data = await get<PhishingTemplate[]>(
      `/phishing-templates?includeInactive=${includeInactive}`
    );
    if (data) setItems(data);
  }

  async function toggleStatus(id: string, is_active: boolean) {
    const ok = await put(`/phishing-templates/${id}/status`, { is_active });
    if (ok) fetchTemplates();
  }

  async function remove(id: string) {
    const ok = await del(`/phishing-templates/${id}`);
    if (ok) fetchTemplates();
  }

  return (
    <div className="w-full py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Templates</h1>
        <Button
          onClick={() => {
            setEditing(undefined);
            setOpen(true);
          }}
        >
          Novo template
        </Button>
      </div>

      <div className="flex items-center gap-2 justify-end my-2">
        <label className="text-sm" htmlFor="mostrar-inativos">
          Mostrar inativos
        </label>
        <Switch
          id="mostrar-inativos"
          checked={includeInactive}
          onCheckedChange={setIncludeInactive}
        />
      </div>

      <span className="text-sm text-muted-foreground">
        Estes são os templates disponíveis para você usar para enviar e-mails.
      </span>

      <div className="border rounded-md overflow-x-auto">
        {items.length === 0 ? (
          <div className="text-center py-4 text-muted-foreground">
            Nenhum template cadastrado.
          </div>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Nome</th>
                <th className="text-left p-2">Texto</th>
                <th className="text-center p-2">Status</th>
                <th className="text-right p-2">Ações</th>
              </tr>
            </thead>
            <tbody>
              {items.map((t) => (
                <tr key={t.id} className="border-b">
                  <td className="p-2 align-top">{t.name}</td>
                  <td className="p-2 max-w-[480px] truncate align-top">
                    {t.text}
                  </td>
                  <td className="p-2 text-center align-top">
                    {t.is_active ? "Ativo" : "Inativo"}
                  </td>
                  <td className="p-2 text-right align-top">
                    <div className="flex gap-2 justify-end">
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEditing(t);
                          setOpen(true);
                        }}
                      >
                        Editar
                      </Button>
                      <Button
                        variant="outline"
                        onClick={() => toggleStatus(t.id, !t.is_active)}
                      >
                        {t.is_active ? "Inativar" : "Ativar"}
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => remove(t.id)}
                      >
                        Excluir
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <TemplateDialog
        open={open}
        onOpenChange={(state) => {
          setOpen(state);
          if (!state) fetchTemplates();
        }}
        template={editing}
      />
    </div>
  );
}

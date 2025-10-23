import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Switch } from "../components/ui/switch";
import { Button } from "../components/ui/button";
import { useApi } from "../hooks/use-api";

type ChannelKey = "EMAIL";

export default function ProfilePage() {
  const api = useApi();
  const [loading, setLoading] = useState(false);
  const [consents, setConsents] = useState<Record<ChannelKey, boolean>>({
    EMAIL: true,
  });

  useEffect(() => {
    void (async () => {
      setLoading(true);
      try {
        const resp = await api.get<Record<string, boolean>>(
          "/channels/consents"
        );
        if (resp) {
          setConsents({ EMAIL: !!resp.EMAIL });
        }
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function save() {
    setLoading(true);
    try {
      await api.post("/channels/consents", { EMAIL: consents.EMAIL });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6 w-full">
      <Card>
        <CardHeader>
          <CardTitle>Perfil</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h3 className="font-medium">Consentimento por canal de envio</h3>
            <div className="mt-3 flex items-center justify-between rounded-md border p-3">
              <div className="pr-4">
                <p className="font-medium text-gray-900">E-mail</p>
                <p className="text-sm text-gray-600">
                  Receber comunicações por e-mail.
                </p>
              </div>
              <Switch
                checked={!!consents.EMAIL}
                onCheckedChange={(checked) =>
                  setConsents((c) => ({ ...c, EMAIL: checked }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={save} disabled={loading}>
              Salvar
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

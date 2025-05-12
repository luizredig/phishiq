import { api } from "../../lib/axios";

export async function emailExists(email: string): Promise<{
  statusCode: number;
  realm: string;
  exists: boolean;
  clientId: string;
}> {
  const response = await api.get("/keycloak/exists", {
    params: { email },
  });

  const { statusCode, realm, exists, clientId } = response.data;

  return { statusCode, realm, exists, clientId };
}

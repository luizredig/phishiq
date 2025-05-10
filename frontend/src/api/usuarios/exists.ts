import { api } from "../../lib/axios";

export async function emailExists(
  email: string
): Promise<{ statusCode: number; realm: string; exists: boolean }> {
  const response = await api.get("/keycloak/exists", {
    params: { email },
  });

  const { statusCode, realm, exists } = response.data;

  return { statusCode, realm, exists };
}

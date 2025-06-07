import { TemplateCard } from "../components/templates/template-card";

export default function Templates() {
  return (
    <div className="w-full py-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Templates</h1>
      </div>

      <span className="text-sm text-muted-foreground">
        Estes são os templates disponíveis para você usar para enviar e-mails.
      </span>

      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <TemplateCard
            title="Bônus surpresa"
            imageUrl="/templates/phishing-bonus-especial.png"
            description="`[NOME_EMPRESA]\n\n[NOME_USUARIO], temos um presente para você!\n\nEste mês foi corrido, hein? Para mostrar nosso apreço à toda a equipe, o financeiro [NOME_EMPRESA] preparou um bônus especial para você.\n\nAcessar bônus\n\nAtenciosamente,\n[NOME_EMPRESA]`"
          />
        </div>
      </div>
    </div>
  );
}

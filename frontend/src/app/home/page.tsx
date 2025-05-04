import { Button } from '@/components/ui/button'
import { MoveRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex-1">
        <section className="flex w-full items-center justify-center py-12 md:py-24">
          <div className="container px-5 lg:px-40">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Proteja sua empresa contra ataques de phishing
                  </h1>

                  <p className="text-muted-foreground max-w-[600px] md:text-xl">
                    Simule ataques de phishing, treine seus funcionários e
                    fortaleça sua segurança cibernética com a plataforma
                    PhishIQ.
                  </p>
                </div>

                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="#contato">
                    <Button variant={'default'}>Começar agora</Button>
                  </Link>

                  <Link
                    href="#como-funciona"
                    className="border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex h-10 items-center justify-center rounded-md border px-8 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
                  >
                    Saiba Mais
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Image
                  priority
                  src="/images/home.png"
                  width={550}
                  height={550}
                  alt="Ilustração de segurança cibernética"
                  className="aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="bg-muted/40 dark:bg-muted/20 flex w-full justify-center py-12"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-primary inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-950 dark:text-blue-400">
                  Benefícios
                </div>

                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Por que escolher a PhishIQ?
                </h2>

                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed">
                  Nossa plataforma oferece uma solução completa para proteger
                  sua empresa contra ataques de phishing.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Simulações Realistas</h3>

                  <p className="text-muted-foreground">
                    Crie campanhas de phishing realistas para testar a
                    vigilância dos seus funcionários.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />

                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">
                    Treinamento Personalizado
                  </h3>

                  <p className="text-muted-foreground">
                    Ofereça treinamentos personalizados com base nos resultados
                    das simulações.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center space-y-4">
                <div className="bg-primary flex h-12 w-12 items-center justify-center rounded-lg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M12 20v-6M6 20V10M18 20V4" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Relatórios Detalhados</h3>

                  <p className="text-muted-foreground">
                    Acompanhe o progresso da sua equipe com relatórios
                    detalhados e métricas de desempenho.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="como-funciona"
          className="flex w-full justify-center py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-primary inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-950 dark:text-blue-400">
                  Como Funciona
                </div>

                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Processo simples e eficiente
                </h2>

                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed">
                  Conheça o processo de implementação da nossa plataforma na sua
                  empresa.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                  <span className="text-primary text-2xl font-bold dark:text-blue-400">
                    1
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Configuração</h3>

                  <p className="text-muted-foreground">
                    Configure sua conta e importe a lista de funcionários para
                    começar.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                  <span className="text-primary text-2xl font-bold dark:text-blue-400">
                    2
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Simulação</h3>

                  <p className="text-muted-foreground">
                    Crie e execute campanhas de phishing personalizadas para sua
                    equipe.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-950">
                  <span className="text-primary text-2xl font-bold dark:text-blue-400">
                    3
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Análise e Treinamento</h3>

                  <p className="text-muted-foreground">
                    Analise os resultados e ofereça treinamentos específicos
                    para melhorar a segurança.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="precos"
          className="bg-muted/40 dark:bg-muted/20 flex w-full justify-center py-12 md:py-24"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="text-primary inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-950 dark:text-blue-400">
                  Preços
                </div>

                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Planos para empresas de todos os tamanhos
                </h2>

                <p className="text-muted-foreground mx-auto max-w-[700px] md:text-xl/relaxed">
                  Escolha o plano ideal para as necessidades da sua empresa.
                </p>
              </div>
            </div>

            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3 lg:gap-8">
              <div className="bg-background flex flex-col justify-between rounded-lg border p-6 shadow-sm">
                <div className="flex flex-col">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">Básico</h3>

                    <p className="text-muted-foreground">
                      Para pequenas empresas
                    </p>
                  </div>

                  <div className="mt-4 flex items-baseline text-3xl font-bold">
                    R$499
                    <span className="text-muted-foreground text-sm font-normal">
                      /mês
                    </span>
                  </div>

                  <ul className="mt-6 space-y-2">
                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-2 h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Até 50 funcionários
                    </li>

                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-2 h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      5 campanhas por mês
                    </li>

                    <li className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-primary mr-2 h-4 w-4"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Relatórios básicos
                    </li>
                  </ul>
                </div>

                <div className="mt-6">
                  <Link href="#contato">
                    <Button variant={'default'} className="w-full">
                      Começar agora
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-background ring-primary flex flex-col rounded-lg border p-6 shadow-sm ring-2">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Profissional</h3>

                  <p className="text-muted-foreground">
                    Para empresas em crescimento
                  </p>
                </div>

                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$999
                  <span className="text-muted-foreground text-sm font-normal">
                    /mês
                  </span>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Até 200 funcionários
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    15 campanhas por mês
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Relatórios avançados
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Treinamentos personalizados
                  </li>
                </ul>

                <div className="mt-6">
                  <Link href="#contato">
                    <Button variant={'default'} className="w-full">
                      Começar agora
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="bg-background flex flex-col rounded-lg border p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Empresarial</h3>

                  <p className="text-muted-foreground">Para grandes empresas</p>
                </div>

                <div className="mt-4 flex items-baseline text-3xl font-bold">
                  R$1.999
                  <span className="text-muted-foreground text-sm font-normal">
                    /mês
                  </span>
                </div>

                <ul className="mt-6 space-y-2">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Funcionários ilimitados
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Campanhas ilimitadas
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Relatórios personalizados
                  </li>

                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary mr-2 h-4 w-4"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Suporte dedicado
                  </li>
                </ul>

                <div className="mt-6">
                  <Link href="#contato">
                    <Button variant={'default'} className="w-full">
                      Começar agora
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="flex w-full justify-center py-12 md:py-24"
        >
          <div className="container grid items-center gap-6 px-5 lg:grid-cols-2 lg:gap-10 lg:px-40">
            <div className="space-y-2">
              <div className="text-primary inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm dark:bg-blue-950 dark:text-blue-400">
                Contato
              </div>

              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Pronto para fortalecer a segurança da sua empresa?
              </h2>

              <p className="text-muted-foreground max-w-[600px] md:text-xl/relaxed">
                Entre em contato conosco para agendar uma demonstração gratuita
                da plataforma PhishIQ.
              </p>
            </div>

            <div className="bg-background flex flex-col gap-4 rounded-lg border p-6 shadow-sm">
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <label
                    htmlFor="name"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Nome
                  </label>

                  <input
                    id="name"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite seu nome"
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="email"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite seu email"
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="company"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Empresa
                  </label>

                  <input
                    id="company"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite o nome da sua empresa"
                  />
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Mensagem
                  </label>

                  <textarea
                    id="message"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[100px] w-full rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Digite sua mensagem"
                  ></textarea>
                </div>
              </div>

              <Button variant={'default'}>Solicitar demonstração</Button>
            </div>
          </div>
        </section>

        <section className="bg-primary flex w-full justify-center py-12 text-white md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Fortaleça sua segurança cibernética hoje
                </h2>

                <p className="mx-auto max-w-[700px] text-white/80 md:text-xl/relaxed">
                  Junte-se a centenas de empresas que já confiam na PhishIQ para
                  proteger seus dados e treinar suas equipes.
                </p>
              </div>

              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#contato"
                  className="focus-visible:ring-ring text-primary inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium transition-colors hover:bg-white/90 focus-visible:ring-1 focus-visible:outline-none"
                >
                  Começar agora <MoveRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

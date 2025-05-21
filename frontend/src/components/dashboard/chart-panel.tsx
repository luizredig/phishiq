import React from 'react'
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '../ui/chart'
import { Pie, PieChart } from 'recharts'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const chartData = [
  { departamento: 'TI', funcionarios: 275, fill: '#962bd7' },
  { departamento: 'Marketing', funcionarios: 200, fill: '#1EA461' },
  { departamento: 'Comercial', funcionarios: 187, fill: '#FF7139' },
  { departamento: 'RH', funcionarios: 173, fill: '#0078D4' },
  { departamento: 'outros', funcionarios: 90, fill: '#FFB900' },
]

const nomeUsuario = 'Pneumonoultramicroscopicsilicovolcanoconiosis'

const chartConfig = {
  funcionarios: {
    label: 'funcionarios',
  },
  TI: {
    label: 'TI',
    color: 'hsl(#962bd7)',
  },
  Marketing: {
    label: 'Marketing',
    color: 'hsl(#1EA461)',
  },
  Comercial: {
    label: 'Comercial',
    color: 'hsl(#FF7139)',
  },
  RH: {
    label: 'RH',
    color: 'hsl(#0078D4)',
  },
  outros: {
    label: 'outros',
    color: 'hsl(#FFB900)',
  },
} satisfies ChartConfig

const ChartPanel = () => {
  return (
    <div
      className="flex h-full w-full items-center justify-center gap-10"
      id="chart-panel"
    >
      <Card className="flex h-auto w-1/4 flex-col" id="chart-panel-card">
        <CardHeader
          className="items-center pb-0 text-center"
          id="chart-panel-card-header"
        >
          <CardTitle id="chart-panel-card-header-title">
            Usuários por departamento
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 pb-0" id="chart-panel-card-content">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
            id="chart-panel-chart-container"
          >
            <PieChart id="chart-panel-chart">
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="funcionarios"
                nameKey="departamento"
                id="chart-panel-chart-pie"
              />
            </PieChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="flex h-auto w-1/4 flex-col">
        <CardHeader className="items-center pb-0 text-center">
          <CardTitle>Informarção de {nomeUsuario}</CardTitle>
        </CardHeader>
      </Card>
    </div>
  )
}

export default ChartPanel

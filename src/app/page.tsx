import ChartOverview from "@/components/chart";
import { Sales } from "@/components/sales";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Percent, User, Wrench } from "lucide-react";


export default function Home() {
  return (
    <main className="sm:ml-14 p-4 ">
      <section className="grid grid-cols-2 grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de Produção
              </CardTitle>
              <Package className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total do mês atual
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">36.000</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Novos Clientes
              </CardTitle>
              <User className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes no mês atual.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">460</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Serviços Realizados Hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Serviços realizados no dia atual.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">65%</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
                Total de Serviços Realizados
              </CardTitle>
              <Wrench className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de Serviços realizados no mês
            </CardDescription>
          </CardHeader>

          <CardContent>
            <p className="text-base sm:text-lg font-bold">28.000</p>
          </CardContent>
        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <ChartOverview/>
        <Sales/>

      </section>
    </main>
  );
}

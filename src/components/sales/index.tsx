import { User2Icon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";



export function Sales() {
      
    return (
       
        <Card className="flex-1">
            <CardHeader>
                <div className="flex items-center justify-center">
                    <CardTitle className="text-lg sm:text-xl text-gray-800">
                        Últimos Clientes
                    </CardTitle>
                    <User2Icon className="ml-auto w-4 h4"/>
                </div>
                <CardDescription>
                Clientes nas últimas 24h
                </CardDescription>
            </CardHeader>

        <CardContent>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="/DSCF5049.jpg"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Tiago Nunes</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">tiagonunes2k2@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="/DSCF5049.jpg"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Tiago Nunes</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">tiagonunes2k2@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="/DSCF5049.jpg"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Tiago Nunes</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">tiagonunes2k2@gmail.com</span>
                </div>
            </article>
            <article className="flex items-center gap-2 border-b py-2">
                <Avatar className="w-8 h-8">
                    <AvatarImage src="/DSCF5049.jpg"/>
                    <AvatarFallback>DV</AvatarFallback>
                </Avatar>
                <div>
                    <p className="text-sm sm:text-base font-semibold">Tiago Nunes</p>
                    <span className="text-[12px] sm:text-sm text-gray-400">tiagonunes2k2@gmail.com</span>
                </div>
            </article>
        </CardContent>
        </Card>

    );

}
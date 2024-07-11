'use client';

import { useState } from "react";
import Layout from "../ui/layout";
import PixOptions from "./PixOptions";
import { parcelatedPixOptions } from "../utils/parcelatedPixOption";

const PaymentOptions = () => {
    const [selectedOption, setSelectedOption] = useState<string>('R$ 15.300,00');

    const handleSelect = (value: string) => {
        setSelectedOption(value);
    };

    return (
        <Layout title="João, como você quer pagar?">
            <div className="flex flex-col gap-4 w-full max-w-[25rem]">
                <PixOptions 
                    legend="Pix" 
                    options={[
                        {
                            id: 1,
                            parceledCount: 1,
                            value: "R$ 30.500,00",
                            cashback: "Ganhe 3% de Cashback",
                            badge: `🤑 <strong className="mx-1">R$ 300,00</strong> de volta no seu Pix na hora`
                        }
                    ]} 
                    selectedOption={selectedOption}
                    onSelect={handleSelect}
                />
                <PixOptions 
                    legend="Pix Parcelado" 
                    options={parcelatedPixOptions} 
                    selectedOption={selectedOption}
                    onSelect={handleSelect}
                />
            </div>
        </Layout>
    )
}

export default PaymentOptions;
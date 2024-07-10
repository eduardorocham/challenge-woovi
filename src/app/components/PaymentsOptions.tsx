import Layout from "../ui/layout";
import PixOptions from "./PixOptions";
import { parcelatedPixOptions } from "../utils/parcelatedPixOption";

const PaymentOptions = () => {
    return (
        <Layout title="João, como você quer pagar?">
            <div className="flex flex-col gap-4 w-full">
                <PixOptions 
                    legend="Pix" 
                    options={[
                        {
                            id: 1,
                            parceledCount: 1,
                            value: "R$ 30.500,00"
                        }
                    ]} 
                />
                <PixOptions 
                    legend="Pix Parcelado" 
                    options={parcelatedPixOptions} 
                />
            </div>
        </Layout>
    )
}

export default PaymentOptions;
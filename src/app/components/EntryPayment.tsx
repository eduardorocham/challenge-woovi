import Layout from "../ui/layout"
import QRCodeArea from "./QRCodeArea";
import DataEntryPayment from "./DataEntryPayment";

const EntryPayment = () => {
    return (
        <Layout title="João, pague a entrada de R$ 15.300,00 pelo Pix">
            <QRCodeArea />
            <DataEntryPayment />
        </Layout>
    )
}

export default EntryPayment;
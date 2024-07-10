import Layout from "../ui/layout"
import DataEntryPayment from "./DataEntryPayment";
import Form from "./Form";

const RemainingPayment = () => {
    return (
        <Layout title="João, pague o restante em 1x no cartão">
            <Form />
            <DataEntryPayment />
        </Layout>
    )
}

export default RemainingPayment;
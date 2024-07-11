import VerticalStepper from "./Stepper"
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

function DataEntryPayment() {
    return (
        <div className="mt-5 w-full max-w-[25rem]">
            <div className="flex justify-center">
                <div className="font-extrabold mb-5">
                    <span className="block text-primary-gray">
                        Prazo de pagamento
                    </span>
                    <span className="text-secondary-gray">15/12/2021 - 08:17</span>
                </div>
            </div>
            <div className="flex flex-col gap-4 pb-4 border-b border-primary-gray">
                <VerticalStepper 
                    steps={
                        [
                            {
                                label: '1ª entrada no Pix',
                                description: 'R$ 15.300,00',
                            },
                            {
                                label: '2ª no cartão',
                                description: 'R$ 15.300,00',
                            },
                        ]
                    } 
                />
            </div>
            <div className="flex justify-between py-4 border-b border-primary-gray">
                <div className="font-semibold text-secondary-gray text-lg">CET: 0,5%</div>
                <div className="font-semibold text-secondary-gray text-lg">Total: R$ 30.600,00</div>
            </div>
            <div className="py-4 border-b border-primary-gray flex justify-between items-center">
                <div className="font-bold text-secondary-gray text-base">Como funciona?</div>
                <ExpandLessIcon />
            </div>
            <div className="flex flex-col items-center py-4">
                <span className="text-primary-gray">Identificador:</span>
                <span className="text-secondary-gray">2c1b951f356c4680b13ba1c9fc889c47</span>
            </div>
        </div>
    )
}

export default DataEntryPayment;
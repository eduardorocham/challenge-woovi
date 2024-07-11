import { Option as OptionType } from "../types/option"
import Option from "./Option"

interface PixOptionsProps {
    legend: string,
    options: OptionType[]
    selectedOption: string,
    onSelect: (value: string) => void
}

const PixOptions = ({ legend, options, selectedOption, onSelect }: PixOptionsProps) => {
    return (
        <fieldset className="border-2 border-primary-gray w-full rounded-[10px]">
            <legend className="bg-primary-gray font-extrabold text-lg text-secondary-gray py-[1px] px-4 block rounded-xl ml-3">
                {legend}
            </legend>
            {options.map((option) => (
                <Option 
                    key={option.id} 
                    option={option}
                    selectedOption={selectedOption} 
                    onSelect={onSelect}
                />
            ))}
        </fieldset>
    )
}

export default PixOptions;
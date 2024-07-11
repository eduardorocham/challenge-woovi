import { Option as OptionType } from "../types/option";
import CheckRadioExample from "./CheckRadio";
import Badge from "./Badge";

interface OptionProps {
    option: OptionType
    selectedOption: string,
    onSelect: (value: string) => void
}

const Option = ({ option, selectedOption, onSelect }: OptionProps) => {
    return (
        <div className="p-4 w-full border-b-2 last:border-b-0">
            <div className="flex justify-between items-center">
                <label htmlFor={`pix-${option.id}`} className="text-2xl flex gap-1">
                    <span className="font-extrabold">{`${option.parceledCount}x`}</span>
                    <span className="font-semibold text-secondary-gray">{option.value}</span>
                </label>
                <CheckRadioExample 
                    value={option.value}
                    selectedOption={selectedOption}
                    onSelect={onSelect}
                />
            </div>
            {option.total && 
                <span className="font-semibold text-gray-300 text-base">{option.total}</span>
            }
            {option.cashback && 
                <span className="font-semibold text-primary-greeen">{option.cashback}</span>
            }
            {option.badge &&
                <Badge content={option.badge}/>
            }
        </div>
    )
}

export default Option;
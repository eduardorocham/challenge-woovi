import { Option as OptionType } from "../types/option";

interface OptionProps {
    option: OptionType
}

const Option = ({ option }: OptionProps) => {
    return (
        <div className="p-4 w-full border-b-2 last:border-b-0">
            <div className="flex justify-between">
                <label htmlFor="pix" className="text-2xl flex gap-1">
                    <span className="font-extrabold">{`${option.parceledCount}x`}</span>
                    <span className="font-semibold text-secondary-gray">{option.value}</span>
                </label>
                <input type="checkbox" id="pix" />
            </div>
            {option.total && 
                <span className="font-semibold text-gray-300 text-base">{option.total}</span>
            }
        </div>
    )
}

export default Option;
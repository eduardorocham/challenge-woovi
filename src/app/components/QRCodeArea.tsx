import Image from "next/image";
import FileCopyIcon from '@mui/icons-material/FileCopy';

const QRCodeArea = () => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="border-primary-greeen border-2 p-2 rounded-xl">
                <Image 
                    src="/images/QRCode.png" 
                    width={332} 
                    height={332} 
                    alt="qrcode-to-payment"
                />
            </div>
            <button className="bg-primary-blue text-white px-4 py-1 rounded-lg text-lg">
                Clique aqui para copiar QR CODE <FileCopyIcon />
            </button>
        </div>
    )
}

export default QRCodeArea;
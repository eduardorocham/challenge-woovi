import Image from "next/image"

const Footer = () => {
    return (
        <footer className="mt-5 flex items-center space-x-2">
            <Image 
                src="/images/Payment.png"
                width={16}
                height={18}
                alt="security-payment-logo"
                className="inline"
            />
            <span className="text-[#B2B2B2]">Pagamento <i>100% seguro</i> via:</span>
            <Image 
                src="/images/Logo-Gray.png"
                width={57}
                height={17}
                alt="security-payment-logo"
                className="inline"
            />
        </footer>
    )
}

export default Footer;
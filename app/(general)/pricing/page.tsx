import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Seo Title Pricing',
    description: 'Pagina de precios de mi servicio',
    keywords: ['Pricing page', 'dickson', 'información','venta']
}
export default function PricingPage(){
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}
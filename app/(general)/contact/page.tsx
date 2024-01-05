import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: 'Seo Title Contact',
    description: 'Pagina de contacto',
    keywords: ['Contact page', 'dickson', 'información','venta']
}
export default function ContactPage(){
    return (
        <>
            <span className="text-7xl">Cantact  Page</span>
        </>
    )
}
import * as React from "react"
import Input from '../components/Input'
import Layout from '../components/Layout'
import Illustration from '../images/svg/Illustration'
import { Helmet } from "react-helmet"


// markup
const IndexPage = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <html lang="pt-BR"/>
        <title>Em breve | Atrati</title>
        <link rel="canonical" href="https://www.globo.com/"/>
        <meta name="description" content="Gerencie todo o seu negócio em um só lugar" />
        <meta name="theme-color" content="#262C33" />
        <script type="application/ld+json">
    {`
        {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Atrati",
          "url": "http://www.atrati.com",
        }
      `}
  </script>
      </Helmet>
      <Layout>
        <div className="md:hidden w-[75%] h-[50%] flex justify-center mx-auto mb-8">
          <Illustration />
        </div>
        <div className='md:h-2/3 flex flex-col md:justify-center px-8 md:pl-20 md:pr-0 text-center md:text-left md:bg-transparent bg-atrati-gray'>
          <h1 className="text-[2rem] md:text-[2.4rem] md:w-1/2 leading-[3rem] text-white md:text-atrati-gray font-black md:mb-3">Gerencie todo o seu negócio em um só lugar</h1>
          <div className='md:hidden border-r border-[#5D6166] my-2 h-8 w-1/2'></div>
          <p className="text-[1.2rem] leading-[1.75rem] md:text-[#525252] text-[#F2F3F3] font-medium md:mb-6">Em breve uma nova maneira de gestão para<br className='hidden md:visible' /> sua loja</p>
          <Input />
        </div>
      </Layout>
    </>
  )
}

export default IndexPage

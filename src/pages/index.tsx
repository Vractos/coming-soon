import * as React from "react"
import Header from '../components/Header'
import Input from '../components/Input'
import Layout from '../components/Layout'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <div className='h-1/2 flex flex-col justify-end'>
        <h1 className="text-[2.4rem] leading-[3rem] text-atrati-gray font-black">Gerencie todo o seu negócio em um só lugar</h1>
        <h2 className="text-[1.2rem] leading-[1.75rem] text-[#525252] font-medium">Em breve uma nova maneira de gestão para sua loja</h2>
        <Input/>
      </div>
    </Layout>
  )
}

export default IndexPage

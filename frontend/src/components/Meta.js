import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Welcome To KL-Stores - Home',
  description: 'We Are the one who Sells Best Products at Best Price Online',
  keywords: 'free shopping cart, buy prducts, cheap at price tag',
}

export default Meta

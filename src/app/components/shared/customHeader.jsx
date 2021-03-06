import React from 'react'
import { Header } from 'react-mdl'

const styles = {
  span: { color: '#ddd' },
}

const CustomHeader = () => {
  return(
    <Header waterfall scroll title={<span><span style={styles.span}> </span><strong>Figurkoder.se</strong></span>}>
    </Header>
  )
}

export default CustomHeader

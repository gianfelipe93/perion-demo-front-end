import React from 'react'
import loader from '../../media/loader.svg'

type Props = {
  containerClassName?: string
  loaderClassName?: string
}

const Loader = ({ containerClassName = "", loaderClassName = "" }: Props) => {
  return (
    <div className={`loaderContainer ${containerClassName}`}>
      <img src={loader} alt='loading' className={`loader ${loaderClassName}`} />
    </div>
  )
}

export default Loader
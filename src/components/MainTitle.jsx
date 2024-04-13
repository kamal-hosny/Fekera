import React from 'react'
import { useTranslation } from 'react-i18next'

const MainTitle = ({title}) => {
    const { t } = useTranslation()
  return (
    <div className='text-center p-4'>
    <p className='main-title font-Readex'>{t(title)}</p>
    </div>
  )
}

export default MainTitle
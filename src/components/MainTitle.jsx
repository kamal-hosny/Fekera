import React from 'react'; // React library
import { useTranslation } from 'react-i18next'; // react-i18next library

const MainTitle = ({title}) => {
    const { t } = useTranslation()
  return (
    <div className='text-center p-4'>
    <p className='main-title font-Readex'>{t(title)}</p>
    </div>
  )
}

export default MainTitle
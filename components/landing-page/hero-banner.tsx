import React from 'react'
import {useTranslations} from 'next-intl';

const HeroBanner = () => {
  const t = useTranslations('Index.AuthPage');

  return (
    <div>
      <h1>{t('LoginHeader')}</h1>
    </div>
  )
}

export default HeroBanner
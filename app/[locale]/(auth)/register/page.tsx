import React from 'react'
import {useTranslations} from 'next-intl';
import RegisterForm from '@/components/forms/register-form';

export default function Register() {
  const t = useTranslations('Index.AuthPage');
  return (
    <div className='h-screen w-screen'>
      <RegisterForm 
        registerHeader={t('RegisterHeader')}
        username={t('Username')}
        name={t('Name')}
        email={t('Email')}
        password={t('Password')}
        registerButtonLabel={t('RegisterButtonLabel')}
        registerFooterLabel={t('RegisterFooterLabel')}
        registerFooterLink={t('RegisterFooterLink')}        
      />
    </div>
  )
}
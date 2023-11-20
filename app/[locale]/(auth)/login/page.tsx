import React from 'react'
import {useTranslations} from 'next-intl';
import LoginForm from '@/components/forms/login-form';

export default function Login() {
  const t = useTranslations('Index.AuthPage');
  return (
    <div className='h-screen w-screen'>
      <LoginForm 
        loginHeader={t('LoginHeader')}
        email={t('Email')}
        password={t('Password')}
        loginButtonLabel={t('LoginButtonLabel')}
        loginFooterLabel={t('LoginFooterLabel')}
        loginFooterLink={t('LoginFooterLink')} 
      />
    </div>
  )
}
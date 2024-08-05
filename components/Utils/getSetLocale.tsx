'use client'

import { useContext } from 'react';
import { LocaleContext } from '@/app/context/localeContext';
import { Locale } from '@/config';
 

const GetTheLocale=()=>{
    const {CurLocale,setCurLocale} = useContext(LocaleContext)

    const theLocale= CurLocale
    return theLocale
}


export const TheLocaleSelected = GetTheLocale()

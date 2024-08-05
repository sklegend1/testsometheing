'use client'
import {CheckIcon, LanguageIcon} from '@heroicons/react/24/solid';
import { Locale } from '@/config';
import {
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Button,
  } from "@material-tailwind/react";
  import { useTransition } from 'react';
import { setUserLocale } from './locale';
   
  export function MenuDefault() {
    const [isPending,startTransition] = useTransition()
    const langSwitch=(lang:Locale)=>{
        // alert("Language Changed to "+lang)
        startTransition(()=>{
            setUserLocale(lang)
        })
    }
    return (
      <Menu >
        <MenuHandler>
          {/* <Button>Menu</Button> */}
          <div className='  w-fit '>
            <LanguageIcon className=' w-7 text-white  ' />
          </div>
        </MenuHandler>
        <MenuList>
          <MenuItem onClick={()=>{langSwitch("en")}}>English</MenuItem>
          <MenuItem onClick={()=>{langSwitch("fa")}}>فارسی</MenuItem>
          <MenuItem onClick={()=>{langSwitch("ru")}}>русский</MenuItem>
        </MenuList>
      </Menu>
    );
  }

const LocaleSwitcher = () => {
    return (
        <div className=' text-right justify-end flex  '>
            <div className=' w-fit mr-3 cursor-pointer '>
            <MenuDefault  />
            </div>
        </div>
    );
}

export default LocaleSwitcher;
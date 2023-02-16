import {
  Icon123,
  IconAperture, IconCopy, IconEye, IconFile, IconHome, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus
} from '@tabler/icons';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: true,
    subheader: 'Home',
  },

  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/dashboard',
  },
  {
    id: uniqueId(),
    title: 'Réglage',
    icon: IconTypography,
    href: '/seeting',
  },  
  {
    id: uniqueId(),
    title: 'Session',
    icon: IconMoodHappy,
    href: '',
  },
  {
    id: uniqueId(),
    title: 'Dossier',
    icon: IconFile,
    href: '/dossier',
  }, 
  {
    id: uniqueId(),
    title: 'Vieil et report',
    icon: IconEye,
    href: '',
  }, 
  {
    id: uniqueId(),
    title: 'Formation',
    icon: IconTypography,
    href: '/formation',
  },
  {
    id: uniqueId(),
    title: 'Centre',
    icon: IconHome,
    href: '/centre',
  },
  {
    id: uniqueId(),
    title: 'Mes modèles',
    icon: IconAperture,
    href: '',
  },
  {
    id: uniqueId(),
    title: 'Provenance',
    icon: IconCopy,
    href: '',
  },
  {
    navlabel: true,
    subheader: 'Auth',
  },
  {
    id: uniqueId(),
    title: 'Login',
    icon: IconLogin,
    href: '/auth/login',
  },
  {
    id: uniqueId(),
    title: 'Register',
    icon: IconUserPlus,
    href: '/auth/register',
  }
];

export default Menuitems;

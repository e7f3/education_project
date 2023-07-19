import AboutUsPageIcon from 'shared/assets/icons/about-us.svg'
import ArticlesPageIcon from 'shared/assets/icons/articles.svg'
import MainPageIcon from 'shared/assets/icons/home.svg'
import ProfilePageIcon from 'shared/assets/icons/profile.svg'
import { Path } from 'shared/config/routeConfig/routeConfig'

export interface SidebarItemType {
  path: Path
  text: string
  icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemType[] = [
  { path: '/', text: 'Main Page', icon: MainPageIcon },
  { path: '/about', text: 'About Page', icon: AboutUsPageIcon },
  {
    path: '/articles',
    text: 'Articles Page',
    icon: ArticlesPageIcon,
    authOnly: true,
  },
  {
    path: '/profile',
    text: 'Profile Page',
    icon: ProfilePageIcon,
    authOnly: true,
  },
]

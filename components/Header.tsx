import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md dark:bg-gray-950/80 border-b border-gray-200/50 dark:border-gray-800/50 transition-all duration-300">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0 py-4">
        <div>
          <Link href="/" aria-label={siteMetadata.headerTitle}>
            <div className="flex items-center justify-between">
              {/* تایپوگرافی مینیمال به جای لوگوهای شلوغ */}
              <div className="text-2xl font-black tracking-tighter text-gray-900 dark:text-gray-100 transition-colors hover:text-primary-500 dark:hover:text-primary-400">
                {siteMetadata.headerTitle}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6 gap-2">
          <div className="no-scrollbar hidden max-w-sm items-center space-x-6 overflow-x-auto sm:flex ml-6">
            {headerNavLinks
              .filter((link) => link.href !== '/')
              .map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="block text-sm font-medium text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                >
                  {link.title}
                </Link>
              ))}
          </div>
          {/* آیکون‌های مینیمال جستجو و تغییر تم */}
          <div className="flex items-center gap-2">
            <SearchButton />
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

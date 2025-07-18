import { siteConfig } from '@/lib/config'
import Link from 'next/link'
/**
 * Logo
 * 实际值支持文字
 * @param {*} props
 * @returns
 */
const Logo = props => {
  const { siteInfo } = props
  return (
<Link href='/' passHref legacyBehavior>
  <div className='flex flex-col justify-center items-center cursor-pointer space-y-3'>
    <div className='p-1.5 rounded transform duration-200 hover:scale-105'>
      <Image
        src='/images/futuremedia_logo_120x40.png'
        alt='未来传媒 - Future Media'
        width={120}
        height={40}
        className='dark:invert'
        priority
      />
    </div>
  </div>
</Link>

  )
}
export default Logo

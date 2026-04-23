import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableOfContents from './TableOfContents'
import SummaryBox from './SummaryBox'

export const components: MDXComponents = {
  Image,
  TOCInline,
  a: CustomLink,
  pre: Pre,
  TableOfContents,
  BlogNewsletterForm,
  SummaryBox, // ثبت باکس خلاصه اختصاصی شما
}

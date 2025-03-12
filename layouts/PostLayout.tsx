import { ReactNode } from 'react'
import type { Blog, Authors } from 'contentlayer/generated'
import Comments from '@/components/Comments'
import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { components } from '@/components/MDXComponents'

// Local coreContent replacement
const coreContent = (content: Blog | Authors) => {
  const { body, _raw, _id, ...rest } = content
  return rest
}

const editUrl = (path: string) => `${siteMetadata.siteRepo}/blob/main/data/${path}`
const discussUrl = (path: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(`${siteMetadata.siteUrl}/${path}`)}`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long', // Fixed typo from 'long.bd'
  day: 'numeric',
}

interface LayoutProps {
  content: ReturnType<typeof coreContent>
  authorDetails: ReturnType<typeof coreContent>[]
  next?: { path: string; title: string }
  prev?: { path: string; title: string }
  mdxSource: MDXRemoteSerializeResult
}

export default function PostLayout({ content, authorDetails, next, prev, mdxSource }: LayoutProps) {
  const { filePath, path, slug, date, title, tags } = content
  const basePath = path.split('/')[0]

  return (
    <SectionContainer>
      <ScrollTopAndComment />
      <article className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
        <header className="pt-6 xl:pb-6">
          <div className="space-y-1 text-center">
            <dl className="space-y-10">
              <div>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium text-gray-500 dark:text-gray-400">
                  <time dateTime={date}>
                    {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                  </time>
                </dd>
              </div>
            </dl>
            <div>
              <PageTitle>{title}</PageTitle>
            </div>
          </div>
        </header>

        <div className="grid pb-8 xl:grid-cols-4 xl:gap-x-6">
          <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
            <dt className="sr-only">Authors</dt>
            <dd>
              <ul className="flex flex-wrap justify-center gap-4 sm:space-x-12 xl:block xl:space-y-8 xl:space-x-0">
                {authorDetails.map((author) => (
                  <li className="flex items-center space-x-2" key={author.name}>
                    {author.avatar && (
                      <Image
                        src={author.avatar}
                        width={38}
                        height={38}
                        alt="avatar"
                        className="h-10 w-10 rounded-full"
                      />
                    )}
                    <dl className="text-sm leading-5 font-medium whitespace-nowrap">
                      <dt className="sr-only">Name</dt>
                      <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                      <dt className="sr-only">Twitter</dt>
                      <dd>
                        {author.twitter && (
                          <Link
                            href={author.twitter}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          >
                            {author.twitter
                              .replace('https://twitter.com/', '@')
                              .replace('https://x.com/', '@')}
                          </Link>
                        )}
                      </dd>
                    </dl>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>

          <div className="divide-y divide-gray-200 xl:col-span-3 dark:divide-gray-700">
            <div className="prose dark:prose-invert max-w-none pt-10 pb-8">
              <MDXRemote {...mdxSource} components={components} />
            </div>

            <div className="pt-6 pb-6 text-sm text-gray-700 dark:text-gray-300">
              <Link href={discussUrl(path)} rel="nofollow">
                Discuss on Twitter
              </Link>
              {` • `}
              <Link href={editUrl(filePath)}>View on GitHub</Link>
            </div>

            {siteMetadata.comments && (
              <div className="pt-6 pb-6 text-center text-gray-700 dark:text-gray-300" id="comment">
                <Comments slug={slug} />
              </div>
            )}
          </div>

          <footer className="xl:col-span-4">
            <div className="divide-y divide-gray-200 text-sm font-medium dark:divide-gray-700">
              {tags && (
                <div className="py-4 xl:py-8">
                  <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                    Tags
                  </h2>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                </div>
              )}

              {(next || prev) && (
                <div className="flex justify-between py-4 xl:py-8">
                  {prev && prev.path && (
                    <div>
                      <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        Previous Article
                      </h2>
                      <Link
                        href={`/${prev.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {prev.title}
                      </Link>
                    </div>
                  )}
                  {next && next.path && (
                    <div className="text-right">
                      <h2 className="text-xs tracking-wide text-gray-500 uppercase dark:text-gray-400">
                        Next Article
                      </h2>
                      <Link
                        href={`/${next.path}`}
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {next.title}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="pt-4 xl:pt-8">
              <Link
                href={`/${basePath}`}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                aria-label="Back to the blog"
              >
                ← Back to the blog
              </Link>
            </div>
          </footer>
        </div>
      </article>
    </SectionContainer>
  )
}

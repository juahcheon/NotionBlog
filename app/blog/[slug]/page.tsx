import { notFound } from 'next/navigation'
import { baseUrl } from '@/app/sitemap'
import posts from '@/content/posts'
import NotionRenderer from '@/components/notion-renderer'
import Comment from '@/components/comment'

export const runtime = 'nodejs';

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }:{ params: Params }) {
  const post = posts.find((post) => post.slug === params.slug);
  if (!post) {
    return
  }
  const {
    title,
    date: publishedTime,
    description,
    image,
  } = post
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({ params }:{ params: Params }) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug)
  if (!post) {
    notFound()
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            datePublished: post.date,
            dateModified: post.date,
            description: post.description,
            image: post.image
              ? `${baseUrl}${post.image}`
              : `/og?title=${encodeURIComponent(post.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'My Portfolio',
            },
          }),
        }}
      />
      <NotionRenderer post={post} />
      <Comment />
    </section>
  )
}
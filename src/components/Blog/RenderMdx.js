"use client"
import React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import { slug } from "github-slugger";
import Link from "next/link";
import { format, parseISO } from "date-fns";

const mdxComponents = {
    Image
}

const RenderMdx = ({blog}) => {
  const MDXContent = useMDXComponent(blog.body.code)

  return (
    <div className='col-span-12  lg:col-span-8 '>
      <div className="mb-6">
        <h1 className="inline-block mt-6 font-semibold capitalize text-dark dark:text-white text-2xl md:text-2xl lg:text-3xl !leading-normal relative w-5/6">
          {blog.title}
        </h1>
        <p className="inline-block py-2 sm:py-3 font-semibold text-dark dark:text-white text-sm">
          Published on {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
        </p>
        <div>
          {blog.tags && blog.tags.length > 0 && (
            blog.tags.map((tag, index) => (
              <Link
                key={index}
                href={`/categories/${slug(tag)}`}
                className="inline-block p-3 bg-gray text-white rounded-full hover:scale-105 transition-all ease duration-200 text-xs m-1"
              >
                {tag}
              </Link>
            ))
          )}
        </div>

        <Image
          src={blog.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={blog.image.blurhashDataUrl}
          alt={blog.title}
          width={blog.image.width}
          height={blog.image.height}
          className="w-full mt-6"
          priority
        />
      </div>

      <div className='font-in prose sm:prose-base md:prose-lg max-w-max
      prose-blockquote:bg-accent/20 
      prose-blockquote:p-2
      prose-blockquote:px-6
      prose-blockquote:border-accent
      prose-blockquote:not-italic
      prose-blockquote:rounded-r-lg

      prose-li:marker:text-accent

      dark:prose-invert
      dark:prose-blockquote:border-accentDark
      dark:prose-blockquote:bg-accentDark/20
      dark:prose-li:marker:text-accentDark

      first-letter:text-3xl
      sm:first-letter:text-5xl
      '> 
        <MDXContent components={mdxComponents}/>
      </div>
    </div>
  )
}

export default RenderMdx
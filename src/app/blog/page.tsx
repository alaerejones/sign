"use client";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blogs";

export default function BlogPage() {
    return (
        <main className="bg-slate-50">
            {/* Hero Section */}
            <div className="relative h-[600px] mb-16">
                <Image
                    src="/images/3.png"
                    alt="Blog hero background"
                    fill
                    className="object-cover brightness-40"
                    priority
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <h1 className="text-6xl font-serif text-white text-center max-w-4xl px-4 leading-tight">
                        Latest Blogs & News
                    </h1>
                </div>
            </div>

            {/* Blog Posts Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <span className="text-emerald-600 text-sm uppercase tracking-wider font-semibold">
                        Blog
                    </span>
                    <h2 className="text-4xl font-serif mt-2 text-gray-900">
                        Take a look at our latest articles & resources
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {blogPosts.map((post) => (
                        <article key={post.id} className="flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                            <Link href={`/blog/${post.id}`} className="group">
                                <div className="relative h-64 mb-4 overflow-hidden rounded-t-xl">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-serif mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-3">
                                            {post.author.image && (
                                                <Image
                                                    src={post.author.image}
                                                    alt={post.author.name}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                            )}
                                            <div>
                                                <span className="block text-gray-900 font-medium">{post.author.name}</span>
                                                <span className="text-gray-500 text-sm">{post.date}</span>
                                            </div>
                                        </div>
                                        <span className="px-4 py-2 border border-emerald-600 text-emerald-600 text-sm rounded-full group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                            Read More
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
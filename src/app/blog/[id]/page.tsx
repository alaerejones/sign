import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import { Card, CardContent } from "../../../components/Card";
import { blogPosts } from "@/app/data/blogs";

// Updated interface for Next.js 15 page props
export interface PageProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const post = blogPosts.find((post) => post.id === resolvedParams.id);

    return {
        title: post?.title || "Blog Post",
        description: post?.excerpt || "Blog post details",
    };
}

async function getBlogPost(id: string) {
    const post = blogPosts.find((post) => post.id === id);
    if (!post) throw new Error("Post not found");
    return post;
}

export default async function BlogPost({ params }: PageProps) {
    const resolvedParams = await params;
    const post = await getBlogPost(resolvedParams.id);

    return (
        <main className="bg-slate-50 min-h-screen pt-20">
            {/* Hero Section */}
            <div className="relative h-96">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover brightness-75"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center">
                    <div className="max-w-4xl mx-auto px-6 w-full">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-white mb-6 hover:text-emerald-400 transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Blog
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-6">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4">
                            {post.author.image && (
                                <Image
                                    src={post.author.image}
                                    alt={post.author.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            )}
                            <div className="text-white">
                                <div className="font-medium">{post.author.name}</div>
                                <div className="text-sm opacity-80">{post.date}</div>
                            </div>
                            <span className="ml-auto bg-emerald-500 text-white px-4 py-2 rounded-full text-sm">
                                {post.category}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-6 py-16">
                <Card>
                    <CardContent>
                        <div className="prose prose-lg max-w-none">
                            {/* Excerpt */}
                            <p className="text-gray-600 text-lg mb-8">{post.excerpt}</p>

                            {/* Main Content */}
                            <div
                                dangerouslySetInnerHTML={{ __html: post.content }}
                                className="text-gray-600"
                            />

                            {/* Quote Section */}
                            <blockquote className="bg-gray-900 text-white p-8 rounded-lg my-12 text-center">
                                <p className="text-xl italic mb-0">
                                    &quot;The job market of the future will consist of those jobs
                                    that robots cannot perform. Our blue-collar work is pattern
                                    recognition, making sense of what you see. Gardeners will
                                    still have jobs because every garden is different.&quot;
                                </p>
                            </blockquote>

                            {/* Author Card */}
                            <div className="bg-gray-900 text-white p-6 rounded-lg mt-12 flex items-center gap-6">
                                {post.author.image && (
                                    <Image
                                        src={post.author.image}
                                        alt={post.author.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full"
                                    />
                                )}
                                <div>
                                    <h4 className="text-xl font-medium mb-2">
                                        {post.author.name}
                                    </h4>
                                    <p className="text-gray-400">Journalist</p>
                                    <p className="text-sm text-gray-400 mt-2">
                                        Leads the global expansion of the designerz brand and
                                        overseas investment in solutions and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
}
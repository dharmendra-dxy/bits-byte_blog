'use client'

import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
import 'react-quill-new/dist/quill.snow.css';
import { Articles } from '@prisma/client'
import { editArticle } from '@/actions/editArticle'
import Link from 'next/link'
import Image from 'next/image'

const ReactQuill = dynamic(()=> import('react-quill-new'), {ssr: false});

type EditArticleProps = {
    article: Articles;
}

const EditArticlePage:React.FC<EditArticleProps> = ({article}) => {

    const [content, setContent] = useState(article.content);

    // server side calling:
    const [formState, action, isPending] = 
    useActionState(editArticle.bind(null, article.id), {errors: {}});

    const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.append("content", content);

        startTransition(()=>{
            action(formData);
        })
    }

  return (
    <div className='max-w-4xl mx-auto p-6'>
        <Card>
            <CardHeader>
                <CardTitle>Edit Article</CardTitle>
            </CardHeader>
            <CardContent>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='space-y-2'>
                        <Input
                         type='text'
                         name='title'
                         defaultValue={article.title}   
                         placeholder='Enter the article title'
                        />
                        {
                            formState.errors.title && 
                            <span className='text-red-600 text-sm'>
                                {formState.errors.title}
                            </span>
                        }
                    </div>
                    <div className='space-y-2'>
                        <Label>Category</Label>
                        <select 
                        className='flex h-10 w-full rounded-md border py-2' 
                        name='category'
                        id='category'
                        defaultValue={article.category}
                        >
                            <option value=''>Select category</option>
                            <option value='programming'>Programming</option>
                            <option value='technology'>Technology</option>
                            <option value='cooking'>Cooking</option>
                            <option value='automobiles'>Automobiles</option>
                            <option value='entertainment'>Entertainment</option>
                            <option value='indianpolitics'>Indian Politics</option>
                            <option value='socialmedia'>Social Media</option>
                            <option value='education'>Education</option>
                            <option value='others'>Others</option>
                        </select>
                        {
                            formState.errors.category && 
                            <span className='text-red-600 text-sm'>
                                {formState.errors.category}
                            </span>
                        }
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='featuredImage'>Featured Images</Label>
                        <Input
                        type='file'
                        id='featuredImage'
                        name='featuredImage'
                        accept='image/*'
                        />
                        {
                            formState.errors.featuredImage && 
                            <span className='text-red-600 text-sm mt'>
                                {formState.errors.featuredImage}
                            </span>
                        }
                        <div className=''>
                            {
                                article.featuredImage && <Image 
                                src={article.featuredImage}
                                alt='featuredImage'
                                height={300}
                                width={300}
                                className='rounded-md shadow-lg shadow-slate-400'
                            />
                            } 
                        </div>
                        
                        
                    </div>
                    <div className='space-y-2'>
                        <Label>Content</Label>
                        <ReactQuill theme='snow' value={content} onChange={setContent}/>
                        {
                            formState.errors.content && 
                            <span className='text-red-600 text-sm'>
                                {formState.errors.content}
                            </span>
                        }
                        {
                            formState.errors.formErrors && 
                            <span className='text-red-600 text-sm'>
                                {formState.errors.formErrors}
                            </span>
                        }
                    </div>
                    
                    <div className='flex justify-end gap-4'>
                        <Link href='/dashboard'>
                            <Button variant='outline'>Cancel</Button>
                        </Link>
                        <Button type='submit' disabled={isPending}>
                            {
                                isPending ? "Editing..." : "Edit Article"
                            }
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default EditArticlePage
'use client'

import React, { FormEvent, startTransition, useActionState, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import dynamic from 'next/dynamic'
import { Button } from '../ui/button'
import 'react-quill-new/dist/quill.snow.css';
import { createArticle } from '@/actions/createArticle'
import Link from 'next/link'

const ReactQuill = dynamic(()=> import('react-quill-new'), {ssr: false});

const CreateArticlesPage = () => {

    const [content, setContent] = useState("");

    // server side calling:
    const [formState, action, isPending] = useActionState(createArticle, {errors: {}});

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
                <CardTitle>Create New Articles</CardTitle>
            </CardHeader>
            <CardContent>
                <form className='space-y-6' onSubmit={handleSubmit}>
                    <div className='space-y-2'>
                        <Input
                         type='text'
                         name='title'   
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
                        >
                            <option value=''>Select category</option>
                            <option value='Programming'>Programming</option>
                            <option value='Technology'>Technology</option>
                            <option value='Cooking'>Cooking</option>
                            <option value='Automobiles'>Automobiles</option>
                            <option value='Entertainment'>Entertainment</option>
                            <option value='Indianpolitics'>Indian Politics</option>
                            <option value='Socialmedia'>Social Media</option>
                            <option value='History'>History</option>
                            <option value='Friction'>Friction</option>
                            <option value='Education'>Education</option>
                            <option value='Others'>Others</option>
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
                                isPending ? "Publishing..." : "Publish"
                            }
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default CreateArticlesPage
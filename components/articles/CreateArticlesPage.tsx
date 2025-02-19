import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'

const CreateArticlesPage = () => {
  return (
    <div className='max-w-4xl mx-auto p-6'>
        <Card>
            <CardHeader>
                <CardTitle>Create New Articles</CardTitle>
            </CardHeader>
            <CardContent>
                <form className='space-y-6'>
                    <div className='space-y-2'>
                        <Input
                         type='text'
                         name='category'   
                         placeholder='Enter the article title'
                        />
                    </div>
                    <div className='space-y-2'>
                        <Label>Category</Label>
                        <select className='flex h-10 w-full rounded-md border py-2'>
                            <option value=''>Programming</option>
                            <option value=''>Technology</option>
                            <option value=''>Cooking</option>
                            <option value=''>Automobiles</option>
                            <option value=''>Entertainment</option>
                            <option value=''>Indian Politics</option>
                            <option value=''>Social Media</option>
                            <option value=''>Education</option>
                            <option value=''>Others</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <Label htmlFor='featuredImage'>Featured Images</Label>
                        <Input
                        type='file'
                        id='featuredImage'
                        name='featuredImage'
                        accept='image/*'
                        />
                    </div>

                </form>
            </CardContent>
        </Card>
    </div>
  )
}

export default CreateArticlesPage
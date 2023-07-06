import FeaturedCourses from '@/app/Components/FeaturedCourses'
"use client";

import React, { useEffect } from "react";
import Categories from "@/app/Components/Categories";

export default function Home() {
    return (
        <>
            <div className='basis-full mt-2 px-6 sm:px-12 bg-neutral-100'>
                <FeaturedCourses />
                <Categories />
            </div>
        </>
    )
}

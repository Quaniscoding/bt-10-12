import React, { useEffect, useState } from 'react'
import './bai12.css'
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import CourseList from './CourseList';
export default function Bai12() {
    const [courses, setCourses] = useState(() => {
        const savedCourses = JSON.parse(localStorage.getItem('courses'));
        return savedCourses || [
            { id: 1, name: 'React Basics', progress: 0 },
            { id: 2, name: 'JavaScript Fundamentals', progress: 0 },
            { id: 3, name: 'HTML & CSS', progress: 0 },
        ];
    });

    const [userProgress, setUserProgress] = useState(() => {
        const savedProgress = JSON.parse(localStorage.getItem('userProgress'));
        return savedProgress || {};
    });

    useEffect(() => {
        localStorage.setItem('courses', JSON.stringify(courses));
        localStorage.setItem('userProgress', JSON.stringify(userProgress));
    }, [courses, userProgress]);

    const updateProgress = (courseId, progress) => {
        setCourses((prevCourses) =>
            prevCourses.map((course) =>
                course.id === courseId ? { ...course, progress } : course
            )
        );
        setUserProgress((prevProgress) => ({
            ...prevProgress,
            [courseId]: progress,
        }));
    };

    return (
        <div className='bai12'>
            <Navbar />
            <Dashboard userProgress={userProgress} />
            <CourseList courses={courses} updateProgress={updateProgress} />
        </div>
    )
}

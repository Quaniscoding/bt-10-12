import React from 'react';
import Course from './Course';

const CourseList = ({ courses, updateProgress }) => {
    return (
        <div>
            <h2>Danh Sách Khóa Học</h2>
            {courses.map((course) => (
                <Course
                    key={course.id}
                    course={course}
                    updateProgress={updateProgress}
                />
            ))}
        </div>
    );
};

export default CourseList;

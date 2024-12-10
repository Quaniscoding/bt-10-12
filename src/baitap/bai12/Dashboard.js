import React from 'react';

const Dashboard = ({ userProgress }) => {
    return (
        <div>
            <h2>Trang Tổng Quan</h2>
            <h3>Tiến độ học</h3>
            <ul>
                {Object.keys(userProgress).map((courseId) => (
                    <li key={courseId}>
                        Khóa học {courseId}: {userProgress[courseId]}%
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dashboard;

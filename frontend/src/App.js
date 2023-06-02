import React, { useState } from 'react';

function App() {
    const [studentName, setStudentName] = useState('');
    const [course, setCourse] = useState('');
    const [assignment, setAssignment] = useState('');
    const [grade, setGrade] = useState('');
    const [evaluation, setEvaluation] = useState('');
    const [progress, setProgress] = useState([]);

    const handleCourseSubmit = (event) => {
        event.preventDefault();
        // Perform course submission logic here
        console.log('Course submitted!', studentName, course);
        // Reset the form
        setCourse('');
    };

    const handleAssignmentSubmit = (event) => {
        event.preventDefault();
        // Perform assignment submission logic here
        console.log('Assignment submitted!', studentName, assignment);
        // Reset the form
        setAssignment('');
    };

    const handleGradeSubmit = (event) => {
        event.preventDefault();
        // Perform grade submission logic here
        console.log('Grade submitted!', studentName, grade);
        // Reset the form
        setGrade('');
    };

    const handleEvaluationSubmit = (event) => {
        event.preventDefault();
        // Perform evaluation submission logic here
        console.log('Evaluation submitted!', studentName, evaluation);
        // Reset the form
        setEvaluation('');
    };

    const handleProgressSubmit = (event) => {
        event.preventDefault();
        // Perform progress submission logic here
        const newProgress = { date: new Date().toLocaleDateString(), progress: progress };
        setProgress([...progress, newProgress]);
        console.log('Progress submitted!', studentName, progress);
        // Reset the form
        setProgress('');
    };

    return (
        <div className="container">
            <h1>Student Assessment Tracker</h1>
            <form onSubmit={handleCourseSubmit}>
                <h2>Student Information</h2>
                <label htmlFor="studentName">Student Name:</label>
                <input
                    type="text"
                    id="studentName"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>

            <form onSubmit={handleCourseSubmit}>
                <h2>Student Course Tracker</h2>
                <label htmlFor="course">Course:</label>
                <input
                    type="text"
                    id="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>

            <form onSubmit={handleAssignmentSubmit}>
                <h2>Assignment Tracker</h2>
                <label htmlFor="assignment">Assignment:</label>
                <input
                    type="text"
                    id="assignment"
                    value={assignment}
                    onChange={(e) => setAssignment(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>

            <form onSubmit={handleGradeSubmit}>
                <h2>Exam Grade</h2>
                <label htmlFor="grade">Grade:</label>
                <input
                    type="text"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>

            <form onSubmit={handleEvaluationSubmit}>
                <h2>Student Performance Evaluation</h2>
                <label htmlFor="evaluation">Evaluation:</label>
                <textarea
                    id="evaluation"
                    value={evaluation}
                    onChange={(e) => setEvaluation(e.target.value)}
                ></textarea>
                <button type="submit">Save</button>
            </form>

            <form onSubmit={handleProgressSubmit}>
                <h2>Student Progress Tracker</h2>
                <label htmlFor="progress">Progress:</label>
                <input
                    type="text"
                    id="progress"
                    value={progress}
                    onChange={(e) => setProgress(e.target.value)}
                />
                <button type="submit">Save</button>
            </form>

            <h2>Student Progress Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Progress</th>
                    </tr>
                </thead>
                <tbody>
                    {progress.map((item, index) => (
                        <tr key={index}>
                            <td>{item.date}</td>
                            <td>{item.progress}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default App;

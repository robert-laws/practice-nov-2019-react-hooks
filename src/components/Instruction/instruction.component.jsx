import React, { useState, useEffect } from 'react';

// import instructors from '../../data/instructors';
import courses from '../../data/courses';

const Instruction = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [myCourse, setMyCourse] = useState({
    courseInstructor: '',
    courseName: '',
    courseLevel: ''
  })

  useEffect(() => {
    console.log('running this one time...')
  }, [])

  useEffect(() => {
    const thisCourse = courses.find(thisCourse => thisCourse.name === myCourse.courseName)

    if(thisCourse) {
      setMyCourse(myCourse => ({ ...myCourse, courseInstructor: thisCourse.instructor, courseName: thisCourse.name, courseLevel: thisCourse.level }))
      // setMyCourse({
      //   courseInstructor: thisCourse.instructor,
      //   courseName: thisCourse.name,
      //   courseLevel: thisCourse.level
      // })
    } else {
      setMyCourse(myCourse => ({ ...myCourse, courseInstructor: '', courseName: '', courseLevel: '' }))
      // setMyCourse({
      //   courseInstructor: '',
      //   courseName: '',
      //   courseLevel: ''
      // })
    }
  }, [myCourse.courseName])

  useEffect(() => {
    if(myCourse.courseLevel === 'intermediate') {
      document.getElementById('class-details').classList.add('intermediate-class');
    } else {
      document.getElementById('class-details').classList.remove('intermediate-class')
    }
  }, [myCourse.courseLevel])

  return (
    <div>
      <h2>Instruction</h2>
      <p>The Selected Course is: {myCourse.courseName === '' ? 'none chosen' : myCourse.courseName}</p>
      <hr />
      <select name='courseName' id='courseName' value={myCourse.courseName} onChange={e => setMyCourse({...myCourse, [`${e.target.name}`]: e.target.value})}>
        <option value=''>Select a Course</option>
        {
          courses.map(course => (
            <option key={course.id} value={course.name}>{course.name}</option>
          ))
        }
      </select>
      <h4>My Class Details</h4>
      <div id='class-details'>
        <p>{myCourse.courseInstructor}</p>
        <p>{myCourse.courseName}</p>
        <p>{myCourse.courseLevel}</p>
      </div>
    </div>
  )
}

export default Instruction;
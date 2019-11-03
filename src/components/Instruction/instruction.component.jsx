import React, { useState, useEffect } from 'react';

import instructors from '../../data/instructors';
import classes from '../../data/classes';

const Instruction = () => {
  const [instructor, setInstructor] = useState('');
  const [myClass, setMyClass] = useState({
    instructor: '',
    name: '',
    level: ''
  })

  useEffect(() => {
    const thisClass = classes.find(thisClass => thisClass.instructor === instructor)
    if(thisClass) {
      setMyClass(myClass => ({ ...myClass, instructor: thisClass.instructor, name: thisClass.name, level: thisClass.level }))
    }
  }, [instructor])

  return (
    <div>
      <h2>Instruction</h2>
      <p>Today's Instructor is: {instructor === '' ? 'none assigned' : instructor}</p>
      <hr />
      <select name='instructor' id='instructor' value={instructor} onChange={e => setInstructor(e.target.value)}>
        <option value=''>Select an Instructor</option>
        {
          instructors.map(instructor => (
            <option key={instructor.id} value={instructor.name}>{instructor.name}</option>
          ))
        }
      </select>
      <h4>My Class Details</h4>
      <p>{myClass.instructor}</p>
      <p>{myClass.name}</p>
      <p>{myClass.level}</p>
    </div>
  )
}

export default Instruction;
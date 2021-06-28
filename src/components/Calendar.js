import React, {useState} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarFrizer = props => {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                onClickDay={() => console.log(value)}
            />
        </div>
    );
}

export default CalendarFrizer;
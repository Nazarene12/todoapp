import React,{useState } from 'react';

 
const item = ({item , index , editContent , deleteContent}) => {
    const [editing, setEditing] = useState(false);

    const [currentValue, setCurrentValue] = useState(item);


    const handleEdit = () => {
        setEditing(true);
        setCurrentValue(item);
    };

    const handleChange = (event) => {
        setCurrentValue(event.target.value);
    };

    const handleSave = () => {
        setEditing(false);
        editContent(index, currentValue);
    };
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSave();
        }
    };
    return (
        <div key={index} className='d-flex p-3 align-items-center' style={{gap : '10px',boxShadow : 'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px'}}>
        {/* {console.log('render')} */}

            {editing ? (
                <input type="text" className='form-control' value={currentValue} onChange={handleChange} onBlur={handleSave} onKeyPress={handleKeyPress} autoFocus />
            ) : (
                <p className='m-0 flex-grow-1'>{item}</p>
            )}
            <div className='p-2 border rounded' onClick={handleEdit}>
                <i className="fa-solid fa-pen-to-square"></i>
            </div> 
            <div className='p-2 border rounded' onClick={() => deleteContent(item)}>
                <i className="fa-solid fa-trash"></i>
            </div>
        </div>
    )
};

export default item
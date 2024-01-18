import React,{useState } from 'react';
import Item  from './item';

function main(props) {

    const [content , setContent] = useState(['initial'])

    const [inputValue, setInputValue] = useState('');


    const addContent = ()=>{

        setContent(previousContent => [...previousContent, inputValue]);
        setInputValue('')
    }

    const handleInputChange = (event)=>{
        setInputValue(event.target.value)
    }

    const deleteContent = (itemToDelete) => {
        setContent(previousContent => previousContent.filter(item => item !== itemToDelete));
    };

    const editContent = (index, newItem) => {
    setContent(previousContent => {
        const newArray = [...previousContent];
        newArray[index] = newItem;
        return newArray;
    });
    };
      
     
    
    return (
        <div className='container-fluid '>
            <div className="row justify-content-center">
                <div className="col-lg-8 bg-primary p-4" >
                    <div className="row">
                        <div className='col-8'>
                            <input type="text" value={inputValue} onChange={handleInputChange}  name="content" id="content" className='form-control'/>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <button className='btn btn-outline-dark' onClick={addContent}>ADD</button>
                        </div>
                    </div>
                </div>

                <div className="col-lg-8">
                    {content && <div className='p-2 mt-5'>
                        {content.map((item , index) => {
                            return(
                                <Item item = {item} index={index} key={index} editContent = {editContent} deleteContent = {deleteContent}/>

                            )
                        })}
                    </div>}
                </div>
            </div>

        </div>
    );
}

export default main;
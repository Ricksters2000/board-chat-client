import React, {useState} from 'react';
import { FormGroup, InputGroup, InputGroupAddon, Input, Label, Fade, Button } from 'reactstrap';
import './ToggleInput.css';

const ToggleInput = ({canEdit=true, inputName, placeholder, labelOn=false}) => {
    const [isEdit, setIsEdit] = useState(false);
    const [fadeIn, setIsFadeIn] = useState(false);

    const toggleEdit = () => setIsEdit(prev => !prev);

    const toggleFadeIn = () => setIsFadeIn(prev => !prev);

    const fadeContainerProps = canEdit ? {onDoubleClick: toggleEdit, onMouseEnter: toggleFadeIn, onMouseLeave: toggleFadeIn} : {};
    
    return(
        <FormGroup>
            {labelOn && <Label for={inputName} >{inputName}</Label>}
            {isEdit ? 
                <>
                    <InputGroup>
                        <Input type='text' name={inputName} id={inputName} placeholder={placeholder} />
                        <InputGroupAddon addonType='append'>
                            <Button onClick={toggleEdit}>X</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </>
            :
                <div {...fadeContainerProps}  className='input-off'>
                    <p>{placeholder}</p>
                    {canEdit && 
                        <Fade in={fadeIn}>
                            <img onClick={toggleEdit} className='edit-btn' src='https://img.icons8.com/windows/32/000000/edit--v4.png' />
                        </Fade>
                    }
                </div>
            }
        </FormGroup> 
    )
}

export default ToggleInput;
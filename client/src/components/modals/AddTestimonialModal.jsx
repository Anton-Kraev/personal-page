import React, {useState} from 'react';
import {
  Dialog,
  DialogContent,
} from "@mui/material";

const AddTestimonialModal = ({open, setOpen, addTestimonial}) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [nameError, setNameError] = useState('');
  const [textError, setTextError] = useState('');

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    setNameError('');
    setTextError('');

    if (!name) {
      setNameError('Name should not be empty');
    }
    if (name.length > 30) {
      setNameError('Maximum allowed length of name is 30 characters');
    }
    if (!text) {
      setTextError('Text should not be empty');
    }
    if (text.length > 255) {
      setTextError('Maximum allowed length of text is 255 characters');
    }

    if (!name || !text || name.length > 40 || text.length > 255) {
      return;
    }

    addTestimonial(name, text, new Date(Date.now()));
    setText('');
    setName('');
    setOpen(false);
  };

  return (
    <Dialog fullWidth={true} open={open} onClose={handleClose}>
      <DialogContent>
        <input onChange={event => setName(event.target.value)} type='text'
               className='text-white caret-secondary bg-primary w-full rounded-xl px-3 py-1 focus:outline-none border-2 border-white focus:border-secondary'
               placeholder='Name'/>
        <p className='text-red'>
          {nameError}
        </p>
        <textarea
          onChange={event => setText(event.target.value)}
          className='resize-y text-white caret-secondary bg-primary w-full rounded-xl px-3 mt-3 py-1 focus:outline-none border-2 border-white focus:border-secondary'
          placeholder='Text'/>
        <p className='text-red'>
          {textError}
        </p>
        <div className='w-full flex justify-center'>
          <button
            onClick={handleClick}
            className='mt-3 py-1 px-3 text-white bg-primary rounded-full ring-2 ring-white hover:scale-[1.1] hover:border-4 hover:border-double hover:border-secondary'>
            Send
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
    ;
};

export default AddTestimonialModal;
import React,{useState} from 'react'
import { Button, Form } from 'react-bootstrap'

const NewMeetupForm = () => {
    const [formData, setFormData] = useState({
        title:'',
        address: '',
        description: '',
        url:''
    });


    const handleChange=(e)=>{
        const {name,value} = e.target
        setFormData({...formData,
            [name]:value
        })
    }

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('formData', formData)
        setFormData({
            title:'',
            address: '',
            description: '',
            url:''
        })
    }
    
    const{title, address, description,url}=formData;



  return (
    <div>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3">
      <Form.Label>Meetup Title</Form.Label>
      <Form.Control name="title" value={title} type="text" placeholder="Enter Title" onChange={handleChange} required/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Meetup Image</Form.Label>
      <Form.Control name='url' value={url} type="url" placeholder="Enter Image Url" onChange={handleChange} required />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Meetup Address</Form.Label>
      <Form.Control name='address' value={address} type="text" placeholder="Enter Address" onChange={handleChange} required />
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Meetup Description</Form.Label>
      <Form.Control name='description' value={description}type="text" placeholder="Enter Description" onChange={handleChange} required />
    </Form.Group>

    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default NewMeetupForm
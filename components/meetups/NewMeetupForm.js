import React,{useState} from 'react'
import { useRouter } from 'next/router'
import { Button, Form } from 'react-bootstrap'
import styles from '../../styles/Home.module.css'

const NewMeetupForm = (props) => {
  const router = useRouter()
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

    const submitHandler=async(e)=>{
      e.preventDefault()
      // props.enterFormData(formData)

        const res=await fetch('/api/new-meetup',{method:'POST',body:JSON.stringify(formData),
        headers:{'Content-Type': 'application/json'}
      })

      const data= await res.json()
      if(data.message){
        setFormData({
          title:'',
          address: '',
          description: '',
          url:''
      })
      router.push('/')
      }
    }
    
    const{title, address, description,url}=formData;



  return (
    <div className={styles.form}>
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3">
      <Form.Label>Meetup Title</Form.Label>
      <Form.Control className={styles.forminput} name="title" value={title} type="text" placeholder="Enter Title" onChange={handleChange} required/>
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Meetup Image</Form.Label>
      <Form.Control className={styles.forminput} name='url' value={url} type="url" placeholder="Enter Image Url" onChange={handleChange} required />
    </Form.Group>

    <Form.Group className="mb-3">
      <Form.Label>Meetup Address</Form.Label>
      <Form.Control className={styles.forminput} name='address' value={address} type="text" placeholder="Enter Address" onChange={handleChange} required />
    </Form.Group>
  
    <Form.Group className="mb-3">
      <Form.Label>Meetup Description</Form.Label>
      <Form.Control className={styles.forminput} name='description' value={description}type="text" placeholder="Enter Description" onChange={handleChange} required />
    </Form.Group>

    <Button variant="dark" type="submit">
      Submit
    </Button>
  </Form></div>
  )
}

export default NewMeetupForm
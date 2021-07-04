import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField } from 'formik';
import axios from 'axios';

interface PhotoInputInterface{
  label: string;
  name: string;
}

const PhotoInput: React.FC<PhotoInputInterface> = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [ids, setIds] = useState(['']);

  const onChange = (e:any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(()=>{
      const sendFiles = async ():Promise<void>=> {
        const formData = new FormData();
        formData.append('file', file);
        if(field.value.photos !== ''){
          try {
            const res = await axios.post('/api/fileUpload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            const { id } = res.data;
            setIds( prev => [...prev, id]);
            field.value.photos = ids;
            console.log(field.value);

          } catch (err) {
            console.log(err);
          }
        };
        }
    sendFiles();

  },[file]);

  return (
    <div>
      <div>
        <Form.Group  controlId={field.name} className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control type="file" multiple {...field} {...props}
                        isInvalid={!!(meta.touched && meta.error)}
                        name='photos'
                        onChange={onChange}
          />
          <ErrorMessage name={field.name}>
            {(err) => (
              <Form.Control.Feedback type="invalid">
                {err}
              </Form.Control.Feedback>
            )}
          </ErrorMessage>
        </Form.Group>
      </div>

    </div>
  );

};

export default PhotoInput;

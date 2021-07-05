import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import axios from 'axios';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';

interface PhotoInputInterface{
  label: string;
  name: string;
}
const PhotoInput: React.FC<PhotoInputInterface> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const {values} = useFormikContext<AddNewAdvertModel>();

  const [file, setFile] = useState('');
  const [filename, setFilename] = useState('Choose File');
  const [ids, setIds] = useState('');

  const onChange = (e:any) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  useEffect(()=>{
      const sendFiles = async ():Promise<void>=> {
        const formData = new FormData();
        formData.append('file', file);
        if(file !== ''){
          try {
            const res = await axios.post('/api/fileUpload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            });
            const { id } = res.data;
            setIds(id);
          } catch (err) {
            console.log(err);
          }
        };
        }
        sendFiles();
  },[file]);
  values.photos = [ids]


  return (
    <div>
        <Form.Group  controlId={field.name} className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control type="file"  {...props}

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
  );

};

export default PhotoInput;

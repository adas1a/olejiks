import React, { useEffect, useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import axios from 'axios';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';
import { FileUploadResponseModel } from '../../interfaces/FileUploadResponseModel';

interface PhotoInputInterface{
  label: string;
  name: string;
}
const PhotoInput: React.FC<PhotoInputInterface> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const {values, setFieldValue} = useFormikContext<AddNewAdvertModel>();

  const [ids, setIds] = useState<string[]>([]);

  const onChange = async (e:any) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    if(file !== ''){
      try {
        const res = await axios.post<FileUploadResponseModel>('/api/fileUpload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        const { id } = res.data;
        //obczaić
        const idList = [...ids, id];
        //obczaić
        setIds(idList);
        setFieldValue('photos', idList);
      } catch (err) {
        console.log(err);
      }
    }
  };

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

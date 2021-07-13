import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { ErrorMessage, useField, useFormikContext } from 'formik';
import axios from 'axios';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';
import { FileUploadResponseModel } from '../../interfaces/FileUploadResponseModel';
import PhotoList from '../PhotoList/PhotoList';

interface PhotoInputInterface{
  label: string;
  name: string;
}
interface PhotoListInterface{
  id:string;
  url:string
}
const PhotoInput: React.FC<PhotoInputInterface> = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const {values, setFieldValue} = useFormikContext<AddNewAdvertModel>();

  const [ids, setIds] = useState<string[]>([]);
  const [list, setList] = useState<PhotoListInterface[]>([]);

  const handleChange = async (e:any) => {
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
        const { id, url } = res.data;
        //obczaić
        const idList = [...ids, id];
        const responseList = [...list, res.data];
        //obczaić
        setIds(idList);
        setFieldValue('photos', idList);
        setList(responseList);
      } catch (err) {
        console.error(err);
      }
    }
  };
  const inputRef = useRef(null);
  const handleAddPhoto = () => {
        // @ts-ignore
        inputRef.current.click();
  };
  const handlePhotoDelete = async (id:string) => {
    const newList = list.filter((item) => item.id !== id);
    const newIds = ids.filter((item)=>item !== id);
    setList(newList);
    setIds(newIds);
    setFieldValue('photos', newIds);

    try {
      const d = await axios.delete(`/api/fileUpload/${id}`);
      console.log(d);
    } catch (err) {
      console.error(err);
    }
  };

  // console.log(list);
  // console.log(ids);
  // console.log(values);

  return (
    <div>
        <Form.Group  controlId={field.name} className="mb-3">
          <Form.Label>{label}</Form.Label>
          <Form.Control type="file"  {...props}
                        onChange={handleChange}
                        style={ {display:'none'} }
                        ref={inputRef}
          />
          <ErrorMessage name={field.name}>
            {(err) => (
              <Form.Control.Feedback type="invalid">
                {err}
              </Form.Control.Feedback>
            )}
          </ErrorMessage>
        </Form.Group>
      <Container>
        <Row>
          {list.map((item)=>(
            <PhotoList url={item.url} key={item.id} onClick={()=>handlePhotoDelete(item.id)} />
          ))}
          { list[0] === undefined ? <PhotoList onClick={handleAddPhoto}/> : null}
          { list[1] === undefined ? <PhotoList onClick={handleAddPhoto}/> : null}
          { list[2] === undefined ? <PhotoList onClick={handleAddPhoto}/> : null}
          { list[3] === undefined ? <PhotoList onClick={handleAddPhoto}/> : null}
        </Row>
      </Container>
    </div>
  );
};
export default PhotoInput;

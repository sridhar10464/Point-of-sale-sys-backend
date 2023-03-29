import React, {useEffect} from 'react';
import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = async (value) => {
        try {
            dispatch({
                type: "SHOW_LOADING"
            })
            await axios.post("api/users/register", value);
            message.success("Register Successfully");
            navigate("/login");
            dispatch({ type: "HIDE_LOADING" });
          } catch (error) {
            dispatch({ type: "HIDE_LOADING" });
            message.error("Something went wrong");
            console.log(error);
          }
    }
    // currently login user
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            localStorage.getItem("auth");
            navigate("/");
        }
    }, [navigate]);

  return (
      <>
          <div className='register'>
              <div className='register-form'>
              <h1>POS APP</h1>
              <h3>Register Page</h3>
              <Form layout="vertical" onFinish={ handleSubmit }>
          <Form.Item name="name" label="Name">
            <Input />
          </Form.Item>
          <Form.Item name="userId" label="User ID">
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password">
            <Input type='password'/>
          </Form.Item>
          
          <div className='d-flex justify-content-between'>
                <p>
                    Already Registered Please
                    <Link to="/login"> Login Here!</Link>
                </p>
            <Button type='primary' htmlType='submit'>
              REGISTER
            </Button>
          </div>
        </Form>
        </div>
       </div>
    </>
  )
}

export default Register
import React, {useState, useEffect, useContext} from 'react';

import {Context} from '../services/auth';

export default function Users(){
    const {handleLogout} = useContext(Context);
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        (async ()=>{
            // const {data} = await api.get('/users');
            // setUsers(data);
        })();
    }, []);

    return(
        <>
        <button type="button" onclick={handleLogout}>Logout</button>
        <Descriptions title="User Info" layout="vertical">
    <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
    <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
    <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
    <Descriptions.Item label="Address" span={2}>
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </Descriptions.Item>
    <Descriptions.Item label="Remark">empty</Descriptions.Item>
  </Descriptions>
  </>
    )
}
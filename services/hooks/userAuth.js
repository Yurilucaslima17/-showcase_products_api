import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import api from '../api';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setLoading(false);
  });

  function handleLogin() {
    // const {data: {token}} = await api.post('/authenticate');
    const {
      data: { token },
    } = { data: '123456' };
    localStorage.setItem('token', JSON.stringify(token));
    // api.defaults.headers.Authorization = `Bearer ${token}`;
    setAuthenticated(true);
    router.push('/users');
  }

  function handleLogout() {
    setAuthenticated(false);
    localStorage.removeItem('token');
    // api.defaults.headers.Authorization = undefined;
    router.push('/login');
  }

  return { authenticated, loading, handleLogout, handleLogin };
}

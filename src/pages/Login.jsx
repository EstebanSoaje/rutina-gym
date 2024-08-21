import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // El usuario se creó correctamente
        console.log('Usuario creado:', userCredential.user);
        // Redirigir a otra página o mostrar un mensaje de éxito
      })
      .catch((error) => {
        // Manejar errores
        console.error('Error al crear el usuario:', error);
      });
  };

  return (
    <>
    <form onSubmit={handleSignup}>
      <input type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Registrarse</button>
    </form>
    </>
  );
}

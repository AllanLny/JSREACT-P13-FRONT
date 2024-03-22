import React, { useEffect } from 'react';
import "../Home/Home.css";
import Header from '../Header/Header';
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../actions/userSlice'; 
import Footer from '../Footer/Footer';

export default function UserPage() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);

  const fetchUserData = async () => {
    if (!token) {
      console.error("Token is missing");
      return;
    }
    
    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération des données utilisateur");
      }
  
      const data = await response.json();
      dispatch(
        setUser({
          email: data.body.email,
          firstName: data.body.firstName,
          lastName: data.body.lastName,
        })
      );
      
    } catch (error) {
      console.error("Erreur lors de la récupération des données utilisateur :", error.message);
    }
  };
  useEffect(() => {
    fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header/>

      <Footer/>
    </>
  );
}
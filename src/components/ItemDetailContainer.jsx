import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { db } from '../servicios/firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [prod, setProd] = useState(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    setCargando(true);

    const productRef = doc(db, "productos", id);

    getDoc(productRef)
      .then(snapshot => {
        if (snapshot.exists()) {
          
          setProd({ id: snapshot.id, ...snapshot.data() });
        } else {
          console.log("No such document!");
          setProd(null);
        }
      })
      .catch(err => {
        console.error(err);
        setProd(null);
      })
      .finally(() => setCargando(false));

  }, [id]);

  if (cargando) {
    return <h5>Cargando....</h5>;
  }

  return (
    <>
      {prod ? <ItemDetail prod={prod} /> : <h5>No se encontró el producto</h5>}
    </>
  );
};

export default ItemDetailContainer;

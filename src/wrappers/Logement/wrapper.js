import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import locations from "../../logements.json"

import Logement from '../../pages/Logement/index';

function LogementWrapper(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const logementExist = locations.some(location => location.id === id);

  useEffect(() => {
    if (!logementExist) {
      navigate('/404');
    }
  }, [navigate, logementExist]);

  return logementExist ? <Logement {...props} /> : null;
}

export default LogementWrapper;
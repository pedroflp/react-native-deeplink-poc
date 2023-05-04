import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Text} from 'react-native';

const Profile: React.FC = () => {
  const {params} = useRoute<any>();
  return <Text>{params?.username}</Text>;
};

export default Profile;

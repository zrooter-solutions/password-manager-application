import React, {memo} from 'react';
import {TouchableOpacity, Image} from 'react-native';
import {images} from 'src/appConstant/images';
import styles from './styles';

type Props = {
  goBack: () => void;
};

const BackButton = ({goBack}: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <Image style={styles.image} source={images.arrowBack} />
  </TouchableOpacity>
);

export default memo(BackButton);

import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroImage,
} from 'react-viro';
const HelloWorldSceneAR = (props) => {
  console.log(props.hair);
  const [text, setText] = useState('initializing');
  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      <ViroImage
        source={{uri: props.hair}}
        position={[0, 0, -2]}
        style={styles.imageStyles}
      />
    </ViroARScene>
  );
  function onInitialized(text, reason) {
    if (text == ViroConstants.TRACKING_NORMAL) {
    } else if (text == ViroConstants.TRACKING_NONE) {
      // Handle loss of tracking
    }
  }
};

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',
  },
  imageStyle: {
    height: 3,
    width: 3,
  },
});

const ARScreen = ({route}) => {
  const {hair} = route.params;
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
        passProps: {
          hair: hair.src,
        },
      }}
      style={{flex: 1}}
    />
  );
};
export default ARScreen;

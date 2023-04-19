import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import WebView from 'react-native-webview';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const e = width / 10;

const App = () => {
  const [toggleModal, setToggleModal] = React.useState(false);
  const [url, setURL] = React.useState('');
  const [current, setCurrent] = React.useState('');

  const Toggle = url => {
    setURL(url);
    setToggleModal(true);
  };
  const Ch1 =
    'https://feeds.intoday.in/livetv/?id=livetv-at&amp;aud_togle=1&amp;utm_medium=web&amp;utm_source=live_tv_page&amp;v=1.4';
  // const Ch2 =
  //   'https://www.mxplayer.in/live-tv/abp-news-live-channel-7014abpnewsin';
  const Ch2 =
    'https://cdn.abplive.com/LiveStreams/260118/abplive/streaming.html';
  // const Ch3 = 'https://zeenews.india.com/live-tv/embed#autoplay';
  const Ch3 =
    'https://zeenews.india.com/hindi/news/live-tv.html?videoId=183&title=Zee%20News&extraParam1=Zee%20News&extraParam2=https://zeenews.india.com/hindi/';
    const Ch4 =
    "https://www.youtube.com/embed/qfrocHBy6RQ";
  const Ch5 =
    'https://d26idhjf0y1p2g.cloudfront.net/out/v1/cd66dd25b9774cb29943bab54bbf3e2f/index.m3u8';
  const Ch6 =
    'https://d2vfwvjxwtwq1t.cloudfront.net/out/v1/6b24239d5517495b986e7705490c6e65/index.m3u8';

    const Ch7 =
    "https://www.youtube.com/embed/cNfVYiNlhGs?autoplay=1&controls=0&showinfo=0&autohide=1";
    const Ch8 =
    // "https://www.youtube.com/embed/Xmm3Kr5P1Uw?autoplay=1&mute=1&enablejsapi=1";
    "https://www.youtube.com/embed/Xmm3Kr5P1Uw?autoplay=1&controls=0&showinfo=0&autohide=0&rel=0";

  const leftButton = () => {
    if (url == Ch1) {
      setURL(Ch8);
    } else if (url == Ch2) {
      setURL(Ch1);
    } else if(url==Ch3) {
      setURL(Ch2);
    }else if(url==Ch4){
      setURL(Ch3)
    }else if(url==Ch5){
      setURL(Ch4)
    }else if(url==Ch6){
      setURL(Ch5)
    }else if(url==Ch7){
      setURL(Ch6)
    }else{
      setURL(Ch7)
    }
  };

  const rightButton = () => {
    if (url == Ch1) {
      setURL(Ch2);
    } else if (url == Ch2) {
      setURL(Ch3);
    } else if(url==Ch3) {
      setURL(Ch4);
    }else if(url==Ch4) {
      setURL(Ch5);
    }else if(url==Ch5) {
      setURL(Ch6);
    }else if(url==Ch6) {
      setURL(Ch7);
    }else if(url==Ch7){
      setURL(Ch8)
    }else{
      setURL(Ch1)
    }
  };
  const script = `var promise = document.querySelector('video').play();

if (promise !== undefined) {
  promise.then(_ => {
    // Autoplay started!
  }).catch(error => {
    // Autoplay was prevented.
    // Show a "Play" button so that user can start playback.
  });
}`;

  return (
    <SafeAreaView style={styles.Maincontainer}>
      <StatusBar hidden={true} />
      <Modal
        transparent={true}
        visible={toggleModal}
        onRequestClose={() => {
          setURL('');
          setCurrent('');
          setToggleModal(false);
        }}>
        <WebView
          style={{width: width, height: height}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          mediaPlaybackRequiresUserAction={false}
          mediaCapturePermissionGrantType="grantIfSameHostElsePrompt"
          source={{uri: url}}
          injectedJavaScript={script}
        />
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'rgba(10,10,10,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={leftButton}>
          <Text style={{color: 'rgba(10,10,10,0.3)', fontSize: 60}}>{'<'}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            height: 100,
            width: 100,
            borderRadius: 50,
            backgroundColor: 'rgba(10,10,10,0.2)',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={rightButton}>
          <Text style={{color: 'rgba(10,10,10,0.3)', fontSize: 60}}>{'>'}</Text>
        </TouchableOpacity>
      </Modal>

      <View style={styles.tilesContainer}>
        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch1);
          }}>
          <Image
            source={require('./Aaj_tak_logo.png')}
            style={{height: '60%', width: '90%', resizeMode: 'stretch'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch2);
          }}>
          <Image
            source={require('./abpnews.png')}
            style={{height: '100%', width: '100%', resizeMode: 'cover'}}
          />
        </TouchableOpacity>

        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch3);
          }}>
          <Image
            source={require('./znews.png')}
            style={{height: '80%', width: '90%', resizeMode: 'stretch'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch4);
          }}>
          <Image
            source={require('./rbharat.png')}
            style={{height: '100%', width: '100%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
       
      </View>


      <View style={styles.tilesContainer}>
      <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch5);
          }}>
          <Image
            source={require('./sanskar.png')}
            style={{height: '80%', width: '90%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch6);
          }}>
          <Image
            source={require('./satsang.png')}
            style={{height: '60%', width: '90%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>

       

        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch7);
          }}>
          <Image
            source={require('./astha.png')}
            style={{height: '80%', width: '90%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
         activeOpacity={0.9}
          style={styles.tile}
          onPress={() => {
            Toggle(Ch8);
          }}>
          <Image
            source={require('./indiatv.png')}
            style={{height: '80%', width: '90%', resizeMode: 'contain'}}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  Maincontainer: {
    height: height,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  tilesContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginBottom:e/2,
  },
  tile: {
    height: e * 1.5,
    width: e * 1.5,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});

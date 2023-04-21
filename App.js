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
  ScrollView,
} from 'react-native';
import WebView from 'react-native-webview';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const e = width / 10;

const App = () => {
  const [toggleModal, setToggleModal] = React.useState(false);
  const [url, setURL] = React.useState('');
  const [current, setCurrent] = React.useState('');
  const [pre, setPrev] = React.useState('');
  const [next, setNext] = React.useState('');

  const Toggle = (url,playing,pre,nex) => {
    setURL(url);
    setCurrent(playing);
    setPrev(pre);
    setNext(nex);
    setToggleModal(true);
  };

const data = [
  {
    id:1,
    name:'Aaj Tak',
    url:'https://feeds.intoday.in/livetv/?id=livetv-at&amp;aud_togle=1&amp;utm_medium=web&amp;utm_source=live_tv_page&amp;v=1.4',
    image:require('./Aaj_tak_logo.png')
  },
  {
    id:2,
    name:'ABP News',
    url:'https://cdn.abplive.com/LiveStreams/260118/abplive/streaming.html',
    image:require('./abpnews.png')
  },
  {
    id:3,
    name:'Z News',
    // url:'https://zeenews.india.com/hindi/news/live-tv.html?videoId=183&title=Zee%20News&extraParam1=Zee%20News&extraParam2=https://zeenews.india.com/hindi/',
    url:'https://zeenews.india.com/hindi/news/live-tv.html?videoId=183&autoplay=1',
    image:require('./znews.png')
  },
  {
    id:4,
    name:'R Bharat',
    url:'https://www.youtube.com/embed/qfrocHBy6RQ',
    image:require('./rbharat.png')
  },
  {
    id:5,
    name:'India TV',
    url:'https://www.youtube.com/embed/Xmm3Kr5P1Uw?autoplay=1&controls=0&showinfo=0&autohide=0&rel=0',
    image:require('./indiatv.png')
  },
  {
    id:6,
    name:'Sanskar',
    url:'https://d26idhjf0y1p2g.cloudfront.net/out/v1/cd66dd25b9774cb29943bab54bbf3e2f/index.m3u8',
    image:require('./sanskar.png')
  },
  {
    id:7,
    name:'Satsang',
    url:'https://d2vfwvjxwtwq1t.cloudfront.net/out/v1/6b24239d5517495b986e7705490c6e65/index.m3u8',
    image:require('./satsang.png')
  },
  // {
  //   id:8,
  //   name:'Astha',
  //   url:'https://www.youtube.com/embed/cNfVYiNlhGs?autoplay=1&controls=0&showinfo=0&autohide=1',
  //   image:require('./astha.png')
  // },
]


  const leftButton = () => {
    if(pre==-1){
      const newIndex = data.length-1;
      setURL(data[newIndex].url);
      setNext(pre);
       setCurrent(newIndex);
       setPrev(newIndex-1);
    }else{
      setURL(data[pre].url);
      setNext(current);
      setCurrent(pre);
      setPrev(pre-1);
    }
  };

  const rightButton = () => {
    const i = data.length;
    if(next==i){
      setURL(data[0].url);
      setNext(1);
       setCurrent(0);
       setPrev(i-1);
    }else{
      setURL(data[next].url);
      setCurrent(next);
      setPrev(current);
      setNext(next+1);
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
          }
         
          document.getElementsByClassName('ytp-large-play-button ytp-button ytp-large-play-button-red-bg')[0].click();

          `;


  return (
    <SafeAreaView style={styles.Maincontainer}>
      <StatusBar hidden={true} />
      <Modal
        transparent={true}
        visible={toggleModal}
        onRequestClose={() => {
          setURL('');
          setCurrent('');
          setPrev('');
          setNext('');
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
        <ScrollView horizontal={true} style={{width:'100%'}} >
        {data.map((item,index)=>{
          return(
            <TouchableOpacity
            key={index}
            activeOpacity={0.9}
            style={styles.tile}
            onPress={() => {
              Toggle(item.url,index,index-1,index+1);
            }}>
              <Image
                source={item.image}
                style={{height: '60%', width: '90%', resizeMode: 'stretch'}}
                />
                <Text style={{color:'#212121',fontWeight:'bold',fontSize:18}}>
                  {item.name}
                </Text>
            </TouchableOpacity>
            )
          })}
        </ScrollView>
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
    height: e * 2,
    width: e * 2,
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal:10
  },
});

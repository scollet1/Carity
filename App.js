// Exported from snack.expo.io
import React, { Component, PropTypes } from 'react';
import {
  TouchableHighlight,
  Animated,
  AppRegistry,
  ScrollView,
  Button,
  Text,
  View,
  Image,
  StyleSheet,
  Alert,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import {
  Constants,
  Facebook,
  Google,
  MapView,
  Location,
  Permissions,
} from 'expo';
import { StackNavigator, TabNavigator } from 'react-navigation'; // 1.0.0-beta.11
import Swiper from 'react-native-swiper'; // 1.5.12
import Polyline from '@mapbox/polyline'; // 0.2.0
import 'prop-types'; // 15.5.10
// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Image
//           source={{uri: "https://image.ibb.co/fJQbjQ/logo_carity_white_04.png"}}
//           style={styles.image}
//         />
//         <Text style={styles.h1}>
//           Choose your destination
//         </Text>
//       </View>
//     );
//   }
// }

// export default class SplashScreen extends Component {
//   static navigationOptions = {
//     title: 'Welcome',
//   };
//   render() {
//     const { navigate } = this.props.navigation;
//     return (
//       <Button
//         title="Go to Jane's profile"
//         onPress={() =>
//           navigate('Profile', { name: 'Jane' })
//         }
//       />
//     );
//   }
// }

// export default class NavigatorIOSApp extends React.Component {
//   render() {
//     console.log('nav');
//     return (
//       <NavigatorIOS
//         initialRoute={{
//           component: MyScene,
//           title: 'My Initial Scene',
//           passProps: {index: 1},
//         }}
//         style={{flex: 1}}
//       />
//     )
//   }
// }
// class SplashScreen1 extends Component {
//   // static navigationOptions = {
//   //   title: 'Welcome',
//   //   gesturesEnabled: true,

//   // };
//   // static propTypes = {
//   //   route: PropTypes.shape({
//   //     title: PropTypes.string.isRequired
//   //   }),
//   //   navigator: PropTypes.object.isRequired,
//   // }

//   // constructor(props, context) {
//   //   super(props, context);
//   //   this._onForward = this._onForward.bind(this);
//   // }

//   // _onForward() {
//   //   let nextIndex = ++this.props.index;
//   //   this.props.navigator.push({
//   //     component: MyScene,
//   //     title: 'Scene ' + nextIndex,
//   //     passProps: {index: nextIndex}
//   //   });
//   // }

//   // SplashScreen1() {
//   //   return (

//   //   )
//   // }

//   render() {
//     console.log('render');
//     return (
//           <ScrollView
//           horizontal
//           showsHorizontalScrollIndicator={true}
//           scrollEventThrottle={10}
//           pagingEnabled
//           // onScroll={
//           // Animated.event(
//           //   [{ nativeEvent: { contentOffset: { x: this.animVal } } }]
//           // )}
//         >
//             <Image
//               source={{uri: "https://image.ibb.co/fJQbjQ/logo_carity_white_04.png"}}
//               style={styles.image}
//             />
//             <Text style={styles.h1}>
//               Choose the charity you want to support by travelling
//             </Text>
//         </ScrollView>
//     )
//   }
// }

const { width, height } = Dimensions.get('window');

class SplashScreen extends Component {
  render() {
    console.log('rendered');
    return (
      <ScrollView
        contentContainerStyle={styles.column}
        horizontal={true}
        centerContent={true}
        pagingEnabled={true}
        onScroll={() =>
          this.props.navigation.navigate('SplashScreen1', { name: 's1' })}>
        <View style={styles.column}>
          <Image
            source={{
              uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
            }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 100,
              width: 260,
            }}
          />
          <Text style={styles.h1}>
            Choose your destination
          </Text>
          <Image
            source={{ uri: 'https://image.ibb.co/kOa0eQ/destination.png' }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 90,
              width: 100,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

class SplashScreen1 extends Component {
  render() {
    console.log('rendered');
    return (
      <ScrollView
        contentContainerStyle={styles.column}
        horizontal={true}
        centerContent={true}
        pagingEnabled={true}
        onScroll={() =>
          this.props.navigation.navigate('SplashScreen2', { name: 's2' })}>
        <View style={styles.column}>
          <Image
            source={{
              uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
            }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 100,
              width: 260,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.h1}>
            Travel and raise money for the charity of your choice
          </Text>
          <Image
            source={{ uri: 'https://image.ibb.co/jNTWm5/heart.png' }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 90,
              width: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

class SplashScreen2 extends Component {
  render() {
    console.log('rendered');
    return (
      <ScrollView
        contentContainerStyle={styles.column}
        horizontal={true}
        centerContent={true}
        pagingEnabled={true}
        onScroll={() =>
          this.props.navigation.navigate('SplashScreen3', { name: 's3' })}>
        <View style={styles.column}>
          <Image
            source={{
              uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
            }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 100,
              width: 260,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.h1}>
            Select the mode of transporation
          </Text>
          <Image
            source={{ uri: 'https://image.ibb.co/iR4FDk/arrow.png' }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 90,
              width: 100,
              resizeMode: 'contain',
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

class SplashScreen3 extends Component {
  render() {
    console.log('rendered');
    return (
      <ScrollView
        contentContainerStyle={styles.column}
        horizontal={true}
        centerContent={true}
        pagingEnabled={true}
        onScroll={() =>
          this.props.navigation.navigate('NewUser', { name: 'NewUser' })}>
        <View style={styles.column}>
          <Image
            source={{
              uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
            }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 100,
              width: 260,
              resizeMode: 'contain',
            }}
          />
          <Text style={styles.h1}>And then...</Text>
          <View
            style={{ width: 700, height: 40, backgroundColor: '#ea5741' }}
          />
          <Text style={styles.h1MEGA}>Let's GO!</Text>
        </View>
      </ScrollView>
    );
  }
}

class AccountCreation extends Component {
  state = {
    inputValue: 'OK',
  };

  _handleFacebookLogin = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          Alert.alert('Logged in!', `Hi ${profile.name}!`);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  _handleGoogleLogin = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      switch (type) {
        case 'success': {
          Alert.alert('Logged in!', `Hi ${user.name}!`);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png' }}
          style={{ top: 0, bottom: 0, left: 0, height: 100, width: 260 }}
        />
        <View style={{ width: 700, height: 20, backgroundColor: '#ea5741' }} />
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.linkBoxSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.linkBoxLogo}
                  source={{ uri: 'https://image.ibb.co/deZDik/facebook.png' }}
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={this._handleFacebookLogin}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>CONNECT WITH FACEBOOK</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View
            style={{
              width: 700,
              height: 5,
              backgroundColor: '#ea5741',
              margin: 5,
            }}
          />

          <View style={styles.row}>
            <View style={styles.linkBoxSquare}>
              <TouchableHighlight onPress={this._handleGoogleLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.linkBoxLogo}
                  source={{ uri: 'https://image.ibb.co/fqyH9Q/google.png' }}
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={this._handleGoogleLogin}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>CONNECT WITH GOOGLE +</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <View
              style={{
                width: 35,
                height: 2,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={styles.h3}>OR</Text>
            <View
              style={{
                width: 35,
                height: 2,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <TextInput
            adjustsFontSizeToFit="true"
            value={'FIRST NAME'}
            onChangeText={this._handleTextChange}
            style={styles.textBox}
          />

          <TextInput
            adjustsFontSizeToFit="true"
            value={'LAST NAME'}
            onChangeText={this._handleTextChange}
            style={styles.textBox}
          />

          <TextInput
            adjustsFontSizeToFit="true"
            value={'AGE'}
            onChangeText={this._handleTextChange}
            style={styles.textBox}
          />

          <TextInput
            adjustsFontSizeToFit="true"
            value={'EMAIL'}
            onChangeText={this._handleTextChange}
            style={styles.textBox}
          />

          <TextInput
            adjustsFontSizeToFit="true"
            value={'PASSWORD'}
            onChangeText={this._handleTextChange}
            style={styles.textBox}
          />

          <View
            style={{ width: 700, height: 30, backgroundColor: '#ea5741' }}
          />
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('LoginScreen', { name: 'Login' })}>
            <View style={styles.linkBoxRectGrey}>
              <Text style={styles.linkBoxText}>REGISTER</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class LoginScreen extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };

  state = {
    email: 'EMAIL',
    password: 'PASSWORD',
  };

  _handleFacebookLogin = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync(
        '1201211719949057', // Replace with your own app id in standalone app
        { permissions: ['public_profile'] }
      );

      switch (type) {
        case 'success': {
          // Get the user's name using Facebook's Graph API
          const response = await fetch(
            `https://graph.facebook.com/me?access_token=${token}`
          );
          const profile = await response.json();
          Alert.alert('Logged in!', `Hi ${profile.name}!`);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  _handleGoogleLogin = async () => {
    try {
      const { type, user } = await Google.logInAsync({
        androidStandaloneAppClientId: '<ANDROID_CLIENT_ID>',
        iosStandaloneAppClientId: '<IOS_CLIENT_ID>',
        androidClientId: '603386649315-9rbv8vmv2vvftetfbvlrbufcps1fajqf.apps.googleusercontent.com',
        iosClientId: '603386649315-vp4revvrcgrcjme51ebuhbkbspl048l9.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      switch (type) {
        case 'success': {
          Alert.alert('Logged in!', `Hi ${user.name}!`);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };

  _handleTextEmail = email => {
    this.setState({ email });
  };

  _handleTextPass = password => {
    var str = password.replace(/./g, '*');
    console.log(str);
    this.setState({ password: str });
  };

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <Image
            source={{
              uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
            }}
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              resizeMode: 'contain',
              height: 100,
              width: 260,
            }}
          />
          <View style={styles.row}>
            <View style={styles.linkBoxSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.linkBoxLogo}
                  source={{ uri: 'https://image.ibb.co/deZDik/facebook.png' }}
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={this._handleFacebookLogin}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>CONNECT WITH FACEBOOK</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.row}>
            <View style={styles.linkBoxSquare}>
              <TouchableHighlight onPress={this._handleGoogleLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.linkBoxLogo}
                  source={{ uri: 'https://image.ibb.co/fqyH9Q/google.png' }}
                />
              </TouchableHighlight>
            </View>
            <TouchableHighlight onPress={this._handleGoogleLogin}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>CONNECT WITH GOOGLE +</Text>
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.row}>
            <View
              style={{
                width: 35,
                height: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={styles.h3}>OR</Text>
            <View
              style={{
                width: 35,
                height: 1,
                backgroundColor: '#ffffff',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
          </View>
          <TextInput
            value={this.state.email}
            onChangeText={this._handleTextEmail}
            style={styles.textBox}
          />
          <View
            style={{ width: 700, height: 40, backgroundColor: '#ea5741' }}
          />
          <TextInput
            value={this.state.password}
            onChangeText={this._handleTextPass}
            style={styles.textBox}
          />
          <View
            style={{ width: 700, height: 30, backgroundColor: '#ea5741' }}
          />
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('HomePage', { name: 'Home' })}>
            <View style={styles.linkBoxRectGrey}>
              <Text style={styles.linkBoxText}>LOGIN</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

class NewUser extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  // };

  state = {
    inputValue: 'OK',
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png' }}
          style={{
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            resizeMode: 'contain',
            height: 100,
            width: 260,
            resizeMode: 'contain',
          }}
        />
        <View style={{ width: 700, height: 20, backgroundColor: '#ea5741' }} />
        <View style={styles.column}>
          <Text style={styles.h2}>
            « Travel miles and make a better world! »
          </Text>
          <View
            style={{ width: 700, height: 30, backgroundColor: '#ea5741' }}
          />
          <View style={styles.row}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('LoginScreen', {
                  name: 'Login',
                })}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>LOGIN</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('AccountCreation', {
                  name: 'Register',
                })}>
              <View style={styles.linkBoxRect}>
                <Text style={styles.linkBoxText}>REGISTRATION</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

// <Modal
//           animationType="slide"
//           visible={this.state.modalVisible}
//           onRequestClose={() => {
//             alert('Modal has been closed.');
//           }}>
//           <View style={{ backgroundColor: 'rgba(234,87,65,0.8)' }}>
//             <View style={styles.column}>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>MY GPS</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>MY PERFORMANCE</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>CHARITIES OF THE MONTH</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>MY QR CODE DISCOUNT</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>MY ACCOUNT</Text>
//               </TouchableHighlight>
//               <TouchableHighlight
//                 onPress={() => {
//                   this.setModalVisible(!this.state.modalVisible);
//                 }}>
//                 <Text>SETTINGS</Text>
//               </TouchableHighlight>
//             </View>
//           </View>
//         </Modal>

// <Image
//               resizeMode="contain"
//               source={{
//                 uri: 'https://image.ibb.co/hztmKQ/logo_carity_white.png',
//               }}
//               style={{
//                 top: 0,
//                 bottom: 0,
//                 left: 0,
//                 //right: 500,
//                 height: 35,
//                 width: 75,
//                 // justifyContent: 'flex-start',
//                 //alignItems:'center',
//                 //position: 'absolute',
//                 margin: 5,
//               }}
//             />

var coords = [];

class HomePage extends Component {
  state = {
    inputValue: 'OK',
    modalVisible: false,
  };

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.header}>
            <TouchableHighlight
              onPress={() => {
                this.setModalVisible(true);
              }}>
              <View style={styles.column}>
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
              </View>
            </TouchableHighlight>
          </View>

          <View style={styles.row}>
            <TextInput
              adjustsFontSizeToFit="true"
              value={'FROM...'}
              onChangeText={this._handleTextChange}
              style={styles.textBoxButItsBeingAPainInMyAss}
            />
            <TouchableHighlight onPress={this._handleFacebookLogin}>
              <Image
                resizeMode="contain"
                style={styles.geoMarker}
                source={{ uri: 'https://image.ibb.co/gf8bm5/Page_1.png' }}
              />
            </TouchableHighlight>
          </View>
          <View style={styles.row}>
            <TextInput
              adjustsFontSizeToFit="true"
              value={'TO...'}
              onChangeText={this._handleTextChange}
              style={styles.textBox}
            />
          </View>

          <View style={styles.row}>
            <View
              style={{
                width: 55,
                height: 2,
                backgroundColor: '#c1c0c0',
                //justifyContent: 'center',
              }}
            />
            <Text style={styles.h3MEGA}>CHOOSE A CHARITY</Text>
            <View
              style={{
                width: 55,
                height: 2,
                backgroundColor: '#c1c0c0',
                //justifyContent: 'center',
              }}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.selectSponsor}>
              <TouchableHighlight>
                <Image
                  resizeMode="contain"
                  style={styles.sponsorLogo}
                  source={{
                    uri: 'https://image.ibb.co/gAD965/logo_ceh1.png',
                  }}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.selectSponsor}>
              <TouchableHighlight>
                <Image
                  resizeMode="contain"
                  style={styles.sponsorLogo}
                  source={{
                    uri: 'https://image.ibb.co/dmWwm5/walden_family_services_logo.png',
                  }}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.selectSponsor}>
              <TouchableHighlight>
                <Image
                  resizeMode="contain"
                  style={styles.sponsorLogo}
                  source={{
                    uri: 'https://image.ibb.co/nfc2R5/itd_logo_1.png',
                  }}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.selectSponsor}>
              <TouchableHighlight>
                <Image
                  resizeMode="contain"
                  style={styles.sponsorLogo}
                  source={{
                    uri: 'https://image.ibb.co/gpJWKQ/2013_USVETS_logo.png',
                  }}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.row}>
            <View
              style={{
                width: 35,
                height: 2,
                backgroundColor: '#c1c0c0',
                alignItems: 'center',
                margin: 2,
              }}
            />
            <Text style={styles.h3MEGA}>MODE OF TRANSPORTAION</Text>
            <View
              style={{
                width: 35,
                height: 2,
                backgroundColor: '#c1c0c0',
                alignItems: 'center',
              }}
            />
          </View>

          <View style={styles.row}>
            <View style={styles.selectSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.selectIcon}
                  source={{
                    uri: 'https://image.ibb.co/hmd965/electric_car.png',
                  }}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.selectSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.selectIcon}
                  source={{ uri: 'https://image.ibb.co/eQCDYk/bus.png' }}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.selectSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.selectIcon}
                  source={{ uri: 'https://image.ibb.co/jA0BKQ/running.png' }}
                />
              </TouchableHighlight>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.selectSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.selectIcon}
                  source={{ uri: 'https://image.ibb.co/jQaBKQ/bike.png' }}
                />
              </TouchableHighlight>
            </View>
            <View style={styles.selectSquare}>
              <TouchableHighlight onPress={this._handleFacebookLogin}>
                <Image
                  resizeMode="contain"
                  style={styles.selectIcon}
                  source={{ uri: 'https://image.ibb.co/nRzStk/walk.png' }}
                />
              </TouchableHighlight>
            </View>
          </View>
          <TouchableHighlight
            onPress={() =>
              this.props.navigation.navigate('MapPage', {
                name: 'Map',
              })}>
            <View
              style={{
                width: 350,
                height: 50,
                backgroundColor: '#c1c0c0',
                color: '#c1c0c0',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: '#ea5741',
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  margin: 10,
                }}>
                LET'S GO!
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}
// SplashScreen.router = MainScreenNavigator.router;
// SplashScreen1.router = MainScreenNavigator.router;

// const Nav = TabNavigator({
//   SplashScreen : { screen: SplashScreen },
//   SplashScreen1 : { screen: SplashScreen1 },
// });

// const Carity = StackNavigator({
//   Nav: { screen: Nav },
// });

// AppRegistry.registerComponent('Carity', () => Carity);

// const SplashScreen = ({ navigation }) =>(
//   <ScrollView
//     horizontal
//     showsHorizontalScrollIndicator={true}
//     scrollEventThrottle={10}
//     pagingEnabled
//     onScroll={
//       Animated.event(
//         [{ nativeEvent: { contentOffset: { x: this.animVal } } }])}
//     >
//             <Image
//               source={{uri: "https://image.ibb.co/fJQbjQ/logo_carity_white_04.png"}}
//               style={styles.image}
//             />
//             <Text style={styles.h1}>
//               Choose
//             </Text>
//             <Text style={styles.h1}>
//               your destination
//             </Text>
//         </ScrollView>
// )

// const Nav = StackNavigator({
//   SplashScreen: {
//     screen: SplashScreen
//   },
// });

// export default class Carity extends Component {
//   Nav
// // }

// class MyHomeScreen extends React.Component {
//   static navigationOptions = {
//     title: 'Home',
//   }

//   render() {
//     return (
//       <Button
//         onPress={() => this.props.navigation.navigate('Profile', {name: 'Lucy'})}
//         title="Go to Lucy's profile"
//       />
//     );
//   }
// }

class MapPage extends Component {
  // static navigationOptions = {
  //   title: 'Map',
  // };

  state = {
    inputValue: 'OK',
    mapRegion: {
      latitude: 37.548631,
      longitude: -122.059165,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    locationResult: null,
    raised: 0.00,
    miles: 0,
    start: null,
    modalVisible: false,
  };

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  _updateAmountRaised = raised => {
    this.setState({
      raised: raised + 0.01,
    });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        locationResult: 'Permission to access location was denied',
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    if (location !== this.state.start) {
      this.setState({
        miles: this.state.miles + 1,
      });
      this.setState({
        start: this.state.miles,
      });
    }
  };

  // setModalVisible(visible) {
  //   this.setState({ modalVisible: visible });
  // }

  render() {
    console.log('rendered');
    return (
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.header}>
            <TouchableHighlight>
              <View style={styles.column}>
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
                <View style={styles.littleBoxThingsDudeIdkImTired} />
              </View>
            </TouchableHighlight>
          </View>

          <MapView
            showsCompass={true}
            followUserLocation={true}
            showsUserLocation={true}
            style={{ height: height - 30, width: width }}
            region={this.state.mapRegion}
            onRegionChange={this._handleMapRegionChange}
          />
          <TouchableHighlight>
            <View
              style={{
                height: 50,
                top: height - 50,
                bottom: 0,
                backgroundColor: '#c1c0c0',
                color: '#c1c0c0',
                width: width,
                padding: 20,
                position: 'absolute',
                flexWrap: 'wrap',
                flexDirection: 'row',
                //alignItems: 'center',
                //top:height,
              }}>
              <Text
                style={{
                  color: '#ea5741',
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  margin: 10,
                }}>
                Amount Raised: ${this.state.raised}
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const Nav = StackNavigator({
  SplashScreen: {
    screen: SplashScreen,
  },
  SplashScreen1: {
    screen: SplashScreen1,
  },
  SplashScreen2: {
    screen: SplashScreen2,
  },
  SplashScreen3: {
    screen: SplashScreen3,
  },
  AccountCreation: {
    screen: AccountCreation,
  },
  LoginScreen: {
    screen: LoginScreen,
  },
  NewUser: {
    screen: NewUser,
  },
  HomePage: {
    screen: HomePage,
  },
  MapPage: {
    screen: MapPage,
  },
});

export default Nav;

AppRegistry.registerComponent('Carity', () => Nav);

// <Modal
//   animationType="slide"
//   transparent={false}
//   visible={this.state.modalVisible}
//   onRequestClose={() => {alert("Modal has been closed.")}}>
//   <View style={{marginTop: 22}}>
//     <View>
//       <Text>Hello World!</Text>
//       <TouchableHighlight onPress={() => {
//         this.setModalVisible(!this.state.modalVisible)
//       }}>
//         <Text>Hide Modal</Text>
//       </TouchableHighlight>
//     </View>
//   </View>
// </Modal>

const styles = StyleSheet.create({
  scroller: {
    pagingEnabled: 'true',
    scrollEnabled: 'true',
    centerContent: 'true',
    showsHorizontalScrollIndicator: 'true',
    color: '#ea5741',
    backgroundColor: '#ea5741',
  },
  container: {
    flex: 1,
    //flexDirection: 'column',
    //flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    //color: '#ea5741',
    backgroundColor: '#ea5741',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ea5741',
  },
  h1MEGA: {
    flexDirection: 'column',
    //flexWrap: 'wrap',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 16,
    fontSize: 42,
    color: 'white',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  h1: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 16,
    fontSize: 38,
    color: 'white',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  h2: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  h3: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    textAlign: 'center',
    margin: 6,
    fontSize: 12,
    color: '#c1c0c0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  h3MEGA: {
    flexDirection: 'column',
    textAlign: 'center',
    margin: 6,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#c1c0c0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linkBoxLogo: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectLogo: {
    width: 25,
    height: 25,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkBoxSquare: {
    flexDirection: 'column',
    //textAlign: 'left',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    margin: 4,
    fontSize: 15,
    //color: 'white',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 8,
    width: 35,
    height: 35,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linkBoxRect: {
    flexDirection: 'column',
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    fontSize: 12,
    color: '#ea5741',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 7,
    width: 180,
    height: 35,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  linkBoxRectGrey: {
    flexDirection: 'column',
    //lineHeight: 1,
    textAlign: 'auto',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    fontSize: 15,
    color: '#ea5741',
    backgroundColor: '#c1c0c0',
    width: 180,
    height: 35,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  linkBoxRectRed: {
    flexDirection: 'column',
    //lineHeight: 1,
    textAlign: 'auto',
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    fontSize: 15,
    color: 'white',
    backgroundColor: '#ea5741',
    width: 180,
    height: 35,
    top: 0,
    left: 0,
    bottom: 50,
    right: 0,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  destInput: {
    flexDirection: 'row',
    margin: 4,
    color: '#ea5741',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 7,
    width: 270,
    height: 35,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textBoxButItsBeingAPainInMyAss: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    textAlignVertical: 'center',
    margin: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ea5741',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 7,
    paddingLeft: 10,
    width: 270,
    height: 35,
    top: 0,
    left: 7,
    bottom: 0,
    right: 0,
  },
  textBox: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
    textAlignVertical: 'center',
    margin: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#ea5741',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#c1c0c0',
    borderRadius: 7,
    paddingLeft: 10,
    width: 270,
    height: 35,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  selectSquare: {
    flexDirection: 'column',
    //textAlign: 'left',
    //justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
    margin: 5,
    fontSize: 15,
    //color: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#c1c0c0',
    borderRadius: 8,
    width: 85,
    height: 55,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  textBoxText: {
    textAlign: 'auto',
    paddingLeft: 1,
    textAlignVertical: 'center',
    fontSize: 12,
    color: '#ea5741',
    left: 50,
  },
  linkBoxText: {
    color: '#ea5741',
    flexDirection: 'column',
    textAlign: 'center',
    textAlignVertical: 'center',
    margin: 4,
    fontSize: 12,
  },
  selectSponsor: {
    //textAlign: 'left',
    //justifyContent: 'center',
    margin: 5,
    fontSize: 15,
    //color: 'white',
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#c1c0c0',
    borderRadius: 8,
    width: 140,
    height: 60,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  sponsorLogo: {
    width: 120,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  selectIcon: {
    width: 45,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  littleBoxThingsDudeIdkImTired: {
    width: 25,
    height: 2,
    backgroundColor: 'white',
    color: 'white',
    //alignItems: 'flex-end',
    //justifyContent: 'flex-start',
    paddingRight: 10,
    left: 0,
    margin: 1,
  },
  geoMarker: {
    width: 15,
    height: 5,
    flex: 1,
    borderRadius: 6,
    alignItems: 'flex-end',
    flexDirection: 'row',
    right: 30,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    backgroundColor: '#ea5741',
    margin: 1,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    width: 30,
    margin: 1,
    marginRight: 40,
    marginTop: 10,
    marginBottom: 10,
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 1,
  },
  image: {
    position: 'absolute',
    top: 20,
    left: 30,
    height: 100,
    width: 260,
  },
  titleText: {
    textAlign: 'center',
    margin: 24,
    fontSize: 40,
    color: 'white',
    top: 40,
    left: 0,
    bottom: 0,
    right: 0,
  },
  stretch: {
    width: 300,
    height: 200,
  },
});

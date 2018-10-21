import React, { Component } from 'react';
import SegmentControl from 'react-native-segment-controller';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  SegmentedControlIOS,
} from 'react-native';

export default class LoginView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      selectedIndex: 0
    }
  }


  handleTabPress = (index) => {
    this.setState(
      {
        selectedIndex: index
      }
    );
  }


  onClickListener = (viewId) => {
    Alert.alert("Alert", "Button pressed " + viewId);
    //this.setState
  }

  render() {

    const loginView =
      <View style={styles.signUpOrLogin} justifyContent='space-around'>
        <View style={styles.textContainer}>
          <Image style={styles.inputIcon} source={require('./images/mail.png')} />
          <TextInput style={styles.inputs}
            placeholder="Email address"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.textContainer}>
          <Image style={styles.inputIcon} source={require('./images/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('login')}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonContainer} onPress={() => this.onClickListener('restore_password')}>
          <Text style={{color: '#6A5FA9'}} >Forgot your password?</Text>
        </TouchableHighlight>
      </View>;


    const signupView =
      <View style={styles.signUpOrLogin}>
        <View style={styles.textContainer}>
          <Image style={styles.inputIcon} source={require('./images/mail.png')} />
          <TextInput style={styles.inputs}
            placeholder="Email address"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <View style={styles.textContainer}>
          <Image style={styles.inputIcon} source={require('./images/lock.png')} />
          <TextInput style={styles.inputs}
            placeholder="Password"
            keyboardType="email-address"
            underlineColorAndroid='transparent'
            onChangeText={(email) => this.setState({ email })} />
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.onClickListener('Signup')}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableHighlight>
      </View>;


    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.imageLogoContainer} source={require('./images/logoWithText.png')} />
        </View>


        <View style={styles.inputContainer}>
          <View style={styles.segmentContainer}>
            <SegmentControl  values={['Login', 'Signup']} badges={[0, 0]} selectedIndex={this.state.selectedIndex} width={180} height={30} onTabPress={index => this.handleTabPress(index)} borderRadius={5} />
          </View>
          {this.state.selectedIndex == 0 ? loginView : signupView}

        </View>


        <View style={styles.socialMediaLoginContainer}>
        <View style={styles.lineView}>
          <View style={styles.line}> 
            <Text style={styles.textOR}>or</Text>
           </View>
           </View>
           <Text style={styles.textSignUpWith}>Signup with </Text>
        </View>

        <View style={styles.socialButtonsView}> 
        <TouchableHighlight style={styles.socialButton} underlayColor={'transparents'} onPress={() => this.onClickListener('Github')}>
        <View>
        <Image style={[styles.socialIcon, styles.githubImage]}  source={require('./images/githubLogo.png')} />
         <Text style={{fontSize: 9}}>    Github</Text>
       </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.socialButton} underlayColor={'transparents'} onPress={() => this.onClickListener('Google')}>
        <View>
        <Image style={[styles.socialIcon, styles.googleImage]} source={require('./images/googleLogo1.png')} />
         <Text style={{fontSize: 9}}>    Google</Text>
       </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.socialButton} underlayColor={'transparents'} onPress={() => this.onClickListener('Facebook')}>
        <View>
        <Image style={[styles.socialIcon, styles.facebookImage]} source={require('./images/facebook-logo-button.png')} />
         <Text style={{fontSize: 9}}> Facebook</Text>
       </View>
        </TouchableHighlight>

        <TouchableHighlight style={styles.socialButton} underlayColor={'transparents'} onPress={() => this.onClickListener('Twitter')}>
        <View>
         <Image style={[styles.socialIcon, styles.twitterImage]}  source={require('./images/twitter-logo-button.png')} />
         <Text style={{fontSize: 9}}>    Twitter</Text>
       </View>
        </TouchableHighlight>

        </View>


      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    backgroundColor: 'white',
  },

  logoContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  inputContainer: {
    flex: 4,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',

  },

  socialMediaLoginContainer: {
    flex: 2,

    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
    alignItems: 'center',

  },

  imageLogoContainer: {
    width: 140,
    height: 40,
    //  marginBottom:10,
    //  flexDirection: 'row',
    //  alignItems:'flex-end'
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },

  inputIcon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    justifyContent: 'center',
    tintColor: '#6A5FA9'
  },

  textContainer: {
    borderBottomColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    borderColor: '#6A5FA9',
    borderWidth: 1,
    width: 300,
    height: 40,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  segmentContainer: {
    marginTop: 15,
    tintColor: '#6A5FA9',
    width: 260,
    height: 30,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'

  },

  signUpOrLogin: {
    backgroundColor: 'transparent',
    marginTop: 5,
    flex: 4,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  buttonContainer: {
    height: 35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
  },
  loginButton: {
    backgroundColor: "#DFD5DE",
  },
  loginText: {
    color: '#6A5FA9',
  },

  socialButtonsView : {
    width: '100%',
    height: 80,
    backgroundColor: 'transparent',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',

  },

  socialButton: {
    width: 45,
    height: 45,
    justifyContent: 'space-between',
  },
  
  socialIcon: {
    width: 50,
    height: 50,
    justifyContent: 'center'
  },


  lineView: {
    width: '90%',
    backgroundColor : 'transparent',
    height: 30,
    marginBottom: 0,
    position: 'relative'
  },

  line: {
    alignItems : 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor : '#A9A9A9',
    height: 1,
  },

  textOR: {
    color: '#A9A9A9',
   // marginBottom: 15,
    width: 50,
    backgroundColor: 'white',
    height: 30,
    alignSelf : 'center',
    alignItems : 'center',
    textAlign: 'center',
    justifyContent: 'center',
   position: 'absolute',
   fontSize: 20
  },

  textSignUpWith: {
    color: '#A9A9A9',
    width : 150,
    backgroundColor: 'transparent',
    height: 30,
    fontSize: 16,
  //  alignSelf : 'center',
   // alignItems : 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 0,

  },

  githubImage: {
    tintColor: '#ED5656',
  },

  googleImage: {
    tintColor: '#27B9A3',
  },

  facebookImage: {
    tintColor: '#26B9D1',
  },

  twitterImage: {
    tintColor: '#FDBA2C',
  },


});

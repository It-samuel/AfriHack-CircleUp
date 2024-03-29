import { StyleSheet, Text, View, SafeAreaView,StatusBar,
    Image,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { colors } from './colors'

export default function SignUp({navigation}) {
  return (
    <SafeAreaView style={styles.container}> 
    <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <View style={{flexDirection:'row',marginTop:40, marginLeft:10}}>
        <Image 
              source={require('../Screens/Images/left-arrow.png')}  
              style = {{ height: 27, width: 35, resizeMode: 'cover' , alignSelf:'center' }}
              tintColor={colors.white}
          />
          <Text style={{color:'white', fontSize:25, alignSelf:'center', marginLeft:10}}>Sign Up</Text>
        </View>
        </TouchableOpacity>
        <View style={styles.main}>
            <Text style={{color:colors.primColor, fontSize:25, alignSelf:'center',marginTop:5}}>Welcome To CircleUp</Text>
            <Text style={{marginLeft:20,marginTop:10}}>Hello there, create new account</Text>
            <Image 
              source={require('../Screens/Images/Illustration.png')}  
              style = {{ height: 170, width: 170, resizeMode: 'contain' , alignSelf:'center' }}
              
          />
          <TextInput 
            placeholder="Enter your full name"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TextInput 
            placeholder="Enter your email address"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TextInput 
            placeholder="Password"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TextInput 
            placeholder="Confirm Password"
            style={styles.input}
            keyboardType='email-address'
            
          
        />
        <TouchableOpacity style={styles.getStartedBtn} >
                <Text style={{ fontSize: 20, fontWeight: '500', color: 'white' }}>Register</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',marginTop:15,alignItems:'center',justifyContent:'center',}}>
        <Text style={{ alignSelf:'center', }}>Have an account?</Text>
        <TouchableOpacity ><Text style={{alignSelf:'center', marginLeft:8,color:colors.primColor}} onPress={() => navigation.navigate('Login')}>Sign in</Text></TouchableOpacity>
        </View>
        </View>
        
        

    </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        marginTop:StatusBar.currentHeight,
        backgroundColor:colors.primColor
    },
    main:{
        width:'100%',
        height:'100%',
        backgroundColor:colors.white,
        marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30
        
        
    },
    input:{
        height:45,
        width:300,
        borderWidth:1,
        marginHorizontal:15,
        alignSelf:'center',
        padding:10,
        borderRadius:8,
        marginBottom:10
    },
    getStartedBtn:{
        backgroundColor:colors.primColor,
        width:325,
        height:45,
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:10,
        alignSelf:'center',
        marginTop:15
    }
})
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaView, Button, View} from 'react-native';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ARScreen from '../Screens/ARScreen';
import Form from '../Screens/Form';
import GenderScreen from '../Screens/GenderScreen';
import FemaleStyleScreen from '../Screens/FemaleStyleScreen';
import MaleStyleScreen from '../Screens/MaleStyleScreen';
import BarBerList from '../Screens/BarberList';
import auth from '@react-native-firebase/auth';
import Noti from '../Screens/Noti';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import Icon2 from 'react-native-vector-icons/dist/AntDesign';
import AboutUs from '../Screens/AboutUs';
const ProductsStackNavigator = createStackNavigator();

export const ProductsNavigator = () => {
  return (
    <ProductsStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <ProductsStackNavigator.Screen
        name="GenderScreen"
        component={GenderScreen}
      />
      <ProductsStackNavigator.Screen
        name="FemaleStyleScreen"
        component={FemaleStyleScreen}
      />
      <ProductsStackNavigator.Screen
        name="MaleStyleScreen"
        component={MaleStyleScreen}
      />
      <ProductsStackNavigator.Screen name="ARScreen" component={ARScreen} />
      <ProductsStackNavigator.Screen name="BarberList" component={BarBerList} />
      <ProductsStackNavigator.Screen name="Form" component={Form} />
    </ProductsStackNavigator.Navigator>
  );
};
const ShopDrawerNavigator = createDrawerNavigator();

export const ShopNavigator = () => {
  const [email, setEmail] = useState(auth().currentUser.email);

  return (
    <ShopDrawerNavigator.Navigator
      drawerContent={(props) => {
        return (
          <View style={{flex: 1, paddingTop: 20, backgroundColor: 'black'}}>
            <Icon2
              name="doubleright"
              color={'#ffcc00'}
              style={{
                fontSize: 32,
                fontWeight: 'bold',
                backgroundColor: 'black',
                alignSelf: 'flex-end',
                position: 'absolute',
                right: -20,
                top: 300,
              }}
            />
            <Image
              resizeMode="contain"
              source={require('../Components/Pics/logo.png')}
              style={styles.image}
            />
            <Text style={{alignSelf: 'center', fontSize: 17, color: 'white'}}>
              {email}
            </Text>
            <SafeAreaView forceInset={{top: 'always', horizontal: 'never'}}>
              <DrawerItemList {...props} />
              <TouchableOpacity
                onPress={() => {
                  auth().signOut();
                }}
                style={{
                  alignItems: 'center',
                  width: '80%',
                  flexDirection: 'row',
                  paddingLeft: 10,
                }}>
                <Icon
                  name="exit"
                  style={{fontSize: 22, backgroundColor: 'white'}}
                />
                <Text
                  style={{
                    color: 'white',
                    fontSize: 22,
                    paddingLeft: 10,
                    fontWeight: 'bold',
                  }}>
                  LOGOUT
                </Text>
              </TouchableOpacity>
            </SafeAreaView>
          </View>
        );
      }}
      drawerContentOptions={{
        activeTintColor: '#ffcc00',
        inactiveTintColor: '#ffcc00',
      }}>
      <ShopDrawerNavigator.Screen name="Home" component={ProductsNavigator} />
      <ShopDrawerNavigator.Screen name="AboutUs" component={AboutUs} />
    </ShopDrawerNavigator.Navigator>
  );
};
const Tab = createBottomTabNavigator();
export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#FDAE1D',
        inactiveTintColor: 'white',
        style: {
          backgroundColor: 'black',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ShopNavigator}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: 'black',
          tabBarIcon: ({color}) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Noti}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: 'black',
          tabBarIcon: ({color}) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStackNavigator.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStackNavigator.Screen name="SignUpScreen" component={SignUpScreen} />
    </AuthStackNavigator.Navigator>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 360,
    alignSelf: 'center',
  },
});

import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '../../constants'

const TabIcon = ({icon,color,name,focused}) =>{
  return(
     <View>
       <Image
        source={icon}
        resizeMode="contain"
        className="w-6 h-6"
        tintColor={color}
       />
     </View>
  )
}

const TabLayout = () =>{
 return (
  <>
    <Tabs>

       <Tabs.Screen
          name="home" 
          options={{
            title:'Home',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.home}
               color={color}
               name="home"
               focused={focused}
              />
            )
          }}
       />//end of home icon

       
         <Tabs.Screen
          name="favorite" 
          options={{
            title:'Favorite',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.favorite}
               color={color}
               name="favorite"
               focused={focused}
              />
            )
          }}
       />//end of favorite icon
       <Tabs.Screen
          name="notifications" 
          options={{
            title:'Notifications',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.notifications}
               color={color}
               name="notifications"
               focused={focused}
              />
            )
          }}
       />//end of Notifications icon
      
        <Tabs.Screen
          name="cart" 
          options={{
            title:'cart',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.cart}
               color={color}
               name="cart"
               focused={focused}
              />
            )
          }}
       />//end of cart icon
      
      <Tabs.Screen
          name="profile" 
          options={{
            title:'profile',
            headerShown:false,
            tabBarIcon:({color, focused})=>(
              <TabIcon
               icon={icons.profile}
               color={color}
               name="profile"
               focused={focused}
              />
            )
          }}
       />//end of Profile icon

      </Tabs>  
     </>
 ) 
}



export default TabLayout
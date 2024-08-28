// CustomDrawerContent.js
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

const CustomDrawerContent = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {/* Custom Header */}
        <View style={{ padding: 20, backgroundColor: '#f4f4f4' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello, </Text>
        </View>

        {/* Drawer Items */}
        <DrawerItemList {...props} />

        {/* Custom Footer */}
        <TouchableOpacity style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }} onPress={() => alert('Logout')}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

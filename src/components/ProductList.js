import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductList = props => {
  return (
    <View style={{ paddingRight: 20, width: '50%', marginBottom: 20 }}>
      <View 
        style={{
          width: '100%',
          borderRadius: 5
        }}>
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => props.navigation.navigate('Details')}>
          <Image 
            style={{ 
              height: 100,
              width: '100%',
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5
            }}
            source={{ uri: 'https://via.placeholder.com/150' }} />
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ 
            backgroundColor: '#ffffff', 
            paddingVertical: 20, 
            paddingHorizontal: 10
          }}
          activeOpacity={0.9}
          onPress={() => props.navigation.navigate('Details')}>
          <Text style={{ color: '#212121', fontSize: 15, marginBottom: 5 }}>Belaire Luc Rose</Text>

          <Text style={{ color: '#A6A6A6', fontSize: 11 }}>KSH 5,136</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={{ 
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#ffffff',
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
            borderTopWidth: 1,
            borderTopColor: '#F6F6F6',
            paddingVertical: 10
          }}
          activeOpacity={0.7}>
          <Text style={{ color: '#212121', fontSize: 12, marginRight: 5 }}>Add To Cart</Text> 
          <Icon name='cart' color='#212121' size={15} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProductList;

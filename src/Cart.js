import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Cart extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>

          <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f6f6f6' }}>
            <View style={{ width: '25%' }}>
              <Image 
                style={{ 
                  height: 100,
                  width: '100%'
                }}
                source={{ uri: 'https://via.placeholder.com/150' }} />
            </View>
            <View style={{ width: '65%', padding: 20 }}>
              <Text style={{ color: '#212121', fontSize: 15, marginBottom: 5 }}>Belaire Luc Rose</Text>

              <Text style={{ color: '#A6A6A6', fontSize: 11, marginBottom: 10 }}>KSH 5,136</Text>

              <Text style={{ color: '#212121', fontSize: 11 }}>Number Selected: 2</Text>
            </View>
            <TouchableOpacity 
              style={{ alignItems: 'center', width: '10%', paddingTop: 20 }}
              activeOpacity={0.9}>
              <Icon name='trash' color='#ff0000' size={15} />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: 'row', width: '100%', backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#f6f6f6', padding: 20, marginTop: 20 }}>
            <View style={{ width: '70%' }}>
              <Text style={{ color: '#212121', fontSize: 14, marginBottom: 5 }}>Total</Text>
            </View>
            <View style={{ alignItems: 'flex-end', width: '30%' }}>
              <Text style={{ color: '#A6A6A6', fontSize: 14, marginBottom: 5 }}>KSH 10,272</Text>
            </View>
          </View>

        </View>
      </ScrollView>
    )
  }
}

export default Cart;
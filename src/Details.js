import React, { Component } from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Details extends Component {
  state = {
    no: 1
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Image 
            style={{ 
              height: 250,
              width: '100%'
            }}
            source={{ uri: 'https://via.placeholder.com/150' }} />
        </View>

        <View style={{ padding: 20 }}>
          <Text style={{ color: '#212121', fontSize: 20, marginBottom: 10 }}>Belaire Luc Rose</Text>

          <Text style={{ color: '#A6A6A6', fontSize: 15, marginBottom: 30 }}>KSH 5,136</Text>

          <Text style={{ color: '#696969', fontSize: 14, marginBottom: 20 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel eros mi. Mauris pretium libero eget nibh interdum, id sagittis urna vehicula. Ut ut aliquam neque. Nam eu sapien ipsum.</Text>
        </View>

        <View style={{ flexDirection: 'row', marginBottom: 40 }}>
          <View style={{ width: '25%' }}></View>
          <TouchableOpacity 
            style={{ alignItems: 'center', width: '15%' }}
            activeOpacity={0.9}
            onPress={() => this.state.no >= 2 ? this.setState({ no: this.state.no - 1 }) : null }>
            <Icon name='remove-circle-outline' color='#212121' size={25} />
          </TouchableOpacity>
          <View style={{ alignItems: 'center', width: '20%' }}>
            <Text style={{ color: '#212121', fontSize: 25 }}>{this.state.no}</Text>
          </View>
          <TouchableOpacity 
            style={{ alignItems: 'center', width: '15%' }}
            activeOpacity={0.9}
            onPress={() => this.setState({ no: this.state.no + 1 })}>
            <Icon name='add-circle' color='#212121' size={25} />
          </TouchableOpacity>
          <View style={{ width: '25%' }}></View>
        </View>

        <TouchableOpacity
          style={{ 
            alignItems: 'center', 
            justifyContent: 'center',
            flexDirection: 'row',
            backgroundColor: '#000', 
            marginHorizontal: 20,
            borderRadius: 5,
            padding: 20
          }}
          activeOpacity={0.9}>
          <Text style={{ color: '#fff', marginRight: 10 }}>Add To Cart</Text> 
          <Icon name='cart' color='#fff' size={15} />
        </TouchableOpacity>
      </ScrollView>
    )
  }
}

export default Details;
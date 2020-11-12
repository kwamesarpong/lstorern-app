import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import ProductList from './components/ProductList';

class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', paddingTop: 20, paddingLeft: 20, width: '100%' }}>

          <ProductList navigation={this.props.navigation} />

        </View>
      </ScrollView>
    )
  }
}

export default Home;
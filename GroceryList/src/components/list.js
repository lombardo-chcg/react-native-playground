import React, { Component, PropTypes } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

export default class List extends Component {
  renderList() {
    let list = []
    this.props.list.map((listItem) => {
      list.push(
        <Text style={styles.listItem} key={listItem}>
          {listItem}
        </Text>)
    })
    return list;
  }

  render() {
    return(
      <ScrollView style={styles.listView}>

          {this.renderList()}

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  listView: {
    height: 300,
    width: 250,
  },
  listItem: {
    textAlign: 'center',
  }
})

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#8FE5FF'
  },

	navigator: {
		flex: 1,
	},

  map: {
    flex: 3,
    marginTop: 30
  },

  textWrapper: {
    flex: 1,
    alignItems: 'center',  
  },

  headerText: {
    fontSize: 30,
    fontFamily: 'American Typewriter'
  },

  descriptionText: {
    fontSize: 15
  }  
});

export default styles;
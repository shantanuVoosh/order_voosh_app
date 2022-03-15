import React from 'react';
import {Button, useWindowDimensions, View, Text, Image, SafeAreaView} from 'react-native';
import CreateResponsiveStyle from './assets/constants/ResponsiveStyle';

const IMAGE_URL =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const App = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <SafeAreaView>
      <View style={styles('container')}>
        <Image
          source={{uri: IMAGE_URL}}
          style={[styles('cardImg'), {height: layout.width * 0.25}]}
        />

        <View style={styles('infoContainer')}>
          <Text>CSA is the best way to support your local farmer.</Text>
          <Text>
            Get the best and biggest pumpkins, squash, and fall decor from farms
            near you.
          </Text>
          <Button title="Learn More" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const responsiveStyle = CreateResponsiveStyle(
  // Mobile
  {
    container: {
      backgroundColor: '#2F5D40',
      borderRadius: 10,
      overflow: 'hidden',
      padding: 10,
      paddingBottom: 40,
      alignItems: 'center',
    },
    cardImg: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
      borderRadius: 10,
      marginBottom: 20,
    },
    infoContainer: {
      marginBottom: 10,
    },
  },
  // Web
  {
    container: {
      backgroundColor: 'red',
      flexDirection: 'row',
      alignItems: 'center',
      paddingBottom: 0,
    },
    cardImg: {
      width: '80%',
      borderRadius: 10,
      maxWidth: '200',
    },
    infoContainer: {
      flex: 1,
      flexDirection: 'column',
      marginLeft: 10,
    },
  },
);

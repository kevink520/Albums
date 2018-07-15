import React from 'react';
import { StyleSheet, View, Image, Text, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

export default AlbumDetails = ({album, albumCover}) => {
  const { thumbnail_image, title, artist, url } = album;
  const { headerStyles, thumbnailStyles, thumbnailContainerStyles, textStyles, titleStyles, imageStyles } = styles;
  return (
    <Card>
      <CardSection style={headerStyles}>
	<View style={thumbnailContainerStyles}>
          <Image style={thumbnailStyles} source={{uri: thumbnail_image}} />
        </View>
        <View style={textStyles}>
          <Text style={titleStyles}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image style={imageStyles} source={{uri: albumCover}} />
      </CardSection>
      <CardSection>
        <Button 
          text={'Buy on Amazon'}
          onPress={() => Linking.openURL(url)} 
        />
      </CardSection>
    </Card>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  thumbnailStyles: {
    width: 80,
    height: 80,
    marginRight: 10,
  },

  textStyles: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingTop: 8,
    paddingBottom: 8,
  },

  titleStyles: {
    fontSize: 18,
    fontWeight: '600',
  },

  imageStyles: {
    width: null,
    height: 300,
  },
});


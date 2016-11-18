import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetailComponant = ({ album }) => {
    const { title, artist, thumbnail_image, image } = album;
    const { headerContentStyle,
            thumbnailStyle,
            thunbnailContainerStyle,
            headerTextStyle,
            AlbumImageStyle
        } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thunbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={AlbumImageStyle}
                    source={{ uri: image }}
                />
            </CardSection>
        </Card>
    );
};

const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
            fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thunbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        // marginLeft: 10,
        marginRight: 10
    },
    AlbumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }

};

export default AlbumDetailComponant;
//
// const AlbumDetailComponent = (props) => {
//     return (
//         <View>
//             <Text>{props.album.title}</Text>
//         </View>
//     );
// };
//
// export default AlbumDetailComponent;
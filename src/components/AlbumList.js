import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';

import AlbumDetailComponent from './AlbumDetail';

export default class AlbumListComponent extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(res => this.setState({ albums: res.data }))
            .catch(err => console.error('err: ', err));
    }
    renderAlbums() {
        return this.state.albums.map(album =>
            <View key={album.title} >
                <AlbumDetailComponent album={album} />
            </View>
        );
    }
    render() {
        console.log('this.state: ', this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

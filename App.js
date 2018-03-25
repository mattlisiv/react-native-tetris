import React from 'react';
import {View, AppRegistry} from 'react-native';
import {AppLoading, Asset, Video} from 'expo';
import Main from './src/main';

class AppContainer extends React.Component {
    state = {
        assetsLoaded: false,
    };

    async componentWillMount() {
        try {
            await Asset.fromModule(require('./assets/sounds/tetris.mp3')).downloadAsync();
            this.setState({assetsLoaded: true});
        } catch (e) {
            // Failed to cache the song, maybe due to flakey internet, so it will
            // load during the game
        }
    }

    render() {
        if (!this.state.assetsLoaded) {
            return <AppLoading/>;
        }

        return (
            <View style={{flex: 1}}>
                <Main/>

                <Video
                    source={require('./assets/sounds/tetris.mp3')}
                    repeat={true}
                    style={{position: 'absolute', width: 0, height: 0}}
                />
            </View>
        );
    }
}


AppRegistry.registerComponent('TetrisApp', () => App);
export default AppContainer;

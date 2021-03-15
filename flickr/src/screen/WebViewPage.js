import React from 'react';
import {WebView} from 'react-native-webview';

const WebViewPage = ({route}) => {
  return <WebView source={{uri: route.params.pass}} />;
};

export default WebViewPage;

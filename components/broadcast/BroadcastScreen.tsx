import React, { useState } from 'react';
import { Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { mediaDevices, MediaStream, RTCView } from 'react-native-webrtc';

const BroadcastScreen = () => {
    const [stream, setStream] = useState<MediaStream | null>(null)

    const startBroadcast = async() => {
        if (!stream) {
            try {
                const newStream = await mediaDevices.getUserMedia({ video: true, audio: true });
                console.log('got stream: ' + newStream.id);
                setStream(newStream);
            } catch (e) {
                console.error(e);
            }
        }
    };

    const stopBroadcast = () => {
        if (stream) {
            stream.release();
            setStream(null);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            {
                stream && <RTCView style={{ width:300, height: 300, borderColor: "blue", borderWidth:1 }} streamURL={stream.toURL()} />
            }       
            {
                !stream && 
                <>     
                    <TouchableOpacity onPress={startBroadcast} style={{
                        padding:24,  
                        backgroundColor: '#5568FE',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 12,
                        marginTop: 16,
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#FFFFFF',
                        }}>Start broadcast</Text>
                    </TouchableOpacity>
              </>
            }
       
            {
                stream && 
                <>
                    <TouchableOpacity onPress={stopBroadcast} style={{
                    padding:24,  
                    backgroundColor: '#5568FE',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 12,
                    marginTop: 16,
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: '#FFFFFF',
                    }}>Stop broadcast</Text>
                    </TouchableOpacity>
                </>
            }

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 1,
        flexGrow: 1,
        flexShrink: 0,
        flexBasis: '100%',
        backgroundColor: '#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
  

export default BroadcastScreen;

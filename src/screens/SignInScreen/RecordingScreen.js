import { View, Text, Audio } from 'react-native'
import React,{useState} from 'react'
import Audio from 

const RecordingScreen = () => {
    const [recording,setRecording] = React.useState();
    const [recordings,setRecordings] = React.useState([]);
    const [message, setMessage] = React.useState("");
    async function startRecording() {
        try{
            const permission = await Audio.RequestPermissionsAsync();

            if(permission.status == "granted"){
                await Audio.setAudioModeAsync({
                    allowRecordingAndroid: true,
                    playInSilentModeAndroid: true,
                });

                const {recording} = await Audio.Recording.createAsync(
                    Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
                );
                setRecording(recording);
            }   else{
                setMessage("Please grant permission to app to access microphone");
            }

        }catch (err){
            console.error("Failed to start recording",err);
        }
    }
    async function stopRecording() {
        stopRecording(undefined);
        await recording.stopAndUnloadAsync();
        let updateRecordings = [...recordings];
        const {sound,status} = await recording.createNewLoadedSoundAsync();
        updateRecordings.push({
            sound:sound,
            duration: getDurationFormatted(status.durationMillis),
            file: recording.getURI(),

        })
    }
  return (
    <View>
        <Button title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}/>
      <Text>RecordingScreen</Text>
    </View>
  );
}

export default RecordingScreen
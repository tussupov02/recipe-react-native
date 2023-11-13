import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import YoutubeIframe from "react-native-youtube-iframe";

const VideoInstruction = ({ videoId }) => {
    const [playing, setPlaying] = useState(false);

    const togglePlaying = () => {
        setPlaying((prev) => !prev);
    };
    return (
        <View>
            <Text style={styles.subhead}>Video Instruction</Text>
            <YoutubeIframe
                height={350}
                videoId={videoId}
                play={playing}
                togglePlaying={togglePlaying}
            />
        </View>
    );
};

export default VideoInstruction;

const styles = StyleSheet.create({
    subhead: { fontWeight: "800", fontSize: 22, marginBottom: 16 },
});

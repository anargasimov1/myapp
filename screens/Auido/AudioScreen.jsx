import { useEffect, useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import { Audio } from "expo-av";
import { useSelector, useDispatch } from "react-redux";
import { fetchAudios, fetchSurahList } from '../../redux/slices/koranSlice';
import Slider from '@react-native-community/slider';
import { AppHeader } from '../../components/header/AppHeader'
import { Title } from '../../components/title/Title'
import { CustomIcon } from "../../components/customIcon/CustomIcon";

export const AudioScreen = ({ route }) => {
  const { subtitle, url, index } = route.params;
  const [sound, setSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setIndex] = useState(index);
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  const dispatch = useDispatch();

  const { surahList, sounds } = useSelector((state) => state.audio);

  useEffect(() => {
    dispatch(fetchAudios());
    dispatch(fetchSurahList());
  }, [dispatch]);


  const soundRef = useRef(null);

  useEffect(() => {
    loadSound();
    return () => {
      if (soundRef.current) {
        soundRef.current.unloadAsync();
      }
    };
  }, []);

  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: url },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );
    soundRef.current = sound;
    setSound(sound);
  };

  const onPlaybackStatusUpdate = (status) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setPosition(status.positionMillis);
      setDuration(status.durationMillis);
      setIsPlaying(status.isPlaying);
    }
  };


  const playPause = async () => {
    if (!sound) return;
    if (isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  const loadSoundByIndex = async (index) => {
    if (!sounds[index] || isLoading) return;

    setIsLoading(true);

    if (soundRef.current) {
      await soundRef.current.unloadAsync();
      soundRef.current.setOnPlaybackStatusUpdate(null);
      soundRef.current = null;
    }

    const { sound } = await Audio.Sound.createAsync(
      { uri: sounds[index].audio_url },
      { shouldPlay: true },
      onPlaybackStatusUpdate
    );

    soundRef.current = sound;
    setSound(sound);
    setIndex(index);

    setIsLoading(false);
  };

  const handleNextSound = () => {
    if (currentIndex < sounds.length - 1)
      loadSoundByIndex(currentIndex + 1);
    else
      Alert.alert("Souncudur")
  };

  const handlePrevSound = () => {
    if (currentIndex > 0)
      loadSoundByIndex(currentIndex - 1);
    else
      Alert.alert("Bu birincidir")
  };

  const formatTime = (millis) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <>
      <AppHeader />
      <Title title="Audio player" bgColor="#EFFFF4" />

      <View style={styles.container}>
        <View style={styles.cover} />

        <Text style={styles.title}>{surahList[currentIndex].name_simple} ({surahList[currentIndex].name_complex})</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>

        <Slider
          style={{ width: 300, height: 50 }}
          minimumValue={0}
          maximumValue={duration}
          value={position}
          minimumTrackTintColor="#3b4e57ff"
          maximumTrackTintColor="#171515ff"
          thumbTintColor="#191a1aff"
          onSlidingComplete={async (val) => {
            if (soundRef.current) {
              await soundRef.current.setPositionAsync(val);
            }
          }}
        />

        <Text>
          {formatTime(position)} / {formatTime(duration)}
        </Text>

        <View style={styles.controls}>
          <TouchableOpacity onPress={handlePrevSound}>
            <CustomIcon name="prev" size={38} />
          </TouchableOpacity>

          <TouchableOpacity onPress={playPause}>
            <CustomIcon
              name={isPlaying ? "pause" : "play"}
              size={40}
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleNextSound}>
            <CustomIcon name="next" size={38} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EFFFF4",
  },
  cover: {
    width: 220,
    height: 220,
    borderRadius: 12,
    backgroundColor: "#fff",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#d9f0df",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "70%",
    marginTop: 50,
  },
});

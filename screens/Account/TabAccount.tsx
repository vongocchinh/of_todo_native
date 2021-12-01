import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { ButtonComponent } from "../../components/Button";
import { ImageComponent } from "../../components/Images";
import { Text, View } from "../../components/Themed";
import { NumberComponent } from "../../components/Number";
import { DetailText } from "../../components/DetailText";
import { dimensions } from "../../hooks/BorderRadius";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style";
import { DetailIcon } from "../../components/Detailicon";
import { SocialIcon } from "./SocialIcon";
import { UserData } from './../../utils/Data';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={16} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabAccount() {
  const onFollow = () => {};
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.container_avatar}>
          <ImageComponent
            styles={styles.circleView}
            url={UserData.url}
          />
        </View>
        <View style={styles.container_title}>
          <Text style={styles.title_text}>{UserData.name}</Text>
        </View>
        <View style={styles.container_title}>
          <Text style={styles.title_text_1}>{UserData.description}</Text>
        </View>
        <View style={styles.container_title}>
          <TabBarIcon  name="map-marker" color="#2148C0" />
          <Text style={styles.title_text_2}>{UserData.location}</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.containerNumber}>
          <NumberComponent number={UserData.Follower} title="follower" />
          <NumberComponent number={UserData.Following} title="following" />
          <NumberComponent number={UserData.Follower} title="post" />
        </View>
        <View style={styles.buttonContainer}>
          <ButtonComponent
            borderColor="#2148C0"
            stylesButton={"#2148C0"}
            stylesTitle="#FFFFFF"
            title="Follow"
            onPress={onFollow}
          />
          <ButtonComponent
            borderColor="#2148C0"
            stylesButton="#FFFFFF"
            stylesTitle="#2148C0"
            title="Message"
            onPress={onFollow}
          />
        </View>
        <View
          style={styles.separatorMax}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.container_text_detail}>
          <DetailText
            title="About Me"
            description={UserData.about}
          />
        </View>
        <View
          style={styles.separatorMax}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.container_text_detail}>
          <DetailIcon
            title="Social Me"
            children={<SocialIcon />}
          />
        </View>
      </View>
    </ScrollView>
  );
}


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
            url="https://duckienad.com/wp-content/uploads/2020/04/son-tung-mtp-512x384.jpg"
          />
        </View>
        <View style={styles.container_title}>
          <Text style={styles.title_text}>Ken Hennigton</Text>
        </View>
        <View style={styles.container_title}>
          <Text style={styles.title_text_1}>UX/UI Designer</Text>
        </View>
        <View style={styles.container_title}>
          <TabBarIcon  name="map-marker" color="#2148C0" />{" "}
          <Text style={styles.title_text_2}>Australia</Text>
        </View>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <View style={styles.containerNumber}>
          <NumberComponent number={456} title="follow" />
          <NumberComponent number={478} title="follow" />
          <NumberComponent number={689} title="follow" />
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
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. "
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


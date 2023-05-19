import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Button from "./components/Button";
import Row from "./components/Row";
import utills, { initialState } from "./utills/utills"

export default class App extends React.Component {
  state = initialState;

  // handle tap method
  HandleButtonPress = (type, value) => {
    this.setState((state) => utills(type, value, state), () => {console.log(this.state)});
  };

  // render method
  render() {
    return(
      <View style={styles.container}>
        <SafeAreaView>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          

          
          <Row>
            <Button
              text="C"
              theme="secondary"
              onPress={() => this.HandleButtonPress("clear")}
            />

            <Button
              text="+/-"
              theme="secondary"
              onPress={() => this.HandleButtonPress("posneg")}
            />

            <Button
              text="%"
              theme="secondary"
              onPress={() => this.HandleButtonPress("percentage")}
            />

            <Button
              text="/"
              theme="main"
              onPress={() => this.HandleButtonPress("operator", "/")}
            />
          </Row>

          <Row>
            <Button text="7" onPress={() => this.HandleButtonPress("number", 7)} />
            <Button text="8" onPress={() => this.HandleButtonPress("number", 8)} />
            <Button text="9" onPress={() => this.HandleButtonPress("number", 9)} />
            <Button
              text="X"
              theme="main"
              onPress={() => this.HandleButtonPress("operator", "*")}
            />
          </Row>

          <Row>
            <Button text="5" onPress={() => this.HandleButtonPress("number", 5)} />
            <Button text="6" onPress={() => this.HandleButtonPress("number", 6)} />
            <Button text="7" onPress={() => this.HandleButtonPress("number", 7)} />
            <Button
              text="-"
              theme="main"
              onPress={() => this.HandleButtonPress("operator", "-")}
            />
          </Row>

          <Row>
            <Button text="1" onPress={() => this.HandleButtonPress("number", 1)} />
            <Button text="2" onPress={() => this.HandleButtonPress("number", 2)} />
            <Button text="3" onPress={() => this.HandleButtonPress("number", 3)} />
            <Button
              text="+"
              theme="main"
              onPress={() => this.HandleButtonPress("operator", "+")}
            />
          </Row>

          <Row>
            <Button text="0" theme="double" onPress={() => this.HandleButtonPress("number", 0)} />
            <Button text="." onPress={() => this.HandleButtonPress("number", ".")} />
            <Button
              text="="
              theme="main"
              onPress={() => this.HandleButtonPress("equal", "=")}
            />
          </Row>
        </SafeAreaView>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 42,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
});


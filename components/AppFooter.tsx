import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Header, Image } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Card, } from 'react-native-paper';
import { StyleSheet, } from "react-native";
import { Button } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    height: 100,

    borderColor: 'blue',
    backgroundColor: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',


  },
  image: {
    marginTop: 50
  },
  heading: {

    marginTop: 40

  },
  text: {

    marginHorizontal: 8,
    marginVertical: 10

  },
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 36,

  }
})

export interface Props {
  data: any
}

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const newLocal = require('../assets/images/img_top.jpg');
const tileData = [
  {
    img: newLocal,
    title: 'Image',
    author: 'author',
  },

]


const AppFooter: any = (props: any) => {
  const list = [
    { Name: "Name_1", Desc: "Desc" },
    { Name: "Name_2", Desc: "Desc" },
    { Name: "Name_3", Desc: "Desc" },
    { Name: "Name_4", Desc: "Desc" },
    { Name: "Name_5", Desc: "Desc" },
    { Name: "Name_6", Desc: "Desc" }
  ]

  const classes = useStyles();
  return (
    <View style={{ flex: 1 }}>

      <View >
        {/*     <Button onPress={() => props.getData()} >
        smtjfdfd
        </Button>


      <Button icon="plus-box-outline" mode="contained" onPress={() => props.getData()}>
        Добавить
  </Button> */}

        {/*     <TouchableOpacity>
        <Text>Press HerfdeHerfde</Text>

      </TouchableOpacity> */}
        {props.isFetching ? (
          <View>
            {props.data.map((name: any) => (
              <Text>{name.temperatureF}</Text>
            ))}
          </View>
        ) : (
            <View style={{ paddingTop: 50 }}>
              <View style={{
                flexDirection: 'row', alignContent: 'stretch', justifyContent: 'space-around',
              }}>
                <View style={{ width: '30%', height: 150 }} >
                  <ImageBackground
                    source={require('../assets/images/img_top.jpg')}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: "relative", // because it's parent
                      top: 2,
                      left: 2,
                      opacity: 12,
                      borderTopEndRadius: 100

                    }}

                    imageStyle={{ borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        position: "absolute", // child
                        bottom: 0, // position where you want
                        left: 0,
                        width: '99%',
                        backgroundColor: 'rgba(41, 35, 20, 0.7)',

                      }}
                    >
                      <Text style={{ color: "white" }}>Sweet</Text>

                    </Text>
                  </ImageBackground>
                </View>
                <View style={{ width: '30%', height: 150 }} >
                  <ImageBackground
                    source={require('../assets/images/1.jpg')}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: "relative", // because it's parent
                      top: 2,
                      left: 2,
                      opacity: 12,
                      borderTopEndRadius: 100

                    }}

                    imageStyle={{ borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        position: "absolute", // child
                        bottom: 0, // position where you want
                        left: 0,
                        width: '99%',
                        backgroundColor: 'rgba(41, 35, 20, 0.7)',

                      }}
                    >
                      <Text style={{ color: "white" }}>Fructs</Text>

                    </Text>
                  </ImageBackground>
                </View>
                <View style={{ width: '30%', height: 150 }} >
                  <ImageBackground
                    source={require('../assets/images/2.jpeg')}
                    style={{
                      height: '100%',
                      width: '100%',
                      position: "relative", // because it's parent
                      top: 2,
                      left: 2,
                      opacity: 12,
                      borderTopEndRadius: 100

                    }}

                    imageStyle={{ borderTopRightRadius: 6, borderTopLeftRadius: 6 }}
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        color: "white",
                        position: "absolute", // child
                        bottom: 0, // position where you want
                        left: 0,
                        width: '99%',
                        backgroundColor: 'rgba(41, 35, 20, 0.7)',

                      }}
                    >
                      <Text style={{ color: "white" }}>Ice</Text>

                    </Text>
                  </ImageBackground>
                </View>
              </View>

              {/*  <View style={{ flexDirection: 'row', alignContent: 'stretch' }}>
              <View style={{ flex: 1, width: 100, height: 50, backgroundColor: 'red' }} />
              <View style={{ flex: 1, width: 100, height: 50, backgroundColor: 'blue' }} />
              <View style={{ flex: 1, width: 100, height: 50, backgroundColor: 'black' }} />
            </View> */}
            </View>
            /* <ScrollView>
          
               {list.map((x:any) =>{
                return  <Card.Title
                 title={x.Name}
                 subtitle={x.Desc}
                 left={(props) => <Avatar.Icon {...props} icon="format-list-checkbox" />}
                 right={(props) => <IconButton {...props} icon="circle-medium" onPress={() => { }} />}
               />
               })}
             </ScrollView> */


          )}


      </View>

      <View style={styles.container}>

        <Button icon="basket" mode="contained" onPress={() => console.log('Pressed')} style={{ width: '80%' }}>
          Корзина
        </Button>
        
      </View>

    </View>
  );
}

export default AppFooter;

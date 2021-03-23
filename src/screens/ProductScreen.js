import React, { useState } from "react";
import {
  FlatList,
  Alert,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { Products } from "../data/Products";
import HeaderProduct from "../components/HeaderProduct";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "react-native-elements";
function moneyFormat(price, sign = "$") {
  const pieces = parseFloat(price);
  return sign + pieces;
}

export default function ProductScreen({ navigation }) {
  const RenderProducts = ({ item, navigation }) => (
    <TouchableOpacity
      style={{ zIndex: 0 }}
      onPress={() =>
        navigation.navigate("ProductDetail", {
          idProduct: item.id,
        })
      }
    >
      <View style={styles.containerImage}>
        <Image style={styles.photo} source={{ uri: item.avatar }} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{moneyFormat(item.price)}</Text>
      </View>
    </TouchableOpacity>
  );
  const [productData, setProductData] = useState(Products);
  //const [isBackground, setIsBackground] = useState();

  const filter = (name) => {
    setProductData([]);
    setProductData(Products.filter((item) => item.category === name));

    return;
  };

  const [isFilter, setIsFilter] = useState(true);

  const handleFilter = () => {
    setIsFilter(!isFilter);
  };
  const HeaderFilter = ( navigation ) => {
    if (isFilter)
      return (
        <View style={styles.filterContent}>
          <TouchableOpacity
            style={styles.filerButton}
            onPress={() => {
              filter("men clothing");
            }}
          >
            <Text>Men</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filerButton}
            onPress={() => {
              filter("women clothing");
            }}
          >
            <Text>Women</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filerButton}
            onPress={() => {
              filter("kid clothing");
            }}
          >
            <Text>Kid</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.filerButton}
            onPress={() => {
              filter("men clothing");
            }}
          >
            <Text>All</Text>
          </TouchableOpacity>
        </View>
      );
    return null;
  };
  return (
    <View style={styles.mainBody}>
      <HeaderProduct
        title="SUPREME"
        onPress="Home"
        navigation={navigation}
      ></HeaderProduct>

      <HeaderFilter />
      <FlatList
        vertical
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={productData}
        // renderItem={renderProducts}
        renderItem={({ item }) => (
          <RenderProducts navigation={navigation} item={item}></RenderProducts>
        )}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.iconFilter}>
        <TouchableOpacity onPress={handleFilter}>
          <FontAwesome
            name="filter"
            size={22}
            color={isFilter ? "black" : "gray"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainBody: {
    height: "100%",
    paddingBottom: 10,
    position: "relative",
  },
  filterContent: {
    width: "90%",
    margin: 3,
    backgroundColor: "#fff",
    height: 25,
    flexDirection: "row",
  },
  containerImage: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginTop: 10,
    width: 150,
    height: 150 + 75,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 15,
  },
  photo: {
    width: 150,
    height: 150,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
    color: "#444444",
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  price: {
    marginTop: 5,
    marginBottom: 5,
  },
  filerButton: {
    width: 75,
    borderRadius: 2,
    backgroundColor: "#b5b5b5",
    margin: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  iconFilter: {
    position: "absolute",
    top: 62,
    right: 2,
  },
});

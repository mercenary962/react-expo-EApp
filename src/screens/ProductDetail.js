import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import HeaderProduct from "../components/HeaderProduct";
import { Products } from "../data/Products";
import ButtonBuy from "../components/ButtonBuy";

const { width, height } = Dimensions.get("window");
function Item({ uri }) {
  return (
    <View style={styles.itemContainer}>
      <Image source={{ uri }} style={styles.img}></Image>
    </View>
  );
}

export default function ProductDetail({ navigation, route }) {
  const { idProduct } = route.params;
  const [number, setNumber] = useState(0);
  const product = Products.filter((item) => item.id === idProduct)[0];

  const handleAddProduct = () => {
    setNumber((state) => state + 1);
  };

  const handleSubProduct = () => {
    setNumber((state) => state - 1);
  };

  return (
    <View style={styles.container}>
      <HeaderProduct title={product.title} onPress='Back' navigation={navigation}></HeaderProduct>
      <ScrollView>
	  	<View style={styles.content}>
			<View
			style={{
				// width: "100%",
				height: 400,
				// borderStartColor: "gray",
			}}
			>
			<FlatList
				showsHorizontalScrollIndicator={false}
				pagingEnabled={true}
				horizontal={true}
				data={product.image}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => {
				return <Item uri={item}></Item>;
				}}
			></FlatList>
			</View>

			<View style={{ marginTop: 8, marginHorizontal: 16 }}>
			<ButtonBuy
				number={number}
				onAddProduct={handleAddProduct}
				onSubProduct={handleSubProduct}
			></ButtonBuy>
			</View>

			{/* <View style={styles.item}>
			<Text style={styles.header}>Product name</Text>
			<Text style={styles.info}>{product.title}</Text>
			</View> */}
			<View style={styles.item}>
			<Text style={styles.header}>Description</Text>
			<Text style={styles.info}>{product.description}</Text>
			</View>
			<View style={styles.item}>
			<Text style={styles.header}>Type</Text>
			<Text style={styles.info}>{product.category}</Text>
			</View>
			<View style={styles.item}>
			<Text style={styles.header}>Product sizes</Text>
			<Text style={styles.info}>{product.sizes.toString()}</Text>
			</View>
			<View style={styles.item}>
			<Text style={styles.header}>Product price</Text>
			<Text style={styles.info}>${product.price}</Text>
			</View>
		</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
  },
  content: {
    flex: 1,
  },
  item: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  header: {
    fontSize: 18,
    fontWeight: "700",
  },
  info: {
    fontSize: 15,
  },
  itemContainer: {
    width,
    height: 400,
  },
  img: {
    width,
    height: 400,
    resizeMode: "contain",
  },
});
